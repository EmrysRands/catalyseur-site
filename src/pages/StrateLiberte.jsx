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
            💡 <strong style={{ color: '#D4AF37' }}>Conseil :</strong> Reviens dans ton 
            <button 
              onClick={() => navigate('/espace-nova')}
              className="underline mx-1 hover:text-[#D4AF37] transition"
              style={{ color: '#D4AF37' }}
            >
              Espace Nova
            </button>
            pour suivre ta progression vers la LIBÉRATION complète.
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
          Strate 4 — Liberté
        </motion.h1>

        {/* FÉLICITATIONS PARCOURS */}
        <motion.div
          className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-8 rounded-2xl mb-8"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            🎉 FÉLICITATIONS ! Tu arrives au sommet.
          </h2>
          
          <p className="text-gray-200 text-lg mb-6">
            Récapitulons ton parcours :
          </p>

          <div className="text-left space-y-4 text-sm">
            <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-4 rounded-lg">
              <p className="flex items-start gap-3">
                <span className="text-green-400">✅</span>
                <span><strong style={{ color: '#D4AF37' }}>STRATE 1 :</strong> Tu as la <strong style={{ color: '#D4AF37' }}>CLARTÉ</strong></span>
              </p>
            </div>

            <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-4 rounded-lg">
              <p className="flex items-start gap-3">
                <span className="text-green-400">✅</span>
                <span><strong style={{ color: '#D4AF37' }}>STRATE 2 :</strong> Tu as le <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong></span>
              </p>
            </div>

            <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-4 rounded-lg">
              <p className="flex items-start gap-3">
                <span className="text-green-400">✅</span>
                <span><strong style={{ color: '#D4AF37' }}>STRATE 3 :</strong> Tu as la <strong style={{ color: '#D4AF37' }}>PREUVE</strong></span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* CITATION CLIENT */}
        <motion.div
          className="bg-[#C4322A]/20 border border-[#C4322A]/40 p-8 rounded-2xl mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#C4322A' }}>
            🧩 Ton Besoin
          </h2>
          <p className="text-xl italic text-gray-200 mb-6 leading-relaxed">
            "Je veux que tout ce que je fais ait enfin du sens."
          </p>
          
          <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
            <p className="text-3xl font-bold mb-3 font-['Montserrat']" style={{ color: '#D4AF37' }}>
              LIBÉRATION
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              En 9 jours, je vais te révéler comment créer ton <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> evergreen, 
              automatiser ta <strong style={{ color: '#D4AF37' }}>LIBÉRATION</strong> complète, 
              et construire le <strong style={{ color: '#D4AF37' }}>PONT</strong> entre ton présent et ta vision à long terme.
            </p>
          </div>
        </motion.div>

        {/* TRANSFORMATION */}
        <motion.div
          className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-8 rounded-2xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            ✨ Ta TRANSFORMATION Jour 30
          </h2>
          <div className="text-left text-gray-200 space-y-4 text-lg max-w-2xl mx-auto">
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }} className="text-2xl">→</span>
              <span><strong style={{ color: '#D4AF37' }}>COHÉRENCE totale</strong> : tout a du sens dans ta vision</span>
            </p>
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }} className="text-2xl">→</span>
              <span><strong style={{ color: '#D4AF37' }}>LIBÉRATION complète</strong> : ton SYSTÈME tourne seul</span>
            </p>
            <p className="flex items-start gap-3">
              <span style={{ color: '#D4AF37' }} className="text-2xl">→</span>
              <span><strong style={{ color: '#D4AF37' }}>TRANSFORMATION durable</strong> : plan 90 jours aligné</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* LES 31 FICHES SCALING */}
      <section className="max-w-5xl w-full mb-16">
        <motion.div
          className="bg-[#0A2540]/40 border-2 border-[#D4AF37]/50 p-10 rounded-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-6 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            📚 31 Fiches Scaling + Accompagnement
          </h2>
          
          <p className="text-center text-gray-200 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Ces <strong style={{ color: '#D4AF37' }}>31 fiches</strong> + accompagnement personnalisé construisent 
            le <strong style={{ color: '#D4AF37' }}>PONT</strong> vers ta <strong style={{ color: '#D4AF37' }}>LIBÉRATION</strong> totale.
          </p>

          <div className="bg-black/40 border border-[#D4AF37]/30 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold mb-4 text-center font-['Montserrat']" style={{ color: '#D4AF37' }}>
              🎁 Phase 3 : Scaling (31 Fiches)
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Livre 9 */}
              <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#D4AF37' }}>
                  📖 {fichesPhase3.livre9.titre}
                </h4>
                <p className="text-xs text-gray-400 mb-3">
                  {fichesPhase3.livre9.totalFiches} fiches
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase3.livre9.fiches.slice(0, 4).map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: '#D4AF37' }}>•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                  <li className="text-xs" style={{ color: '#D4AF37' }}>+ {fichesPhase3.livre9.totalFiches - 4} autres</li>
                </ul>
              </div>

              {/* Livre 10 */}
              <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#D4AF37' }}>
                  📖 {fichesPhase3.livre10.titre}
                </h4>
                <p className="text-xs text-gray-400 mb-3">
                  {fichesPhase3.livre10.totalFiches} fiches
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase3.livre10.fiches.slice(0, 4).map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: '#D4AF37' }}>•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                  <li className="text-xs" style={{ color: '#D4AF37' }}>+ {fichesPhase3.livre10.totalFiches - 4} autres</li>
                </ul>
              </div>

              {/* Livre 11 */}
              <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#D4AF37' }}>
                  📖 {fichesPhase3.livre11.titre}
                </h4>
                <p className="text-xs text-gray-400 mb-3">
                  {fichesPhase3.livre11.totalFiches} fiches
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {fichesPhase3.livre11.fiches.slice(0, 4).map((fiche, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: '#D4AF37' }}>•</span>
                      <span>{fiche}</span>
                    </li>
                  ))}
                  <li className="text-xs" style={{ color: '#D4AF37' }}>+ {fichesPhase3.livre11.totalFiches - 4} autres</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 p-6 rounded-xl text-center">
            <p className="text-lg font-semibold mb-2" style={{ color: '#D4AF37' }}>
              💎 Valeur réelle : 997€
            </p>
            <p className="text-2xl font-bold mb-2" style={{ color: '#D4AF37' }}>
              Accompagnement personnalisé requis
            </p>
            <p className="text-gray-300 text-sm">
              La Strate 4 nécessite une qualification. Réserve ton Bilan Solopreneur Durable pour commencer.
            </p>
          </div>
        </motion.div>
      </section>

      {/* TUNNEL D'EXCLUSIVITÉ */}
      <section className="max-w-5xl w-full mb-16">
        <motion.div
          className="bg-[#0A2540]/60 border-4 border-[#D4AF37]/60 p-10 rounded-3xl shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            🎯 Tunnel d'Exclusivité (3 Niveaux)
          </h2>

          <div className="space-y-6">
            {/* Niveau 1 */}
            <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold font-['Montserrat']" style={{ color: '#D4AF37' }}>
                    Niveau 1 : Bilan Solopreneur Durable
                  </h3>
                  <p className="text-sm text-gray-400">1h30 avec Emrys</p>
                </div>
                <span className="text-2xl font-bold" style={{ color: '#D4AF37' }}>97€</span>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>✓</span>
                  <span>Diagnostic complet de ton <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> actuel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>✓</span>
                  <span>Plan 90 jours personnalisé vers ta <strong style={{ color: '#D4AF37' }}>LIBÉRATION</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>✓</span>
                  <span>Accès aux 31 Fiches Scaling</span>
                </li>
              </ul>
              <button
                onClick={() => {
                  handleBooking();
                  window.open('https://calendly.com/votre-lien-bilan', '_blank');
                }}
                className="w-full text-black font-bold px-6 py-3 rounded-xl transition font-['Montserrat']"
                style={{ backgroundColor: '#D4AF37' }}
              >
                Réserver mon Bilan (97€)
              </button>
            </div>

            {/* Niveau 2 */}
            <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold font-['Montserrat']" style={{ color: '#D4AF37' }}>
                    Niveau 2 : Accompagnement 30 Jours
                  </h3>
                  <p className="text-sm text-gray-400">Suivi hebdo + accès Slack privé</p>
                </div>
                <span className="text-2xl font-bold" style={{ color: '#D4AF37' }}>497€</span>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>✓</span>
                  <span>4 sessions 1:1 hebdomadaires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>✓</span>
                  <span>Accès Slack privé (réponse sous 24h)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>✓</span>
                  <span>Construction de ton <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> evergreen</span>
                </li>
              </ul>
              <p className="text-xs text-gray-400 text-center">
                Accessible après le Bilan Niveau 1
              </p>
            </div>

            {/* Niveau 3 */}
            <div className="bg-[#0A2540]/50 border border-[#D4AF37]/30 p-6 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold font-['Montserrat']" style={{ color: '#D4AF37' }}>
                    Niveau 3 : Partenariat 90 Jours
                  </h3>
                  <p className="text-sm text-gray-400">Programme exclusif sur candidature</p>
                </div>
                <span className="text-2xl font-bold" style={{ color: '#D4AF37' }}>1997€</span>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>✓</span>
                  <span>12 sessions 1:1 + accès illimité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>✓</span>
                  <span>Audit complet + implémentation technique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>✓</span>
                  <span>Ta <strong style={{ color: '#D4AF37' }}>LIBÉRATION</strong> complète installée</span>
                </li>
              </ul>
              <p className="text-xs text-gray-400 text-center">
                Sur candidature uniquement (5 places/trimestre)
              </p>
            </div>
          </div>

          <div className="mt-8 bg-[#C4322A]/20 border border-[#C4322A]/40 p-6 rounded-xl">
            <p className="text-sm font-semibold mb-2" style={{ color: '#C4322A' }}>
              ⚠️ Qualification Requise
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              Pour accéder à la Strate 4, tu dois avoir complété les Strates 1-2-3. 
              Le Bilan Niveau 1 valide ta qualification et débloque l'accès aux niveaux supérieurs.
            </p>
          </div>
        </motion.div>
      </section>

      {/* GARANTIE */}
      <section className="max-w-4xl w-full mb-16">
        <div className="bg-[#0A2540]/40 border border-[#D4AF37]/40 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            🛡️ Garantie Satisfaction 30 Jours
          </h3>
          <p className="text-gray-200 text-lg mb-6 leading-relaxed">
            Si après ton Bilan Niveau 1, tu estimes que le parcours ne correspond pas à tes attentes, 
            tu es remboursé intégralement. Aucune justification requise.
          </p>
          <p className="text-sm text-gray-400">
            Cette garantie témoigne de ma confiance totale dans le <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> 
            que je vais te révéler.
          </p>
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
