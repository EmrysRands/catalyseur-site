import { motion } from "framer-motion";
import { useState } from "react";

export default function StrateAutomatisation() {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleWebhook = async () => {
    setLoading(true);
    try {
      await fetch("https://automate.optimizeinsight.com/webhook/blueprint_completed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: "anonyme",
          action: "blueprint_completed",
          timestamp: new Date().toISOString(),
        }),
      });
      setCompleted(true);
    } catch (error) {
      console.error("Erreur Webhook :", error);
      alert("Une erreur est survenue. Réessaie dans un instant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900 text-white overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* En-tête */}
      <section className="max-w-3xl text-center mt-24 mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gold">
          ⚙️ Strate 2 – Automatisation
        </h1>
        <p className="text-lg leading-relaxed text-gray-300 mb-8">
          Passe de la <strong>compréhension</strong> à la <strong>transformation réelle</strong>.  
          En moins de 5 minutes, découvre comment automatiser une tâche simple et libérer du temps chaque jour.
        </p>
      </section>

      {/* Tutoriel */}
      <section className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl max-w-3xl mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gold">
          🎯 Tutoriel “5 min → résultat concret”
        </h2>
        <p className="text-gray-300 mb-6">
          Ce tutoriel t’explique comment créer une <strong>automatisation Notion + n8n</strong>  
          pour publier automatiquement un post LinkedIn ou envoyer une notification.
        </p>

        <ol className="list-decimal list-inside space-y-3 text-gray-200 text-left">
          <li>📋 Crée une base “Contenu à publier” dans Notion.</li>
          <li>⚡ Dans n8n, connecte Notion et ajoute un nœud “HTTP Request”.</li>
          <li>🧠 Copie ce webhook : <code className="bg-black/40 px-2 py-1 rounded">https://automate.optimizeinsight.com/webhook/blueprint_completed</code></li>
          <li>📨 Ajoute ton texte et clique sur “Exécuter le flux”.</li>
          <li>🚀 Observe ton automatisation s’exécuter en temps réel.</li>
        </ol>
      </section>

      {/* Validation */}
      {!completed ? (
        <section className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-4 text-gold">📦 Blueprint prêt à l’emploi</h3>
          <p className="text-gray-300 mb-6">
            Télécharge ton Blueprint n8n prêt à importer.  
            Ouvre-le dans ton espace et clique simplement sur “Exécuter”.
          </p>
          <button
            onClick={handleWebhook}
            disabled={loading}
            className={`inline-block bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "⏳ Validation..." : "⬇️ Télécharger le Blueprint"}
          </button>
        </section>
      ) : (
        <motion.div
          className="bg-green-900/30 border border-green-500/40 rounded-2xl p-8 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            🎉 Bravo ! Tu viens d’activer ton premier système automatisé
          </h3>
          <p className="text-gray-300 mb-6">
            Tu viens de prouver que tu peux automatiser sans coder.  
            Passe à la <strong>Strate suivante</strong> pour une démo interactive en direct.
          </p>
          <a
            href="/strate-application"
            className="inline-block bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
          >
            🚀 Tester ton premier système
          </a>
        </motion.div>
      )}

      {/* Boutons navigation */}
      <div className="mt-8 mb-24 text-center space-y-3">
        <a
          href="/strate-reinvention"
          className="block text-gray-300 underline hover:text-yellow-300 transition"
        >
          ⬅️ Retour à la Strate précédente
        </a>
        <a
          href="/"
          className="block text-gray-400 underline hover:text-yellow-300 transition"
        >
          🏠 Retour à l’accueil
        </a>
      </div>
    </motion.main>
  );
}
