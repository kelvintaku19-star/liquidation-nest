import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "Furniture & Home Decor",
    description: "Living room, bedroom, and office furniture. Includes decorative items and wall art.",
    price: "$1,450",
    condition: "Grade A",
    image: "/placeholder.svg",
    items: "15-25",
  },
  {
    title: "Kitchen & Dining",
    description: "Cookware, dinnerware, kitchen gadgets, and small appliances for home and restaurant use.",
    price: "$1,150",
    condition: "Grade B",
    image: "/placeholder.svg",
    items: "80-120",
  },
  {
    title: "Outdoor & Garden",
    description: "Patio furniture, garden tools, outdoor decor, and landscaping equipment.",
    price: "$1,350",
    condition: "Mixed",
    image: "/placeholder.svg",
    items: "50-75",
  },
];

const HomeGarden = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Home & Garden</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Quality home furnishings, kitchen essentials, and outdoor equipment. Perfect for retailers, 
            resellers, and home improvement businesses.
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
              Interested in seasonal items or specific home goods?
            </p>
            <Button size="lg">Get in Touch</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeGarden;
