import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="text-center space-y-8 relative z-10 p-6 glass-panel rounded-3xl max-w-lg w-full mx-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-2">
            404
          </h1>
          <h2 className="text-2xl font-medium tracking-wide text-white mb-6">
            Vision Not Found
          </h2>
          <p className="text-lg text-white/60 font-light mb-8">
            The space you are looking for does not exist in this dimension. Let's guide you back to the showcase.
          </p>
          <Link href="/">
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 text-base font-semibold">
              <ArrowLeft className="mr-2 w-5 h-5" />
              Return Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
