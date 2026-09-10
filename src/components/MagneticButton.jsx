import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  onClick,
  href,
  target,
  rel,
  variant = "solid",
  className = "",
  ariaLabel,
}) {
  const buttonRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = buttonRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    // Calculate distance from pointer to the center of the button
    const mouseX = e.clientX - (rect.left + rect.width / 2);
    const mouseY = e.clientY - (rect.top + rect.height / 2);

    // Apply scaling factor (0.28) for the magnetic pull intensity
    setOffset({ x: mouseX * 0.28, y: mouseY * 0.28 });
  };

  const handleMouseLeave = () => {
    // Return button to origin
    setOffset({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold font-display tracking-wide transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0A0A]";

  const variantStyles =
    variant === "solid"
      ? "text-white bg-[#E53935] hover:bg-[#FF4D4D] shadow-[0_8px_30px_rgba(229,57,53,0.45)] border border-transparent"
      : "text-white glass hover:border-[#FF4D4D]/50 hover:text-[#FF4D4D]";

  const buttonContent = (
    <motion.div
      ref={buttonRef}
      data-cursor="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 15, mass: 0.4 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
      data-id="element-115"
    >
      <motion.span
        animate={{ x: offset.x * 0.3, y: offset.y * 0.3 }}
        transition={{ type: "spring", stiffness: 220, damping: 15 }}
        className="inline-flex items-center gap-2"
        data-id="element-116"
      >
        {children}
      </motion.span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} aria-label={ariaLabel} className="inline-block" data-id="element-117">
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-block"
      data-id="element-118"
    >
      {buttonContent}
    </button>
  );
}
