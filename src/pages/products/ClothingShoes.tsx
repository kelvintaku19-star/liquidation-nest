import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "Men's Clothing Pallet",
    description: "Assorted men's apparel including shirts, pants, jackets, and activewear from popular brands.",
    price: "$850",
    condition: "Grade A",
    image: "/placeholder.svg",
    items: "150-200",
  },
  {
    title: "Women's Fashion Pallet",
    description: "Women's clothing mix featuring dresses, tops, bottoms, and outerwear in various sizes.",
    price: "$950",
    condition: "Grade B",
    image: "/placeholder.svg",
    items: "150-200",
  },
  {
    title: "Footwear Assortment",
    description: "Men's and women's shoes including sneakers, boots, sandals, and dress shoes.",
    price: "$1,150",
    condition: "Mixed",
    image: "/placeholder.svg",
    items: "80-120",
  },
];

const ClothingShoes = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Clothing & Shoes</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Fashion and footwear pallets with brand-name apparel and shoes. Ideal for clothing retailers, 
            online resellers, and boutique stores.
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
              Looking for seasonal collections or specific brands?
            </p>
            <Button size="lg">Contact Us for Details</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClothingShoes;
