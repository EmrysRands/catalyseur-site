import { motion } from "framer-motion";
import SectionTitle from "../components/shared/SectionTitle";
import FormContact from "../components/contact/FormContact";
import FAQSection from "../components/contact/FAQSection";

export default function Contact() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white px-6 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        icon="📞"
        title="Contact & Support"
        subtitle="Une question ? L’équipe Catalyseur est à ton écoute."
      />
      <FormContact />
      <FAQSection />
    </motion.main>
  );
}
