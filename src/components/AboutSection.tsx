import { Package, Shield, Truck, Users } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Premium Sourcing",
    description: "Direct partnerships with major retailers including Amazon returns and Milwaukee tools",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous inspection and quality control on every pallet we sell",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Nationwide shipping with reliable logistics and tracking",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team to help you every step of the way",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Pallet Liquidation Depot
          </h2>
          <div className="w-24 h-1 bg-accent-gradient mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground">Who We Are</h3>
            <p className="text-muted-foreground leading-relaxed">
              Pallet Liquidation Depot is a leading wholesale liquidation company specializing in high-quality merchandise pallets. With over 4 years of experience in the industry, we've built a reputation for honesty, transparency, and exceptional value.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We understand the wholesale business inside and out. Our mission is to provide resellers, retailers, and entrepreneurs with access to premium merchandise at unbeatable prices, helping them maximize their profit margins and grow their businesses.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">What We Do</h3>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in liquidation pallets from trusted sources including Amazon customer returns, Milwaukee power tools, general merchandise, electronics, home goods, and more. Each pallet is carefully curated and inspected to ensure you receive quality products that can be resold for profit.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground">Our Process</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Sourcing Excellence:</strong> We maintain direct relationships with major retailers and distributors, giving us access to high-quality liquidation merchandise before it hits the general market.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Quality Control:</strong> Every pallet undergoes thorough inspection. We categorize items by condition, provide detailed manifests, and ensure accurate product descriptions so you know exactly what you're buying.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Transparent Sales:</strong> No hidden fees, no surprises. We believe in complete transparency with our pricing, shipping costs, and product conditions. What you see is what you get.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Fast Logistics:</strong> We operate from modern warehouse facilities with efficient loading and shipping systems. Most orders are processed within 24-48 hours and shipped with full tracking information.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Why Trust Us */}
        <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6">Why Customers Trust Us</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our reputation speaks for itself. With over 1,800 satisfied clients and a 98% satisfaction rate, we've proven ourselves as the go-to source for quality liquidation pallets. We don't just sell pallets – we build long-term partnerships.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're a seasoned reseller or just starting your wholesale journey, our experienced support team is here to guide you. We offer personalized recommendations, answer your questions promptly, and ensure every transaction is smooth from inquiry to delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
