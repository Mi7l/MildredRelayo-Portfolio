import { motion } from "framer-motion";
import { SiFigma, SiDavinciresolve, SiBlender } from "react-icons/si";
import { Video, Layers, Camera, Cpu } from "lucide-react";

const tools = [
  { name: "After Effects", icon: Layers, level: 98, color: "#9999FF" },
  { name: "Premiere Pro", icon: Video, level: 95, color: "#9999FF" },
  { name: "DaVinci Resolve", icon: SiDavinciresolve, level: 90, color: "#5CB8E6" },
  { name: "Photoshop", icon: Camera, level: 92, color: "#31A8FF" },
  { name: "Figma", icon: SiFigma, level: 85, color: "#F24E1E" },
  { name: "Blender", icon: SiBlender, level: 75, color: "#F5792A" },
  { name: "AI Tools", icon: Cpu, level: 93, color: "#A855F7" },
];

export function Tools() {
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
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Precision Instruments.</h3>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto font-light">
            Mastery over industry-standard software ensures ideas are executed without technical compromise.
          </p>
        </motion.div>

        <div className="space-y-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <tool.icon className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                  <span className="text-lg font-medium text-white">{tool.name}</span>
                </div>
                <span className="text-white/40 font-mono text-sm">{tool.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
