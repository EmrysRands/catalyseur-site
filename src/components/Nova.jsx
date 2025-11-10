import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getProfilInfo } from "../data/parcoursPersonnalises";

export default function Nova() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    besoin: null,
    progression: null,
    profil: null
  });
  const [diagnostic, setDiagnostic] = useState(null);

  // Logique de diagnostic basée sur les 4 besoins clients + profil
  const calculateDiagnostic = (besoin, progression, profil) => {
    let result = {
      niveau: "",
      strateRecommandee: "",
      strateUrl: "",
      citation: "",
      motCle: "",
      description: "",
      objectif: "",
      couleur: "",
      profil: profil,
      profilInfo: getProfilInfo(profil)
    };

    // Logique de décision alignée sur les 4 besoins
    if (besoin === "éparpillement" && progression === "découverte") {
      result = {
        ...result,
        niveau: "Découverte",
        strateRecommandee: "Strate 1 : Réinvention",
        strateUrl: "/espace-nova",
        citation: "J'ai essayé plein de trucs, mais je ne sais plus ce qui marche.",
        motCle: "CLARTÉ",
        description: "Je vais te révéler comment identifier les 3 actions qui libèrent vraiment ton ÉNERGIE, éliminer le bruit qui te parasite, et construire le PONT entre ton chaos actuel et ta direction claire.",
        objectif: "Retrouver la CLARTÉ totale et télécharger les 36 Fiches Nova",
        couleur: "#D4AF37"
      };
    } else if (besoin === "plan" && progression === "action") {
      result = {
        ...result,
        niveau: "Passage à l'Action",
        strateRecommandee: "Strate 2 : Automatisation",
        strateUrl: "/espace-nova",
        citation: "Dis-moi quoi faire chaque jour pour avancer vraiment.",
        motCle: "SYSTÈME",
        description: "Je vais te montrer comment installer ton SYSTÈME quotidien, automatiser 3 flux clés qui libèrent ton ÉNERGIE, et construire le PONT entre tes intentions et tes actions concrètes.",
        objectif: "Installer ton SYSTÈME et télécharger le Blueprint n8n",
        couleur: "#D4AF37"
      };
    } else if (besoin === "preuve" && (progression === "testé" || progression === "action")) {
      result = {
        ...result,
        niveau: "Validation",
        strateRecommandee: "Strate 3 : Application",
        strateUrl: "/espace-nova",
        citation: "Je veux prouver que je peux créer un revenu, même petit.",
        motCle: "TRANSFORMATION",
        description: "Je vais te guider pour lancer ton MVP, obtenir tes 3 premiers clients, et vivre la TRANSFORMATION concrète qui prouve que ton SYSTÈME fonctionne pour toi.",
        objectif: "Obtenir ta PREUVE concrète et débloquer les 17 Fiches IA",
        couleur: "#C4322A"
      };
    } else if (besoin === "cohérence" && progression === "engagé") {
      result = {
        ...result,
        niveau: "Stabilisation & Scaling",
        strateRecommandee: "Strate 4 : Liberté",
        strateUrl: "/espace-nova",
        citation: "Je veux que tout ce que je fais ait enfin du sens.",
        motCle: "LIBÉRATION",
        description: "Je vais te révéler comment créer ton SYSTÈME evergreen, automatiser ta LIBÉRATION complète, et construire le PONT entre ton présent et ta vision à long terme.",
        objectif: "Atteindre la COHÉRENCE totale avec accompagnement 1:1",
        couleur: "#D4AF37"
      };
    } else {
      // Par défaut : rediriger vers Strate 1
      result = {
        ...result,
        niveau: "Découverte",
        strateRecommandee: "Strate 1 : Réinvention",
        strateUrl: "/espace-nova",
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
    setStep(2.5); // Nouvelle étape : profil
  };

  const handleProfilSelect = (profil) => {
    setAnswers({ ...answers, profil });
    
    // Animation de calcul
    setStep(3);
    setDiagnostic({ loading: true });
    
    setTimeout(() => {
      const result = calculateDiagnostic(answers.besoin, answers.progression, profil);
      setDiagnostic(result);
      
      // Stocker dans localStorage pour EspaceNova
      localStorage.setItem('novaDiagnostic', JSON.stringify({
        besoin: answers.besoin,
        progression: answers.progression,
        profil: profil,
        timestamp: new Date().toISOString()
      }));
    }, 1500);
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ besoin: null, progression: null, profil: null });
    setDiagnostic(null);
  };

  const handleStartParcours = () => {
    // Rediriger vers EspaceNova avec le diagnostic
    navigate('/espace-nova', { 
      state: { 
        diagnostic: diagnostic,
        fromNova: true 
      } 
    });
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
        Réponds à 3 questions et Nova te révélera ton <strong style={{ color: '#D4AF37' }}>PONT</strong> personnalisé 
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
                className="text-white font-semibold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#0A2540',
                  borderColor: '#D4AF37'
                }}
              >
                🏆 J'ai la PREUVE, je veux la LIBÉRATION durable
              </button>
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-4 text-sm text-gray-400 hover:text-[#D4AF37] transition"
            >
              ← Retour
            </button>
          </>
        )}

        {/* ÉTAPE 2.5 : PROFIL - NOUVEAU */}
        {step === 2.5 && (
          <>
            <p className="text-slate-200 mb-6 text-left text-lg font-semibold font-['Montserrat']">
              3️⃣ Quel est ton profil professionnel ?
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleProfilSelect("formateur")}
                className="text-white font-semibold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#0A2540',
                  borderColor: '#D4AF37'
                }}
              >
                <span style={{ color: '#D4AF37' }}>👩‍🏫</span> <strong>Formateur / Coach certifié</strong>
                <p className="text-sm text-gray-400 italic mt-1">
                  Tu transmets, mais tu veux un modèle rentable et fluide
                </p>
              </button>
              <button
                onClick={() => handleProfilSelect("freelance")}
                className="text-white font-semibold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#0A2540',
                  borderColor: '#D4AF37'
                }}
              >
                <span style={{ color: '#D4AF37' }}>🎨</span> <strong>Freelance créatif</strong>
                <p className="text-sm text-gray-400 italic mt-1">
                  Tu crées de la valeur, mais tu te perds dans le désordre
                </p>
              </button>
              <button
                onClick={() => handleProfilSelect("consultant")}
                className="text-white font-semibold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#0A2540',
                  borderColor: '#D4AF37'
                }}
              >
                <span style={{ color: '#D4AF37' }}>💼</span> <strong>Consultant / Expert technique</strong>
                <p className="text-sm text-gray-400 italic mt-1">
                  Tu veux arrêter d'échanger temps contre argent
                </p>
              </button>
              <button
                onClick={() => handleProfilSelect("saas")}
                className="text-white font-semibold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#0A2540',
                  borderColor: '#D4AF37'
                }}
              >
                <span style={{ color: '#D4AF37' }}>💻</span> <strong>Entrepreneur SaaS / Solopreneur tech</strong>
                <p className="text-sm text-gray-400 italic mt-1">
                  Tu construis des systèmes qui tournent seuls
                </p>
              </button>
              <button
                onClick={() => handleProfilSelect("community")}
                className="text-white font-semibold py-4 px-6 rounded-lg transition text-left border-2 hover:scale-102"
                style={{ 
                  backgroundColor: '#0A2540',
                  borderColor: '#D4AF37'
                }}
              >
                <span style={{ color: '#D4AF37' }}>📱</span> <strong>Community Manager / Support digital</strong>
                <p className="text-sm text-gray-400 italic mt-1">
                  Tu aides et organises, mais tu as besoin de structure
                </p>
              </button>
            </div>
            <button
              onClick={() => setStep(2)}
              className="mt-4 text-sm text-gray-400 hover:text-[#D4AF37] transition"
            >
              ← Retour
            </button>
          </>
        )}

        {/* ÉTAPE 3 : RÉSULTAT */}
        {step === 3 && diagnostic && (
          <>
            {diagnostic.loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 mx-auto mb-4" 
                     style={{ borderColor: '#D4AF37' }}></div>
                <p className="text-slate-200">Nova analyse ton profil...</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold mb-2 font-['Montserrat']" style={{ color: diagnostic.couleur }}>
                    ✨ Ton Diagnostic
                  </h3>
                  <p className="text-sm text-gray-400">
                    {diagnostic.niveau} • {diagnostic.profilInfo.emoji} {diagnostic.profilInfo.nom}
                  </p>
                </div>

                {/* CITATION CLIENT */}
                <div className="bg-[#C4322A]/20 border border-[#C4322A]/40 p-4 rounded-xl mb-6">
                  <p className="text-lg italic text-gray-200 leading-relaxed">
                    "{diagnostic.citation}"
                  </p>
                </div>

                {/* MOT-CLÉ */}
                <div className="bg-black/30 border border-[#D4AF37]/40 p-4 rounded-xl mb-6">
                  <p className="text-3xl font-bold mb-2 font-['Montserrat']" style={{ color: diagnostic.couleur }}>
                    {diagnostic.motCle}
                  </p>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {diagnostic.description}
                  </p>
                </div>

                {/* PROFIL + OBJECTIF 90J */}
                <div className="bg-[#0A2540]/60 border border-[#D4AF37]/30 p-4 rounded-xl mb-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{diagnostic.profilInfo.emoji}</span>
                    <div>
                      <p className="font-bold text-white">{diagnostic.profilInfo.nom}</p>
                      <p className="text-sm text-gray-400">{diagnostic.profilInfo.description}</p>
                    </div>
                  </div>
                  <div className="border-t border-[#D4AF37]/20 pt-3">
                    <p className="text-xs font-bold mb-1" style={{ color: '#D4AF37' }}>
                      🎯 Ton Objectif 90 jours :
                    </p>
                    <p className="text-sm text-white">{diagnostic.profilInfo.objectif90j}</p>
                  </div>
                </div>

                {/* PROCHAINE ÉTAPE */}
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/40 p-4 rounded-xl mb-6">
                  <p className="text-lg font-bold mb-2" style={{ color: '#D4AF37' }}>
                    📍 Prochaine Étape Recommandée
                  </p>
                  <p className="text-white font-semibold mb-1">{diagnostic.strateRecommandee}</p>
                  <p className="text-sm text-gray-300">{diagnostic.objectif}</p>
                </div>

                {/* CTA PRINCIPAL */}
                <button
                  onClick={handleStartParcours}
                  className="w-full text-black font-bold py-4 px-6 rounded-xl transition text-lg mb-3 font-['Montserrat']"
                  style={{ backgroundColor: diagnostic.couleur }}
                >
                  🚀 Commencer Mon Parcours {diagnostic.profilInfo.nom}
                </button>

                {/* RESET */}
                <button
                  onClick={handleReset}
                  className="text-sm text-gray-400 hover:text-[#D4AF37] transition"
                >
                  ↻ Refaire le diagnostic
                </button>
              </>
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

      {/* MESSAGE COMMUNAUTÉ BETA */}
      <motion.div
        className="mt-8 text-sm text-center max-w-2xl relative z-10 bg-[#0A2540]/40 border border-[#D4AF37]/30 rounded-xl p-4"
        style={{ color: '#D4AF37' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="font-semibold mb-1">🌱 Communauté en construction</p>
        <p className="text-xs text-gray-400">
          Tu fais partie des premiers à tester Nova et à construire ton PONT. 
          Chaque diagnostic aide à affiner le système pour les suivants.
        </p>
      </motion.div>
    </section>
  );
}
