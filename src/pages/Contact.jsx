// src/pages/Contact.jsx
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-dark text-gold overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* HERO */}
      <section className="text-center mt-24 mb-12 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-gold"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Entrons en contact 🤝
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Une question, un projet ou simplement envie d’échanger ?  
          L’équipe Catalyseur Digital est là pour toi.
        </motion.p>
      </section>

      {/* COORDONNÉES DIRECTES */}
      <section className="bg-gray-900 rounded-2xl shadow-lg p-8 max-w-3xl w-full mb-16 text-center">
        <h2 className="text-2xl font-bold mb-6">📞 Coordonnées professionnelles</h2>

        <ul className="text-gray-300 space-y-4">
          <li>
            <strong>Nom / Représentant :</strong> Emrys Rands
          </li>
          <li>
            <strong>Téléphone :</strong>{" "}
            <a
              href="tel:+33185091327"
              className="text-gold hover:underline"
            >
              +33 1 85 09 13 27
            </a>
          </li>
          <li>
            <strong>Site :</strong>{" "}
            <a
              href="https://optimizeinsight.com"
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:underline"
            >
              optimizeinsight.com
            </a>
          </li>
          <li>
            <strong>LinkedIn :</strong>{" "}
            <a
              href="https://www.linkedin.com/in/emrysrands/"
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:underline"
            >
              linkedin.com/in/emrysrands
            </a>
          </li>
        </ul>
      </section>

      {/* FORMULAIRE DE CONTACT */}
      <section className="bg-gray-900 rounded-2xl shadow-lg p-8 max-w-3xl w-full mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">📬 Écris-nous directement</h2>

        <form
          action="https://formspree.io/f/xwpejqgy" // ✅ tu peux remplacer par ton endpoint Formspree / n8n
          method="POST"
          className="flex flex-col gap-4 text-gray-200"
        >
          <label>
            <span className="block mb-1 font-semibold text-gold">Nom complet</span>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
              placeholder="Ton nom"
            />
          </label>

          <label>
            <span className="block mb-1 font-semibold text-gold">Adresse e-mail</span>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
              placeholder="ex : contact@exemple.com"
            />
          </label>

          <label>
            <span className="block mb-1 font-semibold text-gold">Message</span>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 resize-none"
              placeholder="Décris ton besoin ou ta question..."
            ></textarea>
          </label>

          <motion.button
            type="submit"
            className="mt-4 bg-gold text-dark font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✉️ Envoyer le message
          </motion.button>
        </form>
      </section>

      {/* FAQ / ASSISTANCE NOVA */}
      <section className="max-w-3xl w-full mb-20 text-center">
        <h2 className="text-2xl font-bold mb-4">💡 Assistance Nova</h2>
        <p className="text-gray-300 mb-4">
          Tu préfères une aide instantanée ?  
          Demande directement à <strong>Nova</strong> — notre IA guide.
        </p>
        <a
          href="/nova"
          className="inline-block bg-gold text-dark font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 transition"
        >
          🚀 Ouvrir Nova
        </a>
      </section>

      <footer className="text-gray-500 text-sm pb-10 text-center">
        © {new Date().getFullYear()} Catalyseur Digital — Tous droits réservés.
      </footer>
    </motion.main>
  );
}
