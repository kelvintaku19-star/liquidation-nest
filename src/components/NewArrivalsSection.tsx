import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Sparkles } from "lucide-react";
import towelsPallet from "@/assets/towels-pallet.jpg";
import milwaukeeToolsCase from "@/assets/milwaukee-tools-case.jpg";
import amazonReturns from "@/assets/amazon-returns.jpg";

const newArrivals = [
  {
    title: "Shower Towels Pallet",
    description: "Authentic quality shower towels. Various brands and colors available.",
    price: "$1,000",
    condition: "Grade A",
    image: towelsPallet,
    items: "800",
    category: "/products/clothing-shoes",
  },
  {
    title: "Milwaukee & DeWalt Tools Pallet",
    description: "Professional-grade power tools from industry-leading brands. Includes drills, impact drivers, batteries, and accessories.",
    price: "$1,100",
    condition: "Grade A",
    image: milwaukeeToolsCase,
    items: "100",
    category: "/products/tools-hardware",
  },
  {
    title: "Amazon Returns Pallet",
    description: "Mixed merchandise from Amazon customer returns. Electronics, home goods, and more.",
    price: "$800+",
    condition: "Mixed",
    image: amazonReturns,
    items: "200-500",
    category: "/products/amazon-returns",
  },
];

const NewArrivalsSection = () => {
  return (
    <section id="new-arrivals" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">Just Arrived</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            New Arrivals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out our latest inventory! Fresh stock arrives weekly with the best deals on liquidation pallets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newArrivals.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button size="lg" className="group">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
