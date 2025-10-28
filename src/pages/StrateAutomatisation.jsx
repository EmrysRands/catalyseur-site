import { motion } from "framer-motion";
import { useState } from "react";

export default function StrateAutomatisation() {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleBlueprint = async () => {
    setLoading(true);

    // 🔗 webhook n8n → blueprint_completed
    await fetch("https://automate.optimizeinsight.com/webhook/blueprint_completed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: "anonyme",
        action: "blueprint_completed",
        timestamp: new Date().toISOString(),
      }),
    });

    setLoading(false);
    setCompleted(true);
  };

  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#020617] text-white px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* En-tête */}
      <section className="max-w-3xl text-center mt-24 mb-12">
        <h1 className="text-5xl font-bold mb-6 text-gold">⚙️ Strate 2 – Automatisation</h1>
        <p className="text-lg text-gray-300 mb-6">
          Objectif : <span className="text-yellow-400 font-semibold">passage à l’action</span>.
          <br />
          Lance ta première mini-automatisation et découvre à quel point l’IA peut t’économiser du temps dès aujourd’hui.
        </p>
      </section>

      {/* Section tutoriel */}
      {!completed ? (
        <div className="bg-white/10 border border-yellow-400/20 p-8 rounded-2xl shadow-xl max-w-2xl w-full text-center">
          <h2 className="text-2xl font-semibold text-gold mb-4">
            🪄 Tutoriel “5 min → résultat concret”
          </h2>
          <p className="text-gray-300 mb-6">
            Télécharge ton blueprint Notion/n8n et suis les étapes pour connecter ton premier système automatisé.
          </p>

          <a
            href="https://optimizeinsight.com/blueprints/automation-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition mb-4"
          >
            📘 Télécharger le Blueprint
          </a>

          <div>
            <button
              onClick={handleBlueprint}
              disabled={loading}
              className={`mt-4 bg-yellow-500 text-dark px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "⏳ Validation..." : "✅ J’ai complété ma mini-formation"}
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          className="bg-green-900/20 border border-green-500/30 p-8 rounded-2xl shadow-lg text-center max-w-2xl w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            🎉 Félicitations, tu as activé ton premier système !
          </h3>
          <p className="text-gray-300 mb-6">
            Tu viens de prouver que tu peux automatiser sans coder.  
            Tu peux maintenant passer à la <strong>Strate suivante</strong> pour mesurer ton impact.
          </p>

          <a
            href="/strate-application"
            className="inline-block bg-gold text-dark font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            🚀 Tester ton premier système
          </a>

          {/* Retour à la Strate précédente */}
          <div className="mt-8 text-center">
            <a
              href="/strate-reinvention"
              className="text-gray-300 underline hover:text-yellow-300 transition"
            >
              ⬅️ Retour à la Strate précédente
            </a>
          </div>
        </motion.div>
      )}
    </motion.main>
  );
}
