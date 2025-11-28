import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, MapPin, Clock, Package, AlertCircle, CheckCircle } from "lucide-react";

const shippingFeatures = [
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "We deliver to all states and territories across Australia.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Orders are processed within 1-3 business days.",
  },
  {
    icon: MapPin,
    title: "Local Pickup Available",
    description: "Pick up your order directly from our warehouse and save on shipping.",
  },
];

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <Truck className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping Information</h1>
              <p className="text-lg text-primary-foreground/90">
                Reliable nationwide delivery for all your liquidation needs.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {shippingFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Shipping Details */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Shipping Methods & Costs
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p>Shipping costs are calculated based on:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Pallet size and weight:</strong> Larger pallets incur higher freight costs.</li>
                    <li><strong>Delivery location:</strong> Remote areas may have additional surcharges.</li>
                    <li><strong>Quantity:</strong> Bulk orders may qualify for discounted freight rates.</li>
                  </ul>
                  <p className="font-medium text-foreground">
                    Contact us for a shipping quote before placing your order. We work with trusted freight partners to ensure your pallets arrive safely.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Delivery Timeframes
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Metro Areas:</strong> 3-5 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Regional Areas:</strong> 5-7 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Remote Areas:</strong> 7-14 business days</span>
                    </li>
                  </ul>
                  <p className="text-sm">
                    * Delivery times are estimates and may vary due to weather, holidays, or carrier delays.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Local Pickup
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p>
                    Save on shipping by picking up your order directly from our warehouse. Pickup orders must be scheduled in advance.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Contact us to schedule a pickup time.</li>
                    <li>Payment must be completed before pickup.</li>
                    <li>Bring appropriate vehicle capacity for pallet-sized loads.</li>
                    <li>Loading assistance is available upon request.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-accent">
                <CardHeader className="bg-accent/10">
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <AlertCircle className="h-5 w-5" />
                    Important Notes
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 text-muted-foreground space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Please inspect your delivery upon arrival and note any damage immediately.</li>
                    <li>Report any shipping damage within 48 hours with photos for claims.</li>
                    <li>Signature is required upon delivery.</li>
                    <li>Failed delivery attempts may incur redelivery fees.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;
