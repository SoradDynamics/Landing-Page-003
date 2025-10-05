
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Features from "./pages/Features";
import NotFound from "./pages/NotFound";
import School from "./pages/School";
import ContactUs from "./components/Razor-pay/Contact-us";
import ShippingPolicy from "./components/Razor-pay/ShippingPolicy";
import TermsAndConditions from "./components/Razor-pay/Terms";
import CancellationRefunds from "./components/Razor-pay/Refunds";
import PrivacyPolicy from "./components/Razor-pay/PrivacyPolicy";
// import PrivacyPolicy from "./components/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/school-management-system" element={<School />} />
          <Route path="/features" element={<Features />} />
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}

           <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cancellations-refunds" element={<CancellationRefunds />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
