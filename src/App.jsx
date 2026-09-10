import CustomCursor from "./components/CustomCursor";
import BackgroundGrid from "./components/BackgroundGrid";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import FeaturedWork from "./components/FeaturedWork";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div
      className="relative min-h-screen w-full bg-[#0D0A0A] text-white md:cursor-none selection:bg-[#E53935]/35 selection:text-white"
      data-id="element-0"
    >
      {/* 1. Custom Interactive spring cursor */}
      <CustomCursor data-id="element-1" />

      {/* 2. Particle Canvas Background & Mouse Glow Spotlights */}
      <BackgroundGrid data-id="element-2" />

      {/* 3. Floating Global Header Navigation */}
      <Navbar data-id="element-3" />

      {/* 4. Page Section Containers */}
      <main className="relative z-10" data-id="element-4">
        <Hero data-id="element-5" />
        <About data-id="element-6" />
        <Skills data-id="element-7" />
        <FeaturedWork data-id="element-8" />
        <Contact data-id="element-9" />
      </main>
    </div>
  );
}
