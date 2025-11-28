import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import OrderForm from "@/components/OrderForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import TawkToChat from "@/components/TawkToChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <NewArrivalsSection />
      <AboutSection />
      <StatsSection />
      <HowToOrderSection />
      <OrderForm />
      <TestimonialsSection />
      <Footer />
      {/* To activate Tawk.to live chat, replace the propertyId and widgetId below with your actual values from tawk.to dashboard */}
      <TawkToChat propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" />
    </div>
  );
};

export default Index;
