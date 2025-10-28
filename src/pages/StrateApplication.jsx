import { motion } from "framer-motion";
import { useState } from "react";

export default function StrateApplication() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [minutesSaved, setMinutesSaved] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleDemo = async () => {
    if (!input) return alert("Ajoute une tâche à automatiser ⚡");
    const saved = Math.floor(Math.random() * 25) + 5; // simulation gain de temps
    setMinutesSaved(saved);
    const text = `✅ Tâche automatisée : ${input}\n💡 Gain estimé : +${saved} min/jour`;
    setOutput(text);

    // 🔗 webhook n8n
    await fetch("https://automate.optimizeinsight.com/webhook/demo_success", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: "anonyme",
        action: "demo_success",
        input,
        minutesSaved: saved,
        timestamp: new Date().toISOString(),
      }),
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-indigo-900 via-slate-900 to-black text-white px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* En-tête */}
      <section className="max-w-3xl text-center mt-24 mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gold">🧩 Strate 3 – Application</h1>
        <p className="text-lg text-gray-300 mb-8">
          Découvre **en direct** le pouvoir de l’automatisation.  
          En 30 secondes, visualise comment l’IA peut transformer une tâche répétitive.
        </p>
      </section>

      {/* Démo interactive */}
      <div className="bg-white/10 border border-white/10 p-8 rounded-2xl shadow-xl max-w-2xl w-full text-center">
        <h2 className="text-2xl font-semibold text-gold mb-4">⚙️ Démo interactive</h2>
        <p className="text-gray-300 mb-4">
          Entre une tâche chronophage que tu fais souvent (ex. “rédiger un mail client”, “planifier un post LinkedIn”)
        </p>

        <input
          type="text"
          placeholder="Ex : envoyer un email de suivi"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 rounded-lg mb-6 text-black"
        />

        <button
          onClick={handleDemo}
          className="bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
        >
          🚀 Lancer la démo
        </button>

        {output && (
          <div className="mt-8 bg-black/40 border border-yellow-400/20 p-6 rounded-xl relative">
            <pre className="whitespace-pre-wrap text-left text-gray-200 text-sm mb-4">{output}</pre>
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 bg-yellow-500/80 text-black px-3 py-1 rounded-md text-sm font-semibold hover:bg-yellow-400"
            >
              {copied ? "✅ Copié !" : "📋 Copier"}
            </button>
          </div>
        )}

        {minutesSaved > 0 && (
          <p className="mt-6 text-yellow-400 text-lg font-bold animate-pulse">
            ⏱️ Tu viens de gagner environ +{minutesSaved} min/jour !
          </p>
        )}
      </div>

      {/* CTA vers la Strate 4 */}
      <a
        href="/strate-liberte"
        className="mt-16 inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
      >
        🏆 Recevoir ton système personnalisé
      </a>
    </motion.main>
  );
}
