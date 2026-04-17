import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, FileText } from "lucide-react";
import milPhoto from "@assets/Mil7_1776314559297.jpg";

const RESUME_URL = "https://drive.google.com/file/d/1Kb_wIAVjSk5ih1T4nZ4fKPsPAvj7fxet/view?usp=sharing";

export function Hero() {
  const [resumeHovered, setResumeHovered] = useState(false);

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 px-6">
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-wide uppercase text-white/80">Available for international projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tighter text-white leading-[0.9] mb-6"
            >
              MIL<span className="text-primary italic">.</span>RELAYO
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-white/60 max-w-lg font-light mb-12"
            >
              Visuals capture attention.<br />Direction creates purpose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto"
            >
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 text-base font-semibold group">
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#work" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full border-white/20 hover:bg-white/10 hover:text-white transition-all duration-300 text-base font-medium group">
                  <Play className="mr-2 w-5 h-5 fill-white/20 group-hover:fill-white transition-all" />
                  View Work
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-72 md:w-80 lg:w-96">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl scale-110" />
              {/* Glass frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={milPhoto}
                  alt="Mildred Relayo"
                  className="w-full h-auto object-cover"
                  data-testid="img-hero-portrait"
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Floating label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 px-5 py-3 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl flex items-center gap-3"
              >
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-white/50">Creative Director</p>
                  <p className="text-base font-serif font-bold text-white">Mildred Relayo</p>
                </div>

                {/* Resume icon */}
                <div className="relative ml-1">
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setResumeHovered(true)}
                    onMouseLeave={() => setResumeHovered(false)}
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/8 hover:bg-white/15 border border-white/10 hover:border-white/25 transition-all duration-200"
                    aria-label="View Resume"
                  >
                    <FileText className="w-4 h-4 text-white/50 hover:text-white/90 transition-colors" />
                  </a>

                  <AnimatePresence>
                    {resumeHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs text-white/80 pointer-events-none"
                      >
                        View Résumé
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/40 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
