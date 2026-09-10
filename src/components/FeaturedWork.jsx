import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";

const projects = [
  {
    id: "iot",
    name: "IoT Solar Street Lighting",
    subtitle: "Smart City Command Dashboard",
    category: "Dashboard · IoT",
    description: "A clean, intelligent command center for monitoring solar street lights across a city — live device status, energy analytics, and an interactive map for remote control.",
    mood: "Clean · Intelligent · Eco-Futuristic",
    image: "https://cdn.magicpatterns.com/patterns/generated-images/dff0ec53-49c1-4bbf-acee-0464de2792db.jpg",
    colors: { primary: "#1565C0", secondary: "#2196F3", highlight: "#2ECC71", text: "#EAF4FF" },
    tags: ["IoT", "Analytics", "Live Monitoring", "Maps"],
    href: "https://www.behance.net/gallery/223868199/IoT-Enabled-Solar-Street-Lighting-System"
  },
  {
    id: "echonet",
    name: "EchoNet",
    subtitle: "Social Media Platform",
    category: "Social · Mobile",
    description: "A youthful social platform with a feed, stories, chat and communities — floating UI, rounded layouts and dynamic purple gradients that feel creative and alive.",
    mood: "Creative · Social · Youthful",
    image: "https://cdn.magicpatterns.com/patterns/generated-images/d5106cd5-80a5-446e-8a67-03a6239b8e48.jpg",
    colors: { primary: "#6A1B9A", secondary: "#8E24AA", highlight: "#BA68C8", text: "#F5EBFF" },
    tags: ["Feed", "Stories", "Chat", "Communities"],
    href: "https://www.behance.net/gallery/229520781/ECHONET-a-Social-Media-Platform"
  },
  {
    id: "kootup",
    name: "Kootup",
    subtitle: "Raja Rani Mobile Game",
    category: "Game · Mobile",
    description: "A polished take on a traditional Indian strategy game — animated board, leaderboards, achievements and rewards wrapped in an immersive navy blue interface.",
    mood: "Strategic · Immersive · Polished",
    image: "https://cdn.magicpatterns.com/patterns/generated-images/a54e4497-5c2f-485e-a85d-d02576c5d219.jpg",
    colors: { primary: "#0D47A1", secondary: "#1A237E", highlight: "#64B5F6", text: "#E7EEFF" },
    tags: ["Game UI", "Leaderboards", "Rewards", "Animation"],
    href: "https://www.behance.net/gallery/253523889/KOOTUP"
  }
];

// Helper to convert hex colors to custom opacity RGBA formats (dt clone)
function toRGBA(hex, alpha) {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Single Project Card Component (B1 clone)
function ProjectCard({ project, index }) {
  const { colors } = project;
  const isFirst = index === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={isFirst ? "md:col-span-2" : ""}
      data-id="element-137"
    >
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <TiltCard
          glowColor={toRGBA(colors.secondary, 0.4)}
          intensity={isFirst ? 6 : 9}
          className="group h-full"
          data-id="element-138"
        >
        {/* Border box with color styling based on project parameters */}
        <div
          className="relative flex h-full flex-col overflow-hidden rounded-3xl glass"
          style={{
            border: `1px solid ${toRGBA(colors.highlight, 0.2)}`,
          }}
          data-id="element-139"
        >
          {/* Spotlight color follow element */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
            style={{
              background: toRGBA(colors.secondary, 0.35),
            }}
            data-id="element-140"
          />

          <div className={isFirst ? "grid gap-6 md:grid-cols-2" : ""} data-id="element-141">
            {/* Left Box: Image Frame */}
            <div className="relative overflow-hidden rounded-t-3xl p-3" data-id="element-142">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  boxShadow: `0 20px 60px ${toRGBA(colors.primary, 0.35)}`,
                  border: `1px solid ${toRGBA(colors.highlight, 0.25)}`,
                }}
                data-id="element-143"
              >
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.subtitle} UI preview`}
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                    isFirst ? "aspect-[4/3] md:h-full" : "aspect-[16/10]"
                  }`}
                  loading="lazy"
                  data-id="element-144"
                />
                
                {/* Image tinting bottom gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${toRGBA(colors.primary, 0.55)}, transparent 55%)`,
                  }}
                  data-id="element-145"
                />

                {/* Floating category tag */}
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md"
                  style={{
                    background: toRGBA(colors.primary, 0.35),
                    color: colors.text,
                    border: `1px solid ${toRGBA(colors.highlight, 0.4)}`,
                  }}
                  data-id="element-146"
                >
                  {project.category}
                </span>
              </div>
            </div>

            {/* Right Box: Metadata details */}
            <div className="flex flex-1 flex-col p-6 sm:p-7" data-id="element-147">
              <div className="flex items-start justify-between gap-4" data-id="element-148">
                <div data-id="element-149">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white" data-id="element-150">
                    {project.name}
                  </h3>
                  <p
                    className="mt-0.5 text-sm"
                    style={{ color: colors.highlight }}
                    data-id="element-151"
                  >
                    {project.subtitle}
                  </p>
                </div>
                
                {/* Arrow up-right link circle */}
                <span
                  className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  style={{
                    background: toRGBA(colors.secondary, 0.18),
                    color: colors.highlight,
                    border: `1px solid ${toRGBA(colors.highlight, 0.3)}`,
                  }}
                  data-id="element-152"
                >
                  <ArrowUpRight className="h-5 w-5" data-id="element-153" />
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#C7C7C7]" data-id="element-154">
                {project.description}
              </p>

              {/* Tag Badges */}
              <div className="mt-5 flex flex-wrap gap-2" data-id="element-155">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      background: toRGBA(colors.secondary, 0.12),
                      color: colors.text,
                      border: `1px solid ${toRGBA(colors.highlight, 0.18)}`,
                    }}
                    data-id="element-156"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mood Metadata Footer */}
              <div className="mt-auto flex items-center gap-2 pt-6" data-id="element-157">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: colors.highlight,
                    boxShadow: `0 0 10px ${colors.highlight}`,
                  }}
                  data-id="element-158"
                />
                <p className="text-xs uppercase tracking-widest text-[#9a9a9a]" data-id="element-159">
                  {project.mood}
                </p>
              </div>
            </div>
          </div>
        </div>
        </TiltCard>
      </a>
    </motion.article>
  );
}

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative w-full px-5 py-24 sm:px-8 sm:py-32"
      data-id="element-160"
    >
      <div className="mx-auto max-w-6xl" data-id="element-161">
        <SectionHeader
          eyebrow="Featured Work"
          title={
            <>
              Three products, three{" "}
              <span className="text-gradient-red" data-id="element-163">
                distinct worlds.
              </span>
            </>
          }
          description="Each case study carries its own visual identity — from smart-city dashboards to social platforms — while sharing one consistent, user-first design process."
          data-id="element-162"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2" data-id="element-164">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              data-id="element-165"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
