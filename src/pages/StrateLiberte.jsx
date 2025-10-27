import { motion } from "framer-motion";

export default function StrateLiberte() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#1a1444] via-[#312e81] to-[#0f172a] text-gold overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="max-w-3xl text-center mt-24 mb-16">
        <h1 className="text-5xl font-bold mb-6">🏆 Strate 4 — Liberté</h1>
        <p className="text-lg leading-relaxed text-gray-200 mb-8">
          C’est ici que tu consolides tes acquis et stabilises ta liberté digitale.  
          Grâce au mentorat et à des systèmes durables, tu deviens maître de ton énergie,  
          de ton temps et de ta créativité.
        </p>

        <a
          href="/"
          className="inline-block bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
        >
          🔁 Revenir au Départ du Parcours
        </a>
      </section>
    </motion.main>
  );
}
