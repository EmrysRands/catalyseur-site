import { useEffect } from "react";
import { motion } from "framer-motion";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import products from "../data/products.json";

export default function Bundle() {
  const bundle = products.bundle;

  // Empêche le scroll de fond pendant l'affichage du bundle (comme un mode focus)
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const initialOptions = {
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
    currency: "EUR",
    intent: "capture",
  };

  const handleMobileMoney = () => {
    alert(`Paiement Mobile Money simulé pour ${bundle.title} (${bundle.price} €).`);
    window.location.href = "/merci?type=bundle";
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Halo d’arrière-plan doré */}
      <motion.div
        className="absolute inset-0 opacity-20 bg-gradient-to-tr from-yellow-600 via-yellow-300 to-transparent blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Titre principal */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {bundle.title}
      </motion.h1>

      {/* Description enrichie */}
      <motion.p
        className="text-lg text-gray-300 mb-8 max-w-2xl z-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {bundle.description}
        <br />
        <span className="text-yellow-400 font-semibold">
          🎁 Offre spéciale : {bundle.price} € au lieu de 107 €.
        </span>
        <br />
        <span className="text-sm text-gray-400">
          ⚡ Édition limitée — Accès immédiat après paiement.
        </span>
      </motion.p>

      {/* Animation de zone de paiement */}
      <motion.div
        className="w-full max-w-md bg-black/30 rounded-2xl p-8 shadow-2xl border border-yellow-500/20 backdrop-blur-sm z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        {/* PayPal */}
        <motion.div
          className="mb-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              style={{
                layout: "vertical",
                color: "gold",
                shape: "rect",
                label: "paypal",
              }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: bundle.title,
                      amount: { value: bundle.price, currency_code: "EUR" },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) =>
                actions.order.capture().then(() => {
                  window.location.href = "/merci?type=bundle";
                })
              }
              onError={(err) => {
                console.error("Erreur PayPal :", err);
                alert("Une erreur est survenue lors du paiement.");
              }}
            />
          </PayPalScriptProvider>
        </motion.div>

        {/* Mobile Money */}
        <motion.button
          onClick={handleMobileMoney}
          className="w-full py-3 rounded-xl font-semibold text-lg bg-yellow-400 text-black shadow-md hover:shadow-yellow-400/50 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📱 Payer par Mobile Money
        </motion.button>
      </motion.div>

      {/* Texte de sécurité / confiance */}
      <motion.p
        className="text-gray-400 text-sm mt-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        🔒 Paiement sécurisé — Accès automatique après validation.
      </motion.p>

      {/* Bouton retour vers les livres */}
      <motion.a
        href="/#books"
        className="mt-8 inline-block text-sm text-yellow-400 hover:underline z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        ← Retour à la collection NeuroSales
      </motion.a>
    </motion.section>
  );
}
