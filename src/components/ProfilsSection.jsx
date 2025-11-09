import { motion } from "framer-motion";

export default function ProfilsSection() {
  const profils = [
    {
      emoji: "👩‍🏫",
      nom: "Marie",
      titre: "Formatrice certifiée",
      situation: "Marie a 5 certifications et un livre publié.",
      chaos: "Elle ne sait plus :",
      problemes: [
        "Sur quel sujet concentrer son énergie",
        "Comment structurer son système d'offre",
        "Si la transformation qu'elle propose a de la valeur",
        "Comment créer une cohérence entre tout ce qu'elle sait"
      ],
      resultatApres: [
        "1 offre claire à 1500€",
        "5 RDV qualifiés/semaine (système automatisé)",
        "10h/semaine libérées pour créer"
      ],
      accentColor: "#D4AF37" // Or premium
    },
    {
      emoji: "💼",
      nom: "Thomas",
      titre: "Consultant indépendant",
      situation: "Thomas a 10 outils, 5 projets en cours, 0 système.",
      chaos: "Il ne sait plus :",
      problemes: [
        "Quel pont construire en premier",
        "Comment transformer son temps en clarté",
        "Si l'énergie investie génère des résultats",
        "Quelle direction suit vraiment son système"
      ],
      resultatApres: [
        "1 pipeline automatisé (système complet)",
        "+3000€ de CA mensuel",
        "12h/semaine libérées"
      ],
      accentColor: "#0A2540" // Bleu profond
    },
    {
      emoji: "🚀",
      nom: "Sophie",
      titre: "Salariée en transformation",
      situation: "Sophie veut quitter son job et créer sa liberté digitale.",
      chaos: "Mais :",
      problemes: [
        "Elle a 10 idées, 0 clarté sur laquelle choisir",
        "Elle ne sait pas par où commencer son pont",
        "Elle cherche la preuve que la transformation est possible",
        "Elle veut comprendre le système avant de se lancer"
      ],
      resultatApres: [
        "1 MVP lancé et validé",
        "3 premiers clients (preuve concrète)",
        "Clarté totale sur sa direction"
      ],
      accentColor: "#C4322A" // Rouge catalyseur
    },
    {
      emoji: "📈",
      nom: "David",
      titre: "E-commerce 50k€/an",
      situation: "David génère du CA, mais perd son énergie dans l'opérationnel.",
      chaos: "Il vit :",
      problemes: [
        "Le chaos de gérer 100 tâches sans système",
        "Le manque de clarté sur sa roadmap",
        "La frustration de ne pas scaler malgré l'énergie investie",
        "Le besoin d'un pont entre son CA actuel et la liberté"
      ],
      resultatApres: [
        "3 flux automatisés (transformation du quotidien)",
        "+20% de CA sans travailler plus",
        "15h/semaine libérées"
      ],
      accentColor: "#D4AF37" // Or premium
    },
    {
      emoji: "🎥",
      nom: "Lisa",
      titre: "Créatrice 10k followers",
      situation: "Lisa a une audience, mais pas de système de monétisation.",
      chaos: "Elle cherche :",
      problemes: [
        "Comment transformer son énergie créative en revenus",
        "Un système pour publier sans s'épuiser",
        "La clarté sur son modèle économique",
        "Le pont entre passion et liberté financière"
      ],
      resultatApres: [
        "1 offre lancée (système complet)",
        "2000€ de revenus récurrents",
        "Contenu automatisé qui libère son temps"
      ],
      accentColor: "#0A2540" // Bleu profond
    },
    {
      emoji: "⚡",
      nom: "Alex",
      titre: "Débutant déterminé",
      situation: "Alex veut lancer quelque chose, mais part de zéro.",
      chaos: "Il ressent :",
      problemes: [
        "Le chaos de ne pas savoir quoi vendre",
        "La peur de perdre son énergie sur le mauvais projet",
        "Le besoin de clarté avant de commencer",
        "La recherche d'un système pour éviter les erreurs"
      ],
      resultatApres: [
        "1 MVP lancé en 7 jours",
        "5 premiers clients testeurs",
        "Transformation de l'idée en réalité"
      ],
      accentColor: "#C4322A" // Rouge catalyseur
    }
  ];

  return (
    <section
      id="profils"
      className="relative py-32 bg-gradient-to-b from-[#0f172a] via-[#0A2540] to-[#1a1444] text-white flex flex-col items-center px-6 overflow-hidden"
    >
      {/* Lueur d'arrière-plan - Or premium */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#D4AF37]/10 via-[#0A2540]/10 to-transparent blur-3xl opacity-60 pointer-events-none"></div>

      {/* TITRE PRINCIPAL */}
      <motion.div
        className="text-center max-w-4xl mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#D4AF37' }}>
          Peu importe ta situation,
          <br />
          ces 4 problèmes sont les mêmes
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          Formateur, freelance, e-commerce, créateur, salarié en transformation...<br />
          Tous partagent le même besoin : <strong style={{ color: '#D4AF37' }}>clarté, système, et libération</strong>.
        </p>
      </motion.div>

      {/* NOTE CENTRALE */}
      <motion.div
        className="bg-[#0A2540]/50 backdrop-blur-md border border-[#D4AF37]/30 rounded-2xl p-6 max-w-3xl mb-16 relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 italic">
          💡 <strong style={{ color: '#D4AF37' }}>Tu n'as pas besoin d'un autre outil.</strong><br />
          Tu as besoin de <strong style={{ color: '#C4322A' }}>comprendre le système</strong>.
        </p>
      </motion.div>

      {/* GRILLE DES 6 PROFILS */}
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {profils.map((profil, index) => (
          <motion.div
            key={index}
            className="bg-[#0A2540]/30 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all relative"
            style={{ borderColor: `${profil.accentColor}40` }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * index, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03 }}
          >
            {/* EMOJI */}
            <div className="text-5xl mb-4">{profil.emoji}</div>

            {/* NOM + TITRE */}
            <h3 className="text-2xl font-bold mb-2" style={{ color: profil.accentColor }}>
              {profil.nom}
            </h3>
            <p className="text-sm text-gray-400 mb-4 uppercase tracking-wide">
              {profil.titre}
            </p>

            {/* SITUATION */}
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              {profil.situation}
            </p>

            {/* CHAOS SECTION */}
            <div className="bg-[#C4322A]/20 border border-[#C4322A]/30 p-4 rounded-lg mb-4">
              <p className="text-xs font-semibold text-[#C4322A] uppercase tracking-wide mb-2">
                {profil.chaos}
              </p>
              <ul className="space-y-2">
                {profil.problemes.map((probleme, idx) => (
                  <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                    <span className="text-[#C4322A] mt-0.5">→</span>
                    <span>{probleme}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RÉSULTAT APRÈS */}
            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-4 rounded-lg">
              <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#D4AF37' }}>
                ✅ Résultat après 30 jours :
              </p>
              <ul className="space-y-1.5">
                {profil.resultatApres.map((resultat, idx) => (
                  <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                    <span style={{ color: '#D4AF37' }}>•</span>
                    <span>{resultat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ACCENT BORDER */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
              style={{ backgroundColor: profil.accentColor }}
            ></div>
          </motion.div>
        ))}
      </div>

      {/* CTA FINAL */}
      <motion.div
        className="mt-16 text-center relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-[#0A2540]/60 to-[#1a1444]/60 backdrop-blur-md border border-[#D4AF37]/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#D4AF37' }}>
            Tu te reconnais dans un de ces profils ?
          </h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Fais le <strong style={{ color: '#C4322A' }}>Diagnostic Nova</strong> pour découvrir 
            ton parcours personnalisé et construire le <strong style={{ color: '#D4AF37' }}>pont</strong> entre 
            ton chaos actuel et ta <strong style={{ color: '#D4AF37' }}>libération digitale</strong>.
          </p>

          <button
            onClick={() => {
              const novaSection = document.getElementById('nova');
              if (novaSection) novaSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-[#D4AF37] via-[#C4322A] to-[#D4AF37] text-black font-bold px-10 py-4 rounded-xl shadow-2xl hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all text-lg"
          >
            🚀 Faire le Diagnostic Nova (2 min)
          </button>

          <p className="mt-4 text-sm text-gray-400">
            💡 Peu importe ton métier ou ta situation,<br />
            les 4 problèmes sont les mêmes. Les 4 Strates les résolvent, 1 par 1.
          </p>
        </div>
      </motion.div>

      {/* CITATION FINALE */}
      <motion.div
        className="mt-12 text-center max-w-2xl relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-sm italic text-gray-400 border-l-4 pl-4" style={{ borderColor: '#D4AF37' }}>
          "Je rends la complexité simple et la simplicité puissante."<br />
          <span className="text-xs not-italic" style={{ color: '#D4AF37' }}>
            — Signature Catalyseur Digital 3.0
          </span>
        </p>
      </motion.div>
    </section>
  );
}
