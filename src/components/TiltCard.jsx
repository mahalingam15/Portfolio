import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({
  children,
  className = "",
  glowColor = "rgba(229, 57, 53, 0.35)",
  intensity = 10,
}) {
  const cardRef = useRef(null);

  // Normal relative coordinates of mouse pointer inside the card (0.5 is center)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for tilt rotation
  const rotateXSpring = useSpring(
    useTransform(mouseY, [0, 1], [intensity, -intensity]),
    { stiffness: 200, damping: 18 }
  );
  const rotateYSpring = useSpring(
    useTransform(mouseX, [0, 1], [-intensity, intensity]),
    { stiffness: 200, damping: 18 }
  );

  // Mapped glow positions in percentages
  const glowX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  // Multi-motion-value transform for the background radial gradient glow
  const glowBackground = useTransform([glowX, glowY], ([x, y]) => {
    return `radial-gradient(280px circle at ${x} ${y}, ${glowColor}, transparent 65%)`;
  });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    // Normalize position between 0 and 1
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    // Reset to center
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={`relative ${className}`}
      data-id="element-189"
    >
      {/* Background tracking light overlay */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: glowBackground,
        }}
        data-id="element-190"
      />
      {children}
    </motion.div>
  );
}
