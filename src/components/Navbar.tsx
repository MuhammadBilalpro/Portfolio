import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTerminal, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "~/home", href: "#home" },
  { label: "~/about", href: "#about" },
  { label: "~/skills", href: "#skills" },
  { label: "~/projects", href: "#projects" },
  { label: "~/experience", href: "#experience" },
  { label: "~/education", href: "#education" },
  { label: "~/contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-terminal-dark/90 backdrop-blur-xl border-b border-neon/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <FiTerminal className="text-neon text-xl group-hover:animate-glitch" />
            <span className="font-display text-neon font-bold text-sm sm:text-base tracking-wider">
              BILAL<span className="text-cyber-blue">.SYS</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-xs font-mono text-gray-400 hover:text-neon hover:bg-neon/5 rounded transition-all duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-neon p-2"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-terminal-dark/95 backdrop-blur-xl border-b border-neon/20"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-mono text-gray-400 hover:text-neon hover:bg-neon/5 rounded transition-all"
                >
                  <span className="text-neon/50">$ </span>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
