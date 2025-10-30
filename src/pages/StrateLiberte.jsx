import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StrateLiberte() {
  const navigate = useNavigate();
  const [showFiches, setShowFiches] = useState(false);

  const handleBooking = async () => {
    await fetch("https://automate.optimizeinsight.com/webhook/audit_booked", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: "anonyme",
        action: "audit_booked",
        timestamp: new Date().toISOString(),
      }),
    });
  };

  const fichesPhase3 = {
    livre9: {
      titre: "Solopreneur",
      totalFiches: 10,
      fiches: [
        "Le vrai luxe : la simplicité",
        "Faire plus avec moins",
        "L'anti-growth hacking",
        "Solo ne veut pas dire seul",
        "Choisir ses clients idéaux",
        "Le système de revenus multiples",
        "Automatiser sans perdre l'humain",
        "La rentabilité avant le scaling",
        "Protéger son temps et son énergie",
        "Le manifeste du solopreneur"
      ]
    },
    livre10: {
      titre: "Company of One",
      totalFiches: 8,
      fiches: [
        "Construire la confiance client à long terme",
        "Rester petit intentionnellement",
        "Le pouvoir de dire non",
        "Durabilité > Croissance rapide",
        "Créer des systèmes résilients",
        "Le client idéal vs le client rentable",
        "L'autonomie comme stratégie",
        "Mesurer ce qui compte vraiment"
      ]
    },
    livre11: {
      titre: "Construis ta Liberté Digitale",
      totalFiches: 13,
      fiches: [
        "Le Système de vie libre",
        "Le plan 0→1000€/mois",
        "De 1000€ à 3000€/mois : le passage critique",
        "Les pièges du solopreneur",
        "Ton capital temps vs ton capital argent",
        "Les 4 piliers de la liberté durable",
        "Automatiser ton acquisition client",
        "Le système de contenu perpétuel",
        "Gérer les bas sans paniquer",
        "Ton premier recrutement stratégique",
        "La mini-retraite tous les 3 mois",
        "Le plan de sortie : et après ?",
        "Devenir catalyseur à ton tour"
      ]
    }
  };

  return (
    <motion.main
      className="flex flex-col items-center min-h-screen pt-[120px] bg-gradient-to-b from-[#1a1444] via-[#312e81] to-[#0f172a] text-yellow-50 overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* RAPPEL DU PARCOURS COMPLET */}
      <section className="max-w-4xl text-center mt-24 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          🏆 Strate 4 – Liberté
        </h1>
        
        <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-500/40 p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold text-green-300 mb-4">
            🎉 FÉLICITATIONS ! Tu arrives au sommet.
          </h2>
          
          <p className="text-gray-200 text-lg mb-6">
            Récapitulons ton parcours :
          </p>

          <div className="text-left space-y-4 text-gray-200">
            <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
              <p className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">✅</span>
                <span><strong className="text-blue-300">STRATE 1 : Réinvention</strong><br/>
                → Tu as découvert que la <strong>LIBERTÉ DIGITALE</strong> est possible<br/>
                → 36 fiches sur la Vision du Nouveau Riche<br/>
                → <strong>Tu as le RÊVE</strong></span>
              </p>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg">
              <p className="flex items-start gap-3">
                <span className="text-purple-400 text-xl">✅</span>
                <span><strong className="text-purple-300">STRATE 2 : Automatisation</strong><br/>
                → Tu as appris les <strong>MÉTHODES</strong> (GTD + Atomic Habits)<br/>
                → 16 fiches sur l'Organisation de base<br/>
                → <strong>Tu as le SYSTÈME</strong></span>
              </p>
            </div>

            <div className="bg-cyan-900/20 border border-cyan-500/30 p-4 rounded-lg">
              <p className="flex items-start gap-3">
                <span className="text-cyan-400 text-xl">✅</span>
                <span><strong className="text-cyan-300">STRATE 3 : Application</strong><br/>
                → Tu as <strong>TESTÉ</strong> Catalyseur Digital en live<br/>
                → Tu as eu ton <strong>MICRO-SUCCÈS</strong><br/>
                → <strong>Tu as la PREUVE que ça marche pour toi</strong></span>
              </p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-yellow-900/20 border border-yellow-500/40 rounded-xl">
            <p className="text-yellow-300 text-2xl font-bold mb-3 text-center">
              🎯 MAINTENANT, LA QUESTION ESSENTIELLE :
            </p>
            <ul className="text-white text-xl space-y-2">
              <li>"Comment je <strong className="text-green-400">STABILISE</strong> ces gains ?"</li>
              <li>"Comment je <strong className="text-orange-400">SCALE</strong> sans burnout ?"</li>
              <li>"Comment j'atteins une <strong className="text-purple-400">LIBERTÉ DURABLE</strong> ?"</li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
            <p className="text-purple-300 font-semibold text-lg text-center">
              🏆 <strong>Bienvenue en Strate 4 : Liberté & Scaling</strong>
            </p>
            <p className="text-gray-300 text-center mt-2">
              C'est ici que tu passes de :<br/>
              ❌ "J'ai un business qui marche"<br/>
              ✅ "J'ai un <strong className="text-yellow-400">SYSTÈME</strong> qui me donne une liberté durable"
            </p>
          </div>
        </div>
      </section>

      {/* PONT STRATE 3 → 4 */}
      <section className="max-w-5xl w-full mb-16">
        <motion.div
          className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-2 border-red-500/50 p-10 rounded-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-red-300 mb-6">
            💡 TU VIENS DE PROUVER QUE ÇA MARCHE
          </h2>

          <p className="text-gray-200 text-lg mb-6 text-center max-w-3xl mx-auto">
            En Strate 3, tu as vu comment Catalyseur Digital peut :
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg text-center">
              <p className="text-green-300 font-bold">✓ Générer du contenu</p>
              <p className="text-gray-400 text-sm">en 30 secondes</p>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg text-center">
              <p className="text-blue-300 font-bold">✓ Te faire gagner 20 min</p>
              <p className="text-gray-400 text-sm">par tâche</p>
            </div>
            <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg text-center">
              <p className="text-purple-300 font-bold">✓ Automatiser 60%</p>
              <p className="text-gray-400 text-sm">de tes process</p>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/40 p-6 rounded-xl mb-6">
            <p className="text-yellow-300 text-2xl font-bold mb-3 text-center">
              MAIS VOICI LA VÉRITÉ :
            </p>
            <p className="text-white text-xl text-center">
              Un quick win ≠ Un système durable
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
              <p className="text-red-300 font-bold mb-2">📌 Sans accompagnement, tu risques de :</p>
              <ul className="text-gray-300 text-sm space-y-1 ml-6">
                <li>→ Retomber dans les <strong>5 pièges fatals</strong> (Fiche 94) : Dispersion, Burnout, Surcharge cognitive</li>
                <li>→ Ne pas dépasser le <strong>plafond 1000€/mois</strong></li>
                <li>→ T'épuiser en essayant de tout faire seul(e)</li>
              </ul>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg">
              <p className="text-green-300 font-bold mb-2">📌 La différence entre un coup de chance et un succès durable ?</p>
              <ul className="text-gray-300 text-sm space-y-1 ml-6">
                <li>→ Un <strong>PLAN structuré</strong></li>
                <li>→ Un <strong>MENTOR</strong> qui t'évite les erreurs</li>
                <li>→ Une <strong>COMMUNAUTÉ</strong> qui te porte</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-900/20 border border-purple-500/40 p-6 rounded-xl text-center">
            <p className="text-purple-300 text-xl font-bold mb-3">
              🎯 C'est EXACTEMENT ce que propose le Tunnel d'Exclusivité
            </p>
            <p className="text-gray-200">
              3 niveaux progressifs pour passer de la <strong className="text-green-400">stabilisation</strong> (N1)<br/>
              à l'<strong className="text-purple-400">autonomie complète</strong> (N3).
            </p>
            <p className="text-yellow-300 text-lg font-semibold mt-4">
              Question : Veux-tu construire un feu de paille ou un système qui dure ?
            </p>
          </div>
        </motion.div>
      </section>

      {/* FICHES PHASE 3 VALORISÉES ET LIÉES AUX NIVEAUX */}
      <section className="max-w-5xl w-full mb-16">
        <motion.div
          className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-2 border-indigo-500/50 p-10 rounded-3xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-indigo-300 mb-6">
            📚 Les 31 Fiches qui Justifient ton Investissement
          </h2>

          <p className="text-center text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
            Ces fiches ne sont pas juste du contenu éducatif.<br/>
            Ce sont les <strong className="text-yellow-400">FONDATIONS</strong> des 3 niveaux d'accompagnement.
          </p>

          {/* Fiches par Niveau */}
          <div className="space-y-6 mb-8">
            {/* Niveau 1 */}
            <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-300 mb-3">
                🎯 NIVEAU 1 : Stabilisation (Fiches clés)
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong>Fiche 73 :</strong> "Le vrai luxe : la simplicité"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong>Fiche 94 :</strong> "Les pièges du solopreneur"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong>Fiche 71 :</strong> "Faire plus avec moins"</span>
                </li>
              </ul>
              <p className="text-gray-400 text-xs mt-3 italic">
                Ces fiches t'expliquent <strong>POURQUOI</strong> tu dois valider tes fondations avant de scaler.
              </p>
            </div>

            {/* Niveau 2 */}
            <div className="bg-orange-900/20 border border-orange-500/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-orange-300 mb-3">
                🎯 NIVEAU 2 : Accélération (Fiches clés)
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">→</span>
                  <span><strong>Fiche 81 :</strong> "Construire la confiance client long terme"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">→</span>
                  <span><strong>Fiche 93 :</strong> "De 1000€ à 3000€/mois : passage critique"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">→</span>
                  <span><strong>Fiche 96 :</strong> "Les 4 piliers de la liberté durable"</span>
                </li>
              </ul>
              <p className="text-gray-400 text-xs mt-3 italic">
                Ces fiches t'expliquent <strong>COMMENT</strong> scaler sans sacrifier ta liberté.
              </p>
            </div>

            {/* Niveau 3 */}
            <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-300 mb-3">
                🎯 NIVEAU 3 : Liberté Totale (Fiches clés)
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span><strong>Fiche 91 :</strong> "Le Système de vie libre"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span><strong>Fiche 95 :</strong> "Ton capital temps vs ton capital argent"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span><strong>Fiche 100 :</strong> "Devenir catalyseur à ton tour"</span>
                </li>
              </ul>
              <p className="text-gray-400 text-xs mt-3 italic">
                Ces fiches t'expliquent <strong>QUOI FAIRE</strong> une fois que tu as atteint l'autonomie complète.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setShowFiches(!showFiches);
                window.open('https://drive.google.com/votre-lien-fiches-phase3', '_blank');
              }}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-4 rounded-xl transition text-lg shadow-lg"
            >
              📥 Télécharger les 31 Fiches Phase 3
            </button>
          </div>

          <div className="mt-6 bg-yellow-900/20 border border-yellow-500/40 p-4 rounded-lg text-center">
            <p className="text-yellow-300 text-sm">
              💡 <strong>IMPORTANT :</strong> Ces fiches sont le "curriculum" du parcours. 
              Lis-les AVANT de réserver ton Bilan pour maximiser ta session.
            </p>
          </div>
        </motion.div>
      </section>

      {/* TUNNEL D'EXCLUSIVITÉ (3 NIVEAUX) */}
      <section className="max-w-7xl w-full mb-16">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
          🎯 Ton Parcours de Liberté en 3 Niveaux
        </h2>
        <p className="text-center text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
          Tu as testé les outils. Tu as vu les résultats. Maintenant, construisons 
          ensemble le système qui te permettra de scaler sans sacrifier ta liberté.
        </p>

        {/* TUNNEL D'EXCLUSIVITÉ */}
        <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/40 p-6 rounded-2xl mb-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-purple-300 mb-3 text-center">
            🔒 Le Tunnel d'Exclusivité
          </h3>
          <p className="text-gray-300 text-center text-sm mb-4">
            Chaque niveau débloque le suivant. Cette approche garantit que seuls les clients 
            engagés accèdent aux programmes premium, maintenant la qualité exceptionnelle 
            de l'accompagnement.
          </p>
          <div className="flex items-center justify-center gap-3 text-sm flex-wrap">
            <span className="bg-blue-900/40 px-4 py-2 rounded-lg text-blue-300">
              Niveau 1 : Bilan
            </span>
            <span className="text-yellow-400">→</span>
            <span className="bg-orange-900/40 px-4 py-2 rounded-lg text-orange-300">
              Niveau 2 : Accélération
            </span>
            <span className="text-yellow-400">→</span>
            <span className="bg-purple-900/40 px-4 py-2 rounded-lg text-purple-300">
              Niveau 3 : Liberté Totale
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* NIVEAU 1 : BILAN SOLOPRENEUR DURABLE */}
          <motion.div
            className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-2 border-blue-500/40 rounded-2xl p-8 hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-center mb-6">
              <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-300 mb-2">
                Niveau 1 : Stabilisation
              </h3>
              <h4 className="text-xl font-semibold text-blue-200 mb-3">
                Bilan Solopreneur Durable
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                La <strong>stabilité et la clarté stratégique</strong> pour éviter 
                les 5 pièges fatals du solopreneur.
              </p>
            </div>

            <div className="bg-black/50 rounded-xl p-6 mb-6 text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">300-500€</p>
              <p className="text-xs text-green-400">
                💰 Coût déduit si tu passes au Niveau 2
              </p>
            </div>

            <ul className="text-gray-200 text-sm space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">✓</span>
                <span><strong>Audit 1:1 complet</strong> de tes fondations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">✓</span>
                <span><strong>Plan d'action stratégique</strong> sur mesure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">✓</span>
                <span>Diagnostic de <strong>durabilité</strong> de ton modèle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">✓</span>
                <span>Réponse à : <em>"Mon succès est-il durable ou un coup de chance ?"</em></span>
              </li>
            </ul>

            <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg mb-6">
              <p className="text-xs text-blue-300 font-semibold mb-2">
                🎯 Le Niveau 1 est pour toi SI :
              </p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>✅ Tu as généré tes premiers <strong>500-1000€/mois</strong></li>
                <li>✅ OU tu as eu un quick win majeur (Strate 3)</li>
                <li>✅ OU tu as tes premiers clients récurrents</li>
              </ul>
              <p className="text-xs text-red-300 mt-3 font-semibold">
                ❌ MAIS tu as PEUR :
              </p>
              <ul className="text-gray-300 text-xs space-y-1 mt-1">
                <li>→ "Mon succès est-il durable ?"</li>
                <li>→ "Vais-je retomber dans la dispersion ?"</li>
                <li>→ "Comment éviter le burnout ?"</li>
              </ul>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-lg text-center">
              <p className="text-xs text-yellow-300 font-semibold">
                🔓 Débloque l'accès au Niveau 2
              </p>
            </div>

            {/* SOCIAL PROOF NIVEAU 1 */}
            <div className="mt-6 bg-green-900/20 border border-green-500/30 p-4 rounded-lg">
              <p className="text-gray-300 text-xs italic mb-2">
                💬 "Le Bilan m'a évité de foncer dans le mur. J'ai découvert que mes fondations n'étaient pas solides. 
                3 mois après, je génère 1500€/mois de façon stable."
              </p>
              <p className="text-green-400 font-semibold text-xs">— Thomas, Coach Business</p>
            </div>
          </motion.div>

          {/* NIVEAU 2 : LE LABO SOLOPRENEUR */}
          <motion.div
            className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-4 border-orange-500/60 rounded-2xl p-8 relative shadow-2xl hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all"
            whileHover={{ scale: 1.08, y: -10 }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
              ⭐ LE PLUS POPULAIRE
            </div>

            <div className="text-center mb-6 mt-4">
              <div className="bg-orange-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-300 mb-2">
                Niveau 2 : Accélération
              </h3>
              <h4 className="text-xl font-semibold text-orange-200 mb-3">
                Le Labo Solopreneur : Plan 2500€+
              </h4>
              <p className="text-gray-200 text-sm mb-4">
                La <strong>méthodologie et la communauté</strong> pour passer de 
                1500€ à 2500€+ sans augmenter ton temps de travail.
              </p>
            </div>

            <div className="bg-black/50 rounded-xl p-6 mb-6 text-center">
              <p className="text-sm text-gray-400 mb-2">Programme 3-6 mois</p>
              <p className="text-4xl font-bold text-orange-400 mb-2">Sur devis</p>
              <p className="text-xs text-green-400">
                💰 Coût Niveau 1 déduit intégralement
              </p>
            </div>

            <ul className="text-gray-100 text-sm space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 text-lg">✓</span>
                <span><strong>Coaching de groupe</strong> (petit groupe, max 8 personnes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 text-lg">✓</span>
                <span><strong>Méthodologie de scaling</strong> (ventes, outils, outsourcing)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 text-lg">✓</span>
                <span><strong>Construction de ton écosystème</strong> personnel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 text-lg">✓</span>
                <span>Application des principes : <em>"Efficacité avant taille"</em></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 text-lg">✓</span>
                <span><strong>Communauté d'entraide</strong> de solopreneurs engagés</span>
              </li>
            </ul>

            <div className="bg-orange-900/20 border border-orange-500/30 p-4 rounded-lg mb-6">
              <p className="text-xs text-orange-300">
                🎯 <strong>Pour qui :</strong> Tu es stable (1000€+) et tu veux 
                construire la confiance client à long terme pour scaler sans sacrifier 
                ta liberté.
              </p>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg mb-4 text-center">
              <p className="text-xs text-green-300 font-semibold">
                ✅ Nécessite la validation du Niveau 1
              </p>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg text-center mb-4">
              <p className="text-xs text-purple-300 font-semibold">
                🔓 Débloque l'accès au Niveau 3
              </p>
            </div>

            {/* SOCIAL PROOF NIVEAU 2 */}
            <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg">
              <p className="text-gray-200 text-xs italic mb-2">
                💬 "Le Labo m'a fait passer de 1200€ à 3500€/mois en 4 mois. 
                La communauté + la méthodologie = le combo gagnant."
              </p>
              <p className="text-green-400 font-semibold text-xs">— Julie, Consultante Marketing</p>
            </div>
          </motion.div>

          {/* NIVEAU 3 : LIBERTÉ AU LEADERSHIP */}
          <motion.div
            className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border-2 border-purple-500/50 rounded-2xl p-8 hover:border-purple-400/70 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-center mb-6">
              <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👑</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-300 mb-2">
                Niveau 3 : Liberté Totale
              </h3>
              <h4 className="text-xl font-semibold text-purple-200 mb-3">
                Liberté au Leadership
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                L'<strong>autonomie complète et la vision stratégique à 5 ans</strong>. 
                Deviens un CEO minimaliste.
              </p>
            </div>

            <div className="bg-black/50 rounded-xl p-6 mb-6 text-center">
              <p className="text-sm text-gray-400 mb-2">Mentoring 1:1 Long Terme</p>
              <p className="text-3xl font-bold text-purple-400 mb-2">Très sélectif</p>
              <p className="text-xs text-gray-500">
                Sur candidature uniquement
              </p>
            </div>

            <ul className="text-gray-200 text-sm space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 text-lg">✓</span>
                <span><strong>Accompagnement 1:1</strong> personnalisé</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 text-lg">✓</span>
                <span><strong>Structuration légale</strong> et optimisation fiscale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 text-lg">✓</span>
                <span><strong>Délestage stratégique</strong> des tâches</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 text-lg">✓</span>
                <span>Transition de <strong>solopreneur à CEO minimaliste</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 text-lg">✓</span>
                <span>Focus sur les <strong>4 piliers de durabilité</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 text-lg">✓</span>
                <span>Le vrai luxe : <em>la simplicité</em></span>
              </li>
            </ul>

            <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg mb-6">
              <p className="text-xs text-purple-300">
                🎯 <strong>Pour qui :</strong> Tu as un système rentable (2500€+) 
                et tu veux une autonomie complète où ton business travaille pour toi, 
                pas l'inverse.
              </p>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg mb-4 text-center">
              <p className="text-xs text-green-300 font-semibold">
                ✅ Nécessite la validation des Niveaux 1 & 2
              </p>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl transition text-sm mb-4">
              📩 Candidater au Niveau 3
            </button>

            {/* SOCIAL PROOF NIVEAU 3 */}
            <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg">
              <p className="text-gray-200 text-xs italic mb-2">
                💬 "Le Mentoring a transformé mon activité en vrai business. 
                Je travaille 15h/semaine pour 8000€/mois. Liberté totale."
              </p>
              <p className="text-green-400 font-semibold text-xs">— Marc, Ancien salarié devenu CEO minimaliste</p>
            </div>
          </motion.div>
        </div>

        {/* OBJECTIFS PAR NIVEAU */}
        <div className="bg-black/40 border border-yellow-400/30 p-8 rounded-2xl max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-yellow-400 mb-6">
            🎯 Objectifs de Transformation par Niveau
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-blue-300 mb-3">Niveau 1</h4>
              <p className="text-gray-300 mb-3">
                <strong>Stabilité et Clarté</strong>
              </p>
              <p className="text-gray-400 text-xs">
                • Éviter les 5 pièges fatals<br />
                • Valider la durabilité du modèle<br />
                • Prévenir le burnout du débutant<br />
                • <strong>→ Transition en prospect qualifié N2</strong>
              </p>
            </div>
            <div className="bg-orange-900/20 border border-orange-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-orange-300 mb-3">Niveau 2</h4>
              <p className="text-gray-300 mb-3">
                <strong>Scaling sans surcharge</strong>
              </p>
              <p className="text-gray-400 text-xs">
                • Construire la confiance client long terme<br />
                • Passer de 1500€ à 2500€+<br />
                • Transformer l'effort en système<br />
                • <strong>→ Briser les plafonds de verre de revenu</strong>
              </p>
            </div>
            <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-purple-300 mb-3">Niveau 3</h4>
              <p className="text-gray-300 mb-3">
                <strong>Autonomie complète</strong>
              </p>
              <p className="text-gray-400 text-xs">
                • Ne plus gérer, mais faire travailler le business<br />
                • Ton temps est ton capital<br />
                • Vision stratégique 5 ans<br />
                • <strong>→ De la réussite financière à la liberté durable</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RÉASSURANCE FINALE + CALENDLY */}
      <motion.section
        className="max-w-4xl w-full mb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/40 p-10 rounded-3xl">
          <h2 className="text-4xl font-bold mb-6 text-center text-yellow-400">
            📅 Commence par le Niveau 1 : Bilan Solopreneur
          </h2>
          <p className="text-gray-200 text-lg mb-8 text-center max-w-2xl mx-auto">
            Réserve ton <strong className="text-blue-400">audit stratégique</strong> pour 
            valider la durabilité de ton modèle et identifier les leviers de croissance.
          </p>

          {/* RÉASSURANCE FINALE */}
          <div className="bg-red-900/20 border border-red-500/40 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-red-300 mb-4 text-center">
              ⚠️ ATTENTION : Le Bilan Solopreneur n'est PAS pour tout le monde
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="text-red-300 font-semibold mb-2">❌ Tu ne devrais PAS réserver si :</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>→ Tu n'as pas encore testé <strong>Catalyseur Digital</strong> (retourne en Strate 3)</li>
                  <li>→ Tu n'as généré aucun revenu (commence par les fiches gratuites)</li>
                  <li>→ Tu cherches une solution miracle sans effort</li>
                </ul>
              </div>
              
              <div>
                <p className="text-green-300 font-semibold mb-2">✅ Tu DEVRAIS réserver si :</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>→ Tu as eu ton premier succès (500-1000€)</li>
                  <li>→ Tu veux éviter les 5 pièges fatals</li>
                  <li>→ Tu es prêt(e) à investir dans un système durable</li>
                  <li>→ Tu veux un plan d'action concret</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/40 p-4 rounded-lg">
              <p className="text-yellow-300 font-bold mb-2">📌 DERNIÈRE CHOSE IMPORTANTE :</p>
              <p className="text-gray-300 text-sm mb-3">
                Ce Bilan n'est pas un "appel de vente". C'est un <strong>AUDIT stratégique</strong>.
              </p>
              <p className="text-gray-300 text-sm mb-3">
                Tu repartiras avec :
              </p>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>✓ Un diagnostic complet de tes fondations</li>
                <li>✓ Un plan d'action sur mesure (même si tu ne continues pas)</li>
                <li>✓ Les réponses à tes questions les plus urgentes</li>
              </ul>
              <p className="text-white font-bold text-center mt-4">
                Et SI tu décides de passer au Niveau 2, les 300-500€ sont intégralement DÉDUITS.
              </p>
              <p className="text-green-400 text-center mt-2 font-semibold">
                🎯 Risque zéro. Valeur maximale.
              </p>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/40 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-yellow-300 mb-3 text-center">
              💡 Le Tunnel d'Exclusivité
            </h3>
            <p className="text-gray-300 text-center mb-4">
              Le coût de cet audit <strong>(300-500€)</strong> est <strong className="text-green-400">
              entièrement déduit</strong> si tu rejoins le <strong>Niveau 2</strong> après 
              ta session.
            </p>
            <p className="text-gray-400 text-sm text-center">
              Tu ne paies donc le Niveau 1 que si tu choisis de ne PAS continuer. 
              Sinon, c'est un investissement 100% reporté sur ton parcours complet.
            </p>
          </div>

          {/* CE QUE TU OBTIENS POUR 300-500€ */}
          <div className="bg-black/40 border-2 border-blue-500/50 p-8 rounded-2xl mb-8">
            <h3 className="text-3xl font-bold text-center text-yellow-400 mb-8">
              🎯 Ce que tu obtiens pour 300-500€
            </h3>

            {/* OFFRE PRINCIPALE */}
            <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border-2 border-blue-400/50 p-6 rounded-xl mb-6">
              <h4 className="text-2xl font-bold text-blue-300 mb-4 text-center">
                AUDIT STRATÉGIQUE PERSONNALISÉ
              </h4>
              <ul className="space-y-3 text-gray-200 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl font-bold">✓</span>
                  <span><strong>Session 1-to-1 de 90-120 min</strong> en visio avec analyse approfondie de ta situation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl font-bold">✓</span>
                  <span><strong>Diagnostic complet de tes fondations</strong> : forces, faiblesses, opportunités</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl font-bold">✓</span>
                  <span><strong>Plan d'action stratégique sur mesure</strong> adapté à ton profil (salarié/entrepreneur/indépendant)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl font-bold">✓</span>
                  <span><strong>Validation durabilité de ton modèle</strong> : est-ce que ça tient sur le long terme ?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl font-bold">✓</span>
                  <span><strong>Roadmap 90 jours personnalisée</strong> avec jalons et métriques claires</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl font-bold">✓</span>
                  <span><strong>Document PDF stratégique</strong> (15-20 pages) livré sous 48h après la session</span>
                </li>
              </ul>
              <div className="bg-blue-900/30 border border-blue-400/40 p-4 rounded-lg text-center">
                <p className="text-blue-300 font-bold text-lg">Valeur : 1200€</p>
              </div>
            </div>

            {/* BONUS INCLUS */}
            <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-2 border-green-400/50 p-6 rounded-xl mb-6">
              <h4 className="text-2xl font-bold text-green-300 mb-4 text-center">
                + BONUS INCLUS (OFFERT)
              </h4>
              <ul className="space-y-3 text-gray-200 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl font-bold">🎁</span>
                  <span><strong>31 fiches premium Solopreneur</strong> (format web interactif) : approfondis les concepts après l'audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl font-bold">🎁</span>
                  <span><strong>Pack de 15 templates automatisation</strong> : grilles, calculateurs, dashboards prêts à l'emploi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl font-bold">🎁</span>
                  <span><strong>Accès bibliothèque outils no-code</strong> : scripts n8n, prompts IA, tutoriels vidéo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl font-bold">🎁</span>
                  <span><strong>30 jours de support email prioritaire</strong> : réponse garantie sous 24-48h</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl font-bold">🎁</span>
                  <span><strong>Accès espace membre VIP</strong> : dashboard de suivi, communauté privée, ressources exclusives</span>
                </li>
              </ul>
              <div className="bg-green-900/30 border border-green-400/40 p-4 rounded-lg text-center">
                <p className="text-green-300 font-bold text-lg">Valeur : 497€</p>
              </div>
            </div>

            {/* TOTAL */}
            <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border-2 border-yellow-400/50 p-6 rounded-xl">
              <div className="text-center space-y-3">
                <p className="text-gray-300 text-lg line-through">Valeur totale : 1697€</p>
                <p className="text-4xl font-bold text-yellow-400">Ton prix : 300-500€</p>
                <p className="text-green-400 font-semibold text-xl">+ 100% remboursé si non satisfait</p>
                <div className="bg-yellow-900/30 border border-yellow-400/40 p-4 rounded-lg mt-4">
                  <p className="text-yellow-300 font-bold mb-2">🎯 RAPPEL IMPORTANT :</p>
                  <p className="text-gray-300 text-sm">
                    Ces 300-500€ sont <strong className="text-green-400">ENTIÈREMENT DÉDUITS</strong> si tu passes au Niveau 2.
                    Tu ne paies donc cette somme que si tu décides de ne PAS continuer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-200 text-center mb-6 font-semibold">
            Prêt(e) à valider tes fondations ?
          </p>

          {/* CALENDLY INTÉGRÉ */}
          <div className="w-full max-w-3xl mx-auto mb-8">
            <iframe
              src="https://calendly.com/optimizeinsight/bilan-solopreneur"
              width="100%"
              height="700"
              frameBorder="0"
              className="rounded-xl shadow-lg border border-blue-400/20"
              onLoad={handleBooking}
            ></iframe>
          </div>

          <div className="text-center">
            <a
              href="https://calendly.com/optimizeinsight/bilan-solopreneur"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleBooking}
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-12 py-5 rounded-xl hover:from-blue-400 hover:to-cyan-400 transition text-xl shadow-xl"
            >
              🎯 Réserver mon Bilan (300-500€)
            </a>
          </div>

          <p className="text-gray-400 text-sm text-center mt-6">
            💡 <strong>Rappel :</strong> Coût intégralement déduit si tu passes au Niveau 2
          </p>
        </div>

        {/* GARANTIES ET RÉASSURANCE */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-black/40 border border-green-500/30 p-6 rounded-xl text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h4 className="font-bold text-green-400 mb-2">Paiement Sécurisé</h4>
            <p className="text-gray-400 text-sm">Stripe & PayPal acceptés</p>
          </div>
          <div className="bg-black/40 border border-blue-500/30 p-6 rounded-xl text-center">
            <div className="text-4xl mb-3">✅</div>
            <h4 className="font-bold text-blue-400 mb-2">Garantie Satisfait</h4>
            <p className="text-gray-400 text-sm">Session remboursée si non satisfait</p>
          </div>
          <div className="bg-black/40 border border-purple-500/30 p-6 rounded-xl text-center">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="font-bold text-purple-400 mb-2">Résultats Mesurables</h4>
            <p className="text-gray-400 text-sm">Plan d'action concret inclus</p>
          </div>
        </div>

        {/* BOUTON RETOUR */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-gray-300 underline hover:text-yellow-300 transition"
          >
            🏠 Retour à l'accueil
          </button>
        </div>
      </motion.section>

      {/* FOOTER SOCIAL PROOF */}
      <section className="max-w-4xl w-full mb-16">
        <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/30 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-center text-green-400 mb-6">
            🎉 Ils ont transformé leur activité avec Catalyseur Digital
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 p-6 rounded-xl">
              <p className="text-gray-300 text-sm italic mb-3">
                "En 60 jours, je suis passé de 0 à 1200€/mois de revenus récurrents. 
                Le système Catalyseur Digital m'a fait gagner 10h par semaine."
              </p>
              <p className="text-yellow-400 font-semibold">— Marc, Consultant Marketing</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl">
              <p className="text-gray-300 text-sm italic mb-3">
                "J'ai automatisé 70% de ma création de contenu. Je travaille maintenant 
                4h/jour au lieu de 10h, pour le même résultat."
              </p>
              <p className="text-yellow-400 font-semibold">— Sarah, Créatrice de Contenu</p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
