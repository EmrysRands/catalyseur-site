import { motion } from "framer-motion";

export default function SectionTitle({ icon, title, subtitle }) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-4 text-gold">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h2>
      {subtitle && <p className="text-slate-300 text-lg">{subtitle}</p>}
    </motion.div>
  );
}
