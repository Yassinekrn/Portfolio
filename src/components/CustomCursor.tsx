
import React, { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hoveredTitle, setHoveredTitle] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleTitleHoverIn = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isTitleElement = 
        target.textContent?.includes("Featured Projects") ||
        target.textContent?.includes("Professional Experience") ||
        target.textContent?.includes("Hello! I'm Alex Cooper") ||
        target.textContent?.includes("Let's Work Together") ||
        target.closest('h2')?.textContent?.includes("Featured Projects") ||
        target.closest('h2')?.textContent?.includes("Professional Experience") ||
        target.closest('h2')?.textContent?.includes("Hello! I'm Alex Cooper") ||
        target.closest('h2')?.textContent?.includes("Let's Work Together");

      if (isTitleElement) {
        setHoveredTitle(true);
      }
    };

    const handleTitleHoverOut = () => {
      setHoveredTitle(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleTitleHoverIn);
    document.addEventListener("mouseout", handleTitleHoverOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleTitleHoverIn);
      document.removeEventListener("mouseout", handleTitleHoverOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  const cursorClasses = `
    fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2
    mix-blend-difference transition-all duration-300 ease-out
    ${hidden ? 'opacity-0' : 'opacity-100'}
    ${clicked ? 'scale-75' : ''}
    ${hoveredTitle ? 'scale-[2.5]' : ''}
  `;

  return (
    <div
      className={cursorClasses}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
      }}
    >
      <div className="w-5 h-5 bg-white rounded-full" />
    </div>
  );
};

export default CustomCursor;
