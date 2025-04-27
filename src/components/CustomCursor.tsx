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
    const targetAngle = useRef(0); // Added for smooth angle transitions
    const hoverScale = useRef(1); // Add this for smooth hover transitions
    const animationFrame = useRef(0);
    const speed = useRef(0.1);
    const angleSmoothing = useRef(0.2); // For smoother angle transitions

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

            // Only apply elastic effects if there's significant movement
            if (Math.abs(deltaMouseX) > 0.5 || Math.abs(deltaMouseY) > 0.5) {
                // Calculate mouse velocity using Pythagorean theorem
                const mouseVelocity = Math.min(
                    Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 6,
                    100
                );

                // Direction-aware elastic effect
                const directionFactor =
                    Math.abs(deltaMouseX) > Math.abs(deltaMouseY)
                        ? Math.sign(deltaMouseX)
                        : 1;

                // Convert mouse velocity to scale values for the elastic effect
                const scaleValue = (mouseVelocity / 100) * 0.8;

                // Apply elastic deformation based on direction
                currentScale.current.x =
                    1 + scaleValue * Math.abs(directionFactor);
                currentScale.current.y = 1 - scaleValue * 0.5;

                // ROTATE - Calculate angle based on movement direction
                if (mouseVelocity > 12) {
                    // Calculate raw angle
                    const newAngle =
                        (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;

                    // Update target angle with special handling for left movement
                    targetAngle.current = newAngle;
                }
            } else {
                // Gradually return to neutral when not moving
                currentScale.current.x += (1 - currentScale.current.x) * 0.2;
                currentScale.current.y += (1 - currentScale.current.y) * 0.2;
            }

            // Smoothly interpolate the current angle toward the target angle
            const angleDiff = targetAngle.current - currentAngle.current;

            // Normalize angle difference to avoid flipping
            let normalizedDiff = angleDiff;
            if (angleDiff > 180) normalizedDiff -= 360;
            if (angleDiff < -180) normalizedDiff += 360;

            // Apply smoothing to angle changes
            currentAngle.current += normalizedDiff * angleSmoothing.current;

            // Smooth transition for hover scale
            const targetHoverScale = hoveredTitle ? 3.5 : 1;
            hoverScale.current += (targetHoverScale - hoverScale.current) * 0.1;

            // Apply transformations if cursor element exists
            if (cursorRef.current) {
                // Apply all transformations with the centering offset
                cursorRef.current.style.transform = `
                    translate(${cursorPosition.current.x}px, ${
                    cursorPosition.current.y
                }px)
                    translate(-50%, -50%)
                    rotate(${currentAngle.current}deg)
                    scale(${hoverScale.current * currentScale.current.x}, ${
                    hoverScale.current * currentScale.current.y
                })
                `;
            }

            animationFrame.current =
                requestAnimationFrame(updateCursorPosition);
        };

        // Start animation
        updateCursorPosition();

        // Add event listeners with passive option for better performance
        document.addEventListener("mousemove", handleMouseMove, {
            passive: true,
        });
        document.addEventListener("mousedown", handleMouseDown, {
            passive: true,
        });
        document.addEventListener("mouseup", handleMouseUp, { passive: true });
        document.addEventListener("mouseover", handleTitleHover, {
            passive: true,
        });
        document.addEventListener("mouseleave", handleMouseLeave, {
            passive: true,
        });
        document.addEventListener("mouseenter", handleMouseEnter, {
            passive: true,
        });

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
                    willChange: "transform, opacity",
                }}
            >
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full" />
            </div>

            {/* The following circle - has smooth movement and elastic effects */}
            <div
                ref={cursorRef}
                className={`
                    fixed pointer-events-none z-[9999]
                    mix-blend-difference transition-opacity duration-300
                    ${hidden ? "opacity-0" : "opacity-100"}
                `}
                style={{
                    left: 0,
                    top: 0,
                    transform: `translate(${cursorPosition.current.x}px, ${cursorPosition.current.y}px) translate(-50%, -50%)`,
                    willChange: "transform",
                }}
            >
                <div className="w-7 h-7 bg-white dark:bg-white rounded-full" />
            </div>
        </>
    );
};

export default CustomCursor;
