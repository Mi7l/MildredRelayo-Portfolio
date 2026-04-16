import { motion } from "framer-motion";
import { Box, Layers, MonitorPlay, Sparkles, Video, Palette } from "lucide-react";

const services = [
  {
    title: "Design & Branding",
    description: "Graphic design, logo creation, clothing & merch design, and full brand identity systems — from visual concept to cohesive, market-ready assets.",
    icon: Palette,
    featured: true,
  },
  {
    title: "Motion Graphics",
    description: "Dynamic visual storytelling through precise animation, kinetic typography, and motion-driven narratives.",
    icon: MonitorPlay,
    featured: false,
  },
  {
    title: "Video Editing",
    description: "Rhythmic, emotionally calibrated cuts — from social content to long-form productions that hold viewer attention.",
    icon: Video,
    featured: false,
  },
  {
    title: "AI Creative Strategy",
    description: "Leveraging generative AI workflows to scale creative output, accelerate ideation, and future-proof your brand's visual direction.",
    icon: Sparkles,
    featured: false,
  },
  {
    title: "3D & VFX",
    description: "Immersive environments, product visualizations, and seamless visual effects that defy reality.",
    icon: Box,
    featured: false,
  },
  {
    title: "Brand Direction",
    description: "Holistic visual identity governance, art direction, and creative leadership for campaigns and full brand overhauls.",
    icon: Layers,
    featured: false,
  },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              className={`glass-panel p-8 rounded-3xl transition-colors duration-500 group cursor-default
                ${service.featured
                  ? "sm:col-span-2 lg:col-span-1 border border-primary/30 hover:bg-primary/10"
                  : "hover:bg-white/10"
                }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500
                ${service.featured ? "bg-primary/20 group-hover:bg-primary/30" : "bg-white/5 group-hover:bg-primary/20"}`}
              >
                <service.icon className={`w-6 h-6 transition-colors ${service.featured ? "text-primary" : "text-white group-hover:text-primary"}`} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-white/60 leading-relaxed font-light">{service.description}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: services.length * 0.08, duration: 0.5 }}
            className="p-8 rounded-3xl border border-dashed border-white/20 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors min-h-[160px]"
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
