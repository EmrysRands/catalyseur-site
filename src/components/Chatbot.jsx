import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotOptimized() {
  // 🆔 User ID stable (fingerprint)
  const [userId, setUserId] = useState(() => {
    let id = localStorage.getItem("nova_user_id");
    if (!id) {
      id = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("nova_user_id", id);
    }
    return id;
  });

  useEffect(() => {
    const hasWelcomed = localStorage.getItem(`nova_welcome_${userId}`);
    if (!hasWelcomed) {
      setTimeout(() => {
        setMessages([
          {
            id: Date.now(),
            role: "assistant",
            content:
              "👋 Salut ! Moi c’est **Nova**, ton guide Catalyseur Digital.\n\nJe t’aide à faire le tri entre confusion, opportunités et vraie transformation à l’ère de l’IA.\n\nDis-moi, **où en es-tu aujourd’hui ?** 💬\n\nMais avant ça, comment t’appelles-tu ? 😊",
            timestamp: new Date().toISOString(),
          },
        ]);
        localStorage.setItem(`nova_welcome_${userId}`, "true");
      }, 400);
    }
  }, [userId]);

  // 🧱 États principaux
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [sessionStarted] = useState(Date.now());
  const messagesEndRef = useRef(null);
  const retryCountRef = useRef(0);

  // 🎯 Configuration API
  const API_CONFIG = {
    endpoint: "https://automate.optimizeinsight.com/webhook/nova-chat",
    timeout: 25000,
    maxRetries: 2,
    retryDelay: 2000,
  };

  // 💾 Cache
  useEffect(() => {
    const cached = localStorage.getItem(`nova_chat_${userId}`);
    if (cached) {
      try {
        setMessages(JSON.parse(cached).slice(-50));
      } catch {
        localStorage.removeItem(`nova_chat_${userId}`);
      }
    }
  }, [userId]);

  useEffect(() => {
    if (messages.length > 0)
      localStorage.setItem(`nova_chat_${userId}`, JSON.stringify(messages));
  }, [messages, userId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendToAPI = async (message, retryCount = 0) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);
    try {
      const response = await fetch(API_CONFIG.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-User-ID": userId,
          "X-Session-Start": sessionStarted.toString(),
        },
        body: JSON.stringify({
          user_id: userId,
          message,
          platform: "web",
          timestamp: new Date().toISOString(),
          metadata: {
            user_agent: navigator.userAgent,
            screen_width: window.innerWidth,
            referrer: document.referrer || "direct",
          },
        }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      let botReply =
        data.response ||
        data.reply ||
        data?.[0]?.json?.response ||
        data.message;
      if (!botReply) throw new Error("Format de réponse invalide");
      return botReply;
    } catch (err) {
      clearTimeout(timeoutId);
      if (retryCount < API_CONFIG.maxRetries) {
        const delay = API_CONFIG.retryDelay * Math.pow(2, retryCount);
        await new Promise((r) => setTimeout(r, delay));
        return sendToAPI(message, retryCount + 1);
      }
      throw new Error(
        err.name === "AbortError"
          ? "⏱️ Nova prend trop de temps à répondre."
          : "🔌 Connexion impossible."
      );
    }
  };

  const handleSend = async (customMessage = null) => {
    const messageToSend = customMessage || input.trim();
    if (!messageToSend) return;
    const userMsg = {
      id: Date.now(),
      role: "user",
      content: messageToSend,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const regexPrenom = /(je m'appelle|moi c'?est|je suis|mon nom est)\s+([a-zA-ZÀ-ÿ\-]+)/i;
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const matchPrenom = messageToSend.match(regexPrenom);
      const isEmail = regexEmail.test(messageToSend.trim());
      let botReply;
      if (matchPrenom) {
        const prenom = matchPrenom[2].trim();
        localStorage.setItem("nova_prenom", prenom);
        botReply = `Enchanté **${prenom}** 😄 ! Et ton email, pour que je t’envoie ton diagnostic IA personnalisé ? ✉️`;
      } else if (isEmail) {
        const prenom = localStorage.getItem("nova_prenom") || "Ami";
        localStorage.setItem("nova_email", messageToSend.trim());
        botReply = `Parfait ${prenom} ! ✅\nJe prépare ton espace personnel...`;
        await sendToAPI(
          JSON.stringify({
            user_id: userId,
            message: `new_user:${prenom}:${messageToSend.trim()}`,
            platform: "web",
            timestamp: new Date().toISOString(),
          })
        );
      } else {
        botReply = await sendToAPI(messageToSend);
      }
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: botReply,
          timestamp: new Date().toISOString(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: "assistant",
          content: "⚠️ Erreur de connexion.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
    if (lastUserMessage) handleSend(lastUserMessage.content);
  };

  const handleReset = () => {
    if (window.confirm("Réinitialiser la conversation ?")) {
      setMessages([]);
      setShowSuggestions(true);
      localStorage.removeItem(`nova_chat_${userId}`);
      setTimeout(() => {
        setMessages([
          {
            id: Date.now(),
            role: "assistant",
            content:
              "👋 Salut ! Moi c'est **Nova**, ton guide Catalyseur Digital.\n\nJe suis là pour t'accompagner face aux défis de l'IA et de la transformation professionnelle.\n\n**Dis-moi, où en es-tu aujourd'hui ?** 💬",
            timestamp: new Date().toISOString(),
          },
        ]);
      }, 300);
    }
  };

  const suggestions = [
    "Je veux gagner du temps avec l'IA",
    "L'IA va remplacer mon job...",
    "Je suis en reconversion",
    "Comment automatiser mes tâches ?",
    "C'est quoi Catalyseur Digital ?",
  ];

  const renderMessage = (text) =>
    text
      .split("\n")
      .map((line, i) => {
        line = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
        line = line.replace(/\*(.+?)\*/g, "<em>$1</em>");
        line = line.replace(
          /\[(.+?)\]\((.+?)\)/g,
          '<a href="$2" target="_blank" class="text-blue-500 underline">$1</a>'
        );
        return <span key={i} dangerouslySetInnerHTML={{ __html: line }} />;
      })
      .reduce((acc, curr, i) => [...acc, curr, <br key={`br-${i}`} />], [])
      .slice(0, -1);

  // 🧩 Conteneur responsive ajouté ici
  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {/* 🔘 Bouton flottant */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-3xl shadow-xl hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          💬
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center animate-pulse">
            1
          </span>
        </motion.button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-purple-200"
          >
            {/* ... tout ton code inchangé ... */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
