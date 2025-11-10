import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import JourCard from "../components/JourCard";
import { getPlan, getProfilInfo } from "../data/parcoursPersonnalises";

export default function EspaceNova() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [userProfile, setUserProfile] = useState(null);
  const [strateActive, setStrateActive] = useState(1);
  const [jourActuel, setJourActuel] = useState(1);
  const [joursCompletes, setJoursCompletes] = useState([]);
  const [showChat, setShowChat] = useState(false);

  // Charger le diagnostic au montage
  useEffect(() => {
    // 1. Essayer de récupérer depuis navigation state
    const diagnosticFromNav = location.state?.diagnostic;
    
    // 2. Sinon, récupérer depuis localStorage
    const diagnosticFromStorage = localStorage.getItem('novaDiagnostic');
    
    if (diagnosticFromNav) {
      setUserProfile({
        profil: diagnosticFromNav.profil,
        profilInfo: diagnosticFromNav.profilInfo,
        niveau: diagnosticFromNav.niveau,
        strateRecommandee: diagnosticFromNav.strateRecommandee
      });
    } else if (diagnosticFromStorage) {
      const parsed = JSON.parse(diagnosticFromStorage);
      const profilInfo = getProfilInfo(parsed.profil);
      setUserProfile({
        profil: parsed.profil,
        profilInfo: profilInfo,
        niveau: parsed.progression,
        strateRecommandee: "Strate 1" // Par défaut
      });
    } else {
      // Pas de diagnostic : rediriger vers Nova
      navigate('/', { state: { scrollTo: 'nova' } });
    }

    // Charger la progression depuis localStorage
    const progressionSaved = localStorage.getItem('progression');
    if (progressionSaved) {
      const prog = JSON.parse(progressionSaved);
      setStrateActive(prog.strateActive || 1);
      setJourActuel(prog.jourActuel || 1);
      setJoursCompletes(prog.joursCompletes || []);
    }
  }, [location, navigate]);

  // Sauvegarder la progression
  const saveProgression = (strate, jour, completes) => {
    const progression = {
      strateActive: strate,
      jourActuel: jour,
      joursCompletes: completes
    };
    localStorage.setItem('progression', JSON.stringify(progression));
  };

  // Marquer un jour comme fait
  const handleToggleJour = (jour) => {
    const newCompletes = joursCompletes.includes(jour)
      ? joursCompletes.filter(j => j !== jour)
      : [...joursCompletes, jour].sort((a, b) => a - b);
    
    setJoursCompletes(newCompletes);
    
    // Si on vient de compléter le jour actuel, passer au suivant
    if (!joursCompletes.includes(jour) && jour === jourActuel) {
      const nextJour = jour + 1;
      
      // Calculer le jour global (1-30)
      const jourGlobal = ((strateActive - 1) * 7) + nextJour;
      
      if (nextJour <= 7) {
        setJourActuel(nextJour);
      } else if (strateActive < 4) {
        // Passer à la strate suivante
        setStrateActive(strateActive + 1);
        setJourActuel(1);
      }
    }
    
    saveProgression(strateActive, jourActuel, newCompletes);
  };

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1a1444] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 mx-auto mb-4" 
               style={{ borderColor: '#D4AF37' }}></div>
          <p className="text-white">Chargement de ton profil...</p>
        </div>
      </div>
    );
  }

  const plan = getPlan(userProfile.profil, strateActive);
  const jourActuelData = plan?.plan.find(j => j.jour === ((strateActive - 1) * 7 + jourActuel));
  
  // Calculer progression globale (sur 30 jours)
  const progressionGlobale = Math.round((joursCompletes.length / 30) * 100);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0A2540] to-[#1a1444] text-white px-6 py-[140px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* HEADER PROFIL */}
        <div className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-8 rounded-2xl mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex items-start gap-4">
              <span className="text-6xl">{userProfile.profilInfo.emoji}</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 font-['Montserrat']" style={{ color: '#D4AF37' }}>
                  Espace Nova
                </h1>
                <p className="text-xl text-white mb-1">{userProfile.profilInfo.nom}</p>
                <p className="text-sm text-gray-400">{userProfile.profilInfo.description}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-400 mb-1">🎯 Objectif 90 jours</p>
              <p className="text-sm font-semibold text-white">{userProfile.profilInfo.objectif90j}</p>
            </div>
          </div>

          {/* BARRE DE PROGRESSION GLOBALE */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Progression totale</span>
              <span className="font-bold" style={{ color: '#D4AF37' }}>
                {joursCompletes.length}/30 jours • {progressionGlobale}%
              </span>
            </div>
            <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: '#D4AF37' }}
                initial={{ width: 0 }}
                animate={{ width: `${progressionGlobale}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>

          {/* PROGRESSION PAR STRATE */}
          <div className="mt-6 grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((strate) => {
              const strateJours = joursCompletes.filter(j => 
                j > (strate - 1) * 7 && j <= strate * 7
              ).length;
              const isActive = strate === strateActive;
              const isCompleted = strateJours === 7;
              const isLocked = strate > strateActive;

              return (
                <div
                  key={strate}
                  className={`p-3 rounded-lg text-center border-2 transition-all ${
                    isCompleted ? 'bg-green-900/20 border-green-500' :
                    isActive ? 'bg-[#D4AF37]/20 border-[#D4AF37]' :
                    isLocked ? 'bg-gray-800/20 border-gray-600 opacity-50' :
                    'bg-gray-800/20 border-gray-600'
                  }`}
                >
                  <p className="text-xs font-bold text-gray-400">Strate {strate}</p>
                  <p className="text-2xl mt-1">
                    {isCompleted ? '✓' : isActive ? '🔄' : isLocked ? '🔒' : '⏳'}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{strateJours}/7</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* AUJOURD'HUI - JOUR ACTUEL */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            📅 Aujourd'hui : Jour {((strateActive - 1) * 7) + jourActuel}
          </h2>
          
          {jourActuelData ? (
            <JourCard
              jour={((strateActive - 1) * 7) + jourActuel}
              titre={jourActuelData.titre}
              action={jourActuelData.action}
              fiches={jourActuelData.fiches}
              livrable={jourActuelData.livrable}
              resultat={jourActuelData.resultat}
              tempsEstime={jourActuelData.tempsEstime}
              checklist={jourActuelData.checklist}
              isComplete={joursCompletes.includes(((strateActive - 1) * 7) + jourActuel)}
              onToggleComplete={handleToggleJour}
            />
          ) : (
            <div className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl text-center">
              <p className="text-gray-300">Aucun jour actif. Sélectionne une strate ci-dessous.</p>
            </div>
          )}
        </div>

        {/* TABS STRATES */}
        <div className="mb-8">
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {[1, 2, 3, 4].map((strate) => {
              const isLocked = strate > strateActive;
              return (
                <button
                  key={strate}
                  onClick={() => !isLocked && setStrateActive(strate)}
                  disabled={isLocked}
                  className={`px-6 py-3 rounded-lg font-bold whitespace-nowrap transition ${
                    strate === strateActive
                      ? 'text-black'
                      : isLocked
                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      : 'bg-[#0A2540] text-gray-300 hover:bg-[#0A2540]/80'
                  }`}
                  style={strate === strateActive ? { backgroundColor: '#D4AF37' } : {}}
                >
                  Strate {strate} {isLocked ? '🔒' : ''}
                </button>
              );
            })}
          </div>

          {/* PLAN DE LA STRATE ACTIVE */}
          {plan && (
            <div className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold font-['Montserrat']" style={{ color: '#D4AF37' }}>
                    {plan.titre}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {plan.duree} • {plan.objectif}
                  </p>
                </div>
                <button
                  onClick={() => {
                    const strateUrls = {
                      1: '/strate-reinvention',
                      2: '/strate-automatisation',
                      3: '/strate-application',
                      4: '/strate-liberte'
                    };
                    navigate(strateUrls[strateActive]);
                  }}
                  className="text-sm px-4 py-2 rounded-lg border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 transition"
                >
                  📚 Télécharger Fiches
                </button>
              </div>

              {/* LISTE DES JOURS */}
              <div className="space-y-4 mt-6">
                {plan.plan.map((jour) => {
                  const jourGlobal = ((strateActive - 1) * 7) + jour.jour;
                  return (
                    <JourCard
                      key={jour.jour}
                      jour={jourGlobal}
                      titre={jour.titre}
                      action={jour.action}
                      fiches={jour.fiches}
                      livrable={jour.livrable}
                      resultat={jour.resultat}
                      tempsEstime={jour.tempsEstime}
                      checklist={jour.checklist}
                      isComplete={joursCompletes.includes(jourGlobal)}
                      onToggleComplete={handleToggleJour}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* CHAT NOVA (OPTIONNEL) */}
        <div className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold font-['Montserrat']" style={{ color: '#D4AF37' }}>
              💬 Chat avec Nova
            </h3>
            <button
              onClick={() => setShowChat(!showChat)}
              className="text-sm px-4 py-2 rounded-lg border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 transition"
            >
              {showChat ? 'Masquer' : 'Afficher'}
            </button>
          </div>

          {showChat && (
            <div className="mt-4">
              <button
                onClick={() => navigate('/nova-chat')}
                className="w-full text-black font-bold py-3 px-6 rounded-lg transition"
                style={{ backgroundColor: '#D4AF37' }}
              >
                🚀 Ouvrir Nova Chat
              </button>
            </div>
          )}
        </div>

        {/* BOUTON RETOUR */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-[#D4AF37] transition text-sm"
          >
            ← Retour à l'accueil
          </button>
        </div>
      </motion.div>
    </section>
  );
}
