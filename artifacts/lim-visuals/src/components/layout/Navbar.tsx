import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Stack", href: "#stack" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-4 pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className={`pointer-events-auto flex items-center justify-between px-5 sm:px-6 py-3 rounded-full transition-all duration-500 max-w-4xl w-full ${
          scrolled || menuOpen
            ? "bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="font-serif font-bold text-base sm:text-xl tracking-tight text-white whitespace-nowrap">
            CREATIVE PORTFOLIO
          </a>
        </div>

        {/* Desktop nav */}
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

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#contact">
            <Button className="rounded-full px-6 font-semibold bg-white text-black hover:bg-primary hover:text-white transition-all duration-300">
              Set a Call
            </Button>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto absolute top-[4.5rem] left-4 right-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-2 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white text-lg font-medium py-3 px-4 rounded-2xl hover:bg-white/10 transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-2 pt-4 border-t border-white/10">
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                <Button className="w-full rounded-full font-semibold bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 h-12">
                  Set a Call
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
