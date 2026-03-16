import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";
import heroSelfie from "@/assets/hero-selfie.jpg";
import { Apple, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="font-mono text-sm tracking-widest uppercase text-primary">
          Available on iOS & Android
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl mt-4 mb-6 tracking-tight font-semibold leading-[1.05]" style={{ letterSpacing: "-0.03em", textWrap: "balance" }}>
          AI professional portraits from your photos.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed">
          One tap, stunning results. No subscriptions, no accounts, just high-end headshots in seconds.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 h-14 px-8 bg-foreground text-background rounded-button font-bold shadow-stack hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
          >
            <Apple className="w-5 h-5" />
            App Store
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 h-14 px-8 bg-foreground text-background rounded-button font-bold shadow-stack hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
          >
            <Play className="w-5 h-5" />
            Google Play
          </a>
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            $0.99 per portrait
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative aspect-[4/5] rounded-card overflow-hidden shadow-stack"
      >
        {/* Before/After split */}
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative overflow-hidden">
            <img
              src={heroSelfie}
              alt="Before: casual selfie"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-foreground/80 text-background text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Before
            </span>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={heroPortrait}
              alt="After: professional AI portrait"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute bottom-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              After
            </span>
          </div>
        </div>
        {/* Center divider */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] bg-background z-10" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
