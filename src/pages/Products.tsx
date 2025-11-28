import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Laptop, Hammer, Home, Shirt } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  {
    id: "amazon-returns",
    title: "Amazon Returns",
    description: "Mixed merchandise returned to Amazon - electronics, home goods, toys, and more",
    icon: Package,
    path: "/products/amazon-returns",
  },
  {
    id: "electronics",
    title: "Electronics",
    description: "Consumer electronics, computers, appliances, and tech accessories",
    icon: Laptop,
    path: "/products/electronics",
  },
  {
    id: "tools-hardware",
    title: "Tools & Hardware",
    description: "Power tools (Milwaukee, DeWalt), hand tools, and hardware supplies",
    icon: Hammer,
    path: "/products/tools-hardware",
  },
  {
    id: "home-garden",
    title: "Home & Garden",
    description: "Furniture, decor, kitchen items, and outdoor equipment",
    icon: Home,
    path: "/products/home-garden",
  },
  {
    id: "clothing-shoes",
    title: "Clothing & Shoes",
    description: "Apparel, footwear, and fashion accessories for all ages",
    icon: Shirt,
    path: "/products/clothing-shoes",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Browse our extensive selection of liquidation pallets across multiple categories. 
            All pallets are carefully inspected and priced competitively for maximum value.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={category.path}>
                      <Button className="w-full">View Products</Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
