import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Raw cursor position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for outer cursor circle
  const springConfig = { stiffness: 250, damping: 28, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on touch devices where hover is not supported
    if (window.matchMedia("(hover: none)").matches) {
      return;
    }

    setIsEnabled(true);

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Check if mouse is hovering over an interactive element
      const target = e.target;
      if (target) {
        const isInteractive = target.closest('a, button, [data-cursor="hover"]');
        setIsHovered(!!isInteractive);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Inner red dot - follows mouse immediately */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-[#FF4D4D]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        data-id="element-72"
      />
      {/* Outer tracking ring - follows mouse with smooth physics */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-[#FF4D4D]/60"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          height: isHovered ? 56 : 34,
          width: isHovered ? 56 : 34,
          borderColor: isHovered ? "rgba(255, 77, 77, 0.9)" : "rgba(255, 77, 77, 0.5)",
          backgroundColor: isHovered ? "rgba(255, 77, 77, 0.08)" : "rgba(255, 77, 77, 0)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
        data-id="element-73"
      />
    </>
  );
}
