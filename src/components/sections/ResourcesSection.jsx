import { motion } from "framer-motion";

export default function ResourcesSection() {
  return (
    <section
      id="resources"
      className="relative py-24 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#1a1035] text-white px-6 text-center overflow-hidden"
    >
      {/* Titre principal */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-gold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📚 Espace Ressources
      </motion.h2>

      <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-12">
        Connecte-toi pour retrouver tes ebooks, templates ou formations achetées.
      </p>

      {/* Formulaire de connexion */}
      <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-md mx-auto text-left shadow-xl">
        <label className="block mb-4">
          <span className="text-gold font-semibold">Email</span>
          <input
            type="email"
            placeholder="ton@email.com"
            className="w-full mt-2 p-3 rounded-lg bg-white/20 text-white focus:outline-none"
          />
        </label>
        <label className="block mb-6">
          <span className="text-gold font-semibold">Mot de passe</span>
          <input
            type="password"
            placeholder="********"
            className="w-full mt-2 p-3 rounded-lg bg-white/20 text-white focus:outline-none"
          />
        </label>
        <button className="w-full bg-gold text-dark font-bold py-3 rounded-lg hover:bg-yellow-400 transition">
          🔐 Se connecter
        </button>
      </div>

      <p className="mt-12 text-slate-300">
        Pas encore de compte ? Les téléchargements seront disponibles après ton premier achat.
      </p>

      {/* Halo de transition vers le footer */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#581c87]/40 via-transparent to-transparent blur-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Pont visuel */}
      <div className="h-20 bg-gradient-to-b from-transparent to-[#0f172a]" />
    </section>
  );
}
