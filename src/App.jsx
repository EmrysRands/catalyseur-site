// App.jsx — Catalyseur Digital 3.0 (version épurée haut de gamme)
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <motion.div
      className="min-h-screen flex flex-col bg-dark text-gold font-sans overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* 🧭 Barre de navigation */}
      <Header />

      {/* 🦸‍♂️ Section Héroïque */}
      <Hero />

      {/* 💡 Les 4 Strates de Transformation */}
      <Features />

      {/* ⚓ Pied de page */}
      <Footer />
    </motion.div>
  );
}
