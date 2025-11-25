import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Pallet Liquidation Depot</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted wholesale liquidation partner for quality pallets at unbeatable prices.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span className="text-primary-foreground/80">sales@palletliquidationdepot.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span className="text-primary-foreground/80">Nationwide Delivery Available</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-bold mb-4">Business Hours</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Pallet Liquidation Depot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
