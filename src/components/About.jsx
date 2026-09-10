import { motion } from "framer-motion";
import { Heart, Compass, Target, TrendingUp } from "lucide-react";
import SectionHeader from "./SectionHeader";

const portraitImage = "/about_image.jpeg";

const aboutCards = [
  {
    icon: Heart,
    title: "Passion for UI/UX",
    body: "I care about the small details that make an interface feel effortless — spacing, rhythm, motion and clarity.",
  },
  {
    icon: Compass,
    title: "Design Philosophy",
    body: "Start from the user. Every pixel should earn its place by serving a real need, not just looking good.",
  },
  {
    icon: Target,
    title: "Career Goals",
    body: "To grow into a well-rounded product designer who ships thoughtful, accessible experiences at scale.",
  },
  {
    icon: TrendingUp,
    title: "Always Learning",
    body: "I treat every project as a chance to sharpen my craft — new tools, patterns and feedback loops.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full px-5 py-24 sm:px-8 sm:py-32"
      data-id="element-10"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]" data-id="element-11">
        {/* Left Side: Portrait & Floating Badge */}
        <div className="relative" data-id="element-12">
          {/* Main Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl glass p-2.5 shadow-[0_25px_70px_rgba(0,0,0,0.5)]"
            data-id="element-13"
          >
            <img
              src={portraitImage}
              alt="Mahalingam, UI/UX designer"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
              data-id="element-14"
            />
            {/* Visual Red Glow Ring */}
            <div className="absolute inset-2.5 rounded-2xl ring-1 ring-inset ring-[#FF4D4D]/15" data-id="element-15" />
          </motion.div>

          {/* Floating Focus Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="animate-float-medium absolute -right-3 bottom-8 rounded-2xl glass px-5 py-4 shadow-[0_15px_40px_rgba(198,40,40,0.3)]"
            data-id="element-16"
          >
            <p className="font-display text-2xl font-bold text-white" data-id="element-17">UI/UX</p>
            <p className="text-xs uppercase tracking-widest text-[#FF4D4D]" data-id="element-18">Focused</p>
          </motion.div>
        </div>

        {/* Right Side: Headline and Philosophy Grids */}
        <div data-id="element-19">
          <SectionHeader
            eyebrow="About Me"
            title={
              <>
                Turning ideas into{" "}
                <span className="text-gradient-red" data-id="element-21">
                  intuitive interfaces.
                </span>
              </>
            }
            data-id="element-20"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#C7C7C7]"
            data-id="element-22"
          >
            I'm Mahalingam, a Junior UI/UX Designer who loves bringing structure and beauty to digital products. My work spans dashboards, social platforms, luxury brands, e-commerce and games — each an opportunity to research deeply, design deliberately and learn continuously. I believe great design is invisible: it quietly guides people to exactly where they want to go.
          </motion.p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2" data-id="element-23">
            {aboutCards.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="group rounded-2xl glass p-5 transition-colors hover:border-[#FF4D4D]/30"
                  data-id="element-24"
                >
                  <span
                    className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-[#E53935]/15 text-[#FF4D4D] transition-colors group-hover:bg-[#E53935]/25"
                    data-id="element-25"
                  >
                    <CardIcon className="h-5 w-5" data-id="element-26" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white" data-id="element-27">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#C7C7C7]" data-id="element-28">
                    {card.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
