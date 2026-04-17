import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Play, Pause } from "lucide-react";
import aiThumb from "@/assets/images/work-ai.png";

function VideoCard({
  src,
  title,
  category,
  href,
  colSpan,
  delay,
}: {
  src: string;
  title: string;
  category: string;
  href?: string;
  colSpan: string;
  delay: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const Wrapper = href ? motion.a : motion.div;
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-3xl bg-white/5 aspect-[4/3] md:aspect-auto md:min-h-[400px] cursor-pointer ${colSpan}`}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        onEnded={() => setPlaying(false)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      <button
        onClick={(e) => { e.preventDefault(); toggle(); }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110 z-10"
      >
        {playing ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white ml-0.5" />}
      </button>
      <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white mb-3">
          {category}
        </span>
        <div className="flex items-end justify-between">
          <h4 className="text-2xl md:text-3xl font-serif font-bold text-white">{title}</h4>
          {href && <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors mb-1" />}
        </div>
      </div>
    </Wrapper>
  );
}

function ImageCard({
  src,
  title,
  category,
  href,
  colSpan,
  delay,
}: {
  src: string;
  title: string;
  category: string;
  href?: string;
  colSpan: string;
  delay: number;
}) {
  const Wrapper = href ? motion.a : motion.div;
  const wrapperProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-3xl bg-white/5 aspect-[4/3] md:aspect-auto md:min-h-[360px] cursor-pointer ${colSpan}`}
    >
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white mb-3">
          {category}
        </span>
        <div className="flex items-end justify-between">
          <h4 className="text-2xl md:text-3xl font-serif font-bold text-white">{title}</h4>
          {href && <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors mb-1" />}
        </div>
      </div>
    </Wrapper>
  );
}

function GlassCard({
  title,
  category,
  description,
  href,
  colSpan,
  delay,
  accent,
}: {
  title: string;
  category: string;
  description: string;
  href?: string;
  colSpan: string;
  delay: number;
  accent: string;
}) {
  const Wrapper = href ? motion.a : motion.div;
  const wrapperProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-3xl md:min-h-[300px] cursor-pointer ${colSpan}`}
      style={{ background: `linear-gradient(135deg, ${accent}18 0%, #0a0a0a 100%)` }}
    >
      <div className="absolute inset-0 border border-white/8 rounded-3xl" />
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: accent }}
      />
      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-white/8 text-xs font-medium text-white/70 mb-6">
            {category}
          </span>
          <h4 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">{title}</h4>
          <p className="text-white/50 font-light leading-relaxed">{description}</p>
        </div>
        {href && (
          <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white/80 transition-colors">
            View work <ExternalLink className="w-4 h-4" />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

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
            href="https://www.figma.com/design/eG23Yvi4qoinGoKnSHexCT/CREATIVE-CAMPAIGNS-ADS?t=z9Bj288S2rMywRxi-0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            View full archive <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Motion Graphics — Beyond */}
          <VideoCard
            src="/beyond-motion.mp4"
            title="Beyond"
            category="Motion Graphics"
            href="https://www.behance.net/gallery/227998693/Beyond"
            colSpan="md:col-span-2"
            delay={0}
          />

          {/* 3D & VFX */}
          <VideoCard
            src="/3d-vfx.mp4"
            title="Animation / Modeling"
            category="3D & VFX"
            href="https://www.behance.net/limvisuals"
            colSpan="md:col-span-1"
            delay={0.1}
          />

          {/* Video Editing */}
          <VideoCard
            src="/content-creation.mp4"
            title="The Editorial Cut"
            category="Video Editing"
            colSpan="md:col-span-3"
            delay={0.2}
          />

          {/* Design & Branding */}
          <GlassCard
            title="Brand Systems & Campaigns"
            category="Design & Branding"
            description="Logo creation, visual identity systems, campaign layouts, and market-ready creative assets built from concept to cohesion."
            href="https://www.figma.com/design/eG23Yvi4qoinGoKnSHexCT/CREATIVE-CAMPAIGNS-ADS?t=z9Bj288S2rMywRxi-0"
            colSpan="md:col-span-1"
            delay={0.3}
            accent="#dc2626"
          />

          {/* AI Creative Strategy */}
          <ImageCard
            src={aiThumb}
            title="AI-Driven Direction"
            category="AI Creative Strategy"
            href="https://www.behance.net/limvisuals"
            colSpan="md:col-span-2"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
