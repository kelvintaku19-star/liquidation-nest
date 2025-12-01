import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  condition: string;
  image: string;
  items?: string;
}

const ProductCard = ({ title, description, price, condition, image, items }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="secondary">{condition}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
        {items && (
          <p className="text-sm text-muted-foreground mt-2">
            Est. {items} items per pallet
          </p>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-accent">{price}</div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Contact to Order</Button>
        <Button 
          variant="outline" 
          className="flex-1" 
          asChild
        >
          <a 
            href="https://t.me/palletliquidationdepot2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on Telegram
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
