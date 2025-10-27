import { motion } from "framer-motion";

export default function StrateLiberte() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-amber-600 via-yellow-500 to-rose-500 text-white overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="max-w-3xl text-center mt-24 mb-16">
        <h1 className="text-5xl font-bold mb-6">🏆 Strate 4 — Liberté</h1>
        <p className="text-lg leading-relaxed text-slate-100 mb-8">
          Tu as maintenant toutes les clés pour stabiliser ton autonomie digitale.  
          Cette dernière strate t’aide à consolider ton système et à garder la maîtrise de ta croissance.
        </p>

        <a
          href="/"
          className="inline-block bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
        >
          🏠 Revenir à l’Accueil
        </a>
      </section>
    </motion.main>
  );
}
