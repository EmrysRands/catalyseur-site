// src/pages/StrateReinvention.jsx
import { motion } from "framer-motion";

export default function StrateReinvention() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-dark text-gold overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* HERO SECTION */}
      <section className="text-center mt-24 mb-16 px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-gold"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ta Renaissance Digitale
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Clarifie ta vision, retrouve du sens et prépare ton plan d’action
          grâce à nos fiches et ebooks exclusifs.
        </motion.p>
      </section>

      {/* BLOCS DE CONTENU */}
      <section className="max-w-5xl w-full px-6 grid md:grid-cols-2 gap-8 mb-20">
        <motion.div
          className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-bold mb-3">📘 Ton Guide gratuit</h3>
          <p className="text-gray-300 mb-4">
            Télécharge <strong>“Ta Renaissance Professionnelle à l’ère de l’IA”</strong> et découvre
            les 7 premières étapes pour te réinventer.
          </p>
          <a
            href="/ebooks/renaissance"
            className="inline-block bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            Télécharger le guide
          </a>
        </motion.div>

        <motion.div
          className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-bold mb-3">🧩 Quiz Nova</h3>
          <p className="text-gray-300 mb-4">
            Réponds à 5 questions rapides pour que <strong>Nova</strong> t’indique ta
            phase actuelle et la prochaine étape personnalisée.
          </p>
          <a
            href="/nova"
            className="inline-block bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            Lancer le quiz
          </a>
        </motion.div>
      </section>

      {/* Témoignages + CTA */}
      <Testimonials />

      <CTA
        title="Prêt à passer à l’action ?"
        subtitle="Découvre comment automatiser ton quotidien avec l’IA"
        buttonText="⚙️ Découvre comment automatiser ton quotidien"
        buttonLink="/automatisation"
      />
    </motion.main>
  );
}
