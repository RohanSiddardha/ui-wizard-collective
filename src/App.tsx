
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { ProgressBar } from "./components/ProgressBar";
import Index from "./pages/Index";
import UIImportance from "./pages/UIImportance";
import ModernTools from "./pages/ModernTools";
import OldVsNew from "./pages/OldVsNew";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle scroll reset on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
          <ScrollToTop />
          <ProgressBar />
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ui-importance" element={<UIImportance />} />
            <Route path="/modern-tools" element={<ModernTools />} />
            <Route path="/old-vs-new" element={<OldVsNew />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
