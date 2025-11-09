import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function EspaceNova() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0A2540] to-[#1a1444] text-white px-6 md:px-16 py-[140px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Montserrat']" style={{ color: '#D4AF37' }}>
          💤 Espace Nova 3.0
        </h1>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Bienvenue dans ton espace personnel.<br />
          Ici, tu peux suivre ta <strong style={{ color: '#D4AF37' }}>TRANSFORMATION</strong> à travers les 4 Strates,  
          discuter avec Nova, et retrouver tes insights personnalisés.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Chat Nova */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-3 font-['Montserrat']" style={{ color: '#D4AF37' }}>
              🧠 Chat Nova
            </h2>
            <p className="text-gray-400 mb-4 text-sm">
              Continue ta conversation avec Nova, où que tu sois dans ton parcours 
              vers la <strong style={{ color: '#D4AF37' }}>CLARTÉ</strong>.
            </p>
            <iframe
              src="/nova"
              title="Chat Nova"
              className="w-full h-[500px] rounded-lg border border-[#D4AF37]/20"
            />
          </motion.div>

          {/* Progression */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-3 font-['Montserrat']" style={{ color: '#D4AF37' }}>
              📈 Ta Progression
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Construis ton <strong style={{ color: '#D4AF37' }}>PONT</strong> vers la <strong style={{ color: '#D4AF37' }}>LIBÉRATION</strong>, 
              une strate à la fois.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 bg-[#0A2540]/50 p-3 rounded-lg border border-[#D4AF37]/20">
                <span className="text-green-400">✅</span>
                <div className="text-left">
                  <p className="font-semibold text-white">Strate 1 — Réinvention</p>
                  <p className="text-xs text-gray-400">CLARTÉ retrouvée</p>
                </div>
              </li>
              <li className="flex items-center gap-3 bg-[#0A2540]/50 p-3 rounded-lg border border-[#D4AF37]/20">
                <span className="text-blue-400">🔄</span>
                <div className="text-left">
                  <p className="font-semibold text-white">Strate 2 — Automatisation</p>
                  <p className="text-xs text-gray-400">SYSTÈME en cours</p>
                </div>
              </li>
              <li className="flex items-center gap-3 bg-[#0A2540]/50 p-3 rounded-lg border border-white/10 opacity-50">
                <span>🔒</span>
                <div className="text-left">
                  <p className="font-semibold text-gray-400">Strate 3 — Application</p>
                  <p className="text-xs text-gray-500">PREUVE à débloquer</p>
                </div>
              </li>
              <li className="flex items-center gap-3 bg-[#0A2540]/50 p-3 rounded-lg border border-white/10 opacity-50">
                <span>🔒</span>
                <div className="text-left">
                  <p className="font-semibold text-gray-400">Strate 4 — Liberté</p>
                  <p className="text-xs text-gray-500">LIBÉRATION à débloquer</p>
                </div>
              </li>
            </ul>
            <button
              onClick={() => navigate("/strate-automatisation")}
              className="mt-6 w-full text-black font-bold px-6 py-3 rounded-lg transition font-['Montserrat']"
              style={{ backgroundColor: '#D4AF37' }}
            >
              Continuer ma TRANSFORMATION
            </button>
          </motion.div>
        </div>

        {/* Note inspirante */}
        <motion.div
          className="mt-12 bg-[#0A2540]/40 border border-[#D4AF37]/30 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-sm italic text-gray-300 leading-relaxed">
            💡 Chaque strate que tu complètes construit le <strong style={{ color: '#D4AF37' }}>PONT</strong> vers 
            la suivante. Continue à libérer ton <strong style={{ color: '#D4AF37' }}>ÉNERGIE</strong>, 
            pas après pas.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
