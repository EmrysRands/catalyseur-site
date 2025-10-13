import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-dark text-gold font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Logo + titre */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        ⚡ Catalyseur Digital
      </motion.h1>

      {/* Sous-titre */}
      <motion.p
        className="text-lg md:text-xl text-center max-w-2xl text-white/80"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Le pont entre humains et intelligence artificielle.
        <br />
        <span className="text-gold">
          Apprends à transformer l’IA en levier de richesse et de liberté.
        </span>
      </motion.p>

      {/* Bouton CTA */}
      <motion.a
        href="#"
        className="mt-10 px-8 py-3 rounded-full bg-gold text-dark font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-gold/50 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Découvrir la méthode
      </motion.a>

      {/* Animation subtile en bas */}
      <motion.div
        className="absolute bottom-10 text-white/50 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        © 2025 Catalyseur Digital — par Haga Tiana
      </motion.div>
    </motion.div>
  );
}
