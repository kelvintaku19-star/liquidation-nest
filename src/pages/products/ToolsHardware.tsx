import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import milwaukeeToolsCase from "@/assets/milwaukee-tools-case.jpg";

const products = [
  {
    title: "Milwaukee Power Tools Pallet",
    description: "Premium Milwaukee brand power tools including drills, impact drivers, saws, and batteries. Professional grade.",
    price: "$3,200",
    condition: "Grade A",
    image: "/placeholder.svg",
    items: "25-40",
  },
  {
    title: "Mixed Power Tools",
    description: "Assorted power tools from various brands including DeWalt, Makita, and Ryobi. Great variety for resale.",
    price: "$1,850",
    condition: "Grade B",
    image: "/placeholder.svg",
    items: "40-60",
  },
  {
    title: "Hand Tools & Hardware",
    description: "Hand tools, measuring equipment, fasteners, and general hardware supplies.",
    price: "$950",
    condition: "Mixed",
    image: "/placeholder.svg",
    items: "100-150",
  },
  {
    title: "Milwaukee & DeWalt Tools Pallet",
    description: "Professional-grade power tools from industry-leading brands Milwaukee and DeWalt. Includes drills, impact drivers, batteries, accessories, and tool kits. Perfect for contractors and tool retailers.",
    price: "$1,100",
    condition: "Grade A",
    image: milwaukeeToolsCase,
    items: "100",
  },
];

const ToolsHardware = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tools & Hardware</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Professional-grade power tools and hardware supplies. Featuring top brands like Milwaukee, 
            DeWalt, and more at wholesale liquidation prices.
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
              Need specific tools or bulk quantities for your business?
            </p>
            <Button size="lg">Contact Us for Volume Pricing</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ToolsHardware;
