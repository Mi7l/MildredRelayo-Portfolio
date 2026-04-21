import { motion } from "framer-motion";

export function About() {
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
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-transparent border border-white/10 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
              
              {/* Scuba Cat Video with Chroma Key Filter */}
              <video
                src="/scuba-cat-green.mp4"
                loop
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{
                  filter: 'hue-rotate(120deg) saturate(2) brightness(1.1)',
                  mixBlendMode: 'screen'
                }}
              />
              
              <div className="absolute inset-0 bg-black/10 backdrop-blur-xs" />
            </div>
            
            {/* Floating glass badge */}
            <div className="absolute -bottom-6 -left-6 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
              <p className="text-sm font-medium text-white mb-1">Current Focus</p>
              <p className="text-primary font-serif italic text-lg">AI Creative Strategy</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
