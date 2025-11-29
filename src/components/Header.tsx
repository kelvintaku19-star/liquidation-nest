import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Package, Clock, Info, FileText, Truck, MessageCircle, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Available Products", path: "/products", icon: Package },
  { name: "New Arrivals", path: "/#new-arrivals", icon: Clock },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Terms of Service", path: "/terms", icon: FileText },
  { name: "Shipping", path: "/shipping", icon: Truck },
  { name: "Support", path: "/support", icon: MessageCircle },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    if (path.startsWith("/#")) return location.pathname === "/" && location.hash === path.substring(1);
    return location.pathname === path;
  };

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    if (path.startsWith("/#")) {
      const elementId = path.substring(2);
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const scrollToCart = () => {
    const element = document.getElementById("contact-orders");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        {/* Main Header Row */}
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-primary-foreground">
              Pallet Liquidation Depot
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative text-primary-foreground hover:bg-primary-foreground/10"
              onClick={scrollToCart}
              aria-label="View cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path.startsWith("/#") ? "/" : item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary-foreground/20 animate-fade-in">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path.startsWith("/#") ? "/" : item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`flex items-center gap-2 px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
