import { motion } from "framer-motion";
import SectionTitle from "../components/shared/SectionTitle";
import HistorySection from "../components/about/HistorySection";
import ArchetypesList from "../components/about/ArchetypesList";
import ValuesList from "../components/about/ValuesList";

export default function About() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white px-6 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        icon="💫"
        title="À propos de Catalyseur Digital"
        subtitle="Lier l’humain et l’IA, pas les opposer."
      />
      <HistorySection />
      <ArchetypesList />
      <ValuesList />
    </motion.main>
  );
}
