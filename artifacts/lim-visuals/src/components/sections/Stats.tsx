import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Expertise" },
  { value: "100+", label: "Projects Delivered" },
  { value: "International", label: "Client Base" },
  { value: "100K+", label: "Organic Engagements" }
];

export function Stats() {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, index) => {
            const isRightColMobile = index % 2 === 1;
            const isNotFirstDesktop = index !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`text-center px-6 py-4
                  ${isRightColMobile ? "border-l border-white/10" : ""}
                  ${isNotFirstDesktop && !isRightColMobile ? "md:border-l md:border-white/10" : ""}
                `}
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
