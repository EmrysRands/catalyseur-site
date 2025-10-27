import { motion } from "framer-motion";

export default function StrateAutomatisation() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-indigo-800 via-blue-500 to-sky-400 text-white overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="max-w-3xl text-center mt-24 mb-16">
        <h1 className="text-5xl font-bold mb-6">⚙️ Strate 2 — Automatisation</h1>
        <p className="text-lg leading-relaxed text-slate-100 mb-8">
          Libère-toi des tâches répétitives et rends ton quotidien plus fluide.
          Ici, tu apprends à transformer tes processus en systèmes IA simples,
          efficaces et personnalisés.
        </p>

        <a
          href="/strate-application"
          className="inline-block bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
        >
          🧩 Voir les Outils en Action
        </a>

      </section>
    </motion.main>
  );
}
