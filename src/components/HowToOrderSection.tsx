import { ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const HowToOrderSection = () => {
  return (
    <section className="py-16 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order? It's Super Easy!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred ordering method and get started today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Website Ordering */}
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Order Through Our Website</h3>
              </div>
              
              <ol className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <span className="text-muted-foreground">
                    Browse products in categories like toys pallets, shoes pallets, tools, and more
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <span className="text-muted-foreground">
                    Select your items and add them to your cart
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <span className="text-muted-foreground">
                    Fill in your order details and submit
                  </span>
                </li>
              </ol>

              <Link to="/products">
                <Button size="lg" className="w-full">
                  Browse Products
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Telegram Ordering */}
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Order via Telegram</h3>
              </div>
              
              <ol className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <span className="text-muted-foreground">
                    Join our Telegram channel for instant updates
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <span className="text-muted-foreground">
                    Browse available products with photos and prices
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <span className="text-muted-foreground">
                    Message us directly to place your order
                  </span>
                </li>
              </ol>

              <a 
                href="https://t.me/palletliquidationdepot2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="w-full">
                  Join Telegram Channel
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Need Help? Contact Us:</h3>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <a href="mailto:Palletliquidation764@gmail.com" className="hover:text-primary transition-colors">
              📧 Palletliquidation764@gmail.com
            </a>
            <a href="https://wa.me/61489979358" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              📱 WhatsApp: +61 489 979 358
            </a>
            <a href="https://t.me/palletliquidationdepot2" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              💬 Telegram Channel
            </a>
            <span>🚚 Nationwide Delivery Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrderSection;
