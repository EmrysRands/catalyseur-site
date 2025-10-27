import { motion } from "framer-motion";

export default function StrateReinvention() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="max-w-3xl text-center mt-24 mb-16">
        <h1 className="text-5xl font-bold mb-6">🧠 Strate 1 — Réinvention</h1>
        <p className="text-lg leading-relaxed text-slate-200 mb-8">
          Clarifie ta vision et reconnecte ton potentiel.  
          Cette première strate t’aide à redonner du sens à ton parcours digital
          et à découvrir comment l’IA peut devenir un levier d’évolution.
        </p>

        <a
          href="/strate-automatisation"
          className="inline-block bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
        >
          ⚙️ Passer à l’Automatisation
        </a>

      </section>
    </motion.main>
  );
}
