import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, X } from "lucide-react";

const testimonials = [
  {
    name: "Kazuki Tezuka",
    brand: "HEALTHY METAL",
    video: "/testimonials/testimonial-1.mp4",
    active: true,
  },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
];

export default function StarTestimonials() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const keepOpen = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };

  const closeSlowly = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
    }

    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
      handleVideoLeave();
    }, 650);
  };

  const handleVideoHover = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.currentTime = 0;
      video.muted = false;
      await video.play();
    } catch {
      video.muted = true;
      await video.play();
    }
  };

  const handleVideoLeave = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  return (
    <div
      className="relative inline-flex h-28 w-40 items-center justify-center"
      onMouseEnter={keepOpen}
      onMouseLeave={closeSlowly}
    >
      {/* Main Star Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="group relative z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-yellow-300/60 hover:bg-yellow-300/10 hover:shadow-[0_0_30px_rgba(250,204,21,0.55)]"
        aria-label="View testimonials"
      >
        <Star
          className="h-5 w-5 text-white/80 transition-all duration-300 group-hover:scale-110 group-hover:fill-yellow-300 group-hover:text-yellow-300"
          strokeWidth={1.8}
        />

        <span className="pointer-events-none absolute inset-0 rounded-full bg-yellow-300/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      </button>

      {/* Wider invisible hover zone so stars do not disappear too fast */}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-full" />

      {/* Popout Stars */}
      <AnimatePresence>
        {open && (
          <div
            className="absolute left-1/2 top-1/2 z-40 h-40 w-44 -translate-x-1/2 -translate-y-1/2"
            onMouseEnter={keepOpen}
            onMouseLeave={closeSlowly}
          >
            {testimonials.map((item, index) => {
              const positions = [
                { x: -16, y: -78 },
                { x: 48, y: -46 },
                { x: 66, y: 16 },
                { x: 24, y: 70 },
                { x: -46, y: 54 },
              ];

              const active = item.active;

              return (
                <motion.div
                  key={index}
                  initial={{ x: 0, y: 0, scale: 0.45, opacity: 0, rotate: -20 }}
                  animate={{
                    x: positions[index].x,
                    y: positions[index].y,
                    scale: 1,
                    opacity: active ? 1 : 0.42,
                    rotate: 0,
                  }}
                  exit={{ x: 0, y: 0, scale: 0.45, opacity: 0, rotate: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 17,
                    delay: index * 0.035,
                  }}
                  className="absolute left-1/2 top-1/2"
                >
                  <div className="relative">
                    <motion.button
                      type="button"
                      disabled={!active}
                      onMouseEnter={active ? handleVideoHover : undefined}
                      onMouseLeave={active ? handleVideoLeave : undefined}
                      onClick={() => {
                        if (active) setModalOpen(true);
                      }}
                      whileHover={
                        active
                          ? {
                              rotate: [0, -9, 9, -5, 0],
                              scale: 1.18,
                            }
                          : {
                              rotate: [0, -4, 4, 0],
                              scale: 1.04,
                            }
                      }
                      transition={{ duration: 0.5 }}
                      className={
                        active
                          ? "group/star flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-yellow-300/50 bg-black/80 shadow-[0_0_26px_rgba(250,204,21,0.45)] backdrop-blur-md"
                          : "flex h-9 w-9 cursor-default items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-70 backdrop-blur-md"
                      }
                      aria-label={active ? "Play testimonial" : "Inactive testimonial"}
                    >
                      <Star
                        className={
                          active
                            ? "h-5 w-5 fill-yellow-300 text-yellow-300"
                            : "h-4 w-4 fill-gray-500 text-gray-500"
                        }
                        strokeWidth={1.8}
                      />
                    </motion.button>

                    {/* Active Preview Card */}
                    {active && (
                      <div className="pointer-events-none absolute left-14 top-1/2 flex -translate-y-1/2 items-center gap-3 opacity-0 transition-all duration-300 group-hover/star:translate-x-1 group-hover/star:opacity-100">
                        <div className="aspect-[9/16] h-44 overflow-hidden rounded-2xl border border-yellow-300/25 bg-black shadow-[0_0_35px_rgba(250,204,21,0.18)]">
                          <video
                            ref={videoRef}
                            src={item.video}
                            playsInline
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="min-w-[190px] rounded-full border border-white/10 bg-black/85 px-5 py-3 shadow-2xl backdrop-blur-xl">
                          <p className="whitespace-nowrap text-sm font-semibold text-white">
                            {item.name}
                          </p>
                          <p className="mt-1 whitespace-nowrap text-[11px] font-medium tracking-[0.22em] text-yellow-300">
                            {item.brand}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Modal for sound playback */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="relative flex w-full max-w-5xl items-center justify-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-black p-4 shadow-2xl md:gap-6"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition hover:bg-white/15"
                aria-label="Close testimonial"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="aspect-[9/16] max-h-[78vh] w-full max-w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-black">
                <video
                  src="/testimonials/testimonial-1.mp4"
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="hidden min-w-[250px] rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl md:block">
                <p className="text-lg font-semibold text-white">Kazuki Tezuka</p>
                <p className="mt-1 text-xs font-medium tracking-[0.25em] text-yellow-300">
                  HEALTHY METAL
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}