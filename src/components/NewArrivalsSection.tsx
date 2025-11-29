import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Sparkles, Truck, Wrench, ChefHat, UtensilsCrossed, Package, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
        {/* Featured New Arrival with Video */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              <Truck className="w-5 h-5 mr-2 inline" />
              New Arrival Alert!
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fresh Stock Just Arrived!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We have just received four full truckloads of fresh stock — featuring kitchen utensils, 
              domestic appliances, and power tools.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto aspect-video object-cover"
              >
                <source src="/videos/new-arrivals.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-500 text-white animate-pulse">
                  🔴 NEW STOCK
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Included Brands:</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Parkside Power Tools</p>
                    <p className="text-muted-foreground">Professional grade power tools</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ChefHat className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">SilverCrest Kitchen & Home Appliances</p>
                    <p className="text-muted-foreground">Quality home appliances</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <UtensilsCrossed className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Dishes & Cookware Sets</p>
                    <p className="text-muted-foreground">Complete kitchen solutions</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-400">
                    All items are brand new (Grade A)
                  </p>
                  <p className="text-muted-foreground">
                    Come in their original packaging
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50">
                <Package className="h-6 w-6 text-primary" />
                <p className="font-medium">
                  Visit us today to explore the latest arrivals — direct from the warehouse!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* More New Arrivals */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">More New Arrivals</span>
          </div>
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
