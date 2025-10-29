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
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#1a1444] via-[#312e81] to-[#0f172a] text-yellow-50 overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* RAPPEL DU PARCOURS */}
      <section className="max-w-4xl text-center mt-24 mb-16">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          ⚙️ Strate 2 – Automatisation
        </motion.h1>

        <motion.div
          className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-500/40 p-8 rounded-2xl mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-green-300 mb-4">
            🎓 Tu as complété la Phase 1 ? Parfait !
          </h2>
          
          <div className="text-left space-y-3 text-gray-200 text-lg">
            <p className="flex items-start gap-3">
              <span className="text-green-400 text-2xl">✅</span>
              <span><strong>Strate 1 : Tu as maintenant une VISION claire</strong><br/>
              → 36 Fiches Phase 1 (Réinvention)<br/>
              → Tu crois en la liberté digitale</span>
            </p>
            
            <p className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">❓</span>
              <span><strong>Mais il te manque une chose essentielle :</strong><br/>
              Le <strong className="text-yellow-400">SYSTÈME</strong> pour passer à l'ACTION</span>
            </p>
          </div>

          <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
            <p className="text-red-300 font-semibold">
              ⚠️ <strong>Sans système :</strong>
            </p>
            <ul className="text-gray-300 text-sm mt-2 space-y-1 ml-6">
              <li>→ Tu te disperses</li>
              <li>→ Tu t'épuises</li>
              <li>→ Tu abandonnes après 2 semaines</li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
            <p className="text-purple-300 font-semibold text-lg">
              🎯 <strong>Bienvenue en Strate 2 : Organisation + Automatisation</strong>
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Tu vas apprendre à t'organiser comme un PRO (GTD), créer des habitudes DURABLES (Atomic Habits), 
              et découvrir le potentiel de l'AUTOMATISATION.
            </p>
          </div>
        </motion.div>
      </section>

      {/* MINI-FORMATION PRATIQUE */}
      <section className="max-w-5xl w-full mb-16">
        <motion.div
          className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-2 border-blue-500/50 p-10 rounded-3xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-blue-300 mb-6">
            📋 Mini-Formation Pratique : Ton Système d'Organisation
          </h2>

          <p className="text-center text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
            Avant de recevoir les fiches complètes, applique ce <strong>Blueprint GTD + Atomic Habits</strong> 
            pour mettre en place les bases de ton organisation.
          </p>

          {/* TUTORIEL ÉTAPE PAR ÉTAPE */}
          <div className="bg-black/40 border border-blue-500/30 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-blue-300 mb-4">
              🎬 Tutoriel : Ton Système GTD en 10 Minutes
            </h3>

            <div className="space-y-4">
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-blue-300 mb-2">📥 Étape 1 : Capturer</h4>
                <p className="text-gray-300 text-sm">
                  Ouvre Notion (ou ton outil préféré). Crée une page "Inbox" où tu notes <strong>TOUT</strong> 
                  ce qui te passe par la tête. Zéro filtre, zéro organisation pour le moment.
                </p>
              </div>

              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-blue-300 mb-2">🔍 Étape 2 : Clarifier</h4>
                <p className="text-gray-300 text-sm">
                  Pour chaque item de ton Inbox, pose la question : <em>"Est-ce actionnable ?"</em><br/>
                  → Si OUI : C'est une tâche. Définis l'action suivante.<br/>
                  → Si NON : Archive ou supprime.
                </p>
              </div>

              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-blue-300 mb-2">🗂️ Étape 3 : Organiser</h4>
                <p className="text-gray-300 text-sm">
                  Crée 4 listes : <strong>Aujourd'hui</strong>, <strong>Cette Semaine</strong>, 
                  <strong>Plus Tard</strong>, <strong>Peut-être</strong>. Range chaque tâche dans la bonne liste.
                </p>
              </div>

              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-blue-300 mb-2">🔄 Étape 4 : Réviser (La Clé)</h4>
                <p className="text-gray-300 text-sm">
                  Bloque <strong>30 minutes chaque vendredi</strong> pour ta revue hebdomadaire. 
                  Vide ton Inbox, ajuste tes priorités, planifie ta semaine suivante.
                </p>
              </div>

              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-blue-300 mb-2">⚡ Étape 5 : Exécuter</h4>
                <p className="text-gray-300 text-sm">
                  Applique la <strong>Règle des 2 Minutes</strong> (Atomic Habits) : 
                  Si une tâche prend moins de 2 minutes, fais-la MAINTENANT.
                </p>
              </div>
            </div>
          </div>

          {/* BLUEPRINT TÉLÉCHARGEABLE */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50 p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">
              📦 Télécharge ton Blueprint n8n
            </h3>
            <p className="text-gray-200 mb-6">
              Ce blueprint automatise ta revue hebdomadaire GTD. Il te rappelle chaque vendredi 
              et crée automatiquement ton rapport de la semaine.
            </p>

            {!blueprintCompleted ? (
              <button
                onClick={handleBlueprintDownload}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-10 py-4 rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all text-lg shadow-lg hover:shadow-2xl transform hover:scale-105"
              >
                📥 Télécharger le Blueprint n8n
              </button>
            ) : (
              <div className="bg-green-900/20 border border-green-500/40 p-4 rounded-lg">
                <p className="text-green-300 font-semibold text-lg mb-2">
                  ✅ Blueprint téléchargé !
                </p>
                <p className="text-gray-300 text-sm">
                  Consulte le fichier pour installer ton système d'automatisation.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* DÉVERROUILLAGE LIVRES 5 & 7 */}
      {blueprintCompleted && (
        <section className="max-w-5xl w-full mb-16">
          <motion.div
            className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-2 border-green-500/50 p-10 rounded-3xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-green-300 mb-6">
              🎉 Organisation de Base Débloquée !
            </h2>

            <p className="text-center text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
              Tu as téléchargé ton Blueprint. Tu as maintenant accès aux <strong>16 Fiches Organisation</strong> 
              (Livres 5 & 7) qui vont approfondir les MÉTHODES que tu viens d'appliquer.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Livre 5 : GTD */}
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-300 mb-3">
                  📖 Livre 5 : {fichesPhase2.livre5.titre}
                </h3>
                <p className="text-sm text-gray-300 mb-3 italic">
                  La méthodologie pour gérer le <strong>"chaos mental"</strong> et installer un système GTD à l'ère de l'IA.
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase2.livre5.fiches.map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Livre 7 : Atomic Habits */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-purple-300 mb-3">
                  📖 Livre 7 : {fichesPhase2.livre7.titre}
                </h3>
                <p className="text-sm text-gray-300 mb-3 italic">
                  La réussite vient des <strong>"petites actions composées"</strong> et des systèmes, créant la discipline nécessaire.
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase2.livre7.fiches.map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => window.open('https://drive.google.com/votre-lien-fiches-livres-5-7', '_blank')}
                className="bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-4 rounded-xl transition text-lg shadow-lg"
              >
                📥 Télécharger les 16 Fiches (Livres 5 & 7)
              </button>
            </div>
          </motion.div>
        </section>
      )}

      {/* GOULOT D'ÉTRANGLEMENT RÉVÉLÉ */}
      {blueprintCompleted && (
        <section className="max-w-5xl w-full mb-16">
          <motion.div
            className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-2 border-red-500/50 p-10 rounded-3xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-red-300 mb-6">
              ⚠️ Le Goulot d'Étranglement que Personne ne te Dit
            </h2>

            <p className="text-center text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
              Tu viens d'apprendre GTD et Atomic Habits. <strong>Bravo !</strong> 
              Mais as-tu remarqué quelque chose ?
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-red-300 mb-2">
                  ❌ Problème #1 : La Revue Hebdomadaire (Fiche 42)
                </h3>
                <p className="text-gray-300">
                  La <strong>"Revue hebdomadaire intelligente"</strong> prend encore <strong>2-3 HEURES</strong> par semaine. 
                  C'est long, c'est fatigant, et tu risques de l'abandonner.
                </p>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-red-300 mb-2">
                  ❌ Problème #2 : Les Prompts Intelligents (Fiche 64)
                </h3>
                <p className="text-gray-300">
                  Écrire le <strong>"Prompt intelligent"</strong> parfait te demande <strong>30 minutes d'ESSAIS-ERREURS</strong> 
                  à chaque fois. Tu perds un temps précieux.
                </p>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-red-300 mb-2">
                  ❌ Problème #3 : Mettre en Place Atomic Habits
                </h3>
                <p className="text-gray-300">
                  Créer un système d'habitudes pour <strong>UN SEUL process</strong> nécessite <strong>5 HEURES</strong> 
                  de travail manuel. Imagine pour 10 process...
                </p>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/40 p-6 rounded-xl text-center">
              <p className="text-yellow-300 text-2xl font-bold mb-3">
                🎯 TU AS LE SAVOIR, mais il te manque L'OUTIL
              </p>
              <p className="text-gray-200 text-lg">
                pour l'appliquer <strong>SANS EFFORT</strong>.
              </p>
            </div>
          </motion.div>
        </section>
      )}

      {/* TEASING LIVRES 6 & 8 (Verrouillés) */}
      {blueprintCompleted && (
        <section className="max-w-5xl w-full mb-16">
          <motion.div
            className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border-2 border-purple-500/50 p-10 rounded-3xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-purple-300 mb-6">
              🔒 Pont vers l'Automatisation Complète
            </h2>

            <p className="text-center text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
              Tu as maintenant l'<strong>ORGANISATION DE BASE</strong> (GTD + Atomic Habits). 
              Mais pour passer au niveau supérieur, tu as besoin de découvrir le <strong>POTENTIEL</strong> 
              de l'automatisation et de l'IA.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Livre 6 : Hyper-Automatisation */}
              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 p-6 rounded-xl relative opacity-60">
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  🔒 VERROUILLÉ
                </div>
                <h3 className="text-xl font-bold text-orange-300 mb-3">
                  📖 Livre 6 : {fichesPhase2.livre6.titre}
                </h3>
                <p className="text-sm text-gray-300 mb-3 italic">
                  Apprends à <strong>"Automatiser sans coder"</strong> et à créer ton <strong>"Flow de travail automatisé"</strong>.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {fichesPhase2.livre6.fiches.slice(0, 5).map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-400">🔒</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                  <li className="text-orange-400 text-xs">+ {fichesPhase2.livre6.totalFiches - 5} autres fiches</li>
                </ul>
              </div>

              {/* Livre 8 : IA Business */}
              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 p-6 rounded-xl relative opacity-60">
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  🔒 VERROUILLÉ
                </div>
                <h3 className="text-xl font-bold text-cyan-300 mb-3">
                  📖 Livre 8 : {fichesPhase2.livre8.titre}
                </h3>
                <p className="text-sm text-gray-300 mb-3 italic">
                  Découvre comment créer des <strong>"Prompts intelligents"</strong> et un <strong>"Plan IA personnalisé"</strong>.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {fichesPhase2.livre8.fiches.map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400">🔒</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/40 p-6 rounded-xl mb-6">
              <p className="text-yellow-300 text-lg font-semibold mb-2 text-center">
                💡 Ces fiches t'expliquent CE QUI EST POSSIBLE
              </p>
              <p className="text-gray-300 text-center">
                Pour <strong>APPLIQUER</strong> ces principes avec les bons OUTILS, 
                teste d'abord <strong>Catalyseur Digital</strong> en live.
              </p>
            </div>

            <div className="bg-red-900/20 border border-red-500/40 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-red-300 mb-3 text-center">
                ⚠️ Attention : Sans les Bons OUTILS
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">→</span>
                  <span>Tu vas passer des <strong>SEMAINES</strong> à essayer de tout mettre en place manuellement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">→</span>
                  <span>Tu risques de tomber dans les <strong>'5 pièges fatals'</strong> : Burnout, Dispersion, Surcharge cognitive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">→</span>
                  <span>Tu abandonneras probablement après 2-3 semaines</span>
                </li>
              </ul>
            </div>

            {/* PONT ÉMOTIONNEL VERS STRATE 3 */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50 p-8 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-purple-300 mb-4">
                🎯 Catalyseur Digital est ton GARDE-FOU
              </h3>
              
              <p className="text-gray-200 text-lg mb-6">
                Il transforme l'effort manuel en simple <strong>VALIDATION</strong>.<br/>
                Il fait le travail <strong>DIFFICILE</strong> pour toi.
              </p>

              <div className="bg-black/40 p-6 rounded-xl mb-6">
                <p className="text-yellow-300 text-2xl font-bold mb-3">
                  Question Simple :
                </p>
                <p className="text-gray-200 text-xl">
                  Veux-tu continuer à <strong className="text-red-400">LUTTER seul(e)</strong>,<br/>
                  ou veux-tu que le système <strong className="text-green-400">TRAVAILLE POUR TOI</strong> ?
                </p>
              </div>

              <button
                onClick={() => navigate("/strate-application")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-12 py-5 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all text-xl shadow-lg hover:shadow-2xl transform hover:scale-105"
              >
                ⚡ Tester Catalyseur Digital MAINTENANT (2 min chrono)
              </button>

              <p className="text-gray-400 text-sm mt-4">
                💡 Après le test, les Livres 6 & 8 seront débloqués pour approfondir la théorie.
              </p>
            </div>
          </motion.div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="max-w-4xl w-full mb-16 text-center text-gray-400 text-sm">
        <p>
          🏠 <button onClick={() => navigate("/")} className="underline hover:text-yellow-300 transition">
            Retour à l'accueil
          </button>
        </p>
      </footer>
    </motion.main>
  );
}
