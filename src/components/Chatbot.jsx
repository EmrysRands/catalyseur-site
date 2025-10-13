import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  /* -----------------------------------------------------------
   🧱 1. États principaux de Nova (mémorisation et affichage)
  ----------------------------------------------------------- */
  const [open, setOpen] = useState(false); // ouvre ou ferme la fenêtre du chatbot
  const [chat, setChat] = useState([]); // contient tout l'historique local des échanges
  const [input, setInput] = useState(""); // texte tapé par l'utilisateur
  const [loading, setLoading] = useState(false); // indique que Nova "réfléchit"
  const [userName, setUserName] = useState(""); // prénom utilisateur
  const [userEmail, setUserEmail] = useState(""); // email utilisateur
  const [conversationId] = useState(() => crypto.randomUUID()); // identifiant unique conversation
  const [showSuggestions, setShowSuggestions] = useState(true); // affiche les messages prédéfinis au début

  /* -----------------------------------------------------------
   💬 2. Message de bienvenue automatique de Nova
  ----------------------------------------------------------- */
  useEffect(() => {
    setChat([
      {
        from: "bot",
        text: "👋 Salut ! Moi c’est **Nova**, ton guide Catalyseur Digital.\nAvant de commencer, peux-tu me dire ton prénom ? 😊",
      },
    ]);
  }, []);

  /* -----------------------------------------------------------
   🧠 3. Détection émotionnelle simple (analyse lexicale)
  ----------------------------------------------------------- */
  const detectEmotion = (message) => {
    const text = message.toLowerCase();
    if (/(peur|angoisse|flippé|stress|inquiet|inquiète)/.test(text)) return "peur";
    if (/(fatigué|épuisé|lassé|démotivé|épuisement|vide)/.test(text)) return "fatigue";
    if (/(colère|énervé|marre|frustré|déçu|ras le bol|encore un truc)/.test(text)) return "colere";
    return "neutre";
  };

  /* -----------------------------------------------------------
   💞 4. Ton empathique associé à chaque émotion détectée
  ----------------------------------------------------------- */
  const emotionPrefix = {
    peur:
      "Je comprends que ça puisse faire peur 💜. L’IA peut impressionner, mais je suis là pour t’aider à y voir clair, étape par étape.",
    fatigue:
      "Tu sembles fatigué(e) ou à bout 😔. Respire un peu — on va aborder ça calmement, sans pression. Laisse-moi t’aider à remettre un peu de lumière dans ton parcours.",
    colere:
      "Je sens un peu de frustration 😕. Et c’est ok. Tu n’es pas seul(e) à te sentir perdu(e) face à tous ces changements. On peut en parler sans jugement 💬.",
    neutre: "",
  };

  /* -----------------------------------------------------------
   🌐 5. Fonction d’envoi du message au webhook n8n
  ----------------------------------------------------------- */
  const sendToNova = async (message, history) => {
    const payload = {
      message,
      userName,
      userEmail,
      conversationId,
      // envoi des 6 derniers messages au format OpenAI
      history: history.map((m) => ({
        role: m.from === "user" ? "user" : "assistant",
        content: m.text,
      })),
    };

    const res = await fetch("https://n8n.optimize-insight.com/webhook/chatbot-catalyseur", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await res.json();
  };

  /* -----------------------------------------------------------
   🧩 6. Gestion principale des interactions (envoi message)
  ----------------------------------------------------------- */
  const handleSend = async (msg = null) => {
    const messageToSend = msg || input; // permet aussi l'envoi via les boutons de suggestion
    if (!messageToSend.trim()) return;

    const userMessage = { from: "user", text: messageToSend };
    setChat((prev) => [...prev, userMessage]);
    setInput("");
    setShowSuggestions(false);
    setLoading(true);

    try {
      let botReply = "";

      // 🧍 Étape 1 — Demande prénom
      if (!userName) {
        setUserName(messageToSend.trim());
        botReply =
          "Enchantée, " +
          messageToSend.trim() +
          " 🌟 ! Peux-tu maintenant me donner ton adresse email ?";
      }

      // ✉️ Étape 2 — Demande email
      else if (userName && !userEmail) {
        setUserEmail(messageToSend.trim());
        botReply =
          "Merci " +
          userName +
          " ✅ ! Dis-moi maintenant ce qui t’amène ici ou ce que tu veux explorer avec Catalyseur Digital.";
      }

      // 🤖 Étape 3 — Conversation normale (avec ton émotionnel)
      else {
        const emotion = detectEmotion(messageToSend); // analyse du ton
        const emotionIntro = emotionPrefix[emotion]; // récupère la phrase d’intro empathique
        const history = chat.slice(-6); // conserve 6 derniers échanges

        // Envoi au serveur n8n
        const data = await sendToNova(messageToSend, history);

        // Combine empathie + réponse IA
        botReply =
          (emotionIntro ? emotionIntro + "\n\n" : "") +
          (data.reply ||
            data ||
            "🤔 Je réfléchis encore à la meilleure réponse...");
      }

      // Ajoute la réponse de Nova dans le chat
      setChat((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (e) {
      console.error(e);
      setChat((prev) => [
        ...prev,
        {
          from: "bot",
          text: "⚠️ Oups, Nova rencontre un petit souci de connexion.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  /* -----------------------------------------------------------
   💬 7. Messages de suggestion au démarrage
  ----------------------------------------------------------- */
  const suggestions = [
    "J'ai 42 ans, je suis au chômage depuis 6 mois, je ne sais pas quoi faire...",
    "L'IA va prendre mon job, je suis flippé...",
    "Encore un truc qui promet la lune...",
  ];

  /* -----------------------------------------------------------
   🖥️ 8. Rendu complet du widget (structure visuelle)
  ----------------------------------------------------------- */
  return (
    <div className="fixed bottom-6 right-6 z-[50]">
      {/* 🌟 Bouton flottant d’ouverture */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          💬
        </motion.button>
      )}

      {/* 🪟 Fenêtre de chat animée */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-80 md:w-96 h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-indigo-100"
          >
            {/* 🧭 En-tête (barre supérieure) */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center font-semibold text-lg">
              <span>⚡ Nova — IA Catalyseur</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white text-xl font-bold"
              >
                ✖
              </button>
            </div>

            {/* 💬 Zone principale de messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 text-sm">
              {/* Affiche chaque message du chat */}
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
                    } shadow-sm whitespace-pre-line`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* 🔮 Suggestions initiales type ManyChat */}
              {showSuggestions && !userName && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-2 mt-2"
                >
                  {suggestions.map((s, i) => (
                    <motion.button
                      key={i}
                      onClick={() => handleSend(s)}
                      whileHover={{ scale: 1.02 }}
                      className="text-left text-sm bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-lg px-3 py-2 shadow-sm border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all"
                    >
                      {s}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {/* ⏳ Animation “Nova réfléchit...” */}
              {loading && (
                <motion.div
                  className="flex items-center gap-2 mt-2 text-slate-500 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Nova réfléchit</span>
                  <motion.span
                    className="flex space-x-1"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          delayChildren: 0,
                          staggerChildren: 0.2,
                          repeat: Infinity,
                        },
                      },
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 bg-slate-400 rounded-full"
                        variants={{
                          hidden: { opacity: 0.3, y: 0 },
                          visible: { opacity: 1, y: -3 },
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "reverse",
                          duration: 0.6,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.span>
                </motion.div>
              )}
            </div>

            {/* 🖊️ Zone d’entrée utilisateur */}
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
                onClick={() => handleSend()}
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
