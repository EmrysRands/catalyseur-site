import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function StrateLiberte() {
  const navigate = useNavigate();

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

  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#1a1444] via-[#312e81] to-[#0f172a] text-gold overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* En-tête */}
      <section className="max-w-3xl text-center mt-24 mb-16">
        <h1 className="text-5xl font-bold mb-6">🏆 Strate 4 – Liberté</h1>
        <p className="text-lg leading-relaxed text-gray-200 mb-8">
          Tu arrives à la phase de **stabilisation et de scalabilité**.  
          C’est ici que ton système devient **prévisible, rentable et libérateur**.  
          Tu n’agis plus dans la réaction, mais dans la maîtrise.
        </p>
      </section>

      {/* Présentation des formules */}
      <section className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl w-full">
        {/* 30J */}
        <motion.div
          className="bg-white/10 border border-yellow-400/20 rounded-2xl p-8 text-center hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold text-gold mb-2">⚡ Pack 30J</h3>
          <p className="text-gray-300 mb-4 text-sm">
            Objectif : stabiliser ton système et gagner 1h/jour durablement.
          </p>
          <p className="text-yellow-400 font-semibold text-lg mb-4">97 €</p>
          <ul className="text-gray-300 text-sm mb-6 space-y-2">
            <li>✅ Audit complet</li>
            <li>✅ Plan d’action automatisé</li>
            <li>✅ 1 session de coaching IA</li>
          </ul>
        </motion.div>

        {/* 90J */}
        <motion.div
          className="bg-gradient-to-b from-yellow-500/20 to-transparent border border-yellow-500/40 rounded-2xl p-8 text-center shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all"
          whileHover={{ scale: 1.08 }}
        >
          <h3 className="text-2xl font-bold text-yellow-300 mb-2">🚀 Programme 90J</h3>
          <p className="text-gray-300 mb-4 text-sm">
            Objectif : transformer ton activité et automatiser ton acquisition.
          </p>
          <p className="text-yellow-400 font-semibold text-lg mb-4">297 €</p>
          <ul className="text-gray-200 text-sm mb-6 space-y-2">
            <li>✅ 3 audits de progression</li>
            <li>✅ Coaching stratégique hebdomadaire</li>
            <li>✅ Accès complet aux outils Optimize Insight</li>
          </ul>
        </motion.div>

        {/* Mastermind */}
        <motion.div
          className="bg-white/10 border border-purple-500/40 rounded-2xl p-8 text-center hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold text-purple-300 mb-2">👑 Mastermind</h3>
          <p className="text-gray-300 mb-4 text-sm">
            Objectif : scaler ton business et devenir un catalyseur à ton tour.
          </p>
          <p className="text-purple-400 font-semibold text-lg mb-4">Sur sélection</p>
          <ul className="text-gray-200 text-sm mb-6 space-y-2">
            <li>✅ Accès direct à Emrys Rands</li>
            <li>✅ Masterclass IA & Leadership</li>
            <li>✅ Accès anticipé aux produits Catalyseur</li>
          </ul>
        </motion.div>
      </section>

      {/* CTA + Calendly */}
      <motion.section
        className="text-center mb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gold">📅 Réserve ton diagnostic</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Choisis ton créneau ci-dessous pour une session d’audit à **97 €**.  
          Ensemble, nous identifierons les leviers qui peuvent doubler ton impact.
        </p>

        {/* Calendly intégré */}
        <div className="w-full max-w-2xl mx-auto mb-10">
          <iframe
            src="https://calendly.com/optimizeinsight/diagnostic"
            width="100%"
            height="700"
            frameBorder="0"
            className="rounded-xl shadow-lg border border-yellow-400/20"
            onLoad={handleBooking}
          ></iframe>
        </div>

        <a
          href="https://calendly.com/tiana-optimizeinsight/diagnostic"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBooking}
          className="inline-block bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
        >
          🧭 Réserver mon diagnostic
        </a>

        {/* Bouton retour à l’accueil */}
        <div className="mt-8">
          <button
            onClick={() => navigate("/")}
            className="text-gray-300 underline hover:text-yellow-300 transition"
          >
            ⬅️ Retour à l’accueil
          </button>
        </div>
      </motion.section>
    </motion.main>
  );
}
