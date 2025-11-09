import { motion } from "framer-motion";

export default function WhyNotWorking() {
  const problemes = [
    {
      icon: "🌪️",
      citation: "J'ai essayé plein de trucs, mais je ne sais plus ce qui marche.",
      leProbleme: "Le problème n'est pas toi.",
      explication: "C'est qu'on t'a vendu des outils sans SYSTÈME.",
      consequences: [
        "Tu accumules 10 outils dispersés",
        "Rien ne s'emboîte pour créer de la CLARTÉ",
        "Ton ÉNERGIE se dilue au lieu de se concentrer"
      ],
      solution: "UN PONT entre le chaos et le SYSTÈME",
      sousTitre: "qui filtre ce qui compte vraiment",
      gradient: "from-[#C4322A]/30 to-orange-900/30",
      borderColor: "border-[#C4322A]/30"
    },
    {
      icon: "🗺️",
      citation: "Dis-moi quoi faire chaque jour pour avancer vraiment.",
      leProbleme: "Le problème n'est pas ton manque d'action.",
      explication: "C'est qu'on t'a donné des intentions sans CLARTÉ opérationnelle.",
      consequences: [
        "Tu ne sais pas quoi faire en te levant",
        "Tu procrastines faute de SYSTÈME clair",
        "Ton ÉNERGIE part dans toutes les directions"
      ],
      solution: "UN SYSTÈME quotidien qui te dit exactement",
      sousTitre: "quelle action libère ton ÉNERGIE aujourd'hui",
      gradient: "from-orange-900/30 to-[#D4AF37]/30",
      borderColor: "border-[#D4AF37]/30"
    },
    {
      icon: "🎯",
      citation: "Je veux prouver que je peux créer un revenu, même petit.",
      leProbleme: "Le problème n'est pas ton niveau de compétence.",
      explication: "C'est qu'on t'a fait accumuler du savoir sans TRANSFORMATION concrète.",
      consequences: [
        "Tu connais plein de choses mais ne passes pas à l'acte",
        "Tu manques de CLARTÉ sur ton 1er pas",
        "Ton ÉNERGIE stagne dans la théorie"
      ],
      solution: "UNE PREUVE tangible en 48h",
      sousTitre: "qui construit le PONT entre idée et réalité",
      gradient: "from-[#D4AF37]/30 to-green-900/30",
      borderColor: "border-[#D4AF37]/30"
    },
    {
      icon: "🧩",
      citation: "Je veux que tout ce que je fais ait enfin du sens.",
      leProbleme: "Le problème n'est pas ton manque de vision.",
      explication: "C'est qu'on t'a donné des tactiques sans COHÉRENCE globale.",
      consequences: [
        "Tu fais 10 choses sans fil conducteur",
        "Tu manques de CLARTÉ sur où tu vas vraiment",
        "Ton ÉNERGIE s'éparpille sans direction"
      ],
      solution: "UN PONT entre tes actions quotidiennes",
      sousTitre: "et ta LIBÉRATION à long terme",
      gradient: "from-green-900/30 to-[#0A2540]/30",
      borderColor: "border-[#0A2540]/30"
    }
  ];

  return (
    <section
      id="why-not-working"
      className="relative py-32 bg-gradient-to-b from-[#0b0b17] via-[#0A2540] to-[#1a1444] text-white flex flex-col items-center px-6 overflow-hidden"
    >
      {/* Lueur d'arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#D4AF37]/10 via-[#C4322A]/10 to-transparent blur-3xl opacity-60 pointer-events-none"></div>

      {/* TITRE PRINCIPAL */}
      <motion.div
        className="text-center max-w-4xl mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Montserrat']" style={{ color: '#D4AF37' }}>
          Pourquoi ces 4 besoins restent insatisfaits ?
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed mb-6">
          Le problème n'est jamais toi.<br />
          C'est qu'on t'a vendu des <strong style={{ color: '#C4322A' }}>solutions fragmentées</strong> au lieu d'un <strong style={{ color: '#D4AF37' }}>SYSTÈME cohérent</strong>.
        </p>

        {/* MICRO-RÉCIT HUMANISANT - NOUVEAU */}
        <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 rounded-xl p-6 mt-8">
          <p className="text-sm text-gray-300 italic leading-relaxed">
            💬 Avant de créer Catalyseur Digital, j'étais comme toi — saturé d'outils, 
            de formations et de "méthodes miracles". J'avais les compétences, mais pas le <strong style={{ color: '#D4AF37' }}>PONT</strong> pour 
            les relier. C'est en construisant mon propre <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> que j'ai compris : 
            le problème n'était pas le manque d'outils, mais le manque de <strong style={{ color: '#D4AF37' }}>CLARTÉ</strong> sur comment les assembler.
          </p>
        </div>
      </motion.div>

      {/* GRILLE DES 4 PROBLÈMES */}
      <div className="relative z-10 grid sm:grid-cols-2 gap-8 max-w-6xl w-full mb-16">
        {problemes.map((probleme, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${probleme.gradient} backdrop-blur-sm border ${probleme.borderColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* ICÔNE */}
            <div className="text-5xl mb-4">{probleme.icon}</div>

            {/* CITATION CLIENT */}
            <div className="bg-[#C4322A]/20 border border-[#C4322A]/40 p-4 rounded-lg mb-4">
              <p className="text-sm italic text-gray-300 leading-relaxed">
                "{probleme.citation}"
              </p>
            </div>

            {/* LE PROBLÈME N'EST PAS TOI */}
            <h3 className="text-lg font-bold mb-2 font-['Montserrat']" style={{ color: '#D4AF37' }}>
              {probleme.leProbleme}
            </h3>

            {/* EXPLICATION */}
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              {probleme.explication}
            </p>

            {/* CONSÉQUENCES */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                Conséquences :
              </p>
              <ul className="space-y-2">
                {probleme.consequences.map((consequence, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                    <span style={{ color: '#C4322A' }} className="mt-0.5">•</span>
                    <span>{consequence}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CE QU'IL TE FAUT */}
            <div className="bg-[#0A2540]/50 border border-[#D4AF37]/40 p-4 rounded-lg">
              <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#D4AF37' }}>
                Ce qu'il te faut :
              </p>
              <p className="text-base font-bold mb-1" style={{ color: '#D4AF37' }}>
                {probleme.solution}
              </p>
              <p className="text-xs text-gray-400 italic">
                {probleme.sousTitre}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* TRANSITION VERS LES STRATES */}
      <motion.div
        className="bg-gradient-to-r from-[#0A2540]/60 to-[#1a1444]/60 backdrop-blur-md border border-[#D4AF37]/30 rounded-2xl p-8 max-w-4xl w-full relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <span className="text-5xl">💡</span>
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-2 font-['Montserrat']" style={{ color: '#D4AF37' }}>
              C'est pour résoudre ces 4 besoins
            </h3>
            <p className="text-lg text-gray-300">
              que j'ai créé le <strong style={{ color: '#D4AF37' }}>Système Catalyseur Digital 3.0</strong>
            </p>
          </div>
        </div>

        <div className="bg-black/30 border border-[#D4AF37]/20 p-6 rounded-xl mb-6">
          <p className="text-xl font-bold mb-4 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            4 Strates = 4 PONTS à construire
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left text-sm">
            <div className="flex items-start gap-2">
              <span className="font-bold" style={{ color: '#D4AF37' }}>1.</span>
              <div>
                <p className="font-semibold" style={{ color: '#D4AF37' }}>CLARTÉ</p>
                <p className="text-gray-400 text-xs">→ Retrouver le focus, éliminer le bruit</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold" style={{ color: '#D4AF37' }}>2.</span>
              <div>
                <p className="font-semibold" style={{ color: '#D4AF37' }}>SYSTÈME</p>
                <p className="text-gray-400 text-xs">→ Plan quotidien qui libère l'ÉNERGIE</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold" style={{ color: '#D4AF37' }}>3.</span>
              <div>
                <p className="font-semibold" style={{ color: '#D4AF37' }}>TRANSFORMATION</p>
                <p className="text-gray-400 text-xs">→ Preuve concrète en 48h</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold" style={{ color: '#D4AF37' }}>4.</span>
              <div>
                <p className="font-semibold" style={{ color: '#D4AF37' }}>LIBÉRATION</p>
                <p className="text-gray-400 text-xs">→ Cohérence qui donne du sens</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            const featuresSection = document.getElementById('features');
            if (featuresSection) featuresSection.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-black font-bold px-10 py-4 rounded-xl shadow-2xl transition-all text-lg font-['Montserrat']"
          style={{ backgroundColor: '#D4AF37' }}
        >
          🚀 Découvrir les 4 Strates
        </button>
      </motion.div>

      {/* CITATION FINALE */}
      <motion.div
        className="mt-12 text-center max-w-2xl relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-sm italic text-gray-400 border-l-4 pl-4 leading-relaxed" style={{ borderColor: '#D4AF37' }}>
          "Je rends la complexité simple et la simplicité puissante."<br />
          <span className="text-xs not-italic" style={{ color: '#D4AF37' }}>
            — Signature Catalyseur Digital 3.0
          </span>
        </p>
      </motion.div>
    </section>
  );
}
