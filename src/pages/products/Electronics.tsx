import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "Consumer Electronics Pallet",
    description: "Laptops, tablets, phones, smartwatches, and accessories. Tested and verified functionality.",
    price: "$2,450",
    condition: "Grade A",
    image: "/placeholder.svg",
    items: "50-75",
  },
  {
    title: "Home Appliances Pallet",
    description: "Kitchen appliances, vacuum cleaners, coffee makers, and small electronics.",
    price: "$1,650",
    condition: "Grade B",
    image: "/placeholder.svg",
    items: "40-60",
  },
  {
    title: "Audio & Gaming Equipment",
    description: "Headphones, speakers, gaming consoles, controllers, and entertainment devices.",
    price: "$1,950",
    condition: "Mixed",
    image: "/placeholder.svg",
    items: "60-90",
  },
];

const Electronics = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-2xl font-bold hover:text-accent transition-colors">
            Pallet Liquidation Depot
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Link to="/products">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to All Categories
          </Button>
        </Link>
      </div>

      <section className="py-12 bg-section-bg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Electronics</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Premium electronics pallets featuring laptops, tablets, appliances, and consumer tech. 
            All items inspected and tested for quality assurance.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Looking for specific electronics or bulk orders?
            </p>
            <Button size="lg">Contact Us for Custom Solutions</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Electronics;
