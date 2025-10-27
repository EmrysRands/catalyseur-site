import { motion } from "framer-motion";

export default function StrateApplication() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-cyan-700 via-blue-600 to-indigo-800 text-white overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="max-w-3xl text-center mt-24 mb-16">
        <h1 className="text-5xl font-bold mb-6">🧩 Strate 3 — Application</h1>
        <p className="text-lg leading-relaxed text-slate-100 mb-8">
          Passe de la théorie à la pratique.  
          Teste des démos interactives, découvre des outils concrets et observe
          comment tes systèmes IA produisent de vrais résultats.
        </p>

        <a
          href="/strate-liberte"
          className="inline-block bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
        >
          🏆 Découvrir ton Accompagnement
        </a>

      </section>
    </motion.main>
  );
}
