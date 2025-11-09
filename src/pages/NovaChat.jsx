import { useState } from "react";
import { motion } from "framer-motion";

export default function NovaChat() {
  const [messages, setMessages] = useState([
    { sender: "nova", text: "🧠 Bonjour ! Où en es-tu dans ta TRANSFORMATION ? Quelle Strate veux-tu explorer ?" },
  ]);
  const [input, setInput] = useState("");

  // Fonction pour gérer l'envoi du message
  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    // Simule une réponse intelligente
    setTimeout(() => {
      const simulatedReplies = [
        "✨ Intéressant ! Dis-m'en plus sur ta quête de CLARTÉ.",
        "🚀 Super ! Tu progresses bien. Quel SYSTÈME veux-tu installer ensuite ?",
        "💡 As-tu déjà construit le PONT entre tes intentions et tes actions ?",
        "🔥 J'aime ton ÉNERGIE. Restons focus sur ta TRANSFORMATION !",
        "🎯 Excellent ! Quelle PREUVE concrète cherches-tu à obtenir ?",
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
    <section className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0A2540] to-[#1a1444] text-white flex flex-col items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        <h2 className="text-3xl font-bold mb-2 text-center font-['Montserrat']" style={{ color: '#D4AF37' }}>
          💬 Chat Nova
        </h2>
        <p className="text-sm text-gray-400 mb-6 text-center">
          Simulation locale — Version complète avec IA bientôt disponible
        </p>

        {/* Fenêtre de chat */}
        <div className="bg-[#0A2540]/40 border border-[#D4AF37]/20 rounded-xl p-6 h-[420px] overflow-y-auto space-y-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.sender === "user"
                  ? "text-black self-end ml-auto"
                  : "bg-[#0A2540]/60 border border-[#D4AF37]/20 text-gray-200"
              }`}
              style={msg.sender === "user" ? { backgroundColor: '#D4AF37' } : {}}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Champ de saisie */}
        <div className="flex mt-4 gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Pose ta question à Nova..."
            className="flex-grow px-4 py-3 rounded-lg bg-[#0A2540]/40 border border-[#D4AF37]/30 text-gray-200 focus:outline-none focus:border-[#D4AF37] placeholder-gray-500"
          />
          <button
            onClick={handleSend}
            className="px-6 py-3 text-black font-semibold rounded-lg transition font-['Montserrat']"
            style={{ backgroundColor: '#D4AF37' }}
          >
            Envoyer
          </button>
        </div>

        {/* Note technique */}
        <div className="mt-6 bg-[#0A2540]/40 border border-[#D4AF37]/30 rounded-xl p-4">
          <p className="text-xs text-gray-400 leading-relaxed">
            💡 <strong style={{ color: '#D4AF37' }}>Note :</strong> Cette version simule les réponses. 
            La version complète avec connexion IA arrivera prochainement pour t'accompagner 
            dans ta <strong style={{ color: '#D4AF37' }}>TRANSFORMATION</strong>.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
