import React, { useEffect, useRef, useState } from "react";

interface Position {
    x: number;
    y: number;
}

const CustomCursor = () => {
    const [hidden, setHidden] = useState(true);
    const [hoveredTitle, setHoveredTitle] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);

    // Objects to track mouse positions
    const mousePosition = useRef<Position>({ x: 0, y: 0 });
    const previousMousePosition = useRef<Position>({ x: 0, y: 0 });
    const cursorPosition = useRef<Position>({ x: 0, y: 0 });

    // Variables for animation and elasticity
    const currentScale = useRef({ x: 1, y: 1 });
    const currentAngle = useRef(0);
    const animationFrame = useRef(0);
    const speed = useRef(0.1); // Reduced for smoother movement (was 0.17)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Store previous position before updating
            previousMousePosition.current.x = mousePosition.current.x;
            previousMousePosition.current.y = mousePosition.current.y;

            // Update current mouse position
            mousePosition.current.x = e.clientX;
            mousePosition.current.y = e.clientY;

            // Also position the dot cursor exactly at mouse position
            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }

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
            const isTitleElement = target.closest(
                '[data-cursor-highlight="true"]'
            );
            setHoveredTitle(!!isTitleElement);
        };

        const handleMouseLeave = () => setHidden(true);
        const handleMouseEnter = () => setHidden(false);

        const updateCursorPosition = () => {
            // MOVE - Calculate smooth cursor movement
            cursorPosition.current.x +=
                (mousePosition.current.x - cursorPosition.current.x) *
                speed.current;
            cursorPosition.current.y +=
                (mousePosition.current.y - cursorPosition.current.y) *
                speed.current;

            // SQUEEZE - Calculate mouse velocity and apply elastic deformation
            const deltaMouseX =
                mousePosition.current.x - previousMousePosition.current.x;
            const deltaMouseY =
                mousePosition.current.y - previousMousePosition.current.y;

            // Calculate mouse velocity using Pythagorean theorem and adjust speed
            // Lower threshold (100 instead of 150) and higher multiplier (6 instead of 4)
            const mouseVelocity = Math.min(
                Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 6,
                100
            );

            // Convert mouse velocity to scale values for the elastic effect
            // Increased from 0.5 to 0.8 for more noticeable effect
            const scaleValue = (mouseVelocity / 100) * 0.8;

            // Smoothly update the current scale
            currentScale.current.x = 1 + scaleValue;
            currentScale.current.y = 1 - scaleValue * 0.5;

            // ROTATE - Calculate angle for rotation based on movement direction
            if (mouseVelocity > 15) {
                // Lower threshold to make rotation more sensitive
                currentAngle.current =
                    (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
            }

            // Apply transformations if cursor element exists
            if (cursorRef.current) {
                const baseScale = hoveredTitle ? 3.5 : 1; // Increased from 2.5 to 3.5

                // Apply all transformations with the centering offset
                cursorRef.current.style.transform = `
                    translate(${cursorPosition.current.x}px, ${
                    cursorPosition.current.y
                }px) 
                    translate(-50%, -50%)
                    rotate(${currentAngle.current}deg) 
                    scale(${baseScale * currentScale.current.x}, ${
                    baseScale * currentScale.current.y
                })
                `;
            }

            animationFrame.current =
                requestAnimationFrame(updateCursorPosition);
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
        <>
            {/* The cursor dot - always follows exact mouse position */}
            <div
                ref={cursorDotRef}
                className={`
                    fixed pointer-events-none z-[10000]
                    transition-opacity duration-300
                    ${hidden ? "opacity-0" : "opacity-100"}
                `}
                style={{
                    left: 0,
                    top: 0,
                    transform: `translate(${cursorPosition.current.x}px, ${cursorPosition.current.y}px) translate(-50%, -50%)`,
                }}
            >
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full" />
            </div>

            {/* The following circle - has smooth movement and elastic effects */}
            <div
                ref={cursorRef}
                className={`
                    fixed pointer-events-none z-[9999]
                    mix-blend-difference transition-all duration-300 ease-out
                    ${hidden ? "opacity-0" : "opacity-100"}
                `}
                style={{
                    left: 0,
                    top: 0,
                    transform: `translate(${cursorPosition.current.x}px, ${cursorPosition.current.y}px) translate(-50%, -50%)`,
                    transition: "opacity 300ms ease-out, transform 50ms linear",
                }}
            >
                <div className="w-7 h-7 bg-white dark:bg-white rounded-full" />{" "}
                {/* Increased from w-6 h-6 to w-7 h-7 */}
            </div>
        </>
    );
};

export default CustomCursor;
