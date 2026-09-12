import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: string;
  src: string;
  title: string;
  category: string;
  type: "image" | "video";
}

const carouselItems: CarouselItem[] = [
  {
    id: "beyond",
    src: "/beyond-motion.mp4",
    title: "Beyond",
    category: "Motion Graphics",
    type: "video",
  },
  {
    id: "3d-vfx",
    src: "/3d-vfx.mp4",
    title: "Animation / Modeling",
    category: "3D & VFX",
    type: "video",
  },
  {
    id: "content-creation",
    src: "/content-creation.mp4",
    title: "Content Creation",
    category: "Video Editing",
    type: "video",
  },
  {
    id: "design-branding",
    src: "/design-branding-work.png",
    title: "Brand Systems & Campaigns",
    category: "Design & Branding",
    type: "image",
  },
  {
    id: "ai-workflow",
    src: "/ai-workflow.mp4",
    title: "AI Integration / System / Workflow",
    category: "AI Creative Strategy",
    type: "video",
  },
];

export function WorkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goNext = () => {
    goToSlide((currentIndex + 1) % carouselItems.length);
  };

  const goPrev = () => {
    goToSlide((currentIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const current = carouselItems[currentIndex];

  return (
    <div className="relative w-full h-screen md:h-[600px] lg:h-[700px] group rounded-2xl sm:rounded-3xl overflow-hidden bg-white/5">
      {/* Main carousel area */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {current.type === "video" ? (
            <video
              ref={videoRef}
              src={current.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={current.src}
              alt={current.title}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Left navigation arrow */}
      <motion.button
        onClick={goPrev}
        className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
      </motion.button>

      {/* Right navigation arrow */}
      <motion.button
        onClick={goNext}
        className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
      </motion.button>

      {/* Bottom info section */}
      <motion.div
        key={`info-${currentIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10"
      >
        <span className="inline-block px-2 sm:px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white mb-2 sm:mb-3">
          {current.category}
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          {current.title}
        </h3>

        {/* Carousel indicators */}
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            {carouselItems.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/40 w-1.5 hover:bg-white/60"
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-white/60 ml-4">
            {currentIndex + 1} / {carouselItems.length}
          </span>
        </div>
      </motion.div>

      {/* Keyboard hint on hover */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 text-xs text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        ← → or scroll
      </div>
    </div>
  );
}
