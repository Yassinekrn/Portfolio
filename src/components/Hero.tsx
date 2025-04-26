import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [titlePosition, setTitlePosition] = useState({ x: 0, y: 0 });
  const followSpeed = useRef(0.05); // Initial slow speed
  const isInView = useRef(true);
  
  useEffect(() => {
    let animationFrameId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      setMousePosition({ x, y });
      
      // Gradually increase follow speed
      followSpeed.current = Math.min(followSpeed.current + 0.01, 0.2);
    };
    
    const updateTitlePosition = () => {
      if (!isInView.current) {
        // Reset position when out of view
        setTitlePosition({ x: 0, y: 0 });
        followSpeed.current = 0.05; // Reset speed
        return;
      }

      setTitlePosition(prev => ({
        x: prev.x + (mousePosition.x * 20 - prev.x) * followSpeed.current,
        y: prev.y + (mousePosition.y * 20 - prev.y) * followSpeed.current
      }));

      animationFrameId = requestAnimationFrame(updateTitlePosition);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      isInView.current = entries[0].isIntersecting;
      if (!isInView.current) {
        setTitlePosition({ x: 0, y: 0 });
        followSpeed.current = 0.05;
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updateTitlePosition);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [mousePosition]);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative elements with enhanced animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax-decor absolute top-[20%] right-[10%] w-16 h-16 rounded-full bg-highlight/30 opacity-80 animate-float-advanced"></div>
        <div className="parallax-decor absolute bottom-[30%] left-[15%] w-24 h-24 rounded-full border-2 border-highlight/40 opacity-60 animate-spin-slow"></div>
        <div className="parallax-decor absolute top-[40%] left-[20%] w-10 h-10 bg-black/20 rotate-45 animate-float-advanced"></div>
      </div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-bg"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="inline-block mb-4 py-1 px-3 bg-highlight/10 text-highlight text-sm font-medium rounded-full animate-blur-in opacity-0 [animation-delay:0.3s]">
            Designer & Developer
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            <span 
              className="block parallax-title animate-blur-in opacity-0 [animation-delay:0.5s]"
              style={{
                transform: `translate(${titlePosition.x}px, ${titlePosition.y}px)`,
                transition: 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Crafting Digital Experiences
            </span>
            <span 
              className="block parallax-title animate-blur-in opacity-0 [animation-delay:0.7s]"
              style={{
                transform: `translate(${titlePosition.x}px, ${titlePosition.y}px)`,
                transition: 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              That <span className="text-highlight relative glow-effect">
                Inspire
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q40,20 100,10" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span> & Engage
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-blur-in opacity-0 [animation-delay:0.9s]">
            I design and build award-winning digital products that help innovative brands move at the speed of culture.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-blur-in opacity-0 [animation-delay:1.1s]">
            <a 
              href="#work" 
              className="group bg-highlight text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-highlight/90 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full text-lg font-medium border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float-advanced">
        <span className="text-sm text-gray-500 mb-2 animate-blur-in opacity-0 [animation-delay:1.3s]">Scroll</span>
        <svg className="animate-blur-in opacity-0 [animation-delay:1.4s]" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
