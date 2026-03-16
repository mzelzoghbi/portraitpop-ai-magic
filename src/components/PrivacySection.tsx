import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const PrivacySection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-6 text-center"
      >
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Shield className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">Your privacy, our priority.</h2>
        <p className="text-muted-foreground leading-relaxed max-w-[55ch] mx-auto">
          Your photo is processed securely. Generated portraits are returned to your device only—we don't store them on our servers.
        </p>
      </motion.div>
    </section>
  );
};

export default PrivacySection;
