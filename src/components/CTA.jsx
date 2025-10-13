import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CTA() {
  const [formData, setFormData] = useState({ name: "", email: "", type: "" });
  const [status, setStatus] = useState("");
  const [context, setContext] = useState({ title: "", subtitle: "" });
  const [forceChoice, setForceChoice] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from");
    const type = params.get("type");

    if (from === "popup" && type) {
      setContext({
        title: `Réserve ton ebook ${type.charAt(0).toUpperCase() + type.slice(1)}`,
        subtitle: "Complète tes informations pour recevoir ton lien de paiement sécurisé.",
      });
      setFormData((prev) => ({ ...prev, type }));
      setForceChoice(false);
    } else {
      setContext({
        title: "Réserve ton exemplaire — Collection Renaissance IA",
        subtitle: (
          <>
            <p className="text-lg md:text-xl mb-4">
              ⚡ <strong>Edition limitée : 300 exemplaires seulement</strong>
            </p>
            <p className="text-base md:text-lg mb-6">
              🎁 <strong>Bonus exclusif pour les 50 premiers :</strong>  
              <br />→ Accès à la communauté Catalyseur  
              <br />→ Masterclass “Reconversion & IA”  
              <br />→ Plan d’action 7 jours Renaissance IA
            </p>
            <p className="text-blue-300 font-semibold">
              Restants : <span id="counter">217 / 300</span> (mise à jour en temps réel)
            </p>
          </>
        ),
      });
      setForceChoice(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Envoi en cours...");

    try {
      const res = await fetch("https://automate.optimizeinsight.com/webhook/catalyseur-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Réservation confirmée ! Tu recevras les instructions de paiement dans ta boîte mail.");
        setFormData({ name: "", email: "", type: formData.type });
      } else {
        setStatus("❌ Une erreur est survenue. Merci de réessayer.");
      }
    } catch (error) {
      setStatus("⚠️ Impossible de soumettre le formulaire. Vérifie ta connexion.");
    }
  };

  return (
    <section
      id="cta"
      className="py-24 px-6 text-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white relative overflow-hidden"
    >
      {/* Effet décoratif */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-transparent blur-3xl opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 font-[Inter]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {context.title}
        </motion.h2>

        <motion.div
          className="text-base md:text-lg mb-10 leading-relaxed text-slate-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {context.subtitle}
        </motion.div>

        {/* Formulaire */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom complet"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 w-full rounded-md border border-white/20 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre adresse email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 w-full rounded-md border border-white/20 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {forceChoice && (
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="p-3 w-full rounded-md border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">-- Choisis ton ebook --</option>
              <option value="prospection">Prospection IA — Trouve des clients naturellement (29 €)</option>
              <option value="conversion">Conversion IA — Transforme tes conversations en ventes (39 €)</option>
              <option value="fidelisation">Fidélisation IA — Crée des clients ambassadeurs (39 €)</option>
              <option value="bundle">Bundle complet Renaissance IA (87 €)</option>
            </select>
          )}

          {!forceChoice && <input type="hidden" name="type" value={formData.type} />}

          <motion.button
            type="submit"
            className="mt-4 px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-500"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(139,92,246,0.8), 0 0 45px rgba(59,130,246,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Réserver mon exemplaire
          </motion.button>
        </motion.form>

        {/* Message d'état */}
        {status && (
          <motion.p
            className="mt-6 text-base text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {status}
          </motion.p>
        )}
      </div>
    </section>
  );
}
