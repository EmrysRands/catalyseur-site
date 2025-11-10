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
        action: "phase1_clarté",
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
            💡 <strong style={{ color: '#D4AF37' }}>Conseil :</strong> Télécharge ces fiches et reviens dans ton 
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
          className="text-5xl md:text-7xl font-bold mb-8 font-['Montserrat']"
          style={{ color: '#D4AF37' }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Strate 1 — Réinvention
        </motion.h1>

        {/* CITATION CLIENT */}
        <motion.div
          className="bg-[#C4322A]/20 border border-[#C4322A]/40 p-8 rounded-2xl mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#C4322A' }}>
            🌪️ Ton Besoin
          </h2>
          <p className="text-xl italic text-gray-200 mb-6 leading-relaxed">
            "J'ai essayé plein de trucs, mais je ne sais plus ce qui marche."
          </p>
          
          <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl mb-6">
            <p className="text-3xl font-bold mb-3 font-['Montserrat']" style={{ color: '#D4AF37' }}>
              CLARTÉ
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              En 7 jours, je vais te révéler comment identifier les 3 actions qui libèrent vraiment ton <strong style={{ color: '#D4AF37' }}>ÉNERGIE</strong>, 
              éliminer le bruit qui te parasite, et construire le <strong style={{ color: '#D4AF37' }}>PONT</strong> entre ton chaos actuel et ta direction claire.
            </p>
          </div>

          {/* RÉSULTAT ATTENDU - NOUVEAU */}
          <div className="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] p-4 rounded-r-lg">
            <p className="text-sm font-bold mb-2" style={{ color: '#D4AF37' }}>
              🎯 Résultat attendu Jour 7 :
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Tu sais <strong>exactement</strong> sur quoi concentrer ton ÉNERGIE, 
              tu as éliminé 80% du bruit, et tu as un plan clair pour les 90 prochains jours.
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
            ✨ Ta TRANSFORMATION Jour 7
          </h2>
          <div className="text-left text-gray-200 space-y-4 text-lg max-w-2xl mx-auto">
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }} className="text-2xl">→</span>
              <span><strong style={{ color: '#D4AF37' }}>CLARTÉ totale</strong> sur ce qui compte vraiment pour toi</span>
            </p>
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }} className="text-2xl">→</span>
              <span><strong style={{ color: '#D4AF37' }}>SYSTÈME de priorisation</strong> qui filtre 80% du bruit</span>
            </p>
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }} className="text-2xl">→</span>
              <span><strong style={{ color: '#D4AF37' }}>LIBÉRATION</strong> de 10h/semaine d'activités inutiles</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* LES 36 FICHES NOVA */}
      <section className="max-w-5xl w-full mb-16">
        <motion.div
          className="bg-[#0A2540]/40 border-2 border-[#D4AF37]/50 p-10 rounded-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-6 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            📚 Ton PONT vers la CLARTÉ
          </h2>
          
          <p className="text-center text-gray-200 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Ces <strong style={{ color: '#D4AF37' }}>36 fiches stratégiques</strong> sont la base de ta <strong>TRANSFORMATION</strong>. 
            Elles construisent le <strong style={{ color: '#D4AF37' }}>PONT</strong> entre ton chaos actuel et ta vision claire.
          </p>

          <div className="bg-black/40 border border-[#D4AF37]/30 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold mb-4 text-center font-['Montserrat']" style={{ color: '#D4AF37' }}>
              🎁 Phase 1 : Réinvention (36 Fiches Complètes)
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Livre 1 */}
              <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#D4AF37' }}>
                  📖 Livre 1 : {fichesPhase1.livre1.titre}
                </h4>
                <p className="text-sm text-gray-300 mb-3 italic">
                  Crée le rêve du <strong>"Nouveau Riche"</strong> et la vision de la <strong>"Mini-retraite"</strong>.
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase1.livre1.fiches.slice(0, 4).map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: '#D4AF37' }}>•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                  <li className="text-xs" style={{ color: '#D4AF37' }}>+ {fichesPhase1.livre1.totalFiches - 4} autres fiches</li>
                </ul>
              </div>

              {/* Livre 2 */}
              <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#D4AF37' }}>
                  📖 Livre 2 : {fichesPhase1.livre2.titre}
                </h4>
                <p className="text-sm text-gray-300 mb-3 italic">
                  Remet en question le mythe de la sécurité et présente les <strong>Actifs Digitaux</strong> comme nouvelle richesse.
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase1.livre2.fiches.slice(0, 4).map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: '#D4AF37' }}>•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                  <li className="text-xs" style={{ color: '#D4AF37' }}>+ {fichesPhase1.livre2.totalFiches - 4} autres fiches</li>
                </ul>
              </div>

              {/* Livre 3 */}
              <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#D4AF37' }}>
                  📖 Livre 3 : {fichesPhase1.livre3.titre}
                </h4>
                <p className="text-sm text-gray-300 mb-3 italic">
                  Introduit l'idée de <strong>maîtriser ta concentration</strong> pour libérer ton <strong style={{ color: '#D4AF37' }}>ÉNERGIE</strong>.
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase1.livre3.fiches.slice(0, 4).map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: '#D4AF37' }}>•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                  <li className="text-xs" style={{ color: '#D4AF37' }}>+ {fichesPhase1.livre3.totalFiches - 4} autres fiches</li>
                </ul>
              </div>

              {/* Livre 4 */}
              <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#D4AF37' }}>
                  📖 Livre 4 : {fichesPhase1.livre4.titre}
                </h4>
                <p className="text-sm text-gray-300 mb-3 italic">
                  Transforme l'inspiration en action en apprenant à <strong>Prototyper ta vie professionnelle</strong>.
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase1.livre4.fiches.map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: '#D4AF37' }}>•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 p-6 rounded-xl text-center">
            <p className="text-lg font-semibold mb-2" style={{ color: '#D4AF37' }}>
              💎 Valeur réelle : 197€
            </p>
            <p className="text-2xl font-bold mb-2" style={{ color: '#D4AF37' }}>
              GRATUIT aujourd'hui
            </p>
            <p className="text-gray-300 text-sm mb-4">
              Ces 36 fiches construisent le <strong style={{ color: '#D4AF37' }}>PONT</strong> vers ta <strong style={{ color: '#D4AF37' }}>CLARTÉ</strong>. Télécharge-les maintenant.
            </p>
            {/* MESSAGE BETA - NOUVEAU */}
            <div className="bg-[#0A2540]/50 border border-[#D4AF37]/20 p-3 rounded-lg mt-3">
              <p className="text-xs text-gray-400">
                🌱 Tu fais partie des premiers à tester ce système en vrai. 
                Chaque téléchargement aide à affiner le parcours.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FORMULAIRE EMAIL */}
      <section className="max-w-2xl w-full mb-16">
        <motion.div
          className="bg-[#0A2540]/60 border-4 border-[#D4AF37]/60 p-10 rounded-3xl shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {!isSubmitted ? (
            <>
              <h2 className="text-3xl font-bold text-center mb-6 font-['Montserrat']" style={{ color: '#D4AF37' }}>
                🎯 Je veux retrouver la CLARTÉ
              </h2>
              <p className="text-center text-gray-200 text-lg mb-8 leading-relaxed">
                Entre ton email pour recevoir <strong>instantanément</strong> les 36 Fiches Nova 
                et commencer ta <strong style={{ color: '#D4AF37' }}>TRANSFORMATION</strong>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ton@email.com"
                    required
                    className="w-full px-6 py-4 bg-black/40 border-2 border-[#D4AF37]/50 rounded-xl text-white placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none text-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-black font-bold px-10 py-5 rounded-xl transition-all text-xl shadow-lg hover:shadow-2xl transform hover:scale-105 font-['Montserrat']"
                  style={{ backgroundColor: '#D4AF37' }}
                >
                  ⚡ Télécharger les 36 Fiches MAINTENANT
                </button>
              </form>

              <p className="text-center text-gray-400 text-sm mt-6">
                🔒 Tes données sont 100% sécurisées. Pas de spam, juste ta <strong style={{ color: '#D4AF37' }}>TRANSFORMATION</strong>.
              </p>
            </>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-bold mb-4 font-['Montserrat']" style={{ color: '#D4AF37' }}>
                FÉLICITATIONS !
              </h3>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Tes <strong>36 fiches Phase 1</strong> sont en route vers <strong style={{ color: '#D4AF37' }}>{email}</strong>.
              </p>
              <p className="text-gray-300 mb-8">
                Vérifie ta boîte mail (et les spams si besoin). Tu vas recevoir ton lien de téléchargement dans les <strong>2 minutes</strong>.
              </p>

              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 p-6 rounded-xl mb-6">
                <p className="font-semibold mb-2" style={{ color: '#D4AF37' }}>
                  ✅ Tu viens de construire le premier PONT !
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Tu as maintenant la <strong style={{ color: '#D4AF37' }}>CLARTÉ</strong> de ta direction. 
                  Maintenant, il te faut le <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> pour libérer ton <strong style={{ color: '#D4AF37' }}>ÉNERGIE</strong> chaque jour.
                </p>
              </div>

              <button
                onClick={() => navigate("/strate-automatisation")}
                className="w-full text-black font-bold px-10 py-5 rounded-xl transition-all text-xl shadow-lg font-['Montserrat']"
                style={{ backgroundColor: '#D4AF37' }}
              >
                🚀 Étape Suivante : Installer le SYSTÈME (Strate 2)
              </button>
            </div>
          )}
        </motion.div>
      </section>

      {/* PONT VERS STRATE 2 */}
      {!isSubmitted && (
        <section className="max-w-4xl w-full mb-16">
          <div className="bg-[#0A2540]/40 border border-[#D4AF37]/40 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4 font-['Montserrat']" style={{ color: '#D4AF37' }}>
              💡 Après avoir téléchargé tes fiches...
            </h3>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Tu auras la <strong style={{ color: '#D4AF37' }}>CLARTÉ</strong> sur ta direction. 
              Mais tu te demanderas : <em>"Comment je passe à l'action sans me disperser ?"</em>
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              C'est exactement ce que la <strong>Strate 2 : Automatisation</strong> va t'apporter. 
              Tu découvriras le <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> qui libère ton <strong style={{ color: '#D4AF37' }}>ÉNERGIE</strong> chaque jour.
            </p>
            <button
              onClick={() => navigate("/strate-automatisation")}
              className="text-black font-bold px-8 py-3 rounded-xl transition font-['Montserrat']"
              style={{ backgroundColor: '#D4AF37' }}
            >
              🔍 Découvrir la Strate 2
            </button>
          </div>
        </section>
      )}

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
