import { useState } from "react";
import { motion } from "framer-motion";
import { SiFigma, SiDavinciresolve, SiBlender } from "react-icons/si";
import { Camera, Cpu } from "lucide-react";

function AeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.15" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif" fill="currentColor" letterSpacing="-0.5">Ae</text>
    </svg>
  );
}

function PrIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.15" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif" fill="currentColor" letterSpacing="-0.5">Pr</text>
    </svg>
  );
}

function PsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.15" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif" fill="currentColor" letterSpacing="-0.5">Ps</text>
    </svg>
  );
}

const tools = [
  { name: "After Effects", icon: AeIcon },
  { name: "Premiere Pro", icon: PrIcon },
  { name: "Photoshop", icon: PsIcon },
  { name: "DaVinci Resolve", icon: SiDavinciresolve },
  { name: "Figma", icon: SiFigma },
  { name: "Blender", icon: SiBlender },
  { name: "AI Tools", icon: Cpu },
  { name: "Photography", icon: Camera },
];

export function Tools() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="stack" className="py-32 px-6 relative z-10 bg-black/40 border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-4">The Stack</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Softwares/Tools</h3>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto font-light">
            Versatility and adaptive skillset.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.4, ease: "easeOut" }}
              className="relative flex flex-col items-center gap-3"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-300 cursor-default
                ${hoveredIndex === index
                  ? "text-white bg-white/10 scale-110"
                  : "text-white/30 bg-transparent scale-100"
                }`}
              >
                <tool.icon className="w-8 h-8" />
              </div>

              {/* Name tooltip on hover */}
              <motion.span
                initial={false}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 4,
                }}
                transition={{ duration: 0.2 }}
                className="absolute -bottom-7 whitespace-nowrap text-xs font-medium text-white/80 tracking-wide pointer-events-none"
              >
                {tool.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
