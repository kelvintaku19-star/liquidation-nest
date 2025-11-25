import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marcus Rodriguez",
    business: "Online Retail Store",
    rating: 5,
    text: "Fast delivery and honest seller! The pallets matched the description perfectly. I've been buying from them for over a year now and the quality is consistently excellent.",
  },
  {
    name: "Sarah Chen",
    business: "Flea Market Vendor",
    rating: 5,
    text: "High ROI for resellers! I've tripled my initial investment on every pallet. The Milwaukee tools pallets especially have been a goldmine for my business.",
  },
  {
    name: "James Mitchell",
    business: "Amazon FBA Seller",
    rating: 5,
    text: "The ordering process was incredibly smooth from start to finish. Customer service responded quickly to all my questions and delivery was right on schedule.",
  },
  {
    name: "Lisa Thompson",
    business: "Discount Store Owner",
    rating: 5,
    text: "Quality pallets every single time! I appreciate the transparency in their grading system. What they say is what you get - no surprises or disappointments.",
  },
  {
    name: "David Park",
    business: "Wholesale Distributor",
    rating: 5,
    text: "Best liquidation company I've worked with. They clearly care about their customers and it shows in their service. Fast shipping and great communication throughout.",
  },
  {
    name: "Amanda Foster",
    business: "Thrift Store Manager",
    rating: 5,
    text: "The Amazon return pallets have been perfect for my store. Great variety and condition. My customers love the deals and I love the profit margins!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-accent-gradient mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from real customers who trust us for their liquidation needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
