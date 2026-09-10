import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, Loader2 } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const socialLinks = [
  {
    label: "Email",
    value: "mahalingams2407@gmail.com",
    icon: Mail,
    href: "mailto:mahalingams2407@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mahalingam-s-901327311/",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mahalingam-s-901327311/",
  },
  {
    label: "Behance",
    value: "https://www.behance.net/mahalingams",
    icon: Send, // Matches exact "Wo" send icon mapping in original
    href: "https://www.behance.net/mahalingams",
  },
  {
    label: "GitHub",
    value: "https://github.com/mahalingam15",
    icon: FaGithub,
    href: "https://github.com/mahalingam15",
  },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle, loading, success
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name";
    }
    
    // Standard email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      nextErrors.email = "Enter a valid email";
    }

    if (formData.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus("loading");
      // Simulate form submission pipeline
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        
        // Return to idle after 4 seconds
        setTimeout(() => setStatus("idle"), 4000);
      }, 1400);
    }
  };

  const inputStyles =
    "w-full rounded-2xl bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-[#8a8a8a] outline-none transition-all duration-300 border border-white/10 focus:border-[#FF4D4D]/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(255,77,77,0.12)]";

  return (
    <section
      id="contact"
      className="relative w-full px-5 py-24 sm:px-8 sm:py-32"
      data-id="element-34"
    >
      <div className="mx-auto max-w-6xl" data-id="element-35">
        <SectionHeader
          eyebrow="Get in touch"
          title={
            <>
              Let's build something{" "}
              <span className="text-gradient-red" data-id="element-37">
                worth remembering.
              </span>
            </>
          }
          description="Open to junior UI/UX roles, internships and freelance collaborations. Drop a message — I reply fast."
          align="center"
          data-id="element-36"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]" data-id="element-38">
          {/* Left Block: Social Handles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3"
            data-id="element-39"
          >
            {socialLinks.map((social, idx) => {
              const SocialIcon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className="group flex items-center gap-4 rounded-2xl glass p-4 transition-colors hover:border-[#FF4D4D]/35"
                  data-id="element-40"
                >
                  <span
                    className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-[#E53935]/15 text-[#FF4D4D] transition-colors group-hover:bg-[#E53935]/30"
                    data-id="element-41"
                  >
                    <SocialIcon className="h-5 w-5" data-id="element-42" />
                  </span>
                  <div className="min-w-0" data-id="element-43">
                    <p className="text-xs uppercase tracking-widest text-[#8a8a8a]" data-id="element-44">
                      {social.label}
                    </p>
                    <p className="truncate text-sm font-medium text-white" data-id="element-45">
                      {social.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Right Block: Message Form */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl glass p-7 sm:p-8"
            data-id="element-46"
          >
            {/* Background floating gradient bubble */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#E53935]/15 blur-3xl" data-id="element-47" />

            <div className="grid gap-5 sm:grid-cols-2" data-id="element-48">
              {/* Name field */}
              <div className="sm:col-span-1" data-id="element-49">
                <label htmlFor="name" className="mb-2 block text-xs font-medium text-[#C7C7C7]" data-id="element-50">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className={inputStyles}
                  aria-invalid={!!errors.name}
                  data-id="element-51"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-[#FF4D4D]" data-id="element-52">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div className="sm:col-span-1" data-id="element-53">
                <label htmlFor="email" className="mb-2 block text-xs font-medium text-[#C7C7C7]" data-id="element-54">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@email.com"
                  className={inputStyles}
                  aria-invalid={!!errors.email}
                  data-id="element-55"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-[#FF4D4D]" data-id="element-56">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Message text field */}
            <div className="mt-5" data-id="element-57">
              <label htmlFor="message" className="mb-2 block text-xs font-medium text-[#C7C7C7]" data-id="element-58">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project or role…"
                className={`${inputStyles} resize-none`}
                aria-invalid={!!errors.message}
                data-id="element-59"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-[#FF4D4D]" data-id="element-60">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Form Actions Footer */}
            <div className="mt-7 flex items-center justify-between gap-4" data-id="element-61">
              <p aria-live="polite" className="text-sm" data-id="element-62">
                {status === "success" && (
                  <span className="flex items-center gap-1.5 text-[#2ECC71]" data-id="element-63">
                    <CheckCircle className="h-4 w-4" data-id="element-64" />
                    Message sent — thank you!
                  </span>
                )}
              </p>

              <button
                type="submit"
                disabled={status === "loading"}
                data-cursor="hover"
                className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-7 py-3.5 text-sm font-semibold font-display text-white shadow-[0_8px_30px_rgba(229,57,53,0.45)] transition-all duration-300 hover:bg-[#FF4D4D] disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0A0A]"
                data-id="element-65"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" data-id="element-66" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" data-id="element-67" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>

        {/* Footer Section */}
        <footer
          className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-[#8a8a8a] sm:flex-row"
          data-id="element-68"
        >
          <p data-id="element-69">
            © {new Date().getFullYear()} Mahalingam · Junior UI/UX Designer
          </p>
          <p className="flex items-center gap-1.5" data-id="element-70">
            Designed & built with intent
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF4D4D]" data-id="element-71" />
          </p>
        </footer>
      </div>
    </section>
  );
}
