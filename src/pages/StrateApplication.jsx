// src/pages/StrateApplication.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";

export default function StrateApplication() {
  // États pour la mini démo interactive
  const [role, setRole] = useState("");
  const [task, setTask] = useState("");
  const [tone, setTone] = useState("");
  const [output, setOutput] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();
    // Simulation IA locale (démo fictive)
    const demo =
      `✨ Exemple généré pour ${role || "ton profil"} :\n` +
      `Tu peux automatiser "${task || "ta tâche quotidienne"}" en utilisant Make ou n8n.\n` +
      `Style suggéré : ${tone || "neutre"}.\n` +
      `Résultat : gain de 2 h/semaine minimum 🚀`;
    setOutput(demo);
  };

  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-dark text-gold overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* HERO */}
      <section className="text-center mt-24 mb-10 px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-gold"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Applique et mesure les résultats
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Teste une expérience IA concrète : crée ton propre livrable ou calcule
          combien de temps tu peux libérer chaque semaine.
        </motion.p>
      </section>

      {/* EXPERIENCE INTERACTIVE */}
      <section
        id="demo"
        className="bg-gray-900 rounded-2xl shadow-lg p-8 mb-16 max-w-3xl w-full mx-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          🧠 Démo : Ton premier système IA
        </h2>

        <form
          onSubmit={handleGenerate}
          className="flex flex-col gap-4 text-gray-200"
        >
          <label>
            <span className="block mb-1 font-semibold text-gold">
              Ton activité ou rôle
            </span>
            <input
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
              placeholder="ex : Coach, Formateur, Freelance..."
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </label>

          <label>
            <span className="block mb-1 font-semibold text-gold">
              Tâche à automatiser
            </span>
            <input
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
              placeholder="ex : relance e-mail, plan de contenu, facture..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
          </label>

          <label>
            <span className="block mb-1 font-semibold text-gold">
              Ton style ou tonalité
            </span>
            <input
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
              placeholder="ex : professionnel, inspirant, humoristique..."
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            />
          </label>

          <motion.button
            type="submit"
            className="mt-4 bg-gold text-dark font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Générer un résultat
          </motion.button>
        </form>

        {output && (
          <motion.div
            className="mt-8 bg-gray-800 p-6 rounded-xl border border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <pre className="whitespace-pre-wrap text-sm md:text-base text-gray-100">
              {output}
            </pre>
            <motion.button
              className="mt-4 px-6 py-2 bg-gold text-dark font-bold rounded-lg hover:bg-yellow-400 transition"
              onClick={() => navigator.clipboard.writeText(output)}
              whileHover={{ scale: 1.05 }}
            >
              📋 Copier le texte
            </motion.button>
          </motion.div>
        )}
      </section>

      {/* PREUVES SOCIALES */}
      <Testimonials />

      {/* CTA DE TRANSITION */}
      <CTA
        title="Reçois ton système personnalisé"
        subtitle="Passe au niveau supérieur : découvre comment obtenir ton propre système automatisé et accompagné."
        buttonText="🏆 Découvre ton accompagnement personnalisé"
        buttonLink="/liberte"
      />
    </motion.main>
  );
}
