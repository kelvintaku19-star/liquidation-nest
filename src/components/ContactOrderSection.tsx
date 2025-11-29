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
import { useCart } from "@/contexts/CartContext";
import CartDisplay from "./CartDisplay";

const orderSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  state: z.string().trim().min(1, "State is required").max(100, "State must be less than 100 characters"),
  city: z.string().trim().min(1, "City is required").max(100, "City must be less than 100 characters"),
  orderDetails: z.string().trim().min(1, "Order details are required").max(2000, "Order details must be less than 2000 characters"),
});

const ContactOrderSection = () => {
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
  const { items, getCartSummary, clearCart } = useCart();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Combine cart items with additional order details
    const cartSummary = getCartSummary();
    const combinedOrderDetails = cartSummary
      ? `CART ITEMS:\n${cartSummary}\n\nADDITIONAL NOTES:\n${formData.orderDetails}`
      : formData.orderDetails;

    const dataToValidate = {
      ...formData,
      orderDetails: combinedOrderDetails || formData.orderDetails,
    };

    const result = orderSchema.safeParse(dataToValidate);
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
          orderDetails: combinedOrderDetails.trim(),
        },
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Thank you!",
        description: "Your request has been received. We will contact you shortly.",
      });

      // Reset form and clear cart
      setFormData({ name: "", phone: "", state: "", city: "", orderDetails: "" });
      clearCart();
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
    <section id="contact-orders" className="py-16 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact & Orders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to place your order? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cart Display */}
            <div className="space-y-6">
              <CartDisplay />
            </div>

            {/* Order Form */}
            <Card className="shadow-lg border-0">
              <CardHeader className="text-center bg-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl">Place Your Order</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  {items.length > 0 
                    ? `You have ${items.length} item(s) in your cart`
                    : "Tell us what you're looking for"}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`h-11 ${errors.name ? "border-destructive" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`h-11 ${errors.phone ? "border-destructive" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-sm font-medium">
                        State *
                      </Label>
                      <Input
                        id="state"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                        className={`h-11 ${errors.state ? "border-destructive" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.state && (
                        <p className="text-sm text-destructive">{errors.state}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm font-medium">
                        City *
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className={`h-11 ${errors.city ? "border-destructive" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.city && (
                        <p className="text-sm text-destructive">{errors.city}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="orderDetails" className="text-sm font-medium">
                      What do you want to order? *
                    </Label>
                    <Textarea
                      id="orderDetails"
                      name="orderDetails"
                      placeholder="Describe what products you're interested in, quantities, and any other details..."
                      value={formData.orderDetails}
                      onChange={handleChange}
                      className={`min-h-[120px] resize-none ${errors.orderDetails ? "border-destructive" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.orderDetails && (
                      <p className="text-sm text-destructive">{errors.orderDetails}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 text-base font-semibold"
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
                        Submit Order Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOrderSection;
