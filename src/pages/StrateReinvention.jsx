import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StrateReinvention() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Webhook n8n
    await fetch("https://automate.optimizeinsight.com/webhook/reinvention_completed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        action: "phase1_declic",
        timestamp: new Date().toISOString(),
      }),
    });

    setIsSubmitted(true);
  };

  const fichesPhase1 = {
    livre1: {
      titre: "La Semaine de 4 Heures",
      totalFiches: 8,
      fiches: [
        "Le Nouveau Riche vs l'Ancien Riche",
        "Mini-retraites vs Retraite",
        "Le DEAL revisité : Define-Eliminate-Automate-Liberate",
        "Éliminer avant d'automatiser",
        "L'art de l'externalisation stratégique",
        "Créer un produit muse",
        "Tester avant d'investir",
        "La mobilité géographique comme levier"
      ]
    },
    livre2: {
      titre: "Père Riche, Père Pauvre",
      totalFiches: 10,
      fiches: [
        "Les leçons que l'école ne t'apprend pas",
        "Actifs vs Passifs : la différence qui change tout",
        "Actifs Digitaux : la nouvelle richesse",
        "Pourquoi la sécurité professionnelle est un mythe",
        "Le Quadrant des flux de revenus revisité",
        "Apprendre à faire travailler l'argent pour toi",
        "L'éducation financière à l'ère digitale",
        "Payer toi en premier, même en tant que solopreneur",
        "L'effet de levier : temps, argent, compétences",
        "Le risque intelligent vs le risque stupide"
      ]
    },
    livre3: {
      titre: "Deep Work",
      totalFiches: 13,
      fiches: [
        "Travail profond vs Travail superficiel",
        "Le travail profond comme compétence rare",
        "Pourquoi le travail utile est sous-évalué à l'ère de l'IA",
        "Les 4 règles du travail profond",
        "Créer des rituels de concentration",
        "Embrasser l'ennui productif",
        "Quitter les réseaux sociaux (stratégiquement)",
        "Planifier chaque minute de ta journée",
        "Finir à 17h30 (et être plus productif)",
        "La concentration comme monnaie rare",
        "Le travail profond appliqué au solopreneur",
        "Comment l'IA amplifie (ou détruit) ta capacité de concentration",
        "Devenir précieux à l'ère de l'automatisation"
      ]
    },
    livre4: {
      titre: "Créez le Job de vos Rêves",
      totalFiches: 5,
      fiches: [
        "Prototyper ta vie professionnelle",
        "Transformer tes compétences en valeur mesurable",
        "Tester une offre avant de tout quitter",
        "Le micro-entrepreneuriat comme laboratoire",
        "La transition progressive : salarié → solopreneur"
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
      {/* HERO - VALIDATION DE LA DOULEUR */}
      <section className="max-w-4xl text-center mt-24 mb-16">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          🔥 La Liberté Digitale n'est PAS un Mythe
        </motion.h1>

        <motion.div
          className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/40 p-8 rounded-2xl mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-red-300 mb-4">
            ⚠️ La Vérité que Personne ne te Dit
          </h2>
          <div className="text-left text-gray-200 space-y-3 text-lg">
            <p className="flex items-start gap-3">
              <span className="text-red-400 text-2xl">❌</span>
              <span><strong>Fatigué(e) de dépendre d'un seul revenu ?</strong> D'un patron ? D'un seul client ?</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-red-400 text-2xl">❌</span>
              <span><strong>La sécurité professionnelle est un MYTHE.</strong> Tu peux perdre ton job du jour au lendemain.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-red-400 text-2xl">❌</span>
              <span><strong>L'incertitude te submerge ?</strong> Tu ne sais pas par où commencer pour créer ta liberté ?</span>
            </p>
          </div>

          <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
            <p className="text-yellow-300 font-semibold text-lg">
              💡 Si l'école ne t'a pas appris la liberté, découvre ce que tu as DÉJÀ en toi pour rebondir.
            </p>
          </div>
        </motion.div>

        {/* PROMESSE AUDACIEUSE */}
        <motion.div
          className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-500/40 p-8 rounded-2xl mb-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-green-300 mb-4">
            ✨ Il Existe un Plan Simple
          </h2>
          <div className="text-left text-gray-200 space-y-4 text-lg">
            <p>
              <strong className="text-green-400">Arrête de chercher un emploi.</strong> Découvre comment <strong>Prototyper ta vie professionnelle</strong> et créer le job de tes rêves avec le <strong>DEAL revisité</strong> (Define-Eliminate-Automate-Liberate).
            </p>
            <p>
              <strong className="text-green-400">Le vrai luxe n'est pas dans l'argent,</strong> mais dans la <strong>simplicité</strong>. Découvre comment créer des <strong>Actifs Digitaux</strong> (la nouvelle richesse) pour reprendre le contrôle de ton temps.
            </p>
            <p>
              <strong className="text-green-400">Tu possèdes déjà les compétences.</strong> Il te manque juste le <strong>système</strong> pour les transformer en valeur mesurable et en revenus récurrents.
            </p>
          </div>

          <div className="mt-6 p-4 bg-teal-900/20 border border-teal-500/30 rounded-lg">
            <p className="text-teal-300 font-semibold text-lg">
              🎯 La liberté digitale est POSSIBLE pour toi. Tu n'as besoin que d'un plan d'action simple.
            </p>
          </div>
        </motion.div>
      </section>

      {/* L'ANTIDOTE : LES 36 FICHES NOVA */}
      <section className="max-w-5xl w-full mb-16">
        <motion.div
          className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border-2 border-purple-500/50 p-10 rounded-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-6">
            📚 Voici ta BOUSSOLE pour passer de l'Incertitude à la Liberté Digitale
          </h2>
          
          <p className="text-center text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
            Ces <strong className="text-yellow-400">36 fiches stratégiques</strong> sont la <strong>PREUVE</strong> que ton problème est soluble. Elles ont transformé des milliers de personnes qui étaient exactement là où tu es aujourd'hui.
          </p>

          <div className="bg-black/40 border border-yellow-500/30 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-yellow-300 mb-4 text-center">
              🎁 Phase 1 : Réinvention (36 Fiches Complètes)
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Livre 1 */}
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-blue-300 mb-3">
                  📖 Livre 1 : {fichesPhase1.livre1.titre}
                </h4>
                <p className="text-sm text-gray-300 mb-3 italic">
                  Crée le rêve du <strong>"Nouveau Riche"</strong> et la vision de la <strong>"Mini-retraite"</strong>.
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase1.livre1.fiches.slice(0, 4).map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                  <li className="text-blue-400 text-xs">+ {fichesPhase1.livre1.totalFiches - 4} autres fiches</li>
                </ul>
              </div>

              {/* Livre 2 */}
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-green-300 mb-3">
                  📖 Livre 2 : {fichesPhase1.livre2.titre}
                </h4>
                <p className="text-sm text-gray-300 mb-3 italic">
                  Remet en question le mythe de la sécurité et présente les <strong>Actifs Digitaux</strong> comme nouvelle richesse.
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase1.livre2.fiches.slice(0, 4).map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                  <li className="text-green-400 text-xs">+ {fichesPhase1.livre2.totalFiches - 4} autres fiches</li>
                </ul>
              </div>

              {/* Livre 3 */}
              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-orange-300 mb-3">
                  📖 Livre 3 : {fichesPhase1.livre3.titre}
                </h4>
                <p className="text-sm text-gray-300 mb-3 italic">
                  Introduit l'idée de <strong>maîtriser ta concentration</strong> pour devenir précieux à l'ère de l'IA.
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase1.livre3.fiches.slice(0, 4).map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                  <li className="text-orange-400 text-xs">+ {fichesPhase1.livre3.totalFiches - 4} autres fiches</li>
                </ul>
              </div>

              {/* Livre 4 */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-purple-300 mb-3">
                  📖 Livre 4 : {fichesPhase1.livre4.titre}
                </h4>
                <p className="text-sm text-gray-300 mb-3 italic">
                  Transforme l'inspiration en action en apprenant à <strong>Prototyper ta vie professionnelle</strong>.
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase1.livre4.fiches.map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/40 p-6 rounded-xl text-center">
            <p className="text-yellow-300 text-lg font-semibold mb-2">
              💎 Valeur réelle : 197€
            </p>
            <p className="text-green-400 text-2xl font-bold mb-2">
              GRATUIT aujourd'hui
            </p>
            <p className="text-gray-300 text-sm">
              Ces 36 fiches sont ta première preuve que la liberté digitale est accessible. Télécharge-les maintenant.
            </p>
          </div>
        </motion.div>
      </section>

      {/* MICRO-ENGAGEMENT : FORMULAIRE EMAIL */}
      <section className="max-w-2xl w-full mb-16">
        <motion.div
          className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-4 border-yellow-500/60 p-10 rounded-3xl shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {!isSubmitted ? (
            <>
              <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
                🎯 Je veux le DÉCLIC
              </h2>
              <p className="text-center text-gray-200 text-lg mb-8">
                Entre ton email pour recevoir <strong>instantanément</strong> les 36 Fiches Nova (Phase 1 : Réinvention).
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ton@email.com"
                    required
                    className="w-full px-6 py-4 bg-black/40 border-2 border-yellow-500/50 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-10 py-5 rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all text-xl shadow-lg hover:shadow-2xl transform hover:scale-105"
                >
                  ⚡ Télécharger les 36 Fiches MAINTENANT
                </button>
              </form>

              <p className="text-center text-gray-400 text-sm mt-6">
                🔒 Tes données sont 100% sécurisées. Pas de spam, juste ton parcours vers la liberté.
              </p>
            </>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-bold text-green-400 mb-4">
                FÉLICITATIONS !
              </h3>
              <p className="text-gray-200 text-lg mb-6">
                Tes <strong>36 fiches Phase 1</strong> sont en route vers <strong className="text-yellow-400">{email}</strong>.
              </p>
              <p className="text-gray-300 mb-8">
                Vérifie ta boîte mail (et les spams si besoin). Tu vas recevoir ton lien de téléchargement dans les <strong>2 minutes</strong>.
              </p>

              <div className="bg-green-900/20 border border-green-500/40 p-6 rounded-xl mb-6">
                <p className="text-green-300 font-semibold mb-2">
                  ✅ Tu viens de franchir la première étape !
                </p>
                <p className="text-gray-300 text-sm">
                  Tu as maintenant la <strong>VISION</strong> de la liberté digitale. Mais il te manque encore le <strong>SYSTÈME</strong> pour passer à l'action sans te disperser.
                </p>
              </div>

              <button
                onClick={() => navigate("/strate-automatisation")}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-10 py-5 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all text-xl shadow-lg"
              >
                🚀 Étape Suivante : Découvre le Système (Strate 2)
              </button>
            </div>
          )}
        </motion.div>
      </section>

      {/* PONT VERS STRATE 2 */}
      {!isSubmitted && (
        <section className="max-w-4xl w-full mb-16">
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/40 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">
              💡 Après avoir téléchargé tes fiches...
            </h3>
            <p className="text-gray-200 text-lg mb-6">
              Tu auras la <strong className="text-yellow-400">VISION</strong> claire de ta liberté digitale. 
              Mais tu te demanderas sûrement : <em>"Comment je PASSE À L'ACTION sans me disperser ?"</em>
            </p>
            <p className="text-gray-300 mb-6">
              C'est exactement ce que la <strong>Strate 2 : Automatisation</strong> va t'apporter. 
              Tu découvriras le <strong>SYSTÈME</strong> pour t'organiser comme un PRO et créer des habitudes DURABLES.
            </p>
            <button
              onClick={() => navigate("/strate-automatisation")}
              className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-3 rounded-xl transition"
            >
              🔍 Découvrir la Strate 2
            </button>
          </div>
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
