// src/components/PlanPersonnalise.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import JourCard from "./JourCard";
import { getPlan, getProfilInfo } from "../data/parcoursPersonnalises";

export default function PlanPersonnalise({ 
  profil, 
  strate, 
  onStart 
}) {
  const [joursCompletes, setJoursCompletes] = useState([]);
  
  const plan = getPlan(profil, strate);
  const profilInfo = getProfilInfo(profil);

  if (!plan || !profilInfo) {
    return (
      <div className="bg-[#C4322A]/20 border border-[#C4322A]/40 p-6 rounded-xl">
        <p className="text-white">Plan non disponible pour ce profil/strate.</p>
      </div>
    );
  }

  const handleToggleComplete = (jour) => {
    setJoursCompletes(prev => 
      prev.includes(jour) 
        ? prev.filter(j => j !== jour)
        : [...prev, jour]
    );
  };

  const progression = (joursCompletes.length / plan.plan.length) * 100;

  return (
    <div className="max-w-5xl mx-auto">
      {/* HEADER PLAN */}
      <motion.div
        className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-8 rounded-2xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-start gap-4 mb-6">
          <span className="text-5xl">{profilInfo.emoji}</span>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2 font-['Montserrat']" style={{ color: '#D4AF37' }}>
              {plan.titre}
            </h2>
            <p className="text-gray-300 mb-1">{profilInfo.description}</p>
            <p className="text-sm text-gray-400">
              📅 Durée : {plan.duree} • 🎯 Objectif : {plan.objectif}
            </p>
          </div>
        </div>

        {/* TRANSFORMATION */}
        <div className="bg-black/30 border border-[#D4AF37]/20 p-4 rounded-xl mb-6">
          <p className="text-sm mb-2" style={{ color: '#D4AF37' }}>
            ✨ Transformation attendue :
          </p>
          <p className="text-white font-semibold">{plan.transformation}</p>
        </div>

        {/* BARRE DE PROGRESSION */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Progression</span>
            <span className="font-bold" style={{ color: '#D4AF37' }}>
              {joursCompletes.length}/{plan.plan.length} jours
            </span>
          </div>
          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: '#D4AF37' }}
              initial={{ width: 0 }}
              animate={{ width: `${progression}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            {progression === 100 
              ? '🎉 Strate complétée ! Bravo !' 
              : `${Math.round(progression)}% complété`}
          </p>
        </div>
      </motion.div>

      {/* VUE SEMAINE (MINIATURE) */}
      <div className="grid grid-cols-7 gap-2 mb-8">
        {plan.plan.map((jour) => (
          <div
            key={jour.jour}
            className={`p-3 rounded-lg text-center border-2 transition-all ${
              joursCompletes.includes(jour.jour)
                ? 'bg-green-900/20 border-green-500'
                : 'bg-gray-800/20 border-gray-600 hover:border-[#D4AF37]'
            }`}
          >
            <p className="text-xs font-bold text-gray-400">J{jour.jour}</p>
            <p className="text-2xl mt-1">
              {joursCompletes.includes(jour.jour) ? '✓' : '⏳'}
            </p>
          </div>
        ))}
      </div>

      {/* LISTE DES JOURS */}
      <div className="space-y-4 mb-8">
        {plan.plan.map((jour) => (
          <JourCard
            key={jour.jour}
            jour={jour.jour}
            titre={jour.titre}
            action={jour.action}
            fiches={jour.fiches}
            livrable={jour.livrable}
            resultat={jour.resultat}
            tempsEstime={jour.tempsEstime}
            checklist={jour.checklist}
            isComplete={joursCompletes.includes(jour.jour)}
            onToggleComplete={handleToggleComplete}
          />
        ))}
      </div>

      {/* CTA FIN */}
      {progression === 100 && (
        <motion.div
          className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-500/40 p-8 rounded-2xl text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4" style={{ color: '#D4AF37' }}>
            🎉 Strate {strate} Complétée !
          </h3>
          <p className="text-gray-200 mb-6 text-lg">
            Tu as terminé {plan.titre}. Bravo pour ta progression !
          </p>
          
          {strate < 4 ? (
            <button
              onClick={() => onStart && onStart(strate + 1)}
              className="px-8 py-4 rounded-xl font-bold text-xl transition font-['Montserrat']"
              style={{ backgroundColor: '#D4AF37', color: '#000' }}
            >
              🚀 Passer à la Strate {strate + 1}
            </button>
          ) : (
            <div>
              <p className="text-2xl font-bold mb-4" style={{ color: '#D4AF37' }}>
                Tu as complété les 4 Strates !
              </p>
              <p className="text-gray-300 mb-6">
                Tu es maintenant prêt(e) pour le Tunnel d'Exclusivité.
              </p>
              <button
                onClick={() => window.location.href = '/strate-liberte'}
                className="px-8 py-4 rounded-xl font-bold text-xl transition font-['Montserrat']"
                style={{ backgroundColor: '#D4AF37', color: '#000' }}
              >
                🏆 Découvrir le Tunnel d'Exclusivité
              </button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
