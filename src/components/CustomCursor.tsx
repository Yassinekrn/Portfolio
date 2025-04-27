
import React, { useEffect, useState, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [hidden, setHidden] = useState(true);
  const [hoveredTitle, setHoveredTitle] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Object to track current and previous positions
  const mousePosition = useRef<Position>({ x: 0, y: 0 });
  const previousMousePosition = useRef<Position>({ x: 0, y: 0 });
  const cursorPosition = useRef<Position>({ x: 0, y: 0 });
  
  // Variables for animation and elasticity
  const currentScale = useRef({ x: 1, y: 1 });
  const currentAngle = useRef(0);
  const animationFrame = useRef(0);
  const speed = useRef(0.17); // Smoothing factor (0 = smoother, 1 = instant)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Store previous position before updating
      previousMousePosition.current.x = mousePosition.current.x;
      previousMousePosition.current.y = mousePosition.current.y;
      
      // Update current mouse position
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
      
      setHidden(false);
    };

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add("scale-75");
      }
    };
    
    const handleMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove("scale-75");
      }
    };

    const handleTitleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the element or any of its parents have data-cursor-highlight
      const isTitleElement = target.closest('[data-cursor-highlight="true"]');
      setHoveredTitle(!!isTitleElement);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const updateCursorPosition = () => {
      // MOVE - Calculate smooth cursor movement
      cursorPosition.current.x += (mousePosition.current.x - cursorPosition.current.x) * speed.current;
      cursorPosition.current.y += (mousePosition.current.y - cursorPosition.current.y) * speed.current;
      
      // SQUEEZE - Calculate mouse velocity and apply elastic deformation
      const deltaMouseX = mousePosition.current.x - previousMousePosition.current.x;
      const deltaMouseY = mousePosition.current.y - previousMousePosition.current.y;
      
      // Calculate mouse velocity using Pythagorean theorem and adjust speed
      const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150);
      
      // Convert mouse velocity to scale values for the elastic effect
      const scaleValue = (mouseVelocity / 150) * 0.5;
      
      // Smoothly update the current scale
      currentScale.current.x = 1 + scaleValue;
      currentScale.current.y = 1 - scaleValue;
      
      // ROTATE - Calculate angle for rotation based on movement direction
      if (mouseVelocity > 20) {
        currentAngle.current = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
      }
      
      // Apply transformations if cursor element exists
      if (cursorRef.current) {
        const baseScale = hoveredTitle ? 2.5 : 1;
        
        // Apply all transformations
        cursorRef.current.style.transform = `
          translate(${cursorPosition.current.x}px, ${cursorPosition.current.y}px) 
          rotate(${currentAngle.current}deg) 
          scale(${baseScale * currentScale.current.x}, ${baseScale * currentScale.current.y})
        `;
      }
      
      animationFrame.current = requestAnimationFrame(updateCursorPosition);
    };

    // Start animation
    updateCursorPosition();
    
    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleTitleHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      // Clean up event listeners and animation frame on component unmount
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleTitleHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      
      cancelAnimationFrame(animationFrame.current);
    };
  }, [hoveredTitle]);

  return (
    <div
      ref={cursorRef}
      className={`
        fixed pointer-events-none z-50
        mix-blend-difference transition-opacity duration-300 ease-out
        ${hidden ? 'opacity-0' : 'opacity-100'}
      `}
      style={{ 
        // Initial positioning to avoid flash before first mousemove
        transform: `translate(${cursorPosition.current.x}px, ${cursorPosition.current.y}px)`,
      }}
    >
      <div className="w-5 h-5 bg-white rounded-full" />
    </div>
  );
};

export default CustomCursor;
