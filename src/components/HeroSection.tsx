import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import deliveryTruck from "@/assets/delivery-truck.jpg";
import warehouse from "@/assets/warehouse.jpg";
import packedPallets from "@/assets/packed-pallets.jpg";
import workersLoading from "@/assets/workers-loading.jpg";
import amazonReturns from "@/assets/amazon-returns.jpg";
import milwaukeeTools from "@/assets/milwaukee-tools.jpg";

const carouselImages = [
  { src: deliveryTruck, alt: "Professional delivery service" },
  { src: warehouse, alt: "Modern warehouse facility" },
  { src: packedPallets, alt: "Quality packed pallets" },
  { src: workersLoading, alt: "Expert logistics team" },
  { src: amazonReturns, alt: "Amazon return pallets" },
  { src: milwaukeeTools, alt: "Milwaukee tools pallets" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-primary-foreground space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Premium Pallet Liquidation
              <span className="block text-accent mt-2">Wholesale Deals</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              Your trusted source for high-quality liquidation pallets. Amazon returns, Milwaukee tools, and premium merchandise at unbeatable wholesale prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/products">
                <Button size="lg" variant="secondary" className="text-lg font-semibold">
                  View Stock
                </Button>
              </Link>
              <a href="https://wa.me/61489979358" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-lg font-semibold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative group animate-fade-in">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <img
                src={carouselImages[currentSlide].src}
                alt={carouselImages[currentSlide].alt}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-accent w-8"
                        : "bg-background/60 hover:bg-background/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
