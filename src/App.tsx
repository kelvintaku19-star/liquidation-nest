import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import AmazonReturns from "./pages/products/AmazonReturns";
import Electronics from "./pages/products/Electronics";
import ToolsHardware from "./pages/products/ToolsHardware";
import HomeGarden from "./pages/products/HomeGarden";
import ClothingShoes from "./pages/products/ClothingShoes";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/amazon-returns" element={<AmazonReturns />} />
          <Route path="/products/electronics" element={<Electronics />} />
          <Route path="/products/tools-hardware" element={<ToolsHardware />} />
          <Route path="/products/home-garden" element={<HomeGarden />} />
          <Route path="/products/clothing-shoes" element={<ClothingShoes />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/support" element={<Support />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
