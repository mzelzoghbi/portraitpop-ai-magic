import { motion } from "framer-motion";
import { Palette, ImagePlus, Sparkles, Download } from "lucide-react";

const steps = [
  { num: "01", title: "Pick a Style", description: "Browse portrait styles—cinematic, dramatic, professional, and more.", icon: Palette },
  { num: "02", title: "Add a Photo", description: "Choose from your gallery or take a new one right in the app.", icon: ImagePlus },
  { num: "03", title: "Generate", description: "Tap once. Your AI portrait is ready in seconds.", icon: Sparkles },
  { num: "04", title: "Save & Share", description: "Download to your device or share directly to social media.", icon: Download },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-sm tracking-widest uppercase text-primary">How it works</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 tracking-tight" style={{ letterSpacing: "-0.03em" }}>
            Four steps to a perfect portrait.
          </h2>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={item}
              className="bg-card p-8 rounded-card shadow-stack hover:shadow-stack-hover transition-shadow duration-300"
            >
              <span className="block text-4xl font-serif text-primary/20 mb-4">{step.num}</span>
              <step.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
