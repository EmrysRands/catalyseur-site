import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotOptimized() {
  // 🆔 User ID stable (fingerprint)
  const [userId, setUserId] = useState(() => {
    let id = localStorage.getItem("nova_user_id");
    if (!id) {
      // Génération d'un ID stable basé sur navigateur
      id = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("nova_user_id", id);
    }
    return id;
  });

  // 🧱 États principaux (minimalistes)
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  
  // 📊 Métriques (pour analytics)
  const [sessionStarted] = useState(Date.now());
  const messagesEndRef = useRef(null);
  const retryCountRef = useRef(0);

  // 🎯 Configuration API
  const API_CONFIG = {
    endpoint: "https://automate.optimizeinsight.com/webhook/nova-chat",
    timeout: 25000,
    maxRetries: 2,
    retryDelay: 2000
  };

  // 💾 Charger l'historique depuis localStorage (cache uniquement)
  useEffect(() => {
    const cached = localStorage.getItem(`nova_chat_${userId}`);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        // Limiter à 50 derniers messages pour éviter overflow
        setMessages(parsed.slice(-50));
      } catch (e) {
        console.error("Cache corrompu:", e);
        localStorage.removeItem(`nova_chat_${userId}`);
      }
    }
  }, [userId]);

  // 💾 Sauvegarder dans cache local
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(`nova_chat_${userId}`, JSON.stringify(messages));
    }
  }, [messages, userId]);

  // 📜 Auto-scroll vers le bas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // 🔄 Fonction d'envoi avec retry et exponential backoff
  const sendToAPI = async (message, retryCount = 0) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

    try {
      const response = await fetch(API_CONFIG.endpoint, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-User-ID": userId,
          "X-Session-Start": sessionStarted.toString()
        },
        body: JSON.stringify({
          user_id: userId,
          message: message,
          platform: "web",
          timestamp: new Date().toISOString(),
          metadata: {
            user_agent: navigator.userAgent,
            screen_width: window.innerWidth,
            referrer: document.referrer || "direct"
          }
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      // ✅ Parser la réponse N8N (flexible)
      let botReply = null;
      
      // Format 1: { success: true, response: "..." }
      if (data.success && data.response) {
        botReply = data.response;
      }
      // Format 2: { reply: "..." }
      else if (data.reply) {
        botReply = data.reply;
      }
      // Format 3: [{ json: { response: "..." } }]
      else if (Array.isArray(data) && data[0]?.json?.response) {
        botReply = data[0].json.response;
      }
      // Format 4: { message: "..." }
      else if (data.message) {
        botReply = data.message;
      }

      if (!botReply) {
        console.error("Format de réponse inconnu:", data);
        throw new Error("Format de réponse invalide");
      }

      retryCountRef.current = 0; // Reset retry count on success
      return botReply;

    } catch (err) {
      clearTimeout(timeoutId);

      // 🔄 Retry logic avec exponential backoff
      if (retryCount < API_CONFIG.maxRetries) {
        const delay = API_CONFIG.retryDelay * Math.pow(2, retryCount);
        console.log(`Retry ${retryCount + 1}/${API_CONFIG.maxRetries} après ${delay}ms`);
        
        await new Promise(resolve => setTimeout(resolve, delay));
        return sendToAPI(message, retryCount + 1);
      }

      // 🚨 Erreur finale après tous les retries
      if (err.name === "AbortError") {
        throw new Error("⏱️ Nova prend trop de temps à répondre. Vérifie ta connexion.");
      }
      
      throw new Error(
        err.message.includes("Failed to fetch")
          ? "🔌 Impossible de contacter Nova. Vérifie ta connexion internet."
          : `⚠️ ${err.message}`
      );
    }
  };

  // 📤 Envoi de message
  const handleSend = async (customMessage = null) => {
    const messageToSend = customMessage || input.trim();
    if (!messageToSend) return;

    // Ajouter message user immédiatement
    const userMsg = {
      id: Date.now(),
      role: "user",
      content: messageToSend,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setShowSuggestions(false);
    setLoading(true);
    setError(null);

    try {
      // 🚀 Appel API (toute la logique est côté N8N)
      const botReply = await sendToAPI(messageToSend);

      // Ajouter réponse bot
      const botMsg = {
        id: Date.now() + 1,
        role: "assistant",
        content: botReply,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, botMsg]);

    } catch (err) {
      console.error("Erreur d'envoi:", err);
      
      // Message d'erreur user-friendly
      const errorMsg = {
        id: Date.now() + 1,
        role: "assistant",
        content: err.message,
        isError: true,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, errorMsg]);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔄 Réessayer le dernier message
  const handleRetry = () => {
    const lastUserMessage = [...messages]
      .reverse()
      .find(m => m.role === "user");
    
    if (lastUserMessage) {
      // Retirer les messages d'erreur
      setMessages(prev => prev.filter(m => !m.isError));
      handleSend(lastUserMessage.content);
    }
  };

  // 🧹 Réinitialiser la conversation
  const handleReset = () => {
    if (window.confirm("Réinitialiser la conversation ? L'historique sera effacé.")) {
      setMessages([]);
      setShowSuggestions(true);
      localStorage.removeItem(`nova_chat_${userId}`);
      
      // Message d'accueil
      setTimeout(() => {
        setMessages([{
          id: Date.now(),
          role: "assistant",
          content: "👋 Salut ! Moi c'est **Nova**, ton guide Catalyseur Digital.\n\nJe suis là pour t'accompagner face aux défis de l'IA et de la transformation professionnelle.\n\n**Dis-moi, où en es-tu aujourd'hui ?** 💬",
          timestamp: new Date().toISOString()
        }]);
      }, 300);
    }
  };

  // 💬 Suggestions dynamiques (simplifiées)
  const suggestions = [
    "Je veux gagner du temps avec l'IA",
    "L'IA va remplacer mon job...",
    "Je suis en reconversion",
    "Comment automatiser mes tâches ?",
    "C'est quoi Catalyseur Digital ?"
  ];

  // 🎨 Rendu du message avec markdown basique
  const renderMessage = (text) => {
    return text
      .split('\n')
      .map((line, i) => {
        // Gras **texte**
        line = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        // Italique *texte*
        line = line.replace(/\*(.+?)\*/g, '<em>$1</em>');
        // Liens [texte](url)
        line = line.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" class="text-blue-500 underline">$1</a>');
        
        return <span key={i} dangerouslySetInnerHTML={{ __html: line }} />;
      })
      .reduce((acc, curr, i) => [...acc, curr, <br key={`br-${i}`} />], [])
      .slice(0, -1); // Retirer dernier <br>
  };

  // 🖥️ Rendu principal
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* 🔘 Bouton flottant */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-3xl shadow-xl hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Ouvrir le chat Nova"
        >
          💬
          {/* Badge notification (optionnel) */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center animate-pulse">
            1
          </span>
        </motion.button>
      )}

      {/* 💬 Fenêtre de chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-purple-200"
          >
            {/* 📌 Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="font-bold text-lg">Nova</div>
                  <div className="text-xs text-blue-100">IA Catalyseur Digital</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  className="text-white/80 hover:text-white transition p-1"
                  title="Réinitialiser"
                >
                  🔄
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white text-xl font-bold transition"
                  title="Fermer"
                >
                  ✖
                </button>
              </div>
            </div>

            {/* 💬 Zone de messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-slate-50 to-slate-100">
              {messages.length === 0 && (
                <div className="text-center text-slate-500 mt-8">
                  <div className="text-5xl mb-4">👋</div>
                  <p className="text-sm">Démarre une conversation avec Nova !</p>
                </div>
              )}

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`mb-3 flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none shadow-md"
                        : msg.isError
                        ? "bg-red-50 border-2 border-red-300 text-red-700 rounded-bl-none"
                        : "bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm"
                    }`}
                  >
                    {renderMessage(msg.content)}
                    {msg.isError && (
                      <button
                        onClick={handleRetry}
                        className="mt-2 text-xs underline hover:no-underline"
                      >
                        Réessayer
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* 💡 Suggestions */}
              {showSuggestions && messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-2 mt-4"
                >
                  <p className="text-xs text-slate-500 mb-1 font-medium">
                    💡 Quelques idées pour démarrer :
                  </p>
                  {suggestions.map((s, i) => (
                    <motion.button
                      key={i}
                      onClick={() => handleSend(s)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-left text-sm bg-white text-slate-700 rounded-xl px-4 py-3 shadow-sm border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all"
                    >
                      {s}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {/* ⏳ Loading */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-3 mt-3 text-slate-500 italic text-sm"
                >
                  <span>Nova réfléchit</span>
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-purple-400 rounded-full"
                        animate={{
                          y: [0, -8, 0],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: i * 0.15
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ⌨️ Input */}
            <div className="border-t-2 border-slate-200 bg-white p-3 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écris ici..."
                disabled={loading}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-slate-700 text-sm disabled:bg-slate-100 disabled:cursor-not-allowed"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <motion.button
                onClick={() => handleSend()}
                disabled={loading || !input.trim()}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
              >
                ➤
              </motion.button>
            </div>

            {/* 🔒 Footer privacy */}
            <div className="bg-slate-50 px-3 py-2 text-center text-xs text-slate-500 border-t border-slate-200">
              🔒 Tes données sont sécurisées • User ID: {userId.slice(-8)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}