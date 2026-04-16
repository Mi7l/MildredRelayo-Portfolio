import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Stack", href: "#stack" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 max-w-4xl w-full ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
            : "bg-transparent border border-transparent"
        }`}
      >
        <div className="flex items-center gap-2">
          <a href="#" className="font-serif font-bold text-xl tracking-tight text-white">
            LIM<span className="text-primary">.</span>VISUALS
          </a>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="#contact">
            <Button
              className="rounded-full px-6 font-semibold bg-white text-black hover:bg-primary hover:text-white transition-all duration-300"
            >
              Book a Call
            </Button>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
