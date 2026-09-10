import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skillsData = [
  {
    title: "Design Tools",
    bars: [
      { name: "Figma", level: 90 },
      { name: "Adobe Photoshop", level: 75 },
      { name: "Adobe Illustrator", level: 70 },
      { name: "Framer", level: 75 },
    ],
  },
  {
    title: "UI Design",
    tags: [
      "Auto Layout",
      "Components",
      "Responsive Design",
      "Visual Hierarchy",
      "Design Systems",
    ],
  },
  {
    title: "UX Design",
    tags: [
      "User Research",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
  },
  {
    title: "Soft Skills",
    tags: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Creativity",
      "Time Management",
    ],
  },
];

// Helper Skill Bar Component (E1 clone)
function SkillBar({ name, level, index }) {
  return (
    <div data-id="element-171">
      <div className="mb-1.5 flex items-center justify-between" data-id="element-172">
        <span className="text-sm font-medium text-white" data-id="element-173">
          {name}
        </span>
        <span className="text-xs font-semibold text-[#FF4D4D]" data-id="element-174">
          {level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5" data-id="element-175">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.1,
            delay: 0.15 + index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="h-full rounded-full bg-gradient-to-r from-[#C62828] via-[#E53935] to-[#FF4D4D] shadow-[0_0_12px_rgba(255,77,77,0.6)]"
          data-id="element-176"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full px-5 py-24 sm:px-8 sm:py-32"
      data-id="element-177"
    >
      <div className="mx-auto max-w-6xl" data-id="element-178">
        <SectionHeader
          eyebrow="Skills & Tools"
          title={
            <>
              A toolkit built for{" "}
              <span className="text-gradient-red" data-id="element-180">
                craft.
              </span>
            </>
          }
          description="From pixel-perfect UI in Figma to full UX research and validation — here's what I bring to a team."
          align="center"
          data-id="element-179"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2" data-id="element-181">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: catIdx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-3xl glass p-7 transition-colors hover:border-[#FF4D4D]/25"
              data-id="element-182"
            >
              {/* Subtle background red glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E53935]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40"
                data-id="element-183"
              />
              
              <h3 className="mb-6 font-display text-xl font-semibold text-white" data-id="element-184">
                {category.title}
              </h3>

              {/* Render progress bars (Design Tools) */}
              {category.bars && (
                <div className="space-y-5" data-id="element-185">
                  {category.bars.map((bar, barIdx) => (
                    <SkillBar
                      key={bar.name}
                      name={bar.name}
                      level={bar.level}
                      index={barIdx}
                      data-id="element-186"
                    />
                  ))}
                </div>
              )}

              {/* Render tag list (UI, UX, Soft Skills) */}
              {category.tags && (
                <div className="flex flex-wrap gap-2.5" data-id="element-187">
                  {category.tags.map((tag, tagIdx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + tagIdx * 0.06 }}
                      className="rounded-full border border-[#FF4D4D]/15 bg-[#E53935]/5 px-4 py-2 text-sm font-medium text-[#EAEAEA] transition-colors hover:border-[#FF4D4D]/40 hover:text-white"
                      data-id="element-188"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
