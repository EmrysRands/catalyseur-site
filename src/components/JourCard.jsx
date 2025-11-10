// src/components/JourCard.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function JourCard({ 
  jour, 
  titre, 
  action, 
  fiches, 
  livrable, 
  resultat, 
  tempsEstime, 
  checklist,
  isComplete = false,
  onToggleComplete 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`bg-[#0A2540]/60 border-l-4 p-4 rounded-r-lg transition-all ${
        isComplete 
          ? 'border-green-500 opacity-75' 
          : 'border-[#D4AF37]'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* HEADER */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span 
              className="text-xs font-bold px-2 py-1 rounded"
              style={{ backgroundColor: '#D4AF37', color: '#000' }}
            >
              Jour {jour}
            </span>
            <span className="text-xs text-gray-400">⏱️ {tempsEstime}</span>
            {isComplete && (
              <span className="text-xs text-green-400">✓ Terminé</span>
            )}
          </div>
          <h5 className="font-bold text-lg" style={{ color: '#D4AF37' }}>
            {titre}
          </h5>
          <p className="text-sm text-gray-300 mt-1">{action}</p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-4 text-2xl transition-transform"
          style={{ 
            color: '#D4AF37',
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        >
          ▼
        </button>
      </div>

      {/* INFOS RAPIDES */}
      <div className="grid grid-cols-2 gap-3 text-xs mb-3">
        <div className="bg-black/30 p-2 rounded">
          <p className="text-gray-400 mb-1">📚 Fiches à lire</p>
          <div className="flex gap-1 flex-wrap">
            {fiches.map((fiche, idx) => (
              <span 
                key={idx}
                className="px-2 py-1 rounded"
                style={{ backgroundColor: '#D4AF37', color: '#000' }}
              >
                {fiche}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-black/30 p-2 rounded">
          <p className="text-gray-400 mb-1">✅ Résultat</p>
          <p className="text-white font-semibold">{resultat}</p>
        </div>
      </div>

      {/* DÉTAILS EXPANDABLES */}
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="border-t border-[#D4AF37]/30 pt-3 mt-3"
        >
          {/* LIVRABLE */}
          <div className="mb-4">
            <p className="text-xs font-bold mb-2" style={{ color: '#D4AF37' }}>
              📝 Livrable à créer
            </p>
            <div className="bg-black/30 p-3 rounded text-sm">
              <p className="font-semibold text-white mb-1">{livrable.nom}</p>
              <p className="text-gray-400 text-xs">Format : {livrable.format}</p>
              {livrable.exemple && (
                <p className="text-gray-400 text-xs mt-2 italic">
                  Ex: {livrable.exemple}
                </p>
              )}
            </div>
          </div>

          {/* CHECKLIST */}
          <div className="mb-4">
            <p className="text-xs font-bold mb-2" style={{ color: '#D4AF37' }}>
              ✓ Checklist
            </p>
            <ul className="space-y-2">
              {checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <input 
                    type="checkbox" 
                    className="mt-1 cursor-pointer"
                    style={{ accentColor: '#D4AF37' }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => onToggleComplete && onToggleComplete(jour)}
              className={`flex-1 px-4 py-2 rounded-lg font-bold transition ${
                isComplete
                  ? 'bg-gray-600 text-gray-300'
                  : 'text-black'
              }`}
              style={!isComplete ? { backgroundColor: '#D4AF37' } : {}}
            >
              {isComplete ? '↻ Marquer non fait' : '✓ Marquer comme fait'}
            </button>

            <button
              className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition"
            >
              📖 Voir les fiches
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
