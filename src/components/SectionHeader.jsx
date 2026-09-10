import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
      data-id="element-166"
    >
      {/* Eyebrow badge with inline red separator line */}
      <span
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF4D4D]"
        data-id="element-167"
      >
        <span className="h-px w-8 bg-[#FF4D4D]/60" data-id="element-168" />
        {eyebrow}
      </span>
      {/* Primary Section Title */}
      <h2
        className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl"
        data-id="element-169"
      >
        {title}
      </h2>
      {/* Secondary Description */}
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#C7C7C7]" data-id="element-170">
          {description}
        </p>
      )}
    </motion.div>
  );
}
