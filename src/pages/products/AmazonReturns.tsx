import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "Mixed Amazon Returns - Grade A",
    description: "Premium quality Amazon returns including electronics, home goods, toys, and more. Minimal damage, high resale value.",
    price: "$1,250",
    condition: "Grade A",
    image: "/placeholder.svg",
    items: "150-200",
  },
  {
    title: "Mixed Amazon Returns - Grade B",
    description: "Good condition returns with minor cosmetic imperfections. Great value for resellers.",
    price: "$850",
    condition: "Grade B",
    image: "/placeholder.svg",
    items: "150-200",
  },
  {
    title: "Amazon Home & Kitchen Returns",
    description: "Exclusively home and kitchen items from Amazon returns. Appliances, cookware, decor, and more.",
    price: "$950",
    condition: "Mixed",
    image: "/placeholder.svg",
    items: "100-150",
  },
];

const AmazonReturns = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-2xl font-bold hover:text-accent transition-colors">
            Pallet Liquidation Depot
          </Link>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/products">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to All Categories
          </Button>
        </Link>
      </div>

      {/* Category Header */}
      <section className="py-12 bg-section-bg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Amazon Returns</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            High-quality Amazon return pallets with mixed merchandise. Each pallet is carefully 
            sorted and graded for transparency and maximum resale potential.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Need a custom order or have questions about our Amazon return pallets?
            </p>
            <Button size="lg">Contact Us for More Options</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AmazonReturns;
