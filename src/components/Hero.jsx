import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-[140px] flex flex-col items-center justify-center text-center px-6 
                bg-gradient-to-b from-[#0f172a] via-[#1e1a4d] to-[#1a1444] text-white overflow-hidden"
    >

      {/* Halo lumineux d'arrière-plan */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-600/20 via-blue-500/10 to-transparent blur-3xl opacity-70 pointer-events-none"></div>

      {/* Particules flottantes */}
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
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight font-['Montserrat']"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-white">Tu as essayé plein de trucs,</span>
          <br />
          <span style={{ color: '#C4322A' }}>
            mais tu ne sais plus ce qui marche.
          </span>
        </motion.h1>

        {/* Phrase d'intention - NOUVEAU */}
        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Ce que tu vas découvrir ici, c'est comment reprendre le contrôle 
          sur ton <strong style={{ color: '#D4AF37' }}>ÉNERGIE</strong>, 
          ton temps et ton impact.
        </motion.p>

        {/* Sous-titre avec les 4 besoins - CITATIONS EXACTES */}
        <motion.div
          className="text-left max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-lg md:text-xl text-slate-300 mb-6 text-center leading-relaxed">
            Avant de vouloir "scaler" ou "la liberté digitale",<br />
            tu veux d'abord :
          </p>

          <div className="space-y-4 bg-[#0A2540]/30 backdrop-blur-md border border-[#D4AF37]/20 rounded-2xl p-6">
            {/* Besoin 1 */}
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-1" style={{ color: '#D4AF37' }}>1.</span>
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ color: '#D4AF37' }}>Arrêter de t'éparpiller</h3>
                <p className="text-sm text-gray-400 italic">
                  "J'ai essayé plein de trucs, mais je ne sais plus ce qui marche."
                </p>
              </div>
            </div>

            {/* Besoin 2 */}
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-1" style={{ color: '#D4AF37' }}>2.</span>
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ color: '#D4AF37' }}>Avoir un plan clair et mesurable</h3>
                <p className="text-sm text-gray-400 italic">
                  "Dis-moi quoi faire chaque jour pour avancer vraiment."
                </p>
              </div>
            </div>

            {/* Besoin 3 */}
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-1" style={{ color: '#D4AF37' }}>3.</span>
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ color: '#D4AF37' }}>Voir un résultat concret</h3>
                <p className="text-sm text-gray-400 italic">
                  "Je veux prouver que je peux créer un revenu, même petit."
                </p>
              </div>
            </div>

            {/* Besoin 4 */}
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-1" style={{ color: '#D4AF37' }}>4.</span>
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ color: '#D4AF37' }}>Ressentir de la cohérence</h3>
                <p className="text-sm text-gray-400 italic">
                  "Je veux que tout ce que je fais ait enfin du sens."
                </p>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-center text-slate-200 mt-6 font-semibold leading-relaxed">
            Le problème ?<br />
            <span style={{ color: '#D4AF37' }}>Ce n'est pas toi.</span> C'est que tu n'as pas de <span style={{ color: '#D4AF37' }}>SYSTÈME</span>.
          </p>
        </motion.div>

        {/* Promesse avec mots-clés intégrés */}
        <motion.div
          className="bg-[#0A2540]/30 backdrop-blur-md border border-[#D4AF37]/30 rounded-2xl p-8 max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center font-['Montserrat']" style={{ color: '#D4AF37' }}>
            En 30 jours, je vais te révéler comment :
          </h2>

          <div className="space-y-5 text-left">
            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border-l-4" style={{ borderColor: '#D4AF37' }}>
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">
                  Retrouver la <span style={{ color: '#D4AF37' }}>CLARTÉ</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Fini le chaos. Tu sais ce qui compte vraiment et où concentrer ton <span style={{ color: '#D4AF37' }}>ÉNERGIE</span>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border-l-4" style={{ borderColor: '#D4AF37' }}>
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">
                  Installer ton <span style={{ color: '#D4AF37' }}>SYSTÈME</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Un plan quotidien qui libère ton temps et te dit exactement quoi faire.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border-l-4" style={{ borderColor: '#D4AF37' }}>
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">
                  Obtenir la <span style={{ color: '#D4AF37' }}>PREUVE</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Ta 1ère <span style={{ color: '#D4AF37' }}>TRANSFORMATION</span> concrète en 48h. Pas dans 6 mois.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border-l-4" style={{ borderColor: '#D4AF37' }}>
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">
                  Construire le <span style={{ color: '#D4AF37' }}>PONT</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Entre ton chaos actuel et ta <span style={{ color: '#D4AF37' }}>LIBÉRATION</span> digitale.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-300 text-sm leading-relaxed">
              Sans devenir développeur. Sans passer des mois à apprendre.<br />
              <strong style={{ color: '#D4AF37' }}>Juste un SYSTÈME clair, étape par étape.</strong>
            </p>
          </div>
        </motion.div>

        {/* Statistiques clés */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-center">
            <p className="text-4xl font-bold font-['Montserrat']" style={{ color: '#D4AF37' }}>30</p>
            <p className="text-sm text-gray-400">Jours pour la CLARTÉ</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold font-['Montserrat']" style={{ color: '#D4AF37' }}>4</p>
            <p className="text-sm text-gray-400">TRANSFORMATIONS Progressives</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold font-['Montserrat']" style={{ color: '#D4AF37' }}>100%</p>
            <p className="text-sm text-gray-400">Gratuit jusqu'à Strate 3</p>
          </div>
        </motion.div>

        {/* CTA Principal */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <button
            onClick={() => {
              const novaSection = document.getElementById('nova');
              if (novaSection) novaSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] transition-all text-lg"
          >
            <span className="relative z-10">🚀 Faire le Diagnostic Nova (2 min)</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </button>

          <button
            onClick={() => {
              const featuresSection = document.getElementById('features');
              if (featuresSection) featuresSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition text-lg"
          >
            📖 Découvrir le Parcours Complet
          </button>
        </motion.div>

        {/* Note rassurante */}
        <motion.p
          className="text-sm text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          🔒 Pas de carte bancaire • Résultat immédiat
        </motion.p>

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
            const nextSection = document.querySelector('#hero').nextElementSibling;
            if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-gray-400 hover:text-white transition"
          aria-label="Scroll vers la suite"
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
