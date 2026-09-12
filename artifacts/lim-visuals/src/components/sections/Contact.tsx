import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Linkedin, Phone } from "lucide-react";
import { SiBehance, SiInstagram, SiTiktok } from "react-icons/si";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mildred-relayo/",
    label: "LinkedIn",
  },
  {
    name: "TikTok",
    icon: SiTiktok,
    href: "https://www.tiktok.com/@lim.visuals",
    label: "TikTok",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/lim.visuals/",
    label: "Instagram",
  },
  {
    name: "Behance",
    icon: SiBehance,
    href: "https://www.behance.net/limvisuals",
    label: "Behance",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto glass-panel rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-none mb-6">
              Let's create <br />
              <span className="italic text-primary">impact.</span>
            </h2>

            {/* Main CTA Button with Icons Inside */}
            <div className="relative group mt-10">
              {/* Glow Effect Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary to-primary/50 rounded-full blur-2xl opacity-0 group-hover:opacity-75 transition-all duration-500" />
              
              {/* Button Container */}
              <div className="relative bg-white rounded-full shadow-2xl hover:shadow-primary/50 hover:shadow-3xl transition-all duration-500 group-hover:bg-white/95">
                <div className="flex items-center justify-between gap-3 px-6 md:px-8 py-3 md:py-4">
                  {/* Main Text */}
                  <span className="text-base md:text-lg font-semibold text-black">Let's discuss</span>
                  
                  {/* Icon Buttons */}
                  <div className="flex gap-2">
                    {/* Calendar Button */}
                    <a href="https://calendly.com/mildredrelayo-cs/30min" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-primary/60"
                        title="Schedule a call"
                      >
                        <Phone className="w-5 h-5 md:w-6 md:h-6" />
                      </motion.button>
                    </a>

                    {/* Email Button */}
                    <a href="mailto:mildredrelayo.cs@gmail.com" onClick={(e) => e.stopPropagation()}>
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-black text-white hover:bg-black/90 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-black/60"
                        title="Send an email"
                      >
                        <Mail className="w-5 h-5 md:w-6 md:h-6" />
                      </motion.button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 md:pl-12 md:border-l border-white/10"
          >
            <h3 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-2">Connect</h3>

            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-${social.name.toLowerCase()}`}
                className="flex items-center justify-between p-5 md:p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <social.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  <span className="text-white font-medium text-base md:text-lg">{social.label}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-white/40 gap-2">
        <p>© 2026 lim.visuals. All rights reserved.</p>
        <p className="font-serif italic text-white/60">Designed for impact.</p>
      </div>
    </section>
  );
}
