import { motion } from "framer-motion";

export default function StrateLiberte() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-amber-500 via-yellow-400 to-orange-500 text-white overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="max-w-3xl text-center mt-24 mb-16">
        <h1 className="text-5xl font-bold mb-6">🏆 Strate 4 — Liberté</h1>
        <p className="text-lg leading-relaxed text-slate-100 mb-8">
          C’est ici que tu consolides tes acquis et stabilises ta liberté
          digitale.  
          Grâce au mentorat et à des systèmes durables, tu deviens maître de ton
          énergie et de ton temps.
        </p>

        <a
          href="/"
          className="inline-block bg-white text-dark font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition"
        >
          🔁 Revenir au Départ du Parcours
        </a>
      </section>
    </motion.main>
  );
}
