import { motion } from "framer-motion";
import { Box, Layers, MonitorPlay, Sparkles, Video } from "lucide-react";

const services = [
  {
    title: "Motion Graphics",
    description: "Dynamic visual storytelling through precise animation and typography.",
    icon: MonitorPlay,
  },
  {
    title: "3D & VFX",
    description: "Immersive environments and seamless visual effects that defy reality.",
    icon: Box,
  },
  {
    title: "Video Editing",
    description: "Rhythmic, emotionally calibrated cuts that maintain viewer retention.",
    icon: Video,
  },
  {
    title: "AI Strategy",
    description: "Leveraging generative AI workflows to scale creative output and ideation.",
    icon: Sparkles,
  },
  {
    title: "Brand Direction",
    description: "Holistic visual identity systems and premium aesthetic governance.",
    icon: Layers,
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 relative z-10 bg-black/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Full-Spectrum Direction</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="glass-panel p-8 rounded-3xl hover:bg-white/10 transition-colors duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                <service.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-white/60 leading-relaxed font-light">{service.description}</p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 5 * 0.1, duration: 0.5 }}
            className="p-8 rounded-3xl border border-dashed border-white/20 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors"
          >
            <h4 className="text-lg font-medium text-white mb-2">Need something bespoke?</h4>
            <a href="#contact" className="text-primary hover:text-white transition-colors flex items-center gap-2">
              Let's discuss <Sparkles className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
