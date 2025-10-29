import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();

  const strates = [
    {
      icon: "🧠",
      title: "Strate 1 – Réinvention",
      desc: "36 Fiches Nova gratuites pour construire ta VISION de la liberté digitale et découvrir le concept du Nouveau Riche.",
      link: "/strate-reinvention",
      btn: "Recevoir les 36 Fiches",
      badge: "🎯 Commence ici",
      badgeColor: "bg-green-500",
      highlights: [
        "✓ Le Nouveau Riche vs l'Ancien Riche",
        "✓ Actifs Digitaux : la nouvelle richesse",
        "✓ Deep Work à l'ère de l'IA",
        "✓ Prototyper ta vie professionnelle"
      ],
      gradient: "from-blue-900/70 to-cyan-900/70",
      borderColor: "border-blue-500/40",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    },
    {
      icon: "⚙️",
      title: "Strate 2 – Automatisation",
      desc: "16 Fiches Organisation (GTD + Atomic Habits) + Blueprint n8n pour installer ton SYSTÈME et créer des habitudes durables.",
      link: "/strate-automatisation",
      btn: "Télécharger le Blueprint",
      badge: "🔓 Après Strate 1",
      badgeColor: "bg-orange-500",
      highlights: [
        "✓ GTD : La méthode en 5 étapes",
        "✓ Atomic Habits : Petites actions composées",
        "✓ Blueprint n8n pour automatiser",
        "✓ Revue hebdomadaire intelligente"
      ],
      gradient: "from-purple-900/70 to-indigo-900/70",
      borderColor: "border-purple-500/40",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
    },
    {
      icon: "🧩",
      title: "Strate 3 – Application",
      desc: "2 Démos interactives (Générateur IA + Calculateur) pour obtenir la PREUVE concrète que Catalyseur Digital fonctionne pour toi.",
      link: "/strate-application",
      btn: "Tester Catalyseur Digital",
      badge: "🔓 Après Strate 2",
      badgeColor: "bg-orange-500",
      highlights: [
        "✓ Générateur de Contenu IA (30 sec)",
        "✓ Calculateur de Temps Libéré",
        "✓ 17 Fiches IA & Automatisation",
        "✓ Micro-succès garanti"
      ],
      gradient: "from-orange-900/70 to-red-900/70",
      borderColor: "border-orange-500/40",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
    },
    {
      icon: "🏆",
      title: "Strate 4 – Liberté",
      desc: "Tunnel d'Exclusivité en 3 niveaux (Stabilisation → Accélération → Liberté Totale) pour construire un système DURABLE.",
      link: "/strate-liberte",
      btn: "Voir l'Accompagnement",
      badge: "🔒 Qualification requise",
      badgeColor: "bg-red-500",
      highlights: [
        "✓ Bilan Solopreneur Durable (N1)",
        "✓ Labo Solopreneur : Plan 2500€+ (N2)",
        "✓ Liberté au Leadership (N3)",
        "✓ 31 Fiches Scaling & Durabilité"
      ],
      gradient: "from-yellow-900/70 to-orange-900/70",
      borderColor: "border-yellow-500/40",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
    },
  ];

  return (
    <section
      id="features"
      className="relative py-32 bg-gradient-to-b from-[#1a1444] via-[#0f172a] to-[#0b0b17] text-gold flex flex-col items-center px-6 overflow-hidden"
    >
      {/* Lueur douce d'arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-indigo-600/10 via-purple-500/10 to-transparent blur-3xl opacity-60 pointer-events-none"></div>

      {/* TITRE */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-center text-gold relative z-10"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Les 4 Strates de Transformation
      </motion.h2>

      <motion.p
        className="text-lg text-gray-300 max-w-3xl text-center mb-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        Le Catalyseur Digital 3.0 est un <strong className="text-yellow-400">parcours progressif</strong> qui 
        t'aide à passer du chaos digital à la clarté, puis à la liberté.
      </motion.p>

      {/* NOTE EXPLICATIVE */}
      <motion.div
        className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-xl max-w-3xl mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start gap-3">
          <span className="text-3xl">💡</span>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-purple-300 mb-2">
              Parcours Progressif Recommandé
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Chaque strate <strong>débloque la suivante</strong>. Tu peux explorer librement, 
              mais pour maximiser ta réussite, il est recommandé de suivre l'ordre :
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-blue-900/50 border border-blue-500/30 px-3 py-1 rounded-full text-blue-300">
                1. Réinvention (VISION)
              </span>
              <span className="text-gray-500">→</span>
              <span className="bg-purple-900/50 border border-purple-500/30 px-3 py-1 rounded-full text-purple-300">
                2. Automatisation (SYSTÈME)
              </span>
              <span className="text-gray-500">→</span>
              <span className="bg-orange-900/50 border border-orange-500/30 px-3 py-1 rounded-full text-orange-300">
                3. Application (PREUVE)
              </span>
              <span className="text-gray-500">→</span>
              <span className="bg-yellow-900/50 border border-yellow-500/30 px-3 py-1 rounded-full text-yellow-300">
                4. Liberté (DURABLE)
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CARTES DES STRATES */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {strates.map((strate, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${strate.gradient} backdrop-blur-sm border ${strate.borderColor} p-8 rounded-2xl shadow-lg text-center ${strate.hoverShadow} transition-all relative`}
            whileHover={{ y: -8, scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* BADGE DE PROGRESSION */}
            <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${strate.badgeColor} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg`}>
              {strate.badge}
            </div>

            {/* ICÔNE */}
            <div className="text-5xl mb-4 mt-2">{strate.icon}</div>

            {/* TITRE */}
            <h3 className="text-2xl font-bold mb-3 text-gold">
              {strate.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              {strate.desc}
            </p>

            {/* HIGHLIGHTS */}
            <div className="bg-black/30 border border-white/10 p-4 rounded-lg mb-6 text-left">
              <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                Contenu inclus :
              </p>
              <ul className="space-y-1.5">
                {strate.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate(strate.link)}
              className="w-full bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition shadow-lg hover:shadow-xl"
            >
              {strate.btn}
            </button>

            {/* NOTE ADDITIONNELLE POUR STRATE 4 */}
            {index === 3 && (
              <div className="mt-4 bg-red-900/20 border border-red-500/30 p-3 rounded-lg">
                <p className="text-xs text-red-300">
                  ⚠️ <strong>Accompagnement payant</strong> • Tu dois avoir complété les Strates 1-2-3
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* STATISTIQUES GLOBALES */}
      <motion.div
        className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-4xl w-full relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-center text-yellow-400 mb-6">
          📊 Le Parcours en Chiffres
        </h3>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-400 mb-2">77</p>
            <p className="text-sm text-gray-300">Fiches Nova complètes</p>
            <p className="text-xs text-gray-500 mt-1">
              (36 + 16 + 17 + 31 = 4 phases)
            </p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-purple-400 mb-2">100%</p>
            <p className="text-sm text-gray-300">Gratuit jusqu'à Strate 3</p>
            <p className="text-xs text-gray-500 mt-1">
              (Strate 4 = Accompagnement payant)
            </p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-green-400 mb-2">87%</p>
            <p className="text-sm text-gray-300">Atteignent la Strate 3</p>
            <p className="text-xs text-gray-500 mt-1">
              (Taux de complétion élevé)
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="text-center text-gray-300 text-sm">
            🎁 <strong className="text-yellow-400">Bonus :</strong> Les 36 Fiches Nova de la Strate 1 
            sont offertes dès ton inscription. Pas de carte bancaire requise.
          </p>
        </div>
      </motion.div>

      {/* CTA GLOBAL */}
      <motion.div
        className="mt-12 text-center relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => navigate('/strate-reinvention')}
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold px-12 py-5 rounded-xl shadow-2xl hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] transition-all text-lg"
        >
          🚀 Commencer par la Strate 1 (Gratuit)
        </button>
        <p className="mt-4 text-sm text-gray-400">
          💡 Ou fais d'abord le <button 
            onClick={() => {
              const novaSection = document.getElementById('nova');
              if (novaSection) novaSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-purple-400 underline hover:text-purple-300 transition"
          >
            Diagnostic Nova
          </button> pour savoir par où commencer
        </p>
      </motion.div>
    </section>
  );
}
