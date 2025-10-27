import { motion } from "framer-motion";
import SectionTitle from "../components/shared/SectionTitle";
import LoginForm from "../components/resources/LoginForm";
import DownloadsList from "../components/resources/DownloadsList";

export default function Resources() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white px-6 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        icon="📚"
        title="Espace Ressources"
        subtitle="Retrouve ici tous tes ebooks, templates et formations."
      />
      <LoginForm />
      <DownloadsList />
    </motion.main>
  );
}
