import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";

interface CategoryProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const CategoryProductCard = ({ product, onViewDetails }: CategoryProductCardProps) => {
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
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => onViewDetails(product)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryProductCard;
