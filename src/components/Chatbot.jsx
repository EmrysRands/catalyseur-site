import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([
    {
      from: "bot",
      text: "Bonjour 👋 Tu veux générer plus de leads, closer plus de deals, ou fidéliser tes clients ?",
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
        "https://automate.optimizeinsight.com/webhook/chatbot-neurosales",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );

      const data = await res.json();

      // n8n doit renvoyer un JSON avec { reply: "..." }
      const botReply = data.reply || data || "Je réfléchis...";



      setChat((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Désolé, une erreur est survenue." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      {/* Bouton flottant */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "linear-gradient(90deg, var(--color-gold), #f8e287)",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            fontSize: "24px",
          }}
        >
          💬
        </button>
      )}

      {/* Fenêtre de chat */}
      {open && (
        <div
          style={{
            width: "320px",
            maxHeight: "450px",
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* Header chatbot */}
          <div
            style={{
              background: "linear-gradient(90deg, var(--color-gold), #f8e287)",
              padding: "12px",
              fontWeight: "bold",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            💬 Chat NeuroSales
            <button
              onClick={() => setOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              fontSize: "0.95rem",
            }}
          >
            {chat.map((msg, i) => (
              <div
                key={i}
                style={{
                  margin: "8px 0",
                  textAlign: msg.from === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    background:
                      msg.from === "user"
                        ? "var(--color-gold)"
                        : "var(--color-lightgrey)",
                    color: msg.from === "user" ? "black" : "#333",
                    maxWidth: "80%",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {loading && (
              <div style={{ textAlign: "left", fontStyle: "italic" }}>
                Le bot écrit<span className="dots"></span>
              </div>
            )}
          </div>

          {/* Input utilisateur */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid #ddd",
              padding: "8px",
              background: "#fafafa",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écris ta réponse..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                padding: "8px",
                borderRadius: "8px",
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              style={{
                marginLeft: "8px",
                padding: "8px 12px",
                background: "var(--color-gold)",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
