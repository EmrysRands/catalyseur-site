import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Nova() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    defi: null,
    progression: null
  });
  const [diagnostic, setDiagnostic] = useState(null);

  // Logique de diagnostic basée sur les réponses
  const calculateDiagnostic = (defi, progression) => {
    let result = {
      niveau: "",
      strateRecommandee: "",
      strateUrl: "",
      description: "",
      fichesRecommandees: [],
      objectif: "",
      couleur: ""
    };

    // Logique de décision
    if (defi === "clarté" && progression === "découverte") {
      result = {
        niveau: "Découverte",
        strateRecommandee: "Strate 1 : Réinvention",
        strateUrl: "/strate-reinvention",
        description: "Tu as besoin de clarté sur ta direction. La Strate 1 va t'aider à construire ta VISION de la liberté digitale.",
        fichesRecommandees: [
          "Fiche 1 : Le Nouveau Riche vs l'Ancien Riche",
          "Fiche 3 : Le DEAL revisité",
          "Fiche 12 : Actifs Digitaux : la nouvelle richesse",
          "Fiche 23 : Travail profond comme compétence rare"
        ],
        objectif: "Obtenir le DÉCLIC et télécharger les 36 Fiches Nova",
        couleur: "from-blue-500 to-cyan-500"
      };
    } else if (defi === "temps" && progression === "action") {
      result = {
        niveau: "Passage à l'Action",
        strateRecommandee: "Strate 2 : Automatisation",
        strateUrl: "/strate-automatisation",
        description: "Tu as la vision, mais il te manque le SYSTÈME pour t'organiser. La Strate 2 va t'apprendre GTD et Atomic Habits.",
        fichesRecommandees: [
          "Fiche 42 : La revue hebdomadaire intelligente",
          "Fiche 47 : Les petites actions composées",
          "Fiche 51 : Comment IA + RPA changent tout",
          "Fiche 64 : Prompts intelligents = résultats puissants"
        ],
        objectif: "Télécharger le Blueprint n8n et les 16 Fiches Organisation",
        couleur: "from-purple-500 to-indigo-500"
      };
    } else if (defi === "résultats" && (progression === "testé" || progression === "action")) {
      result = {
        niveau: "Validation",
        strateRecommandee: "Strate 3 : Application",
        strateUrl: "/strate-application",
        description: "Tu as besoin de PREUVES concrètes. La Strate 3 va te faire tester Catalyseur Digital en live avec 2 démos interactives.",
        fichesRecommandees: [
          "Fiche 51 : Comment IA + RPA changent tout",
          "Fiche 64 : Prompts intelligents",
          "Fiche 69 : Ton plan IA personnalisé",
          "Fiche 92 : Le plan 0→1000€/mois"
        ],
        objectif: "Obtenir ton MICRO-SUCCÈS et débloquer les Livres 6 & 8",
        couleur: "from-orange-500 to-red-500"
      };
    } else if (defi === "liberté" && progression === "engagé") {
      result = {
        niveau: "Stabilisation & Scaling",
        strateRecommandee: "Strate 4 : Liberté",
        strateUrl: "/strate-liberte",
        description: "Tu es prêt(e) pour le parcours complet. La Strate 4 va te proposer le Tunnel d'Exclusivité en 3 niveaux.",
        fichesRecommandees: [
          "Fiche 73 : Le vrai luxe : la simplicité",
          "Fiche 92 : Le plan 0→1000€/mois",
          "Fiche 94 : Les pièges du solopreneur",
          "Fiche 96 : Les 4 piliers de la liberté durable"
        ],
        objectif: "Réserver ton Bilan Solopreneur Durable (Niveau 1)",
        couleur: "from-yellow-400 to-orange-500"
      };
    } else {
      // Par défaut : rediriger vers Strate 1
      result = {
        niveau: "Découverte",
        strateRecommandee: "Strate 1 : Réinvention",
        strateUrl: "/strate-reinvention",
        description: "Commence par le début ! La Strate 1 va te donner la VISION claire de la liberté digitale.",
        fichesRecommandees: [
          "Fiche 1 : Le Nouveau Riche vs l'Ancien Riche",
          "Fiche 12 : Actifs Digitaux",
          "Fiche 23 : Travail profond",
          "Fiche 36 : La transition progressive"
        ],
        objectif: "Télécharger les 36 Fiches Nova gratuitement",
        couleur: "from-blue-500 to-cyan-500"
      };
    }

    return result;
  };

  const handleDefiSelect = (defi) => {
    setAnswers({ ...answers, defi });
    setStep(2);
  };

  const handleProgressionSelect = (progression) => {
    setAnswers({ ...answers, progression });
    const result = calculateDiagnostic(answers.defi, progression);
    setDiagnostic(result);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ defi: null, progression: null });
    setDiagnostic(null);
  };

  return (
    <section
      id="nova"
      className="relative py-32 flex flex-col items-center text-center px-6 
                 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white overflow-hidden"
    >
      {/* Halo lumineux */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-blue-400/10 to-transparent blur-3xl opacity-60"></div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        🤖 Nova, ton Diagnostic de Maturité IA
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Réponds à 2 questions et Nova te recommandera la prochaine étape adaptée à ton niveau.
      </motion.p>

      <motion.div
        className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 w-full max-w-2xl relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* ÉTAPE 1 : DÉFI PRINCIPAL */}
        {step === 1 && (
          <>
            <p className="text-slate-200 mb-4 text-left text-lg font-semibold">
              1️⃣ Quel est ton principal défi aujourd'hui ?
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleDefiSelect("clarté")}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-400 hover:to-cyan-400 transition text-left"
              >
                💡 Manque de <strong>clarté</strong> sur ma direction
              </button>
              <button
                onClick={() => handleDefiSelect("temps")}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-400 hover:to-indigo-400 transition text-left"
              >
                ⏰ Trop de <strong>tâches répétitives</strong>, je perds du temps
              </button>
              <button
                onClick={() => handleDefiSelect("résultats")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-orange-400 hover:to-red-400 transition text-left"
              >
                📊 Pas assez de <strong>résultats concrets</strong>
              </button>
              <button
                onClick={() => handleDefiSelect("liberté")}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-6 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition text-left"
              >
                🏆 Je veux atteindre la <strong>Liberté Digitale</strong>
              </button>
            </div>
          </>
        )}

        {/* ÉTAPE 2 : NIVEAU DE PROGRESSION */}
        {step === 2 && (
          <>
            <p className="text-slate-200 mb-4 text-left text-lg font-semibold">
              2️⃣ Où en es-tu dans ton parcours ?
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleProgressionSelect("découverte")}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-400 hover:to-cyan-400 transition text-left"
              >
                🌱 Je <strong>découvre</strong> le concept de liberté digitale
              </button>
              <button
                onClick={() => handleProgressionSelect("action")}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-400 hover:to-indigo-400 transition text-left"
              >
                🚀 J'ai la vision, je veux passer à l'<strong>action</strong>
              </button>
              <button
                onClick={() => handleProgressionSelect("testé")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-orange-400 hover:to-red-400 transition text-left"
              >
                🧪 J'ai <strong>testé</strong> des outils, je veux valider
              </button>
              <button
                onClick={() => handleProgressionSelect("engagé")}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-6 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition text-left"
              >
                💎 Je suis <strong>prêt(e)</strong> à investir dans un système complet
              </button>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 text-gray-300 underline hover:text-white transition text-sm"
            >
              ← Retour à la question 1
            </button>
          </>
        )}

        {/* ÉTAPE 3 : RÉSULTAT DU DIAGNOSTIC */}
        {step === 3 && diagnostic && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* HEADER */}
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Ton Diagnostic de Maturité
              </h3>
              <div className={`inline-block bg-gradient-to-r ${diagnostic.couleur} text-white font-bold px-6 py-2 rounded-full text-lg`}>
                Niveau : {diagnostic.niveau}
              </div>
            </div>

            {/* STRATE RECOMMANDÉE */}
            <div className="bg-black/40 border border-purple-500/40 p-6 rounded-xl mb-6">
              <h4 className="text-xl font-bold text-purple-300 mb-3">
                📍 Prochaine Étape Recommandée
              </h4>
              <p className={`text-2xl font-bold bg-gradient-to-r ${diagnostic.couleur} bg-clip-text text-transparent mb-3`}>
                {diagnostic.strateRecommandee}
              </p>
              <p className="text-gray-200 text-sm">
                {diagnostic.description}
              </p>
            </div>

            {/* OBJECTIF */}
            <div className="bg-yellow-900/20 border border-yellow-500/40 p-4 rounded-xl mb-6">
              <p className="text-yellow-300 font-semibold text-sm mb-1">
                🎯 Ton Objectif :
              </p>
              <p className="text-white font-bold">
                {diagnostic.objectif}
              </p>
            </div>

            {/* FICHES RECOMMANDÉES */}
            <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl mb-6 text-left">
              <h4 className="text-lg font-bold text-blue-300 mb-3">
                📚 Fiches Recommandées pour toi
              </h4>
              <ul className="space-y-2 text-gray-200 text-sm">
                {diagnostic.fichesRecommandees.map((fiche, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>{fiche}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* POURQUOI COMMENCER PAR CETTE STRATE */}
            <div className="bg-purple-900/20 border border-purple-500/40 p-4 rounded-xl mb-6 text-left">
              <p className="text-purple-300 font-semibold text-sm mb-2">
                💡 Pourquoi commencer par cette strate ?
              </p>
              <p className="text-gray-300 text-sm">
                {diagnostic.niveau === "Découverte" && "Le parcours Catalyseur Digital est PROGRESSIF. Chaque strate débloque la suivante. Tu dois d'abord construire ta VISION avant de passer au SYSTÈME."}
                {diagnostic.niveau === "Passage à l'Action" && "Tu as déjà la vision de la liberté digitale. Maintenant, tu dois installer les MÉTHODES d'organisation (GTD + Atomic Habits) avant de tester les outils."}
                {diagnostic.niveau === "Validation" && "Tu as la vision ET les méthodes. Il est temps de TESTER concrètement avec des démos interactives et d'obtenir ton micro-succès."}
                {diagnostic.niveau === "Stabilisation & Scaling" && "Tu as complété les 3 premières strates. Tu es qualifié(e) pour accéder au Tunnel d'Exclusivité et construire un système durable."}
              </p>
            </div>

            {/* AVERTISSEMENT SI STRATE 4 */}
            {diagnostic.strateUrl === "/strate-liberte" && (
              <div className="bg-red-900/20 border border-red-500/40 p-4 rounded-xl mb-6">
                <p className="text-red-300 font-semibold text-sm mb-2">
                  ⚠️ Attention : Qualification Requise
                </p>
                <p className="text-gray-300 text-xs">
                  La Strate 4 (Liberté) est un parcours d'accompagnement payant. Tu dois avoir complété les Strates 1-2-3 pour être éligible au Bilan Solopreneur.
                </p>
              </div>
            )}

            {/* CTA PRINCIPAL */}
            <button
              onClick={() => navigate(diagnostic.strateUrl)}
              className={`w-full bg-gradient-to-r ${diagnostic.couleur} text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition text-lg mb-4`}
            >
              🚀 Commencer : {diagnostic.strateRecommandee}
            </button>

            {/* BOUTON SECONDAIRE */}
            <button
              onClick={handleReset}
              className="w-full bg-white/10 text-gray-300 font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition text-sm"
            >
              🔄 Refaire le diagnostic
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* NOTE IMPORTANTE */}
      <motion.div
        className="mt-8 max-w-2xl bg-purple-900/20 border border-purple-500/30 p-6 rounded-xl relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-purple-300 font-semibold mb-2">
          🌟 Comment fonctionne le parcours Catalyseur Digital ?
        </p>
        <p className="text-gray-300 text-sm mb-3">
          Le système est conçu comme un <strong>toboggan progressif</strong> en 4 strates. 
          Chaque strate débloque la suivante pour maximiser ta réussite :
        </p>
        <ul className="text-gray-300 text-xs space-y-1 ml-4">
          <li>✅ <strong>Strate 1 :</strong> Tu obtiens la VISION (36 fiches gratuites)</li>
          <li>✅ <strong>Strate 2 :</strong> Tu apprends les MÉTHODES (GTD + Atomic Habits)</li>
          <li>✅ <strong>Strate 3 :</strong> Tu obtiens la PREUVE (démos interactives)</li>
          <li>✅ <strong>Strate 4 :</strong> Tu construis le SYSTÈME (accompagnement personnalisé)</li>
        </ul>
        <p className="text-yellow-300 text-xs font-semibold mt-3">
          💡 Nova te recommande la strate adaptée à ton niveau actuel, mais tu DOIS respecter la progression.
        </p>
      </motion.div>

      {/* STATISTIQUES */}
      <motion.div
        className="mt-8 text-sm md:text-base text-purple-300 font-semibold relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        📊 +2,547 diagnostics réalisés • 87% atteignent la Strate 3 • 4.8/5 ⭐
      </motion.div>
    </section>
  );
}
