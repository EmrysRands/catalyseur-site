import { motion } from "framer-motion";

export default function HistorySection() {
  return (
    <motion.section
      className="max-w-3xl text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl font-semibold mb-3 text-gold">Notre Histoire</h3>
      <p className="text-slate-300">
        Né d’un constat : beaucoup d’entrepreneurs subissent la technologie au lieu de la piloter.
        Catalyseur Digital est né pour inverser cette dynamique.
      </p>
    </motion.section>
  );
}
