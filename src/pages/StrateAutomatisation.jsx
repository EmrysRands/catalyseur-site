// src/pages/StrateAutomatisation.jsx
import { motion } from "framer-motion";

export default function StrateAutomatisation() {
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
          Automatise ton quotidien avec l’IA
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Passe de la théorie à la pratique : découvre comment les outils IA et
          no-code peuvent t’aider à gagner du temps, réduire ta charge mentale
          et augmenter ton impact.
        </motion.p>
      </section>

      {/* BLOCS D’ACTIONS RAPIDES */}
      <section className="max-w-5xl w-full px-6 grid md:grid-cols-3 gap-8 mb-20">
        <motion.div
          className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-2xl font-bold mb-3">⚡ Tuto express</h3>
          <p className="text-gray-300 mb-4">
            Crée ta première automatisation en 5 minutes : connecte ton
            formulaire à ton e-mail, sans écrire une ligne de code.
          </p>
          <a
            href="#demo"
            className="inline-block bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            Lancer le tuto
          </a>
        </motion.div>

        <motion.div
          className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-2xl font-bold mb-3">🧩 Packs Notion / n8n</h3>
          <p className="text-gray-300 mb-4">
            Accède à nos modèles prêts à l’emploi pour organiser ton activité,
            automatiser tes suivis et simplifier ton workflow.
          </p>
          <a
            href="/resources"
            className="inline-block bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            Voir les modèles
          </a>
        </motion.div>

        <motion.div
          className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-2xl font-bold mb-3">🎥 Mini-formation</h3>
          <p className="text-gray-300 mb-4">
            Découvre notre série vidéo : “Automatise une tâche par jour”. Des
            résultats visibles dès la première semaine.
          </p>
          <a
            href="/application"
            className="inline-block bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            Voir la démo suivante
          </a>
        </motion.div>
      </section>

      {/* PREUVES / TEMOIGNAGES */}
      <Testimonials />

      {/* CTA DE TRANSITION VERS STRATE 3 */}
      <CTA
        title="Teste ton premier système Optimize"
        subtitle="Applique ce que tu viens d’apprendre grâce à une démo interactive et mesure le temps gagné."
        buttonText="🧠 Teste un système en action"
        buttonLink="/application"
      />
    </motion.main>
  );
}
