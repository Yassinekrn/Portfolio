import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useIsMobile } from "./hooks/use-mobile";
import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./context/ThemeContext";
import Index from "./pages/Index";

const queryClient = new QueryClient();

function App() {
    const isMobile = useIsMobile();

    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <Toaster />
                    <Sonner position="bottom-right" />
                    <Index />
                    {!isMobile && <CustomCursor />}
                </TooltipProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
