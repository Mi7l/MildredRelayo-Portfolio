import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import motionThumb from "@/assets/images/work-motion.png";
import vfxThumb from "@/assets/images/work-3d.png";
import editThumb from "@/assets/images/work-edit.png";
import aiThumb from "@/assets/images/work-ai.png";

const projects = [
  {
    title: "Kinetic Velocity",
    category: "Motion Graphics",
    image: motionThumb,
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Abyssal Forms",
    category: "3D & VFX",
    image: vfxThumb,
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Neural Pathways",
    category: "AI Strategy",
    image: aiThumb,
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "The Editorial Cut",
    category: "Video Editing",
    image: editThumb,
    colSpan: "md:col-span-2 lg:col-span-2"
  }
];

export function Work() {
  return (
    <section id="work" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Selected Works</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Proof of Craft.</h3>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            View full archive <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-3xl bg-white/5 aspect-[4/3] md:aspect-auto md:min-h-[400px] ${project.colSpan}`}
            >
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                  <span className="text-white/20 font-serif italic text-2xl">Loading...</span>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white mb-3">
                  {project.category}
                </span>
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-white">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
