// src/pages/Resources.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function Resources() {
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState("");

  // Simulation temporaire de connexion (avant Supabase)
  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setIsLogged(true);
    }
  };

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
          🎓 Espace Ressources
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Retrouve ici tous tes ebooks, formations et systèmes achetés.
          <br />
          Connecte-toi pour accéder à ton espace personnel.
        </motion.p>
      </section>

      {/* ZONE CONNEXION */}
      {!isLogged ? (
        <section className="bg-gray-900 rounded-2xl shadow-lg p-8 max-w-md w-full mb-20 text-center">
          <h2 className="text-2xl font-bold mb-6">🔐 Connexion rapide</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <label>
              <span className="block mb-1 font-semibold text-gold">
                Adresse e-mail
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
                placeholder="ex : tonadresse@mail.com"
              />
            </label>

            <motion.button
              type="submit"
              className="mt-4 bg-gold text-dark font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Se connecter
            </motion.button>
          </form>
        </section>
      ) : (
        <>
          {/* DASHBOARD */}
          <section className="max-w-5xl w-full mb-20">
            <h2 className="text-2xl font-bold mb-6 text-center">
              👋 Bienvenue, {email.split("@")[0]} !
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Voici tes ressources disponibles 👇
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* EBOOKS */}
              <motion.div
                className="bg-gray-900 p-6 rounded-2xl shadow-md text-center"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl font-bold mb-3">📘 Tes Ebooks</h3>
                <p className="text-gray-300 mb-4">
                  Télécharge tes guides achetés et continue ton apprentissage à
                  ton rythme.
                </p>
                <a
                  href="/pdfs"
                  className="inline-block bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
                >
                  Ouvrir la bibliothèque
                </a>
              </motion.div>

              {/* FORMATIONS */}
              <motion.div
                className="bg-gray-900 p-6 rounded-2xl shadow-md text-center"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl font-bold mb-3">🎥 Formations IA</h3>
                <p className="text-gray-300 mb-4">
                  Accède à tes formations sur l’automatisation et la
                  productivité IA.
                </p>
                <a
                  href="/formations"
                  className="inline-block bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
                >
                  Lancer mes modules
                </a>
              </motion.div>

              {/* SYSTEMES */}
              <motion.div
                className="bg-gray-900 p-6 rounded-2xl shadow-md text-center"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl font-bold mb-3">⚙️ Systèmes & Templates</h3>
                <p className="text-gray-300 mb-4">
                  Retrouve ici tes automatisations Notion, n8n ou plans de
                  contenu.
                </p>
                <a
                  href="/templates"
                  className="inline-block bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
                >
                  Voir mes systèmes
                </a>
              </motion.div>
            </div>
          </section>

          {/* DECONNEXION */}
          <motion.button
            onClick={() => setIsLogged(false)}
            className="mb-16 px-6 py-3 bg-gray-800 text-gray-300 rounded-xl hover:bg-gray-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            🔒 Se déconnecter
          </motion.button>
        </>
      )}

      <footer className="text-gray-500 text-sm pb-10 text-center">
        © {new Date().getFullYear()} Catalyseur Digital — Espace Ressources.
      </footer>
    </motion.main>
  );
}
