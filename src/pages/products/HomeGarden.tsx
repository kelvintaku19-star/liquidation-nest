import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useCategories, useProducts } from "@/hooks/useProducts";

const HomeGarden = () => {
  const { data: categories } = useCategories();
  const homeCategory = categories?.find(cat => cat.name.toLowerCase().includes('home') || cat.name.toLowerCase().includes('garden'));
  const { data: products, isLoading } = useProducts(homeCategory?.id);
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
          {isLoading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : products && products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard 
                  key={product.id}
                  title={product.title}
                  description={product.description || ''}
                  price={product.price}
                  condition={product.condition || 'Mixed'}
                  image={product.main_image || '/placeholder.svg'}
                  items={product.items_per_pallet}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              No products available in this category yet.
            </div>
          )}
          
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
