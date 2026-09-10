import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    // Initialize state
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 sm:px-0"
      data-id="element-119"
    >
      <nav
        className={`mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : "bg-transparent"
        }`}
        data-id="element-120"
      >
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2"
          aria-label="Mahalingam home"
          data-id="element-121"
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-xl bg-[#E53935] font-display text-lg font-bold text-white shadow-[0_0_20px_rgba(229,57,53,0.5)]"
            data-id="element-122"
          >
            M
          </span>
          <span
            className="font-display text-lg font-semibold tracking-tight text-white"
            data-id="element-123"
          >
            Mahalingam
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 md:flex" data-id="element-124">
          {navLinks.map((link) => (
            <li key={link.href} data-id="element-125">
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#C7C7C7] transition-colors hover:bg-white/5 hover:text-white"
                data-id="element-126"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Let's Talk CTA */}
        <div className="hidden md:block" data-id="element-127">
          <MagneticButton href="#contact" className="px-6 py-2.5 text-xs" data-id="element-128">
            Let's Talk
          </MagneticButton>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="grid h-10 w-10 place-items-center rounded-xl glass text-white md:hidden"
          data-id="element-129"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" data-id="element-130" />
          ) : (
            <Menu className="h-5 w-5" data-id="element-131" />
          )}
        </button>
      </nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence data-id="element-132">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-6xl px-3 md:hidden"
            data-id="element-133"
          >
            <ul className="glass flex flex-col gap-1 rounded-2xl p-3" data-id="element-134">
              {navLinks.map((link) => (
                <li key={link.href} data-id="element-135">
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-[#C7C7C7] transition-colors hover:bg-white/5 hover:text-white"
                    data-id="element-136"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
