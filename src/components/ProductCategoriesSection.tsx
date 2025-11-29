import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories, getProductsByCategory, type Product } from "@/data/products";
import CategoryProductCard from "./CategoryProductCard";
import ProductDetailModal from "./ProductDetailModal";

const ProductCategoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryProducts = getProductsByCategory(selectedCategory);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive selection of liquidation pallets. Click on any category to explore.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="text-base px-6 py-3 h-auto"
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            {categories.find((c) => c.id === selectedCategory)?.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <CategoryProductCard
              key={product.id}
              product={product}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products available in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProductCategoriesSection;
