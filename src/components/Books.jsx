import { useState } from "react";
import { motion } from "framer-motion";
import products from "../data/products.json";
import EbookPopup from "./EbookPopup";

export default function Books() {
  // États pour gérer le popup
  const [selectedEbook, setSelectedEbook] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Récupérer uniquement les ebooks normaux et le bundle
  const ebooks = products.ebooks.filter((e) => e.type !== "bundle");
  const bundle = products.bundle;

  // Animation des cartes
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.2 },
    }),
  };

  return (
    <section id="books" className="py-20 bg-white text-center">
      {/* Titre */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        La collection{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Renaissance IA
        </span>
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto mb-12 text-gray-600 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Trois ebooks pratiques pour transformer ta peur de l’obsolescence en
        liberté digitale durable.  
        👉 Pas de théorie académique : des plans d’action concrets, des histoires vraies, des exercices guidés.
      </motion.p>

      {/* Cartes ebooks (3 colonnes) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {ebooks.map((book, i) => (
          <motion.div
            key={book.type}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="bg-gradient-to-b from-slate-50 to-indigo-50 rounded-xl p-6 shadow-md 
                       hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] 
                       hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 
                       transition-all duration-500 hover:scale-105"
          >
            <div className="text-4xl mb-4">📘</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {book.title}
            </h3>
            <p className="text-gray-600 mb-5">{book.description}</p>
            <button
              onClick={() => {
                setSelectedEbook(book);
                setIsOpen(true);
              }}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md 
                         hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] 
                         transition-all duration-500"
            >
              📖 Voir les détails
            </button>
          </motion.div>
        ))}
      </div>

      {/* Bloc bundle premium */}
      {bundle && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-xl p-10 shadow-2xl"
        >
          <h3 className="text-blue-300 text-xl mb-6 font-semibold">
            🎁 Offre spéciale
          </h3>
          <p className="text-lg mb-4">
            Obtiens le <strong>bundle complet Renaissance IA</strong> : les 3
            ebooks <br />
            <span className="text-purple-300">
              Réinvente ta carrière + Automatise ton quotidien + Construis ta
              liberté
            </span>
          </p>
          <p className="text-2xl font-bold text-yellow-400 mb-4">
            {bundle.price} (au lieu de {bundle.oldPrice})
          </p>
          <button
            onClick={() => {
              setSelectedEbook(bundle);
              setIsOpen(true);
            }}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg 
                       hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] 
                       transition-all duration-500"
          >
            🚀 Voir le bundle
          </button>
        </motion.div>
      )}

      {/* CTA global */}
      <motion.a
        href="#cta"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="inline-block mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-lg 
                   hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] 
                   transition-all duration-500"
      >
        ✨ Commencer ta renaissance digitale
      </motion.a>

      {/* Popup Ebook */}
      <EbookPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        ebook={selectedEbook}
      />
    </section>
  );
}
