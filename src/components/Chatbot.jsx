import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  // 🧱 États principaux
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [askedIdentity, setAskedIdentity] = useState(false);
  const [conversationId] = useState(() => crypto.randomUUID());
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [messageCount, setMessageCount] = useState(0);

  // 💬 Message d'accueil initial
  useEffect(() => {
    setChat([
      {
        from: "bot",
        text: "👋 Salut ! Moi c'est **Nova**, ton guide Catalyseur Digital.\n\nJe suis là pour t'accompagner face aux défis de l'IA et de la transformation professionnelle.\n\n**Dis-moi, où en es-tu aujourd'hui ?** 💬",
      },
    ]);
  }, []);

  // 🔍 Détection si l'utilisateur dit juste bonjour
  const isGreeting = (msg) => {
    const text = msg.trim().toLowerCase();
    return /^(salut|bonjour|coucou|hey|yo|hello|bonsoir)$/.test(text);
  };

  // 🧠 Détection émotionnelle
  const detectEmotion = (message) => {
    const text = message.toLowerCase();
    if (/(peur|angoisse|flippé|stress|inquiet|inquiète)/.test(text)) return "peur";
    if (/(fatigué|épuisé|lassé|démotivé|épuisement|vide)/.test(text)) return "fatigue";
    if (/(colère|énervé|marre|frustré|déçu|ras le bol|encore un truc)/.test(text)) return "colere";
    return "neutre";
  };

  // 💞 Ton empathique selon émotion détectée
  const emotionPrefix = {
    peur:
      "Je comprends que ça puisse faire peur 💜. L'IA peut impressionner, mais je suis là pour t'aider à y voir clair, étape par étape.",
    fatigue:
      "Tu sembles fatigué(e) ou à bout 😔. Respire un peu — on va aborder ça calmement, sans pression. Laisse-moi t'aider à remettre un peu de lumière dans ton parcours.",
    colere:
      "Je sens un peu de frustration 😕. Et c'est ok. Tu n'es pas seul(e) à te sentir perdu(e) face à tous ces changements. On peut en parler sans jugement 💬.",
    neutre: "",
  };

  // 🌐 Envoi au webhook n8n (standard + timeout intelligent)
  const sendToNova = async (message, history) => {
    const payload = {
      message,
      userName,
      userEmail,
      conversationId,
      history: history.map((m) => ({
        role: m.from === "user" ? "user" : "assistant",
        content: m.text,
      })),
    };

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000); // ⏱️ 30 secondes max

      // ⏳ Message automatique après 15 secondes
      const delayMessage = setTimeout(() => {
        setChat((prev) => [
          ...prev,
          {
            from: "bot",
            text: "⏳ Nova met un peu plus de temps que prévu... merci de ta patience 🙏",
          },
        ]);
      }, 15000);

      const res = await fetch("https://automate.optimizeinsight.com/webhook/chatbot-catalyseur", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeout);
      clearTimeout(delayMessage);

      const data = await res.json();
      if (data.reply) return data.reply;
      if (data[0]?.json?.reply) return data[0].json.reply;
      return "🤔 Je n'ai pas reçu de réponse de Nova, essaye de reformuler ton message.";
    } catch (err) {
      console.error("Erreur Nova →", err);
      return "⚠️ Nova rencontre un petit souci de connexion.";
    }
  };


  // 🧩 Gestion de l'envoi
  const handleSend = async (msg = null) => {
    const messageToSend = msg || input;
    if (!messageToSend.trim()) return;

    const userMessage = { from: "user", text: messageToSend };
    setChat((prev) => [...prev, userMessage]);
    setInput("");
    setShowSuggestions(false);
    setLoading(true);
    setMessageCount((prev) => prev + 1);

    try {
      let botReply = "";

      // 🎯 Cas spécial : salutations simples
      if (isGreeting(messageToSend)) {
        botReply =
          "Hello 👋 !\n\n**Tu veux qu'on discute librement ou tu préfères que je te guide** sur comment l'IA peut t'aider à rebondir professionnellement ? 🚀";
      }

      // ⚡ Étape 1 : conversation émotionnelle
      else if (!askedIdentity && messageCount < 2) {
        const emotion = detectEmotion(messageToSend);
        const emotionIntro = emotionPrefix[emotion];
        const history = chat.slice(-6);
        const data = await sendToNova(messageToSend, history);

        botReply =
          (emotionIntro ? emotionIntro + "\n\n" : "") +
          (data.reply || data || "🤔 Je réfléchis encore à la meilleure réponse...");

        if (messageCount >= 1) {
          setTimeout(() => {
            setChat((prev) => [
              ...prev,
              {
                from: "bot",
                text:
                  "Au fait, **j'aimerais mieux te connaître pour personnaliser mon accompagnement** 🎯\n\nC'est quoi ton prénom ? 😊",
              },
            ]);
            setAskedIdentity(true);
          }, 800);
        }
      }

      // 👤 Étape 2 : prénom
      else if (askedIdentity && !userName) {
        setUserName(messageToSend.trim());
        botReply = `Super, **${messageToSend.trim()}** ! 🌟\n\nPour qu'on reste en contact et que je puisse t'envoyer des ressources utiles, **tu peux me donner ton email ?** ✉️`;
      }

      // ✉️ Étape 3 : email
      else if (userName && !userEmail) {
        setUserEmail(messageToSend.trim().toLowerCase());
        botReply = `Parfait ${userName}, merci ! ✅\n\nMaintenant dis-moi : **qu'est-ce qui t'amène ici aujourd'hui ?**\n\n💡 Quelques pistes :\n• Rebondir professionnellement\n• Découvrir comment utiliser l'IA\n• Automatiser ton activité`;
      }

      // 🤖 Étape 4 : conversation complète
      else {
        const emotion = detectEmotion(messageToSend);
        const emotionIntro = emotionPrefix[emotion];
        const history = chat.slice(-6);
        const data = await sendToNova(messageToSend, history);

        botReply =
          (emotionIntro ? emotionIntro + "\n\n" : "") +
          (data.reply || data || "🤔 Je réfléchis encore à la meilleure réponse...");
      }

      setChat((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (e) {
      console.error(e);
      setChat((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Oups, Nova rencontre un petit souci de connexion." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 💬 Suggestions dynamiques
  const suggestionSets = [
    [
      "L'IA va remplacer mon job, ça m'angoisse...",
      "Je ne comprends rien à ChatGPT et tout le monde en parle",
      "J'ai peur de devenir obsolète dans mon métier",
    ],
    [
      "Je suis en reconversion, par où commencer ?",
      "Mon secteur est en crise, je dois me réinventer",
      "Je cherche à pivoter vers un métier d'avenir",
    ],
    [
      "Encore une formation qui promet la lune...",
      "J'ai tout essayé, je ne crois plus en rien",
      "Je suis submergé(e), je n'ai plus d'énergie",
    ],
    [
      "Je veux automatiser mes tâches répétitives",
      "Comment l'IA peut m'aider concrètement ?",
      "Je veux gagner du temps dans mon activité",
    ],
    [
      "C'est quoi Catalyseur Digital exactement ?",
      "Je débute complètement avec l'IA",
      "Je ne sais même pas par où commencer...",
    ],
  ];

  const [suggestions] = useState(() => {
    const randomIndex = Math.floor(Math.random() * suggestionSets.length);
    return suggestionSets[randomIndex];
  });

  // 🖥️ Rendu visuel
  return (
    <div className="fixed bottom-6 right-6 z-[50]">
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-80 md:w-96 h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-indigo-100"
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
                    } shadow-sm whitespace-pre-line`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {showSuggestions && !userName && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-2 mt-2"
                >
                  <p className="text-xs text-slate-500 mb-1 italic">
                    💡 Quelques exemples pour démarrer :
                  </p>
                  {suggestions.map((s, i) => (
                    <motion.button
                      key={i}
                      onClick={() => handleSend(s)}
                      whileHover={{ scale: 1.02 }}
                      className="text-left text-sm bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-lg px-3 py-2 shadow-sm border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all"
                    >
                      {s}
                    </motion.button>
                  ))}
                </motion.div>
              )}

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
