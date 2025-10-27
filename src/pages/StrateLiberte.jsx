// src/pages/StrateLiberte.jsx
import { motion } from "framer-motion";


export default function StrateLiberte() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-br from-amber-500 via-yellow-400 to-orange-500 text-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* HERO */}
      <section className="text-center mt-24 mb-16 px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-gold"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Deviens un Catalyseur Libre
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Transforme ta maîtrise en liberté. Reçois un accompagnement
          personnalisé pour consolider tes résultats, créer de la stabilité et
          multiplier ton impact.
        </motion.p>
      </section>

      {/* OFFRES / FORMULES COACHING */}
      <section className="max-w-5xl w-full px-6 grid md:grid-cols-3 gap-8 mb-20">
        {/* Plan 1 */}
        <motion.div
          className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-2xl font-bold mb-3">🚀 Session Diagnostic</h3>
          <p className="text-gray-300 mb-4">
            1h d’échange stratégique pour analyser ta situation, définir tes
            priorités et créer ton plan d’action sur mesure.
          </p>
          <a
            href="https://calendly.com/optimizeinsight/diagnostic"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            Réserver mon diagnostic
          </a>
        </motion.div>

        {/* Plan 2 */}
        <motion.div
          className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-2xl font-bold mb-3">💼 Programme 90 Jours</h3>
          <p className="text-gray-300 mb-4">
            12 semaines de mentorat pour ancrer tes systèmes, développer ta
            visibilité et bâtir ton activité libre et stable.
          </p>
          <a
            href="https://calendly.com/optimizeinsight/coaching90"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            Rejoindre le programme
          </a>
        </motion.div>

        {/* Plan 3 */}
        <motion.div
          className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-2xl font-bold mb-3">🏆 Mastermind Catalyseur</h3>
          <p className="text-gray-300 mb-4">
            Un cercle sélectif d’entrepreneurs et créateurs IA qui partagent
            leurs stratégies et se challengent chaque mois.
          </p>
          <a
            href="https://calendly.com/optimizeinsight/mastermind"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            Demander une invitation
          </a>
        </motion.div>
      </section>

      {/* Témoignages */}
      <Testimonials />

      {/* CTA FINAL */}
      <CTA
        title="🚀 Réserve ton plan d’évolution"
        subtitle="Un accompagnement stratégique pour consolider tes systèmes, développer ta liberté et piloter ton énergie."
        buttonText="📅 Réserver mon diagnostic"
        buttonLink="https://calendly.com/optimizeinsight/diagnostic"
      />
    </motion.main>
  );
}
