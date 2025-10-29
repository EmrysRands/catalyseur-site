import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function EspaceNova() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1a1444] text-white px-6 md:px-16 py-[140px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          👤 Espace Nova 3.0
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Bienvenue dans ton espace personnel.  
          Ici, tu pourras suivre ta progression à travers les 4 Strates,  
          discuter avec Nova, et retrouver tes insights personnalisés.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Chat Nova */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 p-6 rounded-xl shadow-lg border border-white/10"
          >
            <h2 className="text-2xl font-semibold mb-3">🧠 Chat Nova</h2>
            <p className="text-gray-400 mb-4">
              Continue ta conversation avec Nova ici, où que tu sois dans ton parcours.
            </p>
            <iframe
              src="/nova"
              title="Chat Nova"
              className="w-full h-[500px] rounded-lg border border-white/10"
            />
          </motion.div>

          {/* Progression */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 p-6 rounded-xl shadow-lg border border-white/10"
          >
            <h2 className="text-2xl font-semibold mb-3">📈 Progression</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>✅ Strate 1 — Réinvention</li>
              <li>🔄 Strate 2 — Automatisation</li>
              <li>🔒 Strate 3 — Application</li>
              <li>🔒 Strate 4 — Liberté</li>
            </ul>
            <button
              onClick={() => navigate("/strate-automatisation")}
              className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-6 py-2 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition"
            >
              Continuer mon parcours
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
