import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/data/products";

interface CategoryProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const CategoryProductCard = ({ product, onViewDetails }: CategoryProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to Cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.mainImage}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg line-clamp-2">{product.title}</CardTitle>
          <Badge variant="secondary" className="shrink-0">{product.condition}</Badge>
        </div>
        <CardDescription className="line-clamp-2">{product.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="text-2xl font-bold text-accent">{product.price}</div>
        {product.itemsPerPallet && (
          <p className="text-sm text-muted-foreground mt-1">
            Est. {product.itemsPerPallet} items/pallet
          </p>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button 
          variant="outline"
          className="flex-1" 
          onClick={() => onViewDetails(product)}
        >
          View Details
        </Button>
        <Button 
          size="icon"
          onClick={handleAddToCart}
          title="Add to Cart"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryProductCard;
