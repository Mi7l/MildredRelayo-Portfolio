import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, X } from "lucide-react";

const BRAND_RED = "#822631";

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
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
    setOpen(true);
  };

  const closeSlowly = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);

    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
      handleVideoLeave();
    }, 900);
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
      className="relative z-30 inline-flex h-12 w-12 items-center justify-center"
      onMouseEnter={keepOpen}
      onMouseLeave={closeSlowly}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="group relative z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/35 backdrop-blur-md transition-all duration-300 hover:border-[#822631]/80 hover:bg-[#822631]/15 hover:shadow-[0_0_30px_rgba(130,38,49,0.60)]"
        aria-label="View testimonials"
      >
        <Star
          className="h-5 w-5 text-white/80 transition-all duration-300 group-hover:scale-110 group-hover:fill-[#822631] group-hover:text-[#822631]"
          strokeWidth={1.8}
        />

        <span className="pointer-events-none absolute inset-0 rounded-full bg-[#822631]/25 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      </button>

      <AnimatePresence>
        {open && (
          <div
            className="absolute left-1/2 top-1/2 z-40 h-36 w-36 -translate-x-1/2 -translate-y-1/2 sm:h-40 sm:w-40"
            onMouseEnter={keepOpen}
            onMouseLeave={closeSlowly}
          >
            {testimonials.map((item, index) => {
              const desktopPositions = [
                { x: 0, y: -58 },
                { x: 46, y: -28 },
                { x: 44, y: 30 },
                { x: -8, y: 58 },
                { x: -48, y: 18 },
              ];

              const mobilePositions = [
                { x: 0, y: -48 },
                { x: 38, y: -22 },
                { x: 36, y: 26 },
                { x: -6, y: 48 },
                { x: -38, y: 14 },
              ];

              const positions =
                typeof window !== "undefined" && window.innerWidth < 640
                  ? mobilePositions
                  : desktopPositions;

              const active = item.active;

              return (
                <motion.div
                  key={index}
                  initial={{ x: 0, y: 0, scale: 0.45, opacity: 0, rotate: -18 }}
                  animate={{
                    x: positions[index].x,
                    y: positions[index].y,
                    scale: 1,
                    opacity: active ? 1 : 0.38,
                    rotate: 0,
                  }}
                  exit={{ x: 0, y: 0, scale: 0.45, opacity: 0, rotate: 18 }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 18,
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
                          ? { rotate: [0, -8, 8, -4, 0], scale: 1.14 }
                          : { rotate: [0, -3, 3, 0], scale: 1.03 }
                      }
                      transition={{ duration: 0.45 }}
                      className={
                        active
                          ? "group/star flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#822631]/70 bg-black/85 shadow-[0_0_26px_rgba(130,38,49,0.50)] backdrop-blur-md sm:h-11 sm:w-11"
                          : "flex h-8 w-8 cursor-default items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-70 backdrop-blur-md sm:h-9 sm:w-9"
                      }
                      aria-label={active ? "Play testimonial" : "Inactive testimonial"}
                    >
                      <Star
                        className={
                          active
                            ? "h-4 w-4 fill-[#822631] text-[#822631] sm:h-5 sm:w-5"
                            : "h-3.5 w-3.5 fill-gray-500 text-gray-500 sm:h-4 sm:w-4"
                        }
                        strokeWidth={1.8}
                      />
                    </motion.button>

                    {active && (
                      <div className="pointer-events-none absolute left-12 top-1/2 hidden -translate-y-1/2 items-center gap-3 opacity-0 transition-all duration-300 group-hover/star:translate-x-1 group-hover/star:opacity-100 sm:flex">
                        <div className="aspect-[9/16] h-44 overflow-hidden rounded-2xl border border-[#822631]/35 bg-black shadow-[0_0_35px_rgba(130,38,49,0.20)]">
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
                          <p className="mt-1 whitespace-nowrap text-[11px] font-medium tracking-[0.22em] text-[#822631]">
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
              className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-black p-4 shadow-2xl md:flex-row md:gap-6"
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

              <div className="w-full max-w-[360px] rounded-full border border-white/10 bg-white/5 px-6 py-4 text-center backdrop-blur-xl md:w-auto md:min-w-[250px] md:text-left">
                <p className="text-lg font-semibold text-white">Kazuki Tezuka</p>
                <p className="mt-1 text-xs font-medium tracking-[0.25em] text-[#822631]">
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