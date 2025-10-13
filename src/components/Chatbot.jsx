import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([
    {
      from: "bot",
      text: "👋 Salut ! Moi c’est **Nova**, ton guide Catalyseur Digital. Tu veux explorer la Renaissance IA, booster ta carrière ou simplement discuter de ton projet ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setChat((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://automate.optimizeinsight.com/webhook/chatbot-catalyseur",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );

      const data = await res.json();
      const botReply = data.reply || data || "Je réfléchis à ta question...";
      setChat((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Oups, je rencontre un souci de connexion." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Bouton flottant */}
      <AnimatePresence>
        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            💬
          </motion.button>
        )}
      </AnimatePresence>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-80 md:w-96 h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-indigo-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center font-semibold text-lg">
              <span>⚡ Nova — IA Catalyseur</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white text-xl font-bold"
              >
                ✖
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 text-sm">
              {chat.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-3 flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      msg.from === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none"
                        : "bg-white border border-indigo-100 text-slate-800 rounded-bl-none"
                    } shadow-sm`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="italic text-slate-500">Nova écrit...</div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-indigo-100 bg-white p-3 flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écris ici..."
                className="flex-1 px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-slate-700 text-sm"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <motion.button
                onClick={handleSend}
                className="ml-3 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm shadow-md hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ➤
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
