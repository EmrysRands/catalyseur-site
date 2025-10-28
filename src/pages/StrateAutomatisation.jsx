import { motion } from "framer-motion";

export default function StrateAutomatisation() {
  const handleWebhook = async () => {
    await fetch("https://automate.optimizeinsight.com/webhook/blueprint_completed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: "anonyme",
        action: "blueprint_completed",
        timestamp: new Date().toISOString(),
      }),
    });
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
          Il est temps de **passer de la théorie à l’action.**  
          En moins de 5 minutes, découvre comment automatiser une tâche simple
          et gagner du temps dès aujourd’hui.
        </p>
      </section>

      {/* Tutoriel 5 minutes */}
      <section className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl max-w-3xl mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gold">🎯 Tutoriel “5 min → résultat concret”</h2>
        <p className="text-gray-300 mb-6">
          Ce tutoriel t’explique pas à pas comment créer une **automatisation Notion + n8n**  
          pour publier automatiquement un post LinkedIn ou envoyer une notification.
        </p>

        <ol className="list-decimal list-inside space-y-3 text-gray-200 text-left">
          <li>📋 Ouvre ton espace Notion et crée une base “Contenu à publier”.</li>
          <li>⚡ Dans n8n, connecte Notion → ajoute un nœud “HTTP Request”.</li>
          <li>🧠 Copie ce webhook : <code className="bg-black/40 px-2 py-1 rounded">https://automate.optimizeinsight.com/webhook/blueprint_completed</code></li>
          <li>📨 Ajoute ton texte → clique sur “Exécuter le flux”.</li>
          <li>🚀 Observe ton automatisation en action en moins de 5 minutes.</li>
        </ol>
      </section>

      {/* Blueprint téléchargeable */}
      <section className="text-center mb-16">
        <h3 className="text-2xl font-bold mb-4 text-gold">📦 Blueprint prêt à l’emploi</h3>
        <p className="text-gray-300 mb-6">
          Télécharge ton **Blueprint n8n** prêt à importer.  
          Ouvre-le dans ton espace et clique simplement sur “Exécuter”.
        </p>
        <a
          href="https://drive.google.com/file/d/1n8n-blueprint-optimize-insight/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWebhook}
          className="inline-block bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
        >
          ⬇️ Télécharger le Blueprint
        </a>
      </section>

      {/* CTA vers la Strate 3 */}
      <a
        href="/strate-application"
        className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
      >
        🧩 Tester ton premier système
      </a>
    </motion.main>
  );
}
