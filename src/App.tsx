import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";

const queryClient = new QueryClient();

const App = () => {
    useEffect(() => {
        // Create Lenis instance with improved settings
        const lenis = new Lenis({
            duration: 0.8, // Reduced from 1.2 for more responsive scrolling
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            smoothWheel: true, // Better handling of mouse wheel
            wheelMultiplier: 1.0, // Adjust wheel sensitivity
            touchMultiplier: 1.5, // Reduced from 2 for more natural feel
            // smooth: true,
            syncTouch: true, // Syncs touch and wheel scrolling
        });

        // Create a more stable animation loop
        function animate(time: number) {
            lenis.raf(time);
            requestAnimationFrame(animate);
        }

        // Start the animation loop
        requestAnimationFrame(animate);

        // Handle resize events to prevent scroll issues on window dimension changes
        const resizeObserver = new ResizeObserver(() => {
            lenis.resize();
        });

        resizeObserver.observe(document.body);

        // Cleanup function
        return () => {
            lenis.destroy();
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner position="bottom-right" />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/work" element={<WorkPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
                <CustomCursor />
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;
