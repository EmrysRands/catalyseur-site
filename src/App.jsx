// App.jsx (Catalyseur Digital 3.0 - Version sans Books)
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features"; // ← ici, Features = Strates / Parcours
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <motion.div
      className="min-h-screen flex flex-col bg-dark text-gold font-sans overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🧭 Navigation principale */}
      <Header />

      {/* 🦸‍♂️ Hero = promesse + message clé */}
      <Hero />

      {/* 💡 Les 4 Strates de transformation (ex-Features) */}
      <Features />

      {/* 🎯 Appel à l’action central */}
      <CTA />

      {/* 💬 Témoignages / preuve sociale */}
      <Testimonials />

      {/* ❓ Questions fréquentes */}
      <FAQ />

      {/* 🤖 Chatbot Nova + Footer */}
      <Chatbot />
      <Footer />
    </motion.div>
  );
}
