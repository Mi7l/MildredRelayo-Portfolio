import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { SiBehance, SiInstagram } from "react-icons/si";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto glass-panel rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-none mb-6">
              Let's create <br />
              <span className="italic text-primary">impact.</span>
            </h2>
            <p className="text-lg text-white/60 font-light mb-12 max-w-md">
              Available for freelance opportunities and international collaborations. 
              Let's discuss how we can elevate your visual identity.
            </p>
            
            <a href="mailto:contact@limvisuals.com">
              <Button size="lg" className="h-16 px-8 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 text-lg font-semibold group w-full md:w-auto">
                <Mail className="mr-3 w-5 h-5" />
                Book a Discovery Call
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:pl-12 md:border-l border-white/10"
          >
            <h3 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-2">Connect</h3>
            
            <a href="#" className="flex items-center justify-between p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group">
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-white" />
                <span className="text-white font-medium text-lg">LinkedIn</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
            </a>
            
            <a href="#" className="flex items-center justify-between p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group">
              <div className="flex items-center gap-4">
                <SiBehance className="w-6 h-6 text-white" />
                <span className="text-white font-medium text-lg">Behance</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
            </a>
            
            <a href="#" className="flex items-center justify-between p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group">
              <div className="flex items-center gap-4">
                <SiInstagram className="w-6 h-6 text-white" />
                <span className="text-white font-medium text-lg">Instagram</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto mt-20 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
        <p>© {new Date().getFullYear()} LIM.VISUALS. All rights reserved.</p>
        <p className="mt-2 md:mt-0 font-serif italic text-white/60">Designed for impact.</p>
      </div>
    </section>
  );
}
