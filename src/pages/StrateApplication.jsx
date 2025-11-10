import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StrateApplication() {
  const navigate = useNavigate();
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [generatorInputs, setGeneratorInputs] = useState({
    role: "",
    task: "",
    tone: ""
  });
  const [calculatorInputs, setCalculatorInputs] = useState({
    hours: "",
    rate: ""
  });
  const [generatorResult, setGeneratorResult] = useState(null);
  const [calculatorResult, setCalculatorResult] = useState(null);

  const handleGeneratorSubmit = (e) => {
    e.preventDefault();
    
    const result = {
      content: `Objet : ${generatorInputs.role} - Collaboration stratégique

Bonjour [Prénom],

Je suis ${generatorInputs.role} et j'ai remarqué votre expertise dans [domaine]. Je pense qu'il existe une opportunité de collaboration sur ${generatorInputs.task}.

Seriez-vous disponible pour un échange rapide de 15 minutes cette semaine ?

Cordialement,
[Votre nom]`,
      timeSaved: 20,
      openRate: 45
    };
    
    setGeneratorResult(result);
    
    // Webhook
    fetch("https://automate.optimizeinsight.com/webhook/demo_success", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        demo: "generator",
        inputs: generatorInputs,
        timestamp: new Date().toISOString(),
      }),
    });
  };

  const handleCalculatorSubmit = (e) => {
    e.preventDefault();
    
    const hours = parseFloat(calculatorInputs.hours);
    const rate = parseFloat(calculatorInputs.rate);
    
    const weeklyTimeSaved = hours * 0.6;
    const yearlyTimeSaved = weeklyTimeSaved * 52;
    const yearlyValue = yearlyTimeSaved * rate;
    const daysPerYear = Math.floor(yearlyTimeSaved / 8);
    
    const result = {
      weeklyTimeSaved: weeklyTimeSaved.toFixed(1),
      yearlyTimeSaved: yearlyTimeSaved.toFixed(0),
      yearlyValue: yearlyValue.toFixed(0),
      daysPerYear,
      potentialWithReinvestment: (yearlyValue * 1.5).toFixed(0)
    };
    
    setCalculatorResult(result);
    
    // Webhook
    fetch("https://automate.optimizeinsight.com/webhook/demo_success", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        demo: "calculator",
        inputs: calculatorInputs,
        result,
        timestamp: new Date().toISOString(),
      }),
    });
  };

  const fichesLivres6Et8 = {
    livre6: {
      titre: "Hyper-Automatisation",
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
      ]
    },
    livre8: {
      titre: "Boostez votre Business avec l'IA",
      fiches: [
        "L'IA comme partenaire de concentration",
        "Prompts intelligents = résultats puissants",
        "Comment IA + RPA changent tout",
        "Ton plan IA personnalisé",
        "Les 7 erreurs fatales avec l'IA",
        "Déléguer à l'IA (sans perdre ton humanité)",
        "L'IA appliquée au solopreneur"
      ]
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
            💡 <strong style={{ color: '#D4AF37' }}>Conseil :</strong> Télécharge ces démos et reviens dans ton 
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
          Strate 3 — Application
        </motion.h1>

        {/* CITATION CLIENT */}
        <motion.div
          className="bg-[#C4322A]/20 border border-[#C4322A]/40 p-8 rounded-2xl mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#C4322A' }}>
            🎯 Ton Besoin
          </h2>
          <p className="text-xl italic text-gray-200 mb-6 leading-relaxed">
            "Je veux prouver que je peux créer un revenu, même petit."
          </p>
          
          <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
            <p className="text-3xl font-bold mb-3 font-['Montserrat']" style={{ color: '#D4AF37' }}>
              TRANSFORMATION
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              En 7 jours, je vais te guider pour lancer ton MVP, obtenir tes 3 premiers clients, 
              et vivre la <strong style={{ color: '#D4AF37' }}>TRANSFORMATION</strong> concrète qui prouve 
              que ton <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> fonctionne pour toi.
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
            ✨ Ta TRANSFORMATION Jour 21
          </h2>
          <div className="text-left text-gray-200 space-y-4 text-lg max-w-2xl mx-auto">
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }} className="text-2xl">→</span>
              <span><strong style={{ color: '#D4AF37' }}>PREUVE concrète</strong> : ton 1er revenu généré (même 500€)</span>
            </p>
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }} className="text-2xl">→</span>
              <span><strong style={{ color: '#D4AF37' }}>TRANSFORMATION validée</strong> par de vrais clients</span>
            </p>
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }} className="text-2xl">→</span>
              <span><strong style={{ color: '#D4AF37' }}>LIBÉRATION du doute</strong> : tu sais que ça marche pour toi</span>
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
          
          <div className="text-left space-y-3 text-gray-200 text-sm">
            <p className="flex items-start gap-3">
              <span className="text-green-400">✅</span>
              <span><strong>Strate 1 :</strong> Tu as la <strong style={{ color: '#D4AF37' }}>CLARTÉ</strong></span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-green-400">✅</span>
              <span><strong>Strate 2 :</strong> Tu as le <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong></span>
            </p>
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }}>🔄</span>
              <span><strong>Strate 3 :</strong> Tu obtiens la <strong style={{ color: '#D4AF37' }}>PREUVE</strong> concrète</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* DÉMOS INTERACTIVES */}
      <section className="max-w-5xl w-full mb-16">
        <motion.div
          className="bg-[#0A2540]/40 border-2 border-[#D4AF37]/50 p-10 rounded-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-6 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            🧪 2 Démos Interactives
          </h2>
          
          <p className="text-center text-gray-200 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Teste le pouvoir de l'automatisation en temps réel. 
            Ces démos construisent le <strong style={{ color: '#D4AF37' }}>PONT</strong> entre la théorie et ta <strong style={{ color: '#D4AF37' }}>TRANSFORMATION</strong> concrète.
          </p>

          {/* SÉLECTION DÉMO */}
          {!selectedDemo && (
            <div className="grid md:grid-cols-2 gap-6">
              <motion.button
                onClick={() => setSelectedDemo('generator')}
                className="bg-[#0A2540]/60 border-2 border-[#D4AF37]/40 p-8 rounded-xl text-left hover:border-[#D4AF37] transition"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#D4AF37' }}>
                  Générateur d'Emails IA
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Génère un email de prospection personnalisé en 10 secondes. 
                  Libère ton <strong style={{ color: '#D4AF37' }}>ÉNERGIE</strong> pour ce qui compte vraiment.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-[#D4AF37]/20 px-2 py-1 rounded">Gain : 20 min/email</span>
                  <span className="bg-[#D4AF37]/20 px-2 py-1 rounded">+45% taux ouverture</span>
                </div>
              </motion.button>

              <motion.button
                onClick={() => setSelectedDemo('calculator')}
                className="bg-[#0A2540]/60 border-2 border-[#D4AF37]/40 p-8 rounded-xl text-left hover:border-[#D4AF37] transition"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">🧮</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#D4AF37' }}>
                  Calculateur ROI Temps
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Calcule combien de temps (et d'argent) tu peux libérer en automatisant tes tâches répétitives.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-[#D4AF37]/20 px-2 py-1 rounded">Moyenne : 15h/semaine</span>
                  <span className="bg-[#D4AF37]/20 px-2 py-1 rounded">~50k€/an</span>
                </div>
              </motion.button>
            </div>
          )}

          {/* DÉMO 1 : GÉNÉRATEUR */}
          {selectedDemo === 'generator' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[#0A2540]/60 border border-[#D4AF37]/30 p-8 rounded-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold font-['Montserrat']" style={{ color: '#D4AF37' }}>
                  ✉️ Générateur d'Emails IA
                </h3>
                <button
                  onClick={() => {
                    setSelectedDemo(null);
                    setGeneratorResult(null);
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  ← Retour
                </button>
              </div>

              {!generatorResult ? (
                <form onSubmit={handleGeneratorSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#D4AF37' }}>
                      Ton rôle
                    </label>
                    <input
                      type="text"
                      value={generatorInputs.role}
                      onChange={(e) => setGeneratorInputs({...generatorInputs, role: e.target.value})}
                      placeholder="Ex: Coach en productivité"
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#D4AF37' }}>
                      Objectif de l'email
                    </label>
                    <input
                      type="text"
                      value={generatorInputs.task}
                      onChange={(e) => setGeneratorInputs({...generatorInputs, task: e.target.value})}
                      placeholder="Ex: Proposer un audit gratuit"
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-black font-bold px-6 py-4 rounded-xl transition font-['Montserrat']"
                    style={{ backgroundColor: '#D4AF37' }}
                  >
                    ⚡ Générer l'Email
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="bg-black/40 border border-[#D4AF37]/30 p-6 rounded-lg">
                    <h4 className="text-sm font-bold mb-3" style={{ color: '#D4AF37' }}>
                      📧 Email Généré :
                    </h4>
                    <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans">
                      {generatorResult.content}
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold" style={{ color: '#D4AF37' }}>
                        {generatorResult.timeSaved} min
                      </p>
                      <p className="text-xs text-gray-400">Temps économisé</p>
                    </div>
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold" style={{ color: '#D4AF37' }}>
                        +{generatorResult.openRate}%
                      </p>
                      <p className="text-xs text-gray-400">Taux d'ouverture moyen</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setGeneratorResult(null)}
                    className="w-full bg-white/10 border border-[#D4AF37]/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition"
                  >
                    🔄 Générer un autre email
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* DÉMO 2 : CALCULATEUR */}
          {selectedDemo === 'calculator' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[#0A2540]/60 border border-[#D4AF37]/30 p-8 rounded-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold font-['Montserrat']" style={{ color: '#D4AF37' }}>
                  🧮 Calculateur ROI Temps
                </h3>
                <button
                  onClick={() => {
                    setSelectedDemo(null);
                    setCalculatorResult(null);
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  ← Retour
                </button>
              </div>

              {!calculatorResult ? (
                <form onSubmit={handleCalculatorSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#D4AF37' }}>
                      Heures/semaine sur tâches répétitives
                    </label>
                    <input
                      type="number"
                      value={calculatorInputs.hours}
                      onChange={(e) => setCalculatorInputs({...calculatorInputs, hours: e.target.value})}
                      placeholder="Ex: 15"
                      required
                      min="1"
                      className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#D4AF37' }}>
                      Ton taux horaire (€/h)
                    </label>
                    <input
                      type="number"
                      value={calculatorInputs.rate}
                      onChange={(e) => setCalculatorInputs({...calculatorInputs, rate: e.target.value})}
                      placeholder="Ex: 50"
                      required
                      min="1"
                      className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-black font-bold px-6 py-4 rounded-xl transition font-['Montserrat']"
                    style={{ backgroundColor: '#D4AF37' }}
                  >
                    ⚡ Calculer mon ROI
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold" style={{ color: '#D4AF37' }}>
                        {calculatorResult.weeklyTimeSaved}h
                      </p>
                      <p className="text-xs text-gray-400">Libérées/semaine</p>
                    </div>
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold" style={{ color: '#D4AF37' }}>
                        {calculatorResult.daysPerYear} jours
                      </p>
                      <p className="text-xs text-gray-400">Libérés/an</p>
                    </div>
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold" style={{ color: '#D4AF37' }}>
                        {calculatorResult.yearlyValue}€
                      </p>
                      <p className="text-xs text-gray-400">Valeur annuelle</p>
                    </div>
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold" style={{ color: '#D4AF37' }}>
                        {calculatorResult.potentialWithReinvestment}€
                      </p>
                      <p className="text-xs text-gray-400">Potentiel réinvesti</p>
                    </div>
                  </div>

                  <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-lg">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      💡 En automatisant 60% de ces tâches, tu libères <strong style={{ color: '#D4AF37' }}>{calculatorResult.yearlyTimeSaved}h/an</strong>. 
                      C'est l'équivalent de <strong style={{ color: '#D4AF37' }}>{calculatorResult.daysPerYear} jours complets</strong> que tu peux réinvestir 
                      dans des activités à haute valeur qui génèrent de la <strong style={{ color: '#D4AF37' }}>TRANSFORMATION</strong>.
                    </p>
                  </div>

                  <button
                    onClick={() => setCalculatorResult(null)}
                    className="w-full bg-white/10 border border-[#D4AF37]/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition"
                  >
                    🔄 Refaire le calcul
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* LIVRES 6 & 8 DÉBLOQUÉS */}
      <section className="max-w-5xl w-full mb-16">
        <motion.div
          className="bg-[#0A2540]/40 border-2 border-[#D4AF37]/50 p-10 rounded-3xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            🎁 Livres 6 & 8 Débloqués
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Livre 6 */}
            <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-3" style={{ color: '#D4AF37' }}>
                📖 Livre 6 : {fichesLivres6Et8.livre6.titre}
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                {fichesLivres6Et8.livre6.fiches.map((fiche, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span style={{ color: '#D4AF37' }}>•</span>
                    <span>{fiche}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Livre 8 */}
            <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-3" style={{ color: '#D4AF37' }}>
                📖 Livre 8 : {fichesLivres6Et8.livre8.titre}
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                {fichesLivres6Et8.livre8.fiches.map((fiche, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span style={{ color: '#D4AF37' }}>•</span>
                    <span>{fiche}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => window.open('https://drive.google.com/votre-lien-livres-6-8', '_blank')}
              className="text-black font-bold px-10 py-4 rounded-xl transition font-['Montserrat']"
              style={{ backgroundColor: '#D4AF37' }}
            >
              📥 Télécharger Livres 6 & 8
            </button>
          </div>
        </motion.div>
      </section>

      {/* PONT VERS STRATE 4 */}
      <section className="max-w-4xl w-full mb-16">
        <div className="bg-[#0A2540]/40 border border-[#D4AF37]/40 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            💡 Tu as la PREUVE que ça marche...
          </h3>
          <p className="text-gray-200 text-lg mb-6 leading-relaxed">
            Tu as la <strong style={{ color: '#D4AF37' }}>CLARTÉ</strong>, le <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong>, et la <strong style={{ color: '#D4AF37' }}>PREUVE</strong>. 
            Maintenant, tu veux que tout ait enfin du sens dans une vision durable.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            La <strong>Strate 4 : Liberté</strong> te révélera comment construire le <strong style={{ color: '#D4AF37' }}>PONT</strong> vers 
            ta <strong style={{ color: '#D4AF37' }}>LIBÉRATION</strong> totale avec un accompagnement personnalisé.
          </p>
          <button
            onClick={() => navigate("/strate-liberte")}
            className="text-black font-bold px-8 py-3 rounded-xl transition font-['Montserrat']"
            style={{ backgroundColor: '#D4AF37' }}
          >
            🔍 Découvrir la Strate 4
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
