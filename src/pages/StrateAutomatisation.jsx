import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StrateAutomatisation() {
  const navigate = useNavigate();
  const [blueprintCompleted, setBlueprintCompleted] = useState(false);

  const handleBlueprintDownload = async () => {
    // Webhook n8n
    await fetch("https://automate.optimizeinsight.com/webhook/blueprint_completed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "blueprint_downloaded",
        timestamp: new Date().toISOString(),
      }),
    });

    setBlueprintCompleted(true);
    
    // Téléchargement du Blueprint
    window.open('https://drive.google.com/votre-lien-blueprint-n8n', '_blank');
  };

  const fichesPhase2 = {
    livre5: {
      titre: "Getting Things Done",
      totalFiches: 8,
      fiches: [
        "La méthode GTD en 5 étapes",
        "Capturer tout ce qui te passe par la tête",
        "Clarifier : transformer les inputs en actions",
        "Organiser : un système qui ne te laisse rien oublier",
        "Réviser : la revue hebdomadaire intelligente",
        "Exécuter avec sérénité",
        "Le système GTD à l'ère de l'IA",
        "Gérer le chaos mental"
      ]
    },
    livre7: {
      titre: "Atomic Habits",
      totalFiches: 8,
      fiches: [
        "Les petites actions composées",
        "Comment les habitudes façonnent ton identité",
        "La règle des 2 minutes",
        "Créer des systèmes, pas des objectifs",
        "Rendre les bonnes habitudes évidentes",
        "Rendre les bonnes habitudes attirantes",
        "Rendre les bonnes habitudes faciles",
        "Rendre les bonnes habitudes satisfaisantes"
      ]
    },
    livre6: {
      titre: "Hyper-Automatisation",
      totalFiches: 10,
      fiches: [
        "Automatiser sans coder",
        "Le no-code comme levier de liberté",
        "Ton flow de travail automatisé",
        "Zapier, Make, n8n : lequel choisir ?",
        "Les 5 automatisations qui changent tout",
        "Connecter tes outils en 10 minutes",
        "L'automatisation intelligente vs bête",
        "Quand automatiser (et quand ne pas le faire)",
        "Mesurer le ROI de tes automatisations",
        "Ton premier workflow en 30 minutes"
      ],
      locked: true
    },
    livre8: {
      titre: "Boostez votre Business avec l'IA",
      totalFiches: 7,
      fiches: [
        "L'IA comme partenaire de concentration",
        "Prompts intelligents = résultats puissants",
        "Comment IA + RPA changent tout",
        "Ton plan IA personnalisé",
        "Les 7 erreurs fatales avec l'IA",
        "Déléguer à l'IA (sans perdre ton humanité)",
        "L'IA appliquée au solopreneur"
      ],
      locked: true
    }
  };

  return (
    <motion.main
      className="flex flex-col items-center min-h-screen pt-[120px] bg-gradient-to-b from-[#1a1444] via-[#0A2540] to-[#0f172a] text-white overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* BOUTON RETOUR AU PLAN */}
      <div className="max-w-4xl w-full mt-16 mb-8">
        <button
          onClick={() => navigate('/espace-nova')}
          className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition text-sm"
        >
          <span>←</span>
          <span>Retour à mon plan</span>
        </button>
      </div>

      {/* MESSAGE CONTEXTUEL */}
      <div className="max-w-4xl w-full mb-8">
        <div className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-4 rounded-xl">
          <p className="text-sm text-gray-300">
            💡 <strong style={{ color: '#D4AF37' }}>Conseil :</strong> Télécharge ces ressources et reviens dans ton 
            <button 
              onClick={() => navigate('/espace-nova')}
              className="underline mx-1 hover:text-[#D4AF37] transition"
              style={{ color: '#D4AF37' }}
            >
              Espace Nova
            </button>
            pour suivre ton plan jour par jour.
          </p>
        </div>
      </div>

      {/* HERO - CITATION CLIENT */}
      <section className="max-w-4xl text-center mb-16">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-8 font-['Montserrat']"
          style={{ color: '#D4AF37' }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Strate 2 — Automatisation
        </motion.h1>

        {/* CITATION CLIENT */}
        <motion.div
          className="bg-[#C4322A]/20 border border-[#C4322A]/40 p-8 rounded-2xl mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#C4322A' }}>
            🗺️ Ton Besoin
          </h2>
          <p className="text-xl italic text-gray-200 mb-6 leading-relaxed">
            "Dis-moi quoi faire chaque jour pour avancer vraiment."
          </p>
          
          <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
            <p className="text-3xl font-bold mb-3 font-['Montserrat']" style={{ color: '#D4AF37' }}>
              SYSTÈME
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              En 7 jours, je vais te montrer comment installer ton <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> quotidien, 
              automatiser 3 flux clés qui libèrent ton <strong style={{ color: '#D4AF37' }}>ÉNERGIE</strong>, 
              et construire le <strong style={{ color: '#D4AF37' }}>PONT</strong> entre tes intentions et tes actions concrètes.
            </p>
          </div>
        </motion.div>

        {/* TRANSFORMATION */}
        <motion.div
          className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-8 rounded-2xl mb-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            ✨ Ta TRANSFORMATION Jour 14
          </h2>
          <div className="text-left text-gray-200 space-y-4 text-lg max-w-2xl mx-auto">
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }} className="text-2xl">→</span>
              <span><strong style={{ color: '#D4AF37' }}>SYSTÈME quotidien</strong> qui élimine la procrastination</span>
            </p>
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }} className="text-2xl">→</span>
              <span><strong style={{ color: '#D4AF37' }}>TRANSFORMATION</strong> de 10h/semaine en temps libéré</span>
            </p>
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }} className="text-2xl">→</span>
              <span><strong style={{ color: '#D4AF37' }}>CLARTÉ parfaite</strong> sur ce que tu dois faire chaque jour</span>
            </p>
          </div>
        </motion.div>

        {/* RAPPEL PROGRESSION */}
        <motion.div
          className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            🎓 Ton Parcours
          </h3>
          
          <div className="text-left space-y-3 text-gray-200">
            <p className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✅</span>
              <span><strong>Strate 1 :</strong> Tu as maintenant la <strong style={{ color: '#D4AF37' }}>CLARTÉ</strong> sur ta direction</span>
            </p>
            
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }} className="text-xl">🔄</span>
              <span><strong>Strate 2 :</strong> Tu installes le <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> qui libère ton <strong style={{ color: '#D4AF37' }}>ÉNERGIE</strong></span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* LES 16 FICHES + BLUEPRINT */}
      <section className="max-w-5xl w-full mb-16">
        <motion.div
          className="bg-[#0A2540]/40 border-2 border-[#D4AF37]/50 p-10 rounded-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-6 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            📚 Ton PONT vers le SYSTÈME
          </h2>
          
          <p className="text-center text-gray-200 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Ces <strong style={{ color: '#D4AF37' }}>16 fiches + Blueprint n8n</strong> construisent le <strong style={{ color: '#D4AF37' }}>PONT</strong> entre 
            tes intentions et tes actions concrètes. Tu sais enfin quoi faire chaque jour.
          </p>

          <div className="bg-black/40 border border-[#D4AF37]/30 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold mb-4 text-center font-['Montserrat']" style={{ color: '#D4AF37' }}>
              🎁 Phase 2 : Organisation (16 Fiches + Blueprint)
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Livre 5 - GTD */}
              <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#D4AF37' }}>
                  📖 Livre 5 : {fichesPhase2.livre5.titre}
                </h4>
                <p className="text-sm text-gray-300 mb-3 italic">
                  Le <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> pour capturer, clarifier et organiser toute ton <strong style={{ color: '#D4AF37' }}>ÉNERGIE</strong>.
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase2.livre5.fiches.slice(0, 5).map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: '#D4AF37' }}>•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                  <li className="text-xs" style={{ color: '#D4AF37' }}>+ {fichesPhase2.livre5.totalFiches - 5} autres fiches</li>
                </ul>
              </div>

              {/* Livre 7 - Atomic Habits */}
              <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#D4AF37' }}>
                  📖 Livre 7 : {fichesPhase2.livre7.titre}
                </h4>
                <p className="text-sm text-gray-300 mb-3 italic">
                  Créer des habitudes durables qui libèrent ton <strong style={{ color: '#D4AF37' }}>ÉNERGIE</strong> au lieu de l'épuiser.
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase2.livre7.fiches.slice(0, 5).map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: '#D4AF37' }}>•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                  <li className="text-xs" style={{ color: '#D4AF37' }}>+ {fichesPhase2.livre7.totalFiches - 5} autres fiches</li>
                </ul>
              </div>

              {/* Livre 6 - VERROUILLÉ */}
              <div className="bg-[#0A2540]/30 border border-white/10 p-6 rounded-xl opacity-60">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🔒</span>
                  <h4 className="text-lg font-bold text-gray-400">
                    Livre 6 : {fichesPhase2.livre6.titre}
                  </h4>
                </div>
                <p className="text-xs text-gray-500 mb-2">
                  Débloqué en Strate 3 — Application
                </p>
                <p className="text-sm text-gray-400 italic">
                  Automatiser tes flux sans coder avec n8n
                </p>
              </div>

              {/* Livre 8 - VERROUILLÉ */}
              <div className="bg-[#0A2540]/30 border border-white/10 p-6 rounded-xl opacity-60">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🔒</span>
                  <h4 className="text-lg font-bold text-gray-400">
                    Livre 8 : {fichesPhase2.livre8.titre}
                  </h4>
                </div>
                <p className="text-xs text-gray-500 mb-2">
                  Débloqué en Strate 3 — Application
                </p>
                <p className="text-sm text-gray-400 italic">
                  Booster ton business avec l'IA
                </p>
              </div>
            </div>
          </div>

          {/* BLUEPRINT N8N */}
          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 p-6 rounded-xl text-center mb-6">
            <h4 className="text-xl font-bold mb-3 font-['Montserrat']" style={{ color: '#D4AF37' }}>
              🎁 BONUS : Blueprint n8n
            </h4>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Un workflow prêt à l'emploi pour automatiser tes 3 premiers flux 
              et construire le <strong style={{ color: '#D4AF37' }}>PONT</strong> vers l'automatisation.
            </p>
            
            {!blueprintCompleted ? (
              <button
                onClick={handleBlueprintDownload}
                className="text-black font-bold px-8 py-3 rounded-xl transition font-['Montserrat']"
                style={{ backgroundColor: '#D4AF37' }}
              >
                📥 Télécharger le Blueprint
              </button>
            ) : (
              <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-4 rounded-lg">
                <p className="text-green-400 font-bold mb-2">✅ Blueprint téléchargé !</p>
                <p className="text-gray-300 text-sm">
                  Installe-le dans n8n et commence à automatiser.
                </p>
              </div>
            )}
          </div>

          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 p-6 rounded-xl text-center">
            <p className="text-lg font-semibold mb-2" style={{ color: '#D4AF37' }}>
              💎 Valeur réelle : 297€
            </p>
            <p className="text-2xl font-bold mb-2" style={{ color: '#D4AF37' }}>
              GRATUIT aujourd'hui
            </p>
            <p className="text-gray-300 text-sm">
              Ces 16 fiches + Blueprint installent le <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> qui libère ton <strong style={{ color: '#D4AF37' }}>ÉNERGIE</strong>.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA TÉLÉCHARGEMENT */}
      <section className="max-w-2xl w-full mb-16">
        <motion.div
          className="bg-[#0A2540]/60 border-4 border-[#D4AF37]/60 p-10 rounded-3xl shadow-2xl text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            🎯 Prêt à installer ton SYSTÈME ?
          </h2>
          <p className="text-gray-200 text-lg mb-8 leading-relaxed">
            Télécharge les 16 Fiches Organisation + Blueprint n8n 
            et commence ta <strong style={{ color: '#D4AF37' }}>TRANSFORMATION</strong>.
          </p>

          <button
            onClick={() => {
              // Webhook + Download
              window.open('https://drive.google.com/votre-lien-fiches-phase2', '_blank');
            }}
            className="w-full text-black font-bold px-10 py-5 rounded-xl transition-all text-xl shadow-lg hover:shadow-2xl transform hover:scale-105 font-['Montserrat']"
            style={{ backgroundColor: '#D4AF37' }}
          >
            ⚡ Télécharger Phase 2 MAINTENANT
          </button>

          <p className="text-gray-400 text-sm mt-6">
            🔒 100% gratuit • Pas de CB requise
          </p>
        </motion.div>
      </section>

      {/* PONT VERS STRATE 3 */}
      <section className="max-w-4xl w-full mb-16">
        <div className="bg-[#0A2540]/40 border border-[#D4AF37]/40 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            💡 Après avoir installé ton SYSTÈME...
          </h3>
          <p className="text-gray-200 text-lg mb-6 leading-relaxed">
            Tu auras la <strong style={{ color: '#D4AF37' }}>CLARTÉ</strong> + le <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong>. 
            Mais tu te demanderas : <em>"Est-ce que ça marche vraiment pour moi ?"</em>
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            C'est exactement ce que la <strong>Strate 3 : Application</strong> va t'apporter. 
            Tu obtiendras la <strong style={{ color: '#D4AF37' }}>PREUVE</strong> concrète de ta <strong style={{ color: '#D4AF37' }}>TRANSFORMATION</strong>.
          </p>
          <button
            onClick={() => navigate("/strate-application")}
            className="text-black font-bold px-8 py-3 rounded-xl transition font-['Montserrat']"
            style={{ backgroundColor: '#D4AF37' }}
          >
            🔍 Découvrir la Strate 3
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-4xl w-full mb-16 text-center text-gray-400 text-sm">
        <p>
          🏠 <button 
            onClick={() => navigate("/")} 
            className="underline transition hover:opacity-80"
            style={{ color: '#D4AF37' }}
          >
            Retour à l'accueil
          </button>
        </p>
      </footer>
    </motion.main>
  );
}
