import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import products from "../data/products.json";

const paypalOptions = {
  "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
  currency: "EUR",
  intent: "capture",
};

export default function EbookPopup({ isOpen, onClose, ebook }) {
  const [zoomOpen, setZoomOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!ebook) return null;

  const product = products.ebooks.find((p) => p.type === ebook.type) || ebook;

  const handleStripeCheckout = () => {
    window.location.href = `/checkout/stripe?product=${product.type}`;
  };

  const handleReserve = () => {
    onClose();
    setTimeout(() => {
      const cta = document.getElementById("cta");
      if (cta) {
        cta.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState({}, "", `/#cta?from=popup&type=${product.type}`);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden"
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermeture */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              ✕
            </button>

            {/* Image du livre */}
            <motion.div
              className="h-60 w-full flex items-center justify-center overflow-hidden bg-gray-100 cursor-zoom-in"
              onClick={() => setZoomOpen(true)}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {product.image ? (
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                />
              ) : (
                <span className="text-gray-400 italic">Image à venir…</span>
              )}
            </motion.div>

            {/* Contenu */}
            <div className="p-6 space-y-4 text-left">
              <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>

              {product.shortDescription && (
                <p className="text-blue-700 font-medium">{product.shortDescription}</p>
              )}

              <p className="text-gray-600 leading-relaxed">
                {product.description || (
                  <span className="italic text-gray-400">Description à venir...</span>
                )}
              </p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-semibold text-blue-600">
                  {product.price} €
                </span>
              </div>

              {/* Télécharger un extrait */}
              {product.sample && (
                <motion.a
                  href={product.sample}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center rounded-xl font-semibold text-lg bg-blue-100 text-blue-800 shadow-md hover:bg-blue-200 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📘 Lire un extrait
                </motion.a>
              )}

              {/* CTA principal */}
              <motion.button
                onClick={handleReserve}
                className="w-full py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Commencer ma renaissance
              </motion.button>

              {/* Paiement Stripe */}
              <motion.button
                onClick={handleStripeCheckout}
                className="w-full mt-4 py-3 rounded-xl font-semibold text-lg bg-black text-white shadow-md hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💳 Payer avec Stripe
              </motion.button>

              {/* Paiement PayPal */}
              <div className="mt-4">
                <PayPalScriptProvider options={paypalOptions}>
                  <PayPalButtons
                    style={{
                      layout: "vertical",
                      color: product.upsell ? "gold" : "blue",
                      shape: "rect",
                      label: "paypal",
                    }}
                    createOrder={(data, actions) =>
                      actions.order.create({
                        purchase_units: [
                          {
                            description: product.title,
                            amount: { value: product.price, currency_code: "EUR" },
                          },
                        ],
                      })
                    }
                    onApprove={(data, actions) =>
                      actions.order.capture().then(() => {
                        window.location.href = `/merci?type=${product.type}`;
                      })
                    }
                    onError={(err) => {
                      console.error("Erreur PayPal :", err);
                      alert("Une erreur est survenue lors du paiement PayPal.");
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </motion.div>

          {/* Zoom plein écran */}
          <AnimatePresence>
            {zoomOpen && (
              <motion.div
                className="fixed inset-0 z-60 flex items-center justify-center bg-black/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setZoomOpen(false)}
              >
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="max-h-[90%] max-w-[90%] object-contain rounded-xl shadow-2xl"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
