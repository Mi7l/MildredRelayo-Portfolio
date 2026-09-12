import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, X } from "lucide-react";

type Testimonial = {
  active: boolean;
  name?: string;
  brand?: string;
  video?: string;
};

const testimonials: Testimonial[] = [
  {
    active: true,
    name: "Kazuki Tezuka",
    brand: "HEALTHY METAL",
    video: "/testimonials/testimonial-1.mp4",
  },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
];

const positions = [
  { x: -16, y: -76 },
  { x: 42, y: -54 },
  { x: 66, y: 0 },
  { x: 34, y: 56 },
  { x: -32, y: 62 },
];

export default function StarTestimonials() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const previewVideoRef = useRef<HTMLVideoElement | null>(null);

  const activeTestimonial = testimonials.find((item) => item.active);

  const playPreview = async () => {
    const video = previewVideoRef.current;
    if (!video || !activeTestimonial?.video) return;

    try {
      video.currentTime = 0;
      video.muted = false;
      await video.play();
    } catch {
      try {
        video.currentTime = 0;
        video.muted = true;
        await video.play();
      } catch {
        // Some browsers block hover autoplay completely. Click opens the modal instead.
      }
    }
  };

  const stopPreview = () => {
    const video = previewVideoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  return (
    <div
      className="relative inline-flex items-center justify-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        stopPreview();
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-yellow-300/70 hover:bg-yellow-300/10 hover:shadow-[0_0_34px_rgba(250,204,21,0.46)]"
        aria-label="View testimonials"
      >
        <span className="absolute inset-0 rounded-full bg-yellow-300/0 blur-xl transition-all duration-300 group-hover:bg-yellow-300/25" />
        <Star
          className="relative z-10 h-5 w-5 text-white/75 transition-all duration-300 group-hover:scale-110 group-hover:fill-yellow-300 group-hover:text-yellow-300"
          strokeWidth={1.8}
        />
      </button>

      <AnimatePresence>
        {open && (
          <div className="absolute left-1/2 top-1/2 z-50">
            {testimonials.map((item, index) => {
              const isActive = item.active;

              return (
                <motion.div
                  key={index}
                  initial={{ x: 0, y: 0, scale: 0.35, opacity: 0, rotate: -18 }}
                  animate={{
                    x: positions[index].x,
                    y: positions[index].y,
                    scale: 1,
                    opacity: isActive ? 1 : 0.42,
                    rotate: 0,
                  }}
                  exit={{ x: 0, y: 0, scale: 0.35, opacity: 0, rotate: 18 }}
                  transition={{
                    type: "spring",
                    stiffness: 270,
                    damping: 18,
                    delay: index * 0.035,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative">
                    <motion.button
                      type="button"
                      disabled={!isActive}
                      onMouseEnter={isActive ? playPreview : undefined}
                      onMouseLeave={isActive ? stopPreview : undefined}
                      onClick={() => {
                        if (isActive) setModalOpen(true);
                      }}
                      whileHover={
                        isActive
                          ? { rotate: [0, -9, 9, -5, 0], scale: 1.16 }
                          : { rotate: [0, -4, 4, 0], scale: 1.04 }
                      }
                      transition={{ duration: 0.45 }}
                      className={
                        isActive
                          ? "group/star flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-yellow-300/45 bg-black/70 shadow-[0_0_28px_rgba(250,204,21,0.36)] backdrop-blur-md transition-all hover:border-yellow-200/80 hover:shadow-[0_0_38px_rgba(250,204,21,0.52)]"
                          : "flex h-9 w-9 cursor-default items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-70 backdrop-blur-md"
                      }
                      aria-label={isActive ? "Play testimonial" : "Inactive testimonial"}
                    >
                      <Star
                        className={
                          isActive
                            ? "h-4 w-4 fill-yellow-300 text-yellow-300"
                            : "h-3.5 w-3.5 fill-gray-500 text-gray-500"
                        }
                        strokeWidth={1.8}
                      />
                    </motion.button>

                    {isActive && item.video && (
                      <div className="pointer-events-none absolute bottom-12 left-1/2 w-60 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/90 p-3 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover/star:-translate-y-1 group-hover/star:opacity-100">
                        <div className="mb-3 overflow-hidden rounded-xl border border-white/10 bg-black">
                          <video
                            ref={previewVideoRef}
                            src={item.video}
                            playsInline
                            preload="metadata"
                            className="h-32 w-full object-cover"
                          />
                        </div>
                        <p className="text-sm font-semibold leading-none text-white">
                          {item.name}
                        </p>
                        <p className="mt-1 text-[10px] font-medium tracking-[0.22em] text-yellow-300">
                          {item.brand}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalOpen && activeTestimonial?.video && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
              initial={{ scale: 0.92, opacity: 0, y: 18 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 18 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition hover:bg-white/15"
                aria-label="Close testimonial"
              >
                <X className="h-4 w-4" />
              </button>

              <video
                src={activeTestimonial.video}
                controls
                autoPlay
                playsInline
                className="w-full bg-black"
              />

              <div className="border-t border-white/10 p-5">
                <p className="text-lg font-semibold text-white">{activeTestimonial.name}</p>
                <p className="mt-1 text-sm font-medium tracking-[0.2em] text-yellow-300">
                  {activeTestimonial.brand}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
