
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const titleElements = heroRef.current.querySelectorAll('.parallax-title');
      const decorElements = heroRef.current.querySelectorAll('.parallax-decor');
      const glowElements = heroRef.current.querySelectorAll('.glow-effect');
      
      titleElements.forEach((element) => {
        const speed = 20;
        const xMovement = x * speed;
        const yMovement = y * speed;
        (element as HTMLElement).style.transform = `translate(${xMovement}px, ${yMovement}px)`;
      });
      
      decorElements.forEach((element, index) => {
        const speed = 40 + (index * 15);
        const xMovement = x * speed;
        const yMovement = y * speed;
        const rotation = (x + y) * 15;
        (element as HTMLElement).style.transform = `translate(${xMovement}px, ${yMovement}px) rotate(${rotation}deg)`;
      });

      glowElements.forEach((element) => {
        const rect = (element as HTMLElement).getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angleRad = Math.atan2(clientY - centerY, clientX - centerX);
        const angleDeg = (angleRad * 180) / Math.PI;
        (element as HTMLElement).style.background = `linear-gradient(${angleDeg}deg, ${getComputedStyle(document.documentElement).getPropertyValue('--highlight')} 0%, transparent 75%)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
            <span className="block parallax-title animate-blur-in opacity-0 [animation-delay:0.5s]">
              Crafting Digital Experiences
            </span>
            <span className="block parallax-title animate-blur-in opacity-0 [animation-delay:0.7s]">
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
