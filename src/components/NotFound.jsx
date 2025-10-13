import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white text-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-6xl font-bold mb-4 text-blue-300">404</h1>
      <p className="text-lg mb-6 text-slate-200">
        Cette page n’existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all"
      >
        ← Retour à l’accueil
      </Link>
    </motion.section>
  );
}
