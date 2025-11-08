import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();

  const strates = [
    {
      icon: "🧠",
      title: "Strate 1 — Réinvention",
      badge: "🎯 Commence ici",
      badgeColor: "bg-green-500",
      problemeSolu: "Arrêter de t'éparpiller",
      desc: "En 7 jours, tu vas identifier les 3 actions qui comptent VRAIMENT, éliminer 80% du bruit digital, et clarifier ton offre/projet en 1 phrase.",
      resultat: [
        "Tu sais EXACTEMENT sur quoi te concentrer",
        "Tu as 1 plan clair pour les 90 prochains jours",
        "Tu as supprimé 10 tâches inutiles de ton quotidien"
      ],
      link: "/strate-reinvention",
      btn: "Commencer Strate 1",
      highlights: [
        "✓ Diagnostic personnalisé de ton chaos actuel",
        "✓ Les 3 actions à 80% d'impact (ta loi de Pareto)",
        "✓ Ton offre clarifiée en 1 phrase",
        "✓ Plan 90 jours mesurable et réaliste"
      ],
      contenu: "36 Fiches Nova + Templates",
      gradient: "from-blue-900/70 to-cyan-900/70",
      borderColor: "border-blue-500/40",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    },
    {
      icon: "⚙️",
      title: "Strate 2 — Automatisation",
      badge: "🔓 Après Strate 1",
      badgeColor: "bg-orange-500",
      problemeSolu: "Avoir un plan quotidien mesurable",
      desc: "En 7 jours, tu vas créer ton workflow quotidien, automatiser 3 flux clés (prospection, suivi, livraison), et installer ton dashboard de suivi.",
      resultat: [
        "Tu sais QUOI faire chaque jour (plus de procrastination)",
        "Tu as récupéré 10h/semaine (temps mesuré)",
        "Tu as 3 flux qui tournent sans toi 24/7"
      ],
      link: "/strate-automatisation",
      btn: "Automatiser mes flux",
      highlights: [
        "✓ Workflow quotidien GTD adapté à ton profil",
        "✓ 3 flux automatisés (prospection, suivi, livraison)",
        "✓ Dashboard temps réel de tes KPIs",
        "✓ Revue hebdomadaire de 15 min (vs 2h avant)"
      ],
      contenu: "16 Fiches Organisation + Blueprint n8n",
      gradient: "from-purple-900/70 to-indigo-900/70",
      borderColor: "border-purple-500/40",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
    },
    {
      icon: "🧩",
      title: "Strate 3 — Application",
      badge: "🔓 Après Strate 2",
      badgeColor: "bg-orange-500",
      problemeSolu: "Voir un résultat concret",
      desc: "En 7 jours, tu vas lancer ton MVP, obtenir tes 3 premiers clients/leads/ventes, et prouver que ton système MARCHE pour toi.",
      resultat: [
        "Tu as généré ton 1er revenu (même 500€ = victoire)",
        "Tu as la PREUVE que ça fonctionne pour TOI",
        "Tu as validé ton concept auprès de vrais clients"
      ],
      link: "/strate-application",
      btn: "Lancer mon MVP",
      highlights: [
        "✓ MVP lancé en 48h (template prêt)",
        "✓ 3 premiers clients/leads obtenus",
        "✓ Système de vente automatisé opérationnel",
        "✓ Preuve tangible de ton ROI temps/argent"
      ],
      contenu: "17 Fiches IA + 2 Démos interactives",
      gradient: "from-orange-900/70 to-red-900/70",
      borderColor: "border-orange-500/40",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
    },
    {
      icon: "🏆",
      title: "Strate 4 — Liberté",
      badge: "🔒 Qualification requise",
      badgeColor: "bg-red-500",
      problemeSolu: "Ressentir la cohérence durable",
      desc: "En 9 jours, tu vas créer ton système evergreen (ventes automatiques), déléguer/automatiser le reste, et construire ton plan 90 jours durable.",
      resultat: [
        "Ton système tourne SEUL (même quand tu dors)",
        "Tu as une vision claire des 90 prochains jours",
        "Tout ce que tu fais a du SENS dans ta vision globale"
      ],
      link: "/strate-liberte",
      btn: "Voir l'Accompagnement",
      highlights: [
        "✓ Tunnel evergreen (ventes pendant ton sommeil)",
        "✓ Plan de délégation/automatisation avancé",
        "✓ Vision 90 jours alignée sur tes valeurs",
        "✓ Accompagnement 1:1 personnalisé"
      ],
      contenu: "31 Fiches Scaling + Accompagnement",
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

      {/* TITRE - MODIFIÉ */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-center text-gold relative z-10"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Le Parcours en 4 Strates
      </motion.h2>

      <motion.p
        className="text-lg text-gray-300 max-w-3xl text-center mb-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        <strong className="text-yellow-400">1 Strate = 1 problème résolu</strong><br />
        À la fin des 4 Strates, tu as arrêté le chaos, un plan clair, des résultats prouvés, et un système cohérent.
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
                1. Réinvention (Clarté)
              </span>
              <span className="text-gray-500">→</span>
              <span className="bg-purple-900/50 border border-purple-500/30 px-3 py-1 rounded-full text-purple-300">
                2. Automatisation (Plan)
              </span>
              <span className="text-gray-500">→</span>
              <span className="bg-orange-900/50 border border-orange-500/30 px-3 py-1 rounded-full text-orange-300">
                3. Application (Preuve)
              </span>
              <span className="text-gray-500">→</span>
              <span className="bg-yellow-900/50 border border-yellow-500/30 px-3 py-1 rounded-full text-yellow-300">
                4. Liberté (Cohérence)
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CARTES DES STRATES - MODIFIÉES */}
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

            {/* PROBLÈME RÉSOLU - NOUVEAU */}
            <div className="bg-red-900/20 border border-red-500/30 px-3 py-2 rounded-lg mb-4">
              <p className="text-xs font-semibold text-red-300 uppercase tracking-wide mb-1">
                Problème résolu :
              </p>
              <p className="text-sm font-bold text-white">
                {strate.problemeSolu}
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {strate.desc}
            </p>

            {/* RÉSULTAT JOUR X - NOUVEAU */}
            <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg mb-4">
              <p className="text-xs font-semibold text-green-400 uppercase tracking-wide mb-2">
                Résultat Jour {index < 3 ? (index + 1) * 7 : 30} :
              </p>
              <ul className="space-y-2 text-left">
                {strate.resultat.map((res, idx) => (
                  <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">→</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* HIGHLIGHTS */}
            <div className="bg-black/30 border border-white/10 p-4 rounded-lg mb-4 text-left">
              <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                Contenu inclus :
              </p>
              <ul className="space-y-1.5">
                {strate.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTENU BOX - NOUVEAU */}
            <div className="bg-blue-900/20 border border-blue-500/30 px-3 py-2 rounded-lg mb-6">
              <p className="text-xs text-blue-300">
                📦 {strate.contenu}
              </p>
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
            <p className="text-4xl font-bold text-blue-400 mb-2">100</p>
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
