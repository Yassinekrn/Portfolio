
import React, { useEffect, useState, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [previousPosition, setPreviousPosition] = useState<Position>({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hoveredTitle, setHoveredTitle] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const lastUpdateTime = useRef(Date.now());
  const frameRef = useRef(0);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const now = Date.now();
      const dt = (now - lastUpdateTime.current) / 1000; // Convert to seconds
      lastUpdateTime.current = now;
      
      // Store previous position before updating
      setPreviousPosition({ x: position.x, y: position.y });
      
      // Update current position
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Calculate velocity (pixels per second)
      if (dt > 0) {
        const dx = e.clientX - position.x;
        const dy = e.clientY - position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const newVelocity = Math.min(distance / dt / 500, 1); // Normalize and cap
        setVelocity(newVelocity);
      }
      
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleTitleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the element or any of its parents are title elements
      // Use data attribute to specifically target title elements
      const isTitleElement = target.closest('[data-cursor-highlight="true"]');
      setHoveredTitle(!!isTitleElement);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleTitleHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Add data attributes to title elements
    const titleElements = document.querySelectorAll('h1, h2, h3');
    titleElements.forEach(el => {
      el.setAttribute('data-cursor-highlight', 'true');
    });

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleTitleHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      
      cancelAnimationFrame(frameRef.current);
    };
  }, [position]);

  // Calculate morph effect based on velocity
  const getScale = () => {
    let baseScale = 1;
    
    if (clicked) baseScale = 0.75;
    if (hoveredTitle) baseScale = 2.5;
    
    // Apply squish based on velocity
    const scaleX = baseScale * (1 - velocity * 0.3);
    const scaleY = baseScale * (1 + velocity * 0.3);
    
    return { scaleX, scaleY };
  };

  const { scaleX, scaleY } = getScale();
  
  const cursorClasses = `
    fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2
    mix-blend-difference transition-opacity duration-300 ease-out
    ${hidden ? 'opacity-0' : 'opacity-100'}
  `;

  return (
    <div
      ref={cursorRef}
      className={cursorClasses}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
      }}
    >
      <div 
        className="w-5 h-5 bg-white rounded-full transition-transform"
        style={{
          transform: `scale(${scaleX}, ${scaleY})`,
          transition: hoveredTitle ? 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />
    </div>
  );
};

export default CustomCursor;
