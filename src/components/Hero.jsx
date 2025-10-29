import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-[120px] flex flex-col items-center justify-center text-center px-6 
                bg-gradient-to-b from-[#0f172a] via-[#1e1a4d] to-[#1a1444] text-white overflow-hidden"
    >

      {/* Halo lumineux d'arrière-plan */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-600/20 via-blue-500/10 to-transparent blur-3xl opacity-70 pointer-events-none"></div>

      {/* Particules flottantes (optionnel) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/50 rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-cyan-400/50 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl">
        {/* Badge "Nouveau" */}
        <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-5 py-2 rounded-full text-sm shadow-lg">
            ✨ Catalyseur Digital 3.0 • Parcours Complet
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          De la <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Surcharge Digitale</span>
          <br />
          à la <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Liberté Totale</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Le parcours progressif en <strong className="text-yellow-400">4 Strates</strong> pour 
          transformer le chaos digital en système automatisé et atteindre la liberté digitale.
        </motion.p>

        {/* Statistiques clés */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-yellow-400">77</p>
            <p className="text-sm text-gray-400">Fiches Nova</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan-400">4</p>
            <p className="text-sm text-gray-400">Strates Progressives</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-green-400">100%</p>
            <p className="text-sm text-gray-400">Gratuit jusqu'à Strate 3</p>
          </div>
        </motion.div>

        {/* CTA Principal */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button
            onClick={() => navigate('/strate-reinvention')}
            className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] transition-all text-lg"
          >
            <span className="relative z-10">🚀 Commencer le Parcours (Gratuit)</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </button>

          <button
            onClick={() => {
              const novaSection = document.getElementById('nova');
              if (novaSection) novaSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition text-lg"
          >
            🤖 Faire le Diagnostic Nova
          </button>
        </motion.div>

        {/* Note rassurante */}
        <motion.p
          className="text-sm text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          🔒 Pas de carte bancaire • 36 Fiches Nova offertes dès l'inscription
        </motion.p>

        {/* Parcours Visuel */}
        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">
            📍 Ton Parcours en 4 Étapes
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Strate 1 */}
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">🧠</span>
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  GRATUIT
                </span>
              </div>
              <h4 className="text-lg font-bold text-blue-300 mb-2">
                1. Réinvention
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Construis ta <strong>VISION</strong>
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✓ 36 Fiches Nova</li>
                <li>✓ Le Nouveau Riche</li>
                <li>✓ Actifs Digitaux</li>
              </ul>
            </div>

            {/* Strate 2 */}
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/30 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">⚙️</span>
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  GRATUIT
                </span>
              </div>
              <h4 className="text-lg font-bold text-purple-300 mb-2">
                2. Automatisation
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Installe ton <strong>SYSTÈME</strong>
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✓ GTD + Atomic Habits</li>
                <li>✓ Blueprint n8n</li>
                <li>✓ 16 Fiches Organisation</li>
              </ul>
            </div>

            {/* Strate 3 */}
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">🧩</span>
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  GRATUIT
                </span>
              </div>
              <h4 className="text-lg font-bold text-orange-300 mb-2">
                3. Application
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Obtiens la <strong>PREUVE</strong>
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✓ 2 Démos interactives</li>
                <li>✓ Micro-succès garanti</li>
                <li>✓ 17 Fiches IA/Auto</li>
              </ul>
            </div>

            {/* Strate 4 */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">🏆</span>
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  PAYANT
                </span>
              </div>
              <h4 className="text-lg font-bold text-yellow-300 mb-2">
                4. Liberté
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Construis le <strong>DURABLE</strong>
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✓ Bilan Solopreneur</li>
                <li>✓ Tunnel d'Exclusivité</li>
                <li>✓ Accompagnement 1:1</li>
              </ul>
            </div>
          </div>

          {/* Note progression */}
          <div className="mt-6 bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg">
            <p className="text-purple-300 text-sm font-semibold mb-1">
              💡 Parcours Progressif
            </p>
            <p className="text-gray-300 text-xs">
              Chaque strate débloque la suivante. Commence par la Strate 1 (gratuite) 
              et progresse à ton rythme jusqu'à l'accompagnement personnalisé.
            </p>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span>4.8/5 (2,547 avis)</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div>
            <span className="text-green-400 font-semibold">+12,400</span> solopreneurs transformés
          </div>
          <span className="hidden sm:block">•</span>
          <div>
            <span className="text-cyan-400 font-semibold">87%</span> atteignent la Strate 3
          </div>
        </motion.div>
      </div>

      {/* Flèche de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <button
          onClick={() => {
            const featuresSection = document.getElementById('features');
            if (featuresSection) featuresSection.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-gray-400 hover:text-white transition"
          aria-label="Scroll vers les strates"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </motion.div>
    </section>
  );
}
