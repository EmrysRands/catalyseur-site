// src/pages/NovaChat.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function NovaChat() {
  const [messages, setMessages] = useState([
    { sender: "nova", text: "🧠 Bonjour ! Quelle Strate veux-tu explorer aujourd’hui ?" },
  ]);
  const [input, setInput] = useState("");

  // ⚡ Fonction pour gérer l'envoi du message
  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    // Simule une réponse "intelligente" après 1 seconde
    setTimeout(() => {
      const simulatedReplies = [
        "✨ Intéressant ! Dis-m'en plus sur ton objectif actuel.",
        "🚀 Super ! Tu progresses bien. Que veux-tu automatiser ensuite ?",
        "💡 As-tu déjà testé les outils de la Strate Automatisation ?",
        "🔥 J’adore ton énergie. Restons focus sur ton plan d’action !",
      ];
      const reply =
        simulatedReplies[Math.floor(Math.random() * simulatedReplies.length)];
      setMessages((prev) => [...prev, { sender: "nova", text: reply }]);
    }, 1000);
  };

  // Permet d'appuyer sur Entrée pour envoyer
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <section className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-4 text-center">
          💬 Chat Nova IA (simulation)
        </h2>

        {/* 💬 Fenêtre de chat */}
        <div className="bg-white/10 border border-white/10 rounded-xl p-6 h-[420px] overflow-y-auto space-y-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black self-end ml-auto"
                  : "bg-white/10 border border-white/20 text-gray-200"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* 🧠 Champ de saisie */}
        <div className="flex mt-4 gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Écris ici ta question..."
            className="flex-grow px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-gray-200 focus:outline-none focus:border-yellow-400"
          />
          <button
            onClick={handleSend}
            className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-400 transition"
          >
            Envoyer
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-4 text-center">
          🔒 Simulation locale — connexion IA désactivée
        </p>
      </motion.div>
    </section>
  );
}
