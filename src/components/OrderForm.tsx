import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send, Loader2 } from "lucide-react";
import { z } from "zod";

const orderSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  state: z.string().trim().min(1, "State is required").max(100, "State must be less than 100 characters"),
  city: z.string().trim().min(1, "City is required").max(100, "City must be less than 100 characters"),
  orderDetails: z.string().trim().min(1, "Order details are required").max(2000, "Order details must be less than 2000 characters"),
});

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    city: "",
    orderDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = orderSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-order-email", {
        body: {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          state: formData.state.trim(),
          city: formData.city.trim(),
          orderDetails: formData.orderDetails.trim(),
        },
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Order Submitted!",
        description: "Thank you for your inquiry. We'll contact you shortly.",
      });

      // Reset form
      setFormData({ name: "", phone: "", state: "", city: "", orderDetails: "" });
    } catch (error: any) {
      console.error("Error submitting order:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your order. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="order-form" className="py-16 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg border-0">
            <CardHeader className="text-center bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle className="text-2xl md:text-3xl">Place Your Order</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`h-12 ${errors.name ? "border-destructive" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`h-12 ${errors.phone ? "border-destructive" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-base font-medium">
                      State *
                    </Label>
                    <Input
                      id="state"
                      name="state"
                      placeholder="Enter your state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`h-12 ${errors.state ? "border-destructive" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.state && (
                      <p className="text-sm text-destructive">{errors.state}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-base font-medium">
                      City *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`h-12 ${errors.city ? "border-destructive" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.city && (
                      <p className="text-sm text-destructive">{errors.city}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="orderDetails" className="text-base font-medium">
                    Order Details *
                  </Label>
                  <Textarea
                    id="orderDetails"
                    name="orderDetails"
                    placeholder="Describe what products you're interested in, quantities, and any other details..."
                    value={formData.orderDetails}
                    onChange={handleChange}
                    className={`min-h-[150px] resize-none ${errors.orderDetails ? "border-destructive" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.orderDetails && (
                    <p className="text-sm text-destructive">{errors.orderDetails}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Order
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
