import { Fragment } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Expertise", compact: false },
  { value: "100+", label: "Projects Delivered", compact: false },
  { value: "International", label: "Client Base", compact: true },
  { value: "100K+", label: "Organic Engagements", compact: false },
];

export function Stats() {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Mobile: 2-col grid, no dividers */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center py-4"
            >
              <div className={`font-serif font-bold text-white mb-1 leading-tight ${stat.compact ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl"}`}>
                {stat.value}
              </div>
              <div className="text-xs text-white/50 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: flex row with explicit divider elements */}
        <div className="hidden md:flex items-center justify-between">
          {stats.map((stat, index) => (
            <Fragment key={index}>
              {index > 0 && (
                <div
                  className="w-px bg-white/10 self-stretch mx-4 shrink-0"
                  style={{ minHeight: "60px" }}
                />
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center flex-1 min-w-0 px-2"
              >
                <div className={`font-serif font-bold text-white mb-2 leading-tight whitespace-nowrap ${stat.compact ? "text-xl lg:text-2xl" : "text-3xl lg:text-5xl"}`}>
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-white/50 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
