import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Nova() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    besoin: null,
    progression: null
  });
  const [diagnostic, setDiagnostic] = useState(null);

  // Logique de diagnostic basée sur les 4 besoins clients
  const calculateDiagnostic = (besoin, progression) => {
    let result = {
      niveau: "",
      strateRecommandee: "",
      strateUrl: "",
      citation: "",
      motCle: "",
      description: "",
      objectif: "",
      couleur: ""
    };

    // Logique de décision alignée sur les 4 besoins
    if (besoin === "éparpillement" && progression === "découverte") {
      result = {
        niveau: "Découverte",
        strateRecommandee: "Strate 1 : Réinvention",
        strateUrl: "/strate-reinvention",
        citation: "J'ai essayé plein de trucs, mais je ne sais plus ce qui marche.",
        motCle: "CLARTÉ",
        description: "Je vais te révéler comment identifier les 3 actions qui libèrent vraiment ton ÉNERGIE, éliminer le bruit qui te parasite, et construire le PONT entre ton chaos actuel et ta direction claire.",
        objectif: "Retrouver la CLARTÉ totale et télécharger les 36 Fiches Nova",
        couleur: "#D4AF37"
      };
    } else if (besoin === "plan" && progression === "action") {
      result = {
        niveau: "Passage à l'Action",
        strateRecommandee: "Strate 2 : Automatisation",
        strateUrl: "/strate-automatisation",
        citation: "Dis-moi quoi faire chaque jour pour avancer vraiment.",
        motCle: "SYSTÈME",
        description: "Je vais te montrer comment installer ton SYSTÈME quotidien, automatiser 3 flux clés qui libèrent ton ÉNERGIE, et construire le PONT entre tes intentions et tes actions concrètes.",
        objectif: "Installer ton SYSTÈME et télécharger le Blueprint n8n",
        couleur: "#D4AF37"
      };
    } else if (besoin === "preuve" && (progression === "testé" || progression === "action")) {
      result = {
        niveau: "Validation",
        strateRecommandee: "Strate 3 : Application",
        strateUrl: "/strate-application",
        citation: "Je veux prouver que je peux créer un revenu, même petit.",
        motCle: "TRANSFORMATION",
        description: "Je vais te guider pour lancer ton MVP, obtenir tes 3 premiers clients, et vivre la TRANSFORMATION concrète qui prouve que ton SYSTÈME fonctionne pour toi.",
        objectif: "Obtenir ta PREUVE concrète et débloquer les 17 Fiches IA",
        couleur: "#C4322A"
      };
    } else if (besoin === "cohérence" && progression === "engagé") {
      result = {
        niveau: "Stabilisation & Scaling",
        strateRecommandee: "Strate 4 : Liberté",
        strateUrl: "/strate-liberte",
        citation: "Je veux que tout ce que je fais ait enfin du sens.",
        motCle: "LIBÉRATION",
        description: "Je vais te révéler comment créer ton SYSTÈME evergreen, automatiser ta LIBÉRATION complète, et construire le PONT entre ton présent et ta vision à long terme.",
        objectif: "Atteindre la COHÉRENCE totale avec accompagnement 1:1",
        couleur: "#D4AF37"
      };
    } else {
      // Par défaut : rediriger vers Strate 1
      result = {
        niveau: "Découverte",
        strateRecommandee: "Strate 1 : Réinvention",
        strateUrl: "/strate-reinvention",
        citation: "J'ai essayé plein de trucs, mais je ne sais plus ce qui marche.",
        motCle: "CLARTÉ",
        description: "Commence par le début ! Je vais te révéler comment retrouver la CLARTÉ et construire le PONT entre ton chaos actuel et ta direction.",
        objectif: "Télécharger les 36 Fiches Nova gratuitement",
        couleur: "#D4AF37"
      };
    }

    return result;
  };

  const handleBesoinSelect = (besoin) => {
    setAnswers({ ...answers, besoin });
    setStep(2);
  };

  const handleProgressionSelect = (progression) => {
    setAnswers({ ...answers, progression });
    
    // Animation de calcul
    setStep(3);
    setDiagnostic({ loading: true });
    
    setTimeout(() => {
      const result = calculateDiagnostic(answers.besoin, progression);
      setDiagnostic(result);
    }, 1500);
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ besoin: null, progression: null });
    setDiagnostic(null);
  };

  return (
    <section
      id="nova"
      className="relative py-32 flex flex-col items-center text-center px-6 
                 bg-gradient-to-b from-[#1a1444] via-[#0A2540] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Halo lumineux */}
      <div className="absolute inset-0 bg-gradient-radial from-[#D4AF37]/10 via-[#0A2540]/10 to-transparent blur-3xl opacity-60"></div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 relative z-10 font-['Montserrat']"
        style={{ color: '#D4AF37' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        🤖 Diagnostic Nova
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 relative z-10 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Réponds à 2 questions et Nova te révélera ton <strong style={{ color: '#D4AF37' }}>PONT</strong> personnalisé 
        vers la <strong style={{ color: '#D4AF37' }}>TRANSFORMATION</strong>.
      </motion.p>

      <motion.div
        className="bg-[#0A2540]/40 backdrop-blur-md border border-[#D4AF37]/20 rounded-2xl p-8 w-full max-w-2xl relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* ÉTAPE 1 : BESOIN PRINCIPAL */}
        {step === 1 && (
          <>
            <p className="text-slate-200 mb-6 text-left text-lg font-semibold font-['Montserrat']">
              1️⃣ Quel est ton besoin principal aujourd'hui ?
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleBesoinSelect("éparpillement")}
                className="text-white font-semibold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#0A2540',
                  borderColor: '#D4AF37'
                }}
              >
                <span style={{ color: '#D4AF37' }}>🌪️</span> <strong>Arrêter de m'éparpiller</strong>
                <p className="text-sm text-gray-400 italic mt-1">
                  "J'ai essayé plein de trucs, mais je ne sais plus ce qui marche."
                </p>
              </button>
              <button
                onClick={() => handleBesoinSelect("plan")}
                className="text-white font-semibold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#0A2540',
                  borderColor: '#D4AF37'
                }}
              >
                <span style={{ color: '#D4AF37' }}>🗺️</span> <strong>Avoir un plan clair et mesurable</strong>
                <p className="text-sm text-gray-400 italic mt-1">
                  "Dis-moi quoi faire chaque jour pour avancer vraiment."
                </p>
              </button>
              <button
                onClick={() => handleBesoinSelect("preuve")}
                className="text-white font-semibold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#0A2540',
                  borderColor: '#C4322A'
                }}
              >
                <span style={{ color: '#C4322A' }}>🎯</span> <strong>Voir un résultat concret</strong>
                <p className="text-sm text-gray-400 italic mt-1">
                  "Je veux prouver que je peux créer un revenu, même petit."
                </p>
              </button>
              <button
                onClick={() => handleBesoinSelect("cohérence")}
                className="text-white font-semibold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#0A2540',
                  borderColor: '#D4AF37'
                }}
              >
                <span style={{ color: '#D4AF37' }}>🧩</span> <strong>Ressentir de la cohérence</strong>
                <p className="text-sm text-gray-400 italic mt-1">
                  "Je veux que tout ce que je fais ait enfin du sens."
                </p>
              </button>
            </div>
          </>
        )}

        {/* ÉTAPE 2 : PROGRESSION */}
        {step === 2 && (
          <>
            <p className="text-slate-200 mb-6 text-left text-lg font-semibold font-['Montserrat']">
              2️⃣ Où en es-tu dans ton parcours ?
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleProgressionSelect("découverte")}
                className="text-white font-semibold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#0A2540',
                  borderColor: '#D4AF37'
                }}
              >
                🌱 Je <strong>découvre</strong> et cherche la CLARTÉ
              </button>
              <button
                onClick={() => handleProgressionSelect("action")}
                className="text-white font-semibold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#0A2540',
                  borderColor: '#D4AF37'
                }}
              >
                🚀 J'ai la CLARTÉ, je veux installer le SYSTÈME
              </button>
              <button
                onClick={() => handleProgressionSelect("testé")}
                className="text-white font-semibold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#0A2540',
                  borderColor: '#C4322A'
                }}
              >
                🧪 J'ai le SYSTÈME, je veux la PREUVE concrète
              </button>
              <button
                onClick={() => handleProgressionSelect("engagé")}
                className="text-black font-bold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#D4AF37',
                  borderColor: '#D4AF37'
                }}
              >
                💎 Je veux la LIBÉRATION totale (accompagnement)
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
          <>
            {/* LOADER */}
            {diagnostic.loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4 animate-pulse">🔄</div>
                <p className="text-xl font-['Montserrat']" style={{ color: '#D4AF37' }}>
                  Nova calcule ton PONT personnalisé...
                </p>
              </motion.div>
            )}

            {/* RÉSULTAT */}
            {!diagnostic.loading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                {/* HEADER */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-3xl font-bold text-white mb-2 font-['Montserrat']">
                    Ton PONT vers la TRANSFORMATION
                  </h3>
                  <div 
                    className="inline-block text-black font-bold px-6 py-2 rounded-full text-lg font-['Montserrat']"
                    style={{ backgroundColor: diagnostic.couleur }}
                  >
                    Niveau : {diagnostic.niveau}
                  </div>
                </div>

                {/* CITATION CLIENT */}
                <div className="bg-[#C4322A]/20 border border-[#C4322A]/40 p-4 rounded-lg mb-6">
                  <p className="text-sm italic text-gray-300 leading-relaxed">
                    "{diagnostic.citation}"
                  </p>
                </div>

                {/* MOT-CLÉ TRANSFORMATION */}
                <div className="mb-6">
                  <p className="text-3xl font-bold font-['Montserrat']" style={{ color: diagnostic.couleur }}>
                    {diagnostic.motCle}
                  </p>
                </div>

                {/* STRATE RECOMMANDÉE */}
                <div className="bg-[#0A2540]/50 border border-[#D4AF37]/40 p-6 rounded-xl mb-6">
                  <h4 className="text-xl font-bold mb-3 font-['Montserrat']" style={{ color: '#D4AF37' }}>
                    📍 Prochaine Étape Recommandée
                  </h4>
                  <p className="text-2xl font-bold mb-3" style={{ color: diagnostic.couleur }}>
                    {diagnostic.strateRecommandee}
                  </p>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {diagnostic.description}
                  </p>
                </div>

                {/* OBJECTIF */}
                <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 p-4 rounded-xl mb-6">
                  <p className="font-semibold text-sm mb-1" style={{ color: '#D4AF37' }}>
                    🎯 Ton Objectif :
                  </p>
                  <p className="text-white font-bold">
                    {diagnostic.objectif}
                  </p>
                </div>

                {/* POURQUOI CETTE STRATE */}
                <div className="bg-[#0A2540]/30 border border-[#D4AF37]/30 p-4 rounded-xl mb-6 text-left">
                  <p className="font-semibold text-sm mb-2" style={{ color: '#D4AF37' }}>
                    💡 Pourquoi commencer par cette strate ?
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {diagnostic.niveau === "Découverte" && "Le parcours est PROGRESSIF. Chaque strate construit le PONT vers la suivante. Tu dois d'abord retrouver la CLARTÉ avant d'installer le SYSTÈME."}
                    {diagnostic.niveau === "Passage à l'Action" && "Tu as déjà la CLARTÉ. Maintenant, tu dois installer ton SYSTÈME quotidien qui libère ton ÉNERGIE avant de chercher la PREUVE."}
                    {diagnostic.niveau === "Validation" && "Tu as la CLARTÉ et le SYSTÈME. Il est temps d'obtenir la PREUVE concrète avec ton 1er revenu et vivre ta TRANSFORMATION."}
                    {diagnostic.niveau === "Stabilisation & Scaling" && "Tu as complété les 3 premières strates. Tu es qualifié(e) pour construire le PONT vers ta LIBÉRATION totale."}
                  </p>
                </div>

                {/* AVERTISSEMENT SI STRATE 4 */}
                {diagnostic.strateUrl === "/strate-liberte" && (
                  <div className="bg-[#C4322A]/20 border border-[#C4322A]/40 p-4 rounded-xl mb-6">
                    <p className="font-semibold text-sm mb-2" style={{ color: '#C4322A' }}>
                      ⚠️ Attention : Qualification Requise
                    </p>
                    <p className="text-gray-300 text-xs">
                      La Strate 4 (Liberté) est un parcours d'accompagnement payant. Tu dois avoir complété les Strates 1-2-3 pour être éligible.
                    </p>
                  </div>
                )}

                {/* CTA PRINCIPAL */}
                <button
                  onClick={() => navigate(diagnostic.strateUrl)}
                  className="w-full text-black font-bold px-8 py-4 rounded-xl transition text-lg mb-4 font-['Montserrat']"
                  style={{ backgroundColor: diagnostic.couleur }}
                >
                  🚀 Commencer : {diagnostic.strateRecommandee}
                </button>

                {/* CTA PARTAGE - NOUVEAU */}
                <button
                  onClick={() => {
                    const text = `Je viens de découvrir mon PONT vers la transformation avec Nova 🎯\n\nMon niveau : ${diagnostic.niveau}\nMa prochaine étape : ${diagnostic.strateRecommandee}\n\n#CatalyseurDigital #Transformation`;
                    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(text)}`;
                    window.open(url, '_blank');
                  }}
                  className="w-full bg-white/10 border border-[#D4AF37]/40 text-gray-300 font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition text-sm mb-4"
                >
                  📤 Partager mon résultat sur LinkedIn
                </button>

                {/* BOUTON REFAIRE */}
                <button
                  onClick={handleReset}
                  className="w-full bg-white/10 text-gray-300 font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition text-sm"
                >
                  🔄 Refaire le diagnostic
                </button>
              </motion.div>
            )}
          </>
        )}
      </motion.div>

      {/* NOTE IMPORTANTE */}
      <motion.div
        className="mt-8 max-w-2xl bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="font-semibold mb-2" style={{ color: '#D4AF37' }}>
          🌟 Comment fonctionne le parcours ?
        </p>
        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
          Le SYSTÈME est conçu comme un <strong style={{ color: '#D4AF37' }}>PONT progressif</strong> en 4 strates. 
          Chaque strate construit la suivante pour maximiser ta TRANSFORMATION :
        </p>
        <ul className="text-gray-300 text-xs space-y-2 ml-4">
          <li><strong style={{ color: '#D4AF37' }}>Strate 1 :</strong> Tu retrouves la CLARTÉ (36 fiches gratuites)</li>
          <li><strong style={{ color: '#D4AF37' }}>Strate 2 :</strong> Tu installes le SYSTÈME qui libère ton ÉNERGIE</li>
          <li><strong style={{ color: '#D4AF37' }}>Strate 3 :</strong> Tu obtiens la PREUVE de ta TRANSFORMATION</li>
          <li><strong style={{ color: '#D4AF37' }}>Strate 4 :</strong> Tu construis le PONT vers ta LIBÉRATION totale</li>
        </ul>
        <p className="text-xs font-semibold mt-3" style={{ color: '#D4AF37' }}>
          💡 Nova te révèle le PONT adapté à ton niveau actuel.
        </p>
      </motion.div>

      {/* STATISTIQUES */}
      <motion.div
        className="mt-8 text-sm md:text-base font-semibold relative z-10"
        style={{ color: '#D4AF37' }}
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
