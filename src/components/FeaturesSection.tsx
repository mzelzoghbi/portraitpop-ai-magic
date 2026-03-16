import { motion } from "framer-motion";
import { Camera, Layers, Save, Share2, UserX, CreditCard } from "lucide-react";

const features = [
  { icon: Layers, title: "Multiple Styles", desc: "Cinematic, dramatic, professional, and more—find the look that fits you." },
  { icon: Camera, title: "Simple Flow", desc: "Style → Photo → Generate. No complex editing tools to learn." },
  { icon: Save, title: "Save to Library", desc: "Portraits go straight to your photo library with one tap." },
  { icon: Share2, title: "Instant Sharing", desc: "Share to LinkedIn, Instagram, WhatsApp, or any app directly." },
  { icon: UserX, title: "No Account Needed", desc: "Open the app and start generating. No signups, no passwords." },
  { icon: CreditCard, title: "Pay Per Portrait", desc: "$0.99 per generation. No subscriptions, no hidden fees." },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-sm tracking-widest uppercase text-primary">Features</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 tracking-tight" style={{ letterSpacing: "-0.03em" }}>
            Everything you need. Nothing you don't.
          </h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="p-8 rounded-card border border-border/60 hover:shadow-stack transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-button bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
