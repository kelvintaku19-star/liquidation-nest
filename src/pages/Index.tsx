import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <HowToOrderSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
