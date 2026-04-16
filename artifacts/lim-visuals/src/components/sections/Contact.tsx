import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { SiBehance, SiInstagram, SiTiktok } from "react-icons/si";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mildredrelayo/",
    label: "LinkedIn",
  },
  {
    name: "Behance",
    icon: SiBehance,
    href: "https://www.behance.net/limvisuals",
    label: "Behance",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/limvisuals",
    label: "Instagram",
  },
  {
    name: "TikTok",
    icon: SiTiktok,
    href: "https://www.tiktok.com/@limvisuals",
    label: "TikTok",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto glass-panel rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-none mb-6">
              Let's create <br />
              <span className="italic text-primary">impact.</span>
            </h2>
            <p className="text-base md:text-lg text-white/60 font-light mb-10 max-w-md">
              Available for freelance opportunities and international collaborations.
              Ready to elevate your visual identity.
            </p>

            <a href="mailto:hello@limvisuals.com">
              <Button
                size="lg"
                className="h-14 md:h-16 px-6 md:px-8 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 text-base md:text-lg font-semibold group w-full md:w-auto"
                data-testid="button-lets-discuss"
              >
                <Mail className="mr-3 w-5 h-5" />
                Let's discuss
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 md:pl-12 md:border-l border-white/10"
          >
            <h3 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-2">Connect</h3>

            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-${social.name.toLowerCase()}`}
                className="flex items-center justify-between p-5 md:p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <social.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  <span className="text-white font-medium text-base md:text-lg">{social.label}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-white/40 gap-2">
        <p>© {new Date().getFullYear()} LIM.VISUALS. All rights reserved.</p>
        <p className="font-serif italic text-white/60">Designed for impact.</p>
      </div>
    </section>
  );
}
