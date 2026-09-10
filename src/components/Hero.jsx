import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Sparkles, ArrowUpRight, Download, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";

const portraitImage = "https://cdn.magicpatterns.com/uploads/47i2dyFyYuiTrxMf7eTYbq/WhatsApp_Image_2024-09-19_at_10.19.40.jpg";

// Motion variants for stagger fade entrance
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const sectionRef = useRef(null);

  // Parallax scroll linking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Portrait 3D Tilt Coordinates
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateXSpring = useSpring(
    useTransform(mouseY, [0, 1], [12, -12]),
    { stiffness: 150, damping: 18 }
  );
  const rotateYSpring = useSpring(
    useTransform(mouseX, [0, 1], [-12, 12]),
    { stiffness: 150, damping: 18 }
  );

  const handleMouseMove = (e) => {
    const el = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - el.left) / el.width);
    mouseY.set((e.clientY - el.top) / el.height);
  };

  const handleMouseLeave = () => {
    // Reset back to center
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8"
      data-id="element-74"
    >
      {/* Background Floating Decor Elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" data-id="element-75">
        <div className="animate-float-slow absolute left-[8%] top-[22%] h-16 w-16 rounded-2xl border border-[#FF4D4D]/25 bg-[#E53935]/5 backdrop-blur-sm" data-id="element-76" />
        <div className="animate-float-medium absolute right-[12%] top-[18%] h-10 w-10 rotate-45 rounded-lg border border-[#FF4D4D]/30" data-id="element-77" />
        <div className="animate-float-slow absolute bottom-[16%] left-[16%] h-8 w-8 rounded-full bg-[#FF4D4D]/20 blur-[2px]" data-id="element-78" />
        <div className="animate-float-medium absolute bottom-[26%] right-[22%] h-14 w-14 rounded-full border border-[#E53935]/25" data-id="element-79" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]" data-id="element-80">
        {/* Left Side: Brand headlines */}
        <motion.div
          style={{ y: translateY, opacity: opacityFade }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          data-id="element-81"
        >
          {/* Availability status badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-[#C7C7C7]"
            data-id="element-82"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#FF4D4D]" data-id="element-83" />
            Junior UI/UX Designer · Open to opportunities
          </motion.div>

          {/* Core headlines */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-[15vw] font-extrabold leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl"
            data-id="element-84"
          >
            <span className="block text-white" data-id="element-85">Mahalingam</span>
            <span className="mt-2 block text-gradient-red" data-id="element-86">Designs with intent.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-xl text-base leading-relaxed text-[#C7C7C7] sm:text-lg"
            data-id="element-87"
          >
            Designing meaningful digital experiences through thoughtful UI and user-centered UX — crafting interfaces that are as considered as they are beautiful.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap items-center gap-3"
            data-id="element-88"
          >
            <MagneticButton href="#work" data-id="element-89">
              View Projects <ArrowUpRight className="h-4 w-4" data-id="element-90" />
            </MagneticButton>
            <MagneticButton href="https://drive.google.com/file/d/1kvZfK4SHsUHxBh7Ir1l-ujcAFBLzezz-/view?usp=sharing" variant="ghost" target="_blank" rel="noopener noreferrer" data-id="element-91">
              Download Resume <Download className="h-4 w-4" data-id="element-92" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost" data-id="element-93">
              Contact Me <Mail className="h-4 w-4" data-id="element-94" />
            </MagneticButton>
          </motion.div>

          {/* Quick Metrics */}
          <motion.dl variants={itemVariants} className="mt-12 flex gap-8" data-id="element-95">
            {[
              { k: "5+", v: "Case Studies" },
              { k: "4", v: "Design Tools" },
              { k: "100%", v: "User-Centered" }
            ].map((stat) => (
              <div key={stat.v} data-id="element-96">
                <dt className="font-display text-3xl font-bold text-white" data-id="element-97">{stat.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-[#C7C7C7]" data-id="element-98">{stat.v}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right Side: Portrait Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mx-auto w-full max-w-sm"
          style={{ perspective: 1200 }}
          data-id="element-99"
        >
          {/* 3D Tilt Wrapper */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: rotateXSpring,
              rotateY: rotateYSpring,
              transformStyle: "preserve-3d",
            }}
            className="animate-float-slow relative"
            data-id="element-100"
          >
            {/* Glass Container */}
            <div className="relative overflow-hidden rounded-[2rem] glass p-3 shadow-[0_30px_80px_rgba(198,40,40,0.35)]" data-id="element-101">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-[#C62828]/40 via-transparent to-[#FF4D4D]/30 opacity-70 blur-md" data-id="element-102" />
              
              <div className="relative overflow-hidden rounded-[1.5rem]" data-id="element-103">
                <img
                  src={portraitImage}
                  alt="Portrait of Mahalingam, Junior UI/UX Designer"
                  className="aspect-[4/5] w-full object-cover"
                  data-id="element-104"
                />
                
                {/* Visual shade gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A0A] via-transparent to-transparent" data-id="element-105" />
                
                {/* 3D Depth Card overlay */}
                <div
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl glass px-4 py-3"
                  style={{ transform: "translateZ(40px)" }}
                  data-id="element-106"
                >
                  <div data-id="element-107">
                    <p className="font-display text-sm font-semibold text-white" data-id="element-108">Mahalingam</p>
                    <p className="text-xs text-[#C7C7C7]" data-id="element-109">UI/UX Designer</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-[#2ECC71]" data-id="element-110">
                    <span className="h-2 w-2 rounded-full bg-[#2ECC71] shadow-[0_0_8px_#2ECC71]" data-id="element-111" />
                    Available
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator mouse arrow */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        data-id="element-112"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-[#FF4D4D]/40 p-1.5" data-id="element-113">
          <motion.span
            className="h-2 w-1 rounded-full bg-[#FF4D4D]"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            data-id="element-114"
          />
        </div>
      </motion.div>
    </section>
  );
}
