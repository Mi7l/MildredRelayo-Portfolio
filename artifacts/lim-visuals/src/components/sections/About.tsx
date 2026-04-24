import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder } from "lucide-react";

interface FolderItem {
  id: string;
  title: string;
  images: string[];
}

const folders: FolderItem[] = [
  {
    id: "uiux",
    title: "UI/UX Design",
    images: ["/portfolio-images/uiux-1.jpg"],
  },
  {
    id: "ai-workflow",
    title: "AI Workflow/Systems",
    images: ["/portfolio-images/ai-workflow-1.jpg"],
  },
  {
    id: "automations",
    title: "Automations",
    images: ["/portfolio-images/automations-1.jpg"],
  },
];

export function About() {
  const [hoveredFolderId, setHoveredFolderId] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<{ [key: string]: number }>({
    uiux: 0,
    "ai-workflow": 0,
    automations: 0,
  });

  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Identity</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Solving a gap between <span className="text-white/40">vision</span> to <span className="text-white/40">execution.</span>
            </h3>
            
            <div className="space-y-6 text-lg text-white/70 font-light">
              <p>
                With over 5 years of experience in creative niche, building a system is valuable in scaling.
              </p>
              <p>
                My work isn't just about making visuals look good. It's about making your vision have a strategic impact for growth.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-serif font-bold text-white">5+</span>
                <span className="text-sm text-white/50 uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-4xl font-serif font-bold text-white">20+</span>
                <span className="text-sm text-white/50 uppercase tracking-wider">Global Brands</span>
              </div>
            </div>
          </motion.div>
          
          {/* Small Folder Cards Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Folder Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {folders.map((folder, index) => (
                <motion.div
                  key={folder.id}
                  onMouseEnter={() => setHoveredFolderId(folder.id)}
                  onMouseLeave={() => setHoveredFolderId(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative group"
                >
                  {/* Folder Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                    <div className="flex items-center gap-3">
                      <Folder className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-white">{folder.title}</span>
                    </div>
                  </div>

                  {/* Hover Preview */}
                  <AnimatePresence>
                    {hoveredFolderId === folder.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 z-50 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl"
                      >
                        {/* Main Image with Zoom */}
                        <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-black/50">
                          <motion.img
                            key={selectedImageIndex[folder.id]}
                            src={folder.images[selectedImageIndex[folder.id]]}
                            alt={`${folder.title} preview`}
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1.05 }}
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full object-cover cursor-zoom-in"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Floating glass badge - Current Focus */}
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
              <p className="text-sm font-medium text-white mb-1">Current Focus</p>
              <p className="text-primary font-serif italic text-lg">AI Creative Strategy</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
