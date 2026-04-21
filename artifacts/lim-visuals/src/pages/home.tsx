import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Tools } from "@/components/sections/Tools";
import { Stats } from "@/components/sections/Stats";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen overflow-hidden selection:bg-primary/30 selection:text-primary-foreground">
      {/* Ambient background blur elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] sm:w-[50%] sm:h-[50%] rounded-full bg-primary/10 blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] sm:w-[60%] sm:h-[60%] rounded-full bg-secondary/5 blur-[80px] sm:blur-[120px]" />
      </div>

      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Work />
        <Tools />
        <Stats />
        <Contact />
      </div>
    </main>
  );
}
