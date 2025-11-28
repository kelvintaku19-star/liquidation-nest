import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Target, Award, TrendingUp, Shield } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every pallet is inspected and graded to ensure you know exactly what you're getting.",
  },
  {
    icon: TrendingUp,
    title: "Best Prices",
    description: "Direct sourcing allows us to offer the most competitive wholesale prices in the market.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Our dedicated team provides personalized service and support for every order.",
  },
  {
    icon: Award,
    title: "Trusted Partner",
    description: "Years of experience serving resellers, retailers, and businesses across Australia.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-primary-foreground/90">
                Your trusted wholesale liquidation partner delivering quality pallets and exceptional value.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Pallet Liquidation Depot was founded with a simple mission: to provide Australian businesses and resellers with access to premium liquidation merchandise at unbeatable wholesale prices.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We source directly from major retailers, Amazon returns, and overstock suppliers to bring you the best deals on a wide variety of products including tools, electronics, home goods, clothing, and more.
                  </p>
                  <p className="text-muted-foreground">
                    Our team is dedicated to transparency, quality grading, and customer satisfaction. Whether you're a seasoned reseller or just starting out, we're here to help you succeed.
                  </p>
                </div>
                <div className="bg-section-bg rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-8 w-8 text-accent" />
                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground">
                    To empower businesses of all sizes by providing access to quality liquidation merchandise with honest grading, competitive pricing, and reliable delivery across Australia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to delivering value and building lasting partnerships with our customers.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
