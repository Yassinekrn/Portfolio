
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

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
      {/* Background decorative elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="parallax-decor absolute top-[20%] right-[10%] w-16 h-16 rounded-full bg-highlight/30 opacity-80"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="parallax-decor absolute bottom-[30%] left-[15%] w-24 h-24 rounded-full border-2 border-highlight/40 opacity-60"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="parallax-decor absolute top-[40%] left-[20%] w-10 h-10 bg-black/20"
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-bg"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 py-1 px-3 bg-highlight/10 text-black text-sm font-medium rounded-full"
          >
            Designer & Developer
          </motion.p>
          
          <motion.div
            style={{ 
              transform: `translate(${titlePosition.x}px, ${titlePosition.y}px) rotate(${titlePosition.x * 2}deg)`,
              transition: 'transform 0.05s linear'
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <AnimatedText
                text="Crafting Digital Experiences"
                delay={1}
                className="block"
              />
              <AnimatedText
                text="That Inspire & Engage"
                delay={2}
                className="block"
              />
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            I design and build award-winning digital products that help innovative brands move at the speed of culture.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <motion.a 
              href="#work" 
              className="group bg-highlight text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-highlight/90 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 text-black" />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-6 py-3 rounded-full text-lg font-medium border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.span 
          className="text-sm text-gray-500 mb-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        >
          <path 
            d="M12 5L12 19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default Hero;
