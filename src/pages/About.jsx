// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-dark text-gold overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* HERO */}
      <section className="text-center mt-24 mb-10 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-gold"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Lier l’humain et l’IA, pas les opposer
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Catalyseur Digital 3.0 est né d’une conviction simple :  
          l’IA n’est pas une menace pour l’humain, mais une extension de sa
          conscience et de sa créativité.
        </motion.p>
      </section>

      {/* SECTION MISSION */}
      <section className="max-w-4xl w-full mb-20">
        <motion.h2
          className="text-3xl font-bold mb-4 text-gold text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          🌱 Notre mission
        </motion.h2>

        <p className="text-gray-300 text-center mb-8">
          Aider les esprits curieux à passer du chaos digital à la clarté,
          grâce à un parcours intelligent où l’IA devient un partenaire de
          transformation — pas un substitut.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <motion.div
            className="bg-gray-900 p-6 rounded-2xl shadow-md text-center"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold mb-3">✨ Magicien</h3>
            <p className="text-gray-300">
              Transformer la complexité en énergie créative.  
              Nous créons des ponts entre les outils, les idées et les humains
              pour générer des résultats concrets.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900 p-6 rounded-2xl shadow-md text-center"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold mb-3">📘 Sage</h3>
            <p className="text-gray-300">
              Apporter clarté, méthode et discernement.  
              Nous enseignons à penser avec l’IA plutôt qu’à la subir, en
              favorisant la compréhension avant l’exécution.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900 p-6 rounded-2xl shadow-md text-center"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold mb-3">🏆 Héros</h3>
            <p className="text-gray-300">
              Inspirer et agir.  
              Nous aidons chaque individu à devenir le pilote de son système,
              libre et maître de son énergie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION HISTOIRE */}
      <section className="max-w-4xl w-full mb-20 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4 text-gold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          💡 Notre histoire
        </motion.h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Catalyseur Digital est né pendant une période où la technologie
          semblait diviser plus qu’elle ne reliait.  
          Nous avons voulu créer un pont — un espace où l’humain reprend la main
          sur le digital, et où l’IA devient un catalyseur d’évolution.
        </p>
        <p className="text-gray-400 italic">
          “Nous ne construisons pas des outils. Nous révélons des capacités.”
        </p>
      </section>

      {/* SECTION VALEURS */}
      <section className="max-w-4xl w-full mb-24">
        <motion.h2
          className="text-3xl font-bold mb-4 text-gold text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          💎 Nos valeurs
        </motion.h2>
        <ul className="text-gray-300 space-y-4 max-w-3xl mx-auto">
          <li>
            <strong>Humanité :</strong> l’IA doit renforcer la conscience, pas la
            remplacer.
          </li>
          <li>
            <strong>Transmission :</strong> chaque savoir devient un levier
            d’autonomie.
          </li>
          <li>
            <strong>Clarté :</strong> simplifier, c’est rendre accessible la
            transformation.
          </li>
          <li>
            <strong>Responsabilité :</strong> créer des systèmes durables, pas
            des dépendances.
          </li>
        </ul>
      </section>

      {/* SECTION CONTACT / MISSION CTA */}
      <section className="text-center mb-20">
        <motion.h3
          className="text-2xl font-bold mb-4 text-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🔗 Tu veux construire un pont avec nous ?
        </motion.h3>
        <a
          href="/contact"
          className="inline-block bg-gold text-dark font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 transition"
        >
          Contacte l’équipe Catalyseur
        </a>
      </section>

      <footer className="text-gray-500 text-sm pb-10 text-center">
        © {new Date().getFullYear()} Catalyseur Digital — Tous droits réservés.
      </footer>
    </motion.main>
  );
}
