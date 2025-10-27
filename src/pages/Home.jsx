// src/pages/Home.jsx
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen bg-dark text-gold overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero principal */}
      <section className="text-center mt-20 mb-10 px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-gold"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Le Pont entre Humain & IA
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Tu n’as pas besoin d’un autre outil — tu as besoin de comprendre le
          système. Découvre comment l’IA peut t’aider à passer du chaos digital
          à la clarté.
        </motion.p>

        <motion.a
          href="/reinvention"
          className="inline-block mt-8 px-8 py-3 bg-gold text-dark font-bold rounded-xl shadow hover:bg-yellow-400 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Découvre ta Renaissance Digitale
        </motion.a>
      </section>

      {/* Les 4 ponts de transformation */}
      <Features />

      {/* Sections principales */}
      <Hero />
      <CTA />
      <Testimonials />
      <FAQ />
    </motion.main>
  );
}
