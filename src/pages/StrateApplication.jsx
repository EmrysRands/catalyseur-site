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
    
    // Simulation de génération (remplacer par API réelle)
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
    
    const weeklyTimeSaved = hours * 0.6; // 60% automatisable
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
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#1a1444] via-[#312e81] to-[#0f172a] text-yellow-50 overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* RAPPEL DU PARCOURS COMPLET */}
      <section className="max-w-4xl text-center mt-24 mb-16">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          🧩 Strate 3 – Application
        </motion.h1>

        <motion.div
          className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-500/40 p-8 rounded-2xl mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-green-300 mb-4">
            🎯 Tu as complété les Strates 1 & 2 ? Excellent !
          </h2>
          
          <div className="text-left space-y-3 text-gray-200">
            <p className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✅</span>
              <span><strong>Strate 1 :</strong> Tu as la <strong className="text-yellow-400">VISION</strong> (36 fiches Réinvention)</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✅</span>
              <span><strong>Strate 2 :</strong> Tu as les <strong className="text-yellow-400">MÉTHODES</strong> (16 fiches Organisation - GTD + Atomic Habits)</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✅</span>
              <span>Tu as découvert le <strong className="text-yellow-400">POTENTIEL</strong> de l'automatisation (Livres 6 & 8 débloqués)</span>
            </p>
          </div>

          <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/40 rounded-lg">
            <p className="text-yellow-300 text-xl font-bold mb-2">
              ❓ Mais maintenant, la question essentielle :
            </p>
            <p className="text-white text-2xl font-bold">
              "Est-ce que ça MARCHE vraiment pour MOI ?"
            </p>
          </div>

          <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
            <p className="text-purple-300 font-semibold text-lg">
              🎯 <strong>Bienvenue en Strate 3 : Proof of Concept</strong>
            </p>
            <ul className="text-gray-300 text-sm mt-2 space-y-1 ml-6">
              <li>→ Tu vas TESTER Catalyseur Digital en live</li>
              <li>→ Tu vas VOIR les résultats en 30 secondes</li>
              <li>→ Tu vas RESSENTIR la puissance de l'automatisation</li>
            </ul>
            <p className="text-gray-200 font-semibold mt-3 text-center">
              Pas de théorie. Pas de promesse. Juste un <strong className="text-yellow-400">RÉSULTAT CONCRET</strong>.
            </p>
          </div>
        </motion.div>
      </section>

      {/* DÉVERROUILLAGE LIVRES 6 & 8 */}
      <section className="max-w-5xl w-full mb-16">
        <motion.div
          className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border-2 border-orange-500/50 p-10 rounded-3xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-orange-300 mb-6">
            🔓 Automatisation Complète Débloquée !
          </h2>

          <p className="text-center text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
            Avant de tester Catalyseur Digital, découvre les <strong>17 Fiches Automatisation</strong> 
            (Livres 6 & 8) qui t'expliquent le POTENTIEL de l'automatisation et de l'IA.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Livre 6 */}
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-orange-300 mb-3">
                📖 Livre 6 : {fichesLivres6Et8.livre6.titre}
              </h3>
              <p className="text-sm text-gray-300 mb-3 italic">
                Apprends à <strong>"Automatiser sans coder"</strong> et à créer ton <strong>"Flow de travail automatisé"</strong>.
              </p>
              <ul className="text-sm text-gray-300 space-y-1">
                {fichesLivres6Et8.livre6.fiches.map((fiche, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-orange-400">•</span>
                    <span>{fiche}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Livre 8 */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-cyan-300 mb-3">
                📖 Livre 8 : {fichesLivres6Et8.livre8.titre}
              </h3>
              <p className="text-sm text-gray-300 mb-3 italic">
                Découvre comment créer des <strong>"Prompts intelligents"</strong> et un <strong>"Plan IA personnalisé"</strong>.
              </p>
              <ul className="text-sm text-gray-300 space-y-1">
                {fichesLivres6Et8.livre8.fiches.map((fiche, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>{fiche}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => window.open('https://drive.google.com/votre-lien-fiches-livres-6-8', '_blank')}
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-10 py-4 rounded-xl transition text-lg shadow-lg"
            >
              📥 Télécharger les 17 Fiches (Livres 6 & 8)
            </button>
          </div>

          <div className="mt-6 bg-yellow-900/20 border border-yellow-500/40 p-4 rounded-lg text-center">
            <p className="text-yellow-300 text-sm">
              💡 <strong>Recommandation :</strong> Lis au minimum les Fiches 51, 64 et 69 avant de tester les démos ci-dessous.
            </p>
          </div>
        </motion.div>
      </section>

      {/* L'ÉPREUVE DU PROMPT */}
      <section className="max-w-5xl w-full mb-16">
        <motion.div
          className="bg-gradient-to-br from-red-900/30 to-pink-900/30 border-2 border-red-500/50 p-10 rounded-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-red-300 mb-6">
            ⚡ L'Épreuve du Prompt
          </h2>

          <p className="text-center text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
            Tu as lu la Fiche 64 : <strong>"Prompts intelligents = résultats puissants"</strong>. 
            Maintenant, découvre le CONTRASTE entre un prompt amateur et un prompt Catalyseur Digital.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* SANS Catalyseur Digital */}
            <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-red-300 mb-3">
                ❌ SANS Catalyseur Digital
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>→ Tu passes <strong>30 minutes</strong> à écrire ton prompt</li>
                <li>→ Tu fais des <strong>essais-erreurs</strong> multiples</li>
                <li>→ Le résultat est <strong>approximatif</strong></li>
                <li>→ Tu dois <strong>reformuler</strong> plusieurs fois</li>
                <li>→ <strong>Fatigue cognitive</strong> garantie</li>
              </ul>
            </div>

            {/* AVEC Catalyseur Digital */}
            <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-green-300 mb-3">
                ✅ AVEC Catalyseur Digital
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>→ Tu remplis <strong>3 champs</strong> simples</li>
                <li>→ Le système génère le prompt en <strong>30 secondes</strong></li>
                <li>→ Le résultat est <strong>optimisé</strong> et professionnel</li>
                <li>→ <strong>Copier-coller</strong> et c'est terminé</li>
                <li>→ <strong>Zéro fatigue</strong> cognitive</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/40 p-6 rounded-xl text-center">
            <p className="text-yellow-300 text-2xl font-bold">
              ⚡ Contraste : <span className="text-red-400">30 minutes</span> vs <span className="text-green-400">30 secondes</span>
            </p>
            <p className="text-gray-300 text-lg mt-2">
              C'est <strong>60x plus rapide</strong> avec Catalyseur Digital.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CHOIX DE DÉMO */}
      {!selectedDemo && (
        <section className="max-w-5xl w-full mb-16">
          <motion.div
            className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border-2 border-purple-500/50 p-10 rounded-3xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-purple-300 mb-6">
              🎯 Choisis ton Expérience Interactive
            </h2>

            <p className="text-center text-gray-200 text-lg mb-8">
              Sélectionne la démo qui correspond le mieux à ton besoin actuel :
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Option A : Générateur */}
              <button
                onClick={() => setSelectedDemo('generator')}
                className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-2 border-blue-500/50 p-8 rounded-2xl hover:border-blue-400/70 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all text-left group"
              >
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-blue-300 mb-3 group-hover:text-blue-200">
                  Générateur de Contenu IA
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Génère un email de prospection, un post LinkedIn, ou tout contenu professionnel en 30 secondes.
                </p>
                <div className="bg-blue-900/30 p-3 rounded-lg">
                  <p className="text-blue-300 text-xs font-semibold">
                    🎯 Idéal si : Tu perds du temps sur la création de contenu
                  </p>
                </div>
              </button>

              {/* Option B : Calculateur */}
              <button
                onClick={() => setSelectedDemo('calculator')}
                className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-2 border-green-500/50 p-8 rounded-2xl hover:border-green-400/70 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all text-left group"
              >
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-green-300 mb-3 group-hover:text-green-200">
                  Calculateur de Temps Libéré
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Découvre combien de temps et d'argent tu peux récupérer grâce à l'automatisation.
                </p>
                <div className="bg-green-900/30 p-3 rounded-lg">
                  <p className="text-green-300 text-xs font-semibold">
                    🎯 Idéal si : Tu veux chiffrer le ROI de l'automatisation
                  </p>
                </div>
              </button>
            </div>
          </motion.div>
        </section>
      )}

      {/* DÉMO GÉNÉRATEUR */}
      {selectedDemo === 'generator' && !generatorResult && (
        <section className="max-w-3xl w-full mb-16">
          <motion.div
            className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-2 border-blue-500/50 p-10 rounded-3xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center text-blue-300 mb-6">
              🤖 Générateur de Contenu IA
            </h2>

            <form onSubmit={handleGeneratorSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  1. Ton rôle/métier :
                </label>
                <input
                  type="text"
                  value={generatorInputs.role}
                  onChange={(e) => setGeneratorInputs({...generatorInputs, role: e.target.value})}
                  placeholder="Ex: Freelance Content Manager"
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-blue-500/50 rounded-xl text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  2. Ta tâche la plus chronophage :
                </label>
                <input
                  type="text"
                  value={generatorInputs.task}
                  onChange={(e) => setGeneratorInputs({...generatorInputs, task: e.target.value})}
                  placeholder="Ex: Écrire l'email de prospection hebdomadaire"
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-blue-500/50 rounded-xl text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  3. Tonalité souhaitée :
                </label>
                <select
                  value={generatorInputs.tone}
                  onChange={(e) => setGeneratorInputs({...generatorInputs, tone: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-blue-500/50 rounded-xl text-white focus:border-blue-400 focus:outline-none"
                >
                  <option value="">-- Sélectionne --</option>
                  <option value="professionnelle">Professionnelle et concise</option>
                  <option value="amicale">Amicale et accessible</option>
                  <option value="directe">Directe et percutante</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-8 py-4 rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all text-lg shadow-lg"
              >
                ⚡ Générer mon Contenu (30 sec)
              </button>
            </form>

            <button
              onClick={() => setSelectedDemo(null)}
              className="w-full mt-4 text-gray-400 underline hover:text-gray-300 transition text-sm"
            >
              ← Changer de démo
            </button>
          </motion.div>
        </section>
      )}

      {/* RÉSULTAT GÉNÉRATEUR */}
      {generatorResult && (
        <section className="max-w-3xl w-full mb-16">
          <motion.div
            className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-2 border-green-500/50 p-10 rounded-3xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* DÉCLENCHEUR ÉMOTIONNEL */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-4xl font-bold text-green-300 mb-4">
                FÉLICITATIONS !
              </h2>
              <p className="text-gray-200 text-lg mb-4">
                Tu viens de vivre ton premier <strong className="text-yellow-400">MICRO-SUCCÈS</strong>.
              </p>
              
              <div className="bg-yellow-900/20 border border-yellow-500/40 p-6 rounded-xl">
                <p className="text-yellow-300 text-xl font-bold mb-3">
                  🔥 RESSENS cette sensation :
                </p>
                <p className="text-gray-200 text-lg">
                  C'est la sensation de la <strong className="text-green-400">LIBERTÉ</strong>.<br/>
                  Plus de blocage. Plus de page blanche.<br/>
                  Plus de 30 minutes perdues à chercher les bons mots.
                </p>
                <p className="text-white text-2xl font-bold mt-4">
                  Juste un RÉSULTAT, en 30 secondes.
                </p>
              </div>
            </div>

            {/* RÉSULTAT */}
            <div className="bg-black/40 border border-green-500/30 p-6 rounded-xl mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-green-300">
                  📧 Ton Contenu Généré
                </h3>
                <button
                  onClick={() => navigator.clipboard.writeText(generatorResult.content)}
                  className="bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition"
                >
                  📋 Copier
                </button>
              </div>
              <pre className="text-gray-300 text-sm whitespace-pre-wrap font-mono bg-black/60 p-4 rounded-lg">
                {generatorResult.content}
              </pre>
            </div>

            {/* MÉTRIQUES */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg text-center">
                <p className="text-blue-300 text-sm mb-1">Temps économisé</p>
                <p className="text-white text-3xl font-bold">{generatorResult.timeSaved} min</p>
              </div>
              <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg text-center">
                <p className="text-purple-300 text-sm mb-1">Taux d'ouverture prévu</p>
                <p className="text-white text-3xl font-bold">{generatorResult.openRate}%+</p>
              </div>
            </div>

            {/* ANCRAGE FICHES MULTIPLE */}
            <div className="bg-purple-900/20 border border-purple-500/40 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-purple-300 mb-4 text-center">
                🎓 TU VIENS D'APPLIQUER :
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span><strong>Fiche 64 :</strong> "Prompts intelligents = résultats puissants"<br/>
                  → Tu as vu comment un prompt optimisé change TOUT</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span><strong>Fiche 51 :</strong> "Comment IA + RPA changent tout"<br/>
                  → L'IA vient de faire en 30 sec ce qui te prenait 30 min</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span><strong>Fiche 69 :</strong> "Ton plan IA personnalisé"<br/>
                  → Ce résultat est personnalisé pour TON rôle et TON besoin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span><strong>Fiche 23 :</strong> "L'IA comme partenaire de concentration"<br/>
                  → Tu as délégué la tâche cognitive à l'IA</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg text-center">
                <p className="text-yellow-300 text-lg font-bold">
                  📌 CECI N'EST QUE LE RÉSULTAT D'UNE SEULE DÉMO.
                </p>
                <p className="text-gray-200 mt-2">
                  Imagine quand tu appliqueras les <strong>77 fiches Nova</strong> avec le système complet Catalyseur Digital.
                </p>
              </div>
            </div>

            {/* QUESTION DE CONVERSION AMÉLIORÉE */}
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border-2 border-orange-500/50 p-8 rounded-xl">
              <h3 className="text-3xl font-bold text-orange-300 mb-4 text-center">
                🎯 Question Simple
              </h3>

              <p className="text-gray-200 text-lg mb-6">
                Tu viens d'économiser <strong className="text-green-400">20 minutes</strong> sur ta tâche la plus difficile.
              </p>

              <div className="bg-black/40 p-6 rounded-xl mb-6">
                <p className="text-yellow-300 font-bold mb-3">SI tu répètes ce gain 5x par semaine :</p>
                <ul className="text-gray-300 space-y-2">
                  <li>→ <strong>100 minutes</strong> libérées par semaine</li>
                  <li>→ <strong>87 heures</strong> libérées par an</li>
                  <li>→ <strong>11 jours complets</strong> récupérés</li>
                </ul>
              </div>

              <p className="text-gray-200 text-lg mb-4">
                MAINTENANT, imagine si tu appliques ce système à :
              </p>
              <ul className="text-gray-300 mb-6 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Ton acquisition client</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Ta création de contenu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Ta gestion administrative</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Ton marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Ton support client</span>
                </li>
              </ul>

              <div className="bg-purple-900/20 border border-purple-500/40 p-4 rounded-lg mb-6">
                <p className="text-purple-300 font-bold text-center">
                  📈 C'est EXACTEMENT le plan 0→1000€/mois (Fiche 92)
                </p>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/40 p-6 rounded-xl mb-6">
                <p className="text-white text-2xl font-bold text-center mb-3">
                  Question :
                </p>
                <p className="text-gray-200 text-lg text-center">
                  Veux-tu continuer à <strong className="text-red-400">LUTTER seul(e)</strong> avec des prompts approximatifs,<br/>
                  ou veux-tu que le système <strong className="text-green-400">TRAVAILLE POUR TOI</strong> et te permette 
                  d'atteindre <strong className="text-yellow-400">1000€/mois de revenus STABLES</strong> ?
                </p>
              </div>

              <button
                onClick={() => navigate("/strate-liberte")}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold px-10 py-5 rounded-xl hover:from-orange-500 hover:to-red-500 transition-all text-xl shadow-lg hover:shadow-2xl transform hover:scale-105"
              >
                🏆 Recevoir mon système personnalisé
              </button>
            </div>
          </motion.div>
        </section>
      )}

      {/* DÉMO CALCULATEUR */}
      {selectedDemo === 'calculator' && !calculatorResult && (
        <section className="max-w-3xl w-full mb-16">
          <motion.div
            className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-2 border-green-500/50 p-10 rounded-3xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center text-green-300 mb-6">
              📊 Calculateur de Temps Libéré
            </h2>

            <form onSubmit={handleCalculatorSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  1. Combien d'heures par semaine consacres-tu à des tâches répétitives ?
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={calculatorInputs.hours}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, hours: e.target.value})}
                  placeholder="Ex: 10"
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-green-500/50 rounded-xl text-white placeholder-gray-500 focus:border-green-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  2. Quel est ton tarif horaire idéal (ou actuel) ?
                </label>
                <input
                  type="number"
                  value={calculatorInputs.rate}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, rate: e.target.value})}
                  placeholder="Ex: 50"
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-green-500/50 rounded-xl text-white placeholder-gray-500 focus:border-green-400 focus:outline-none"
                />
                <p className="text-gray-400 text-xs mt-2">
                  💡 Si tu ne sais pas, utilise 30-50€/h pour un freelance débutant
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-8 py-4 rounded-xl hover:from-green-500 hover:to-emerald-500 transition-all text-lg shadow-lg"
              >
                📊 Calculer mon Potentiel
              </button>
            </form>

            <button
              onClick={() => setSelectedDemo(null)}
              className="w-full mt-4 text-gray-400 underline hover:text-gray-300 transition text-sm"
            >
              ← Changer de démo
            </button>
          </motion.div>
        </section>
      )}

      {/* RÉSULTAT CALCULATEUR */}
      {calculatorResult && (
        <section className="max-w-3xl w-full mb-16">
          <motion.div
            className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-2 border-green-500/50 p-10 rounded-3xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* DÉCLENCHEUR ÉMOTIONNEL */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-4xl font-bold text-green-300 mb-4">
                Voici ton POTENTIEL de Liberté !
              </h2>
              
              <div className="bg-yellow-900/20 border border-yellow-500/40 p-6 rounded-xl">
                <p className="text-yellow-300 text-xl font-bold mb-3">
                  🔥 RESSENS cette sensation :
                </p>
                <p className="text-gray-200 text-lg">
                  Imagine récupérer <strong className="text-green-400">{calculatorResult.daysPerYear} jours complets</strong> par an.<br/>
                  Des jours où tu fais CE QUE TU VEUX.<br/>
                  C'est ça, la <strong className="text-yellow-400">LIBERTÉ DIGITALE</strong>.
                </p>
              </div>
            </div>

            {/* RÉSULTATS */}
            <div className="space-y-4 mb-8">
              <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl">
                <p className="text-blue-300 text-sm mb-2">⏰ Temps Libéré par Semaine</p>
                <p className="text-white text-4xl font-bold">{calculatorResult.weeklyTimeSaved}h</p>
                <p className="text-gray-400 text-xs mt-2">60% de tes tâches sont automatisables</p>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-xl">
                <p className="text-purple-300 text-sm mb-2">📅 Temps Libéré par An</p>
                <p className="text-white text-4xl font-bold">{calculatorResult.yearlyTimeSaved}h</p>
                <p className="text-gray-400 text-xs mt-2">= {calculatorResult.daysPerYear} jours complets !</p>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl">
                <p className="text-green-300 text-sm mb-2">💰 Valeur Annuelle Récupérée</p>
                <p className="text-white text-4xl font-bold">{calculatorResult.yearlyValue}€</p>
                <p className="text-gray-400 text-xs mt-2">Ton capital temps valorisé</p>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 p-6 rounded-xl">
                <p className="text-yellow-300 text-sm mb-2">🚀 Potentiel avec Réinvestissement</p>
                <p className="text-white text-4xl font-bold">{calculatorResult.potentialWithReinvestment}€+</p>
                <p className="text-gray-400 text-xs mt-2">Si tu réinvestis le temps libéré dans ton business</p>
              </div>
            </div>

            {/* ANCRAGE FICHES MULTIPLE */}
            <div className="bg-purple-900/20 border border-purple-500/40 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-purple-300 mb-4 text-center">
                🎓 TU VIENS DE VALIDER :
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span><strong>Fiche 3 :</strong> "Mini-retraites vs Retraite"<br/>
                  → Avec {calculatorResult.daysPerYear} jours libérés, tu peux prendre 4 mini-retraites par an</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span><strong>Fiche 51 :</strong> "Comment IA + RPA changent tout"<br/>
                  → 60% de tes tâches sont automatisables avec les bons outils</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span><strong>Fiche 73 :</strong> "Le vrai luxe : la simplicité"<br/>
                  → {calculatorResult.yearlyValue}€ de valeur récupérée = ton capital temps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span><strong>Fiche 95 :</strong> "Ton capital temps vs ton capital argent"<br/>
                  → Tu viens de voir la VRAIE valeur de ton temps</span>
                </li>
              </ul>
            </div>

            {/* QUESTION DE CONVERSION */}
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border-2 border-orange-500/50 p-8 rounded-xl">
              <h3 className="text-3xl font-bold text-orange-300 mb-6 text-center">
                🎯 Question Simple
              </h3>

              <p className="text-gray-200 text-lg mb-6 text-center">
                Tu viens de PROUVER que tu peux récupérer <strong className="text-green-400">{calculatorResult.daysPerYear} jours par an</strong> 
                et <strong className="text-yellow-400">{calculatorResult.yearlyValue}€ de valeur</strong>.
              </p>

              <div className="bg-purple-900/20 border border-purple-500/40 p-4 rounded-lg mb-6">
                <p className="text-purple-300 font-bold text-center">
                  📈 C'est le FONDEMENT du plan 0→1000€/mois (Fiche 92)
                </p>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/40 p-6 rounded-xl mb-6">
                <p className="text-white text-2xl font-bold text-center mb-3">
                  Question :
                </p>
                <p className="text-gray-200 text-lg text-center">
                  Veux-tu continuer à <strong className="text-red-400">PERDRE</strong> ces {calculatorResult.daysPerYear} jours par an,<br/>
                  ou veux-tu que Catalyseur Digital te permette de les <strong className="text-green-400">RÉCUPÉRER</strong> 
                  et d'atteindre <strong className="text-yellow-400">1000€/mois de revenus STABLES</strong> ?
                </p>
              </div>

              <button
                onClick={() => navigate("/strate-liberte")}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold px-10 py-5 rounded-xl hover:from-orange-500 hover:to-red-500 transition-all text-xl shadow-lg hover:shadow-2xl transform hover:scale-105"
              >
                🏆 Recevoir mon système personnalisé
              </button>
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
