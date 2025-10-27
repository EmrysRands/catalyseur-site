import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white px-6 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-gold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        💬 Contact & Support
      </motion.h2>

      <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-12">
        Une question, un besoin, une idée ? L’équipe Catalyseur est à ton écoute.
      </p>

      <form className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-md mx-auto text-left">
        <label className="block mb-4">
          <span className="text-gold font-semibold">Nom</span>
          <input
            type="text"
            placeholder="Ton nom complet"
            className="w-full mt-2 p-3 rounded-lg bg-white/20 text-white focus:outline-none"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gold font-semibold">Email</span>
          <input
            type="email"
            placeholder="ton@email.com"
            className="w-full mt-2 p-3 rounded-lg bg-white/20 text-white focus:outline-none"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gold font-semibold">Message</span>
          <textarea
            rows="4"
            placeholder="Explique ton besoin..."
            className="w-full mt-2 p-3 rounded-lg bg-white/20 text-white focus:outline-none"
          ></textarea>
        </label>
        <button className="w-full bg-gold text-dark font-bold py-3 rounded-lg hover:bg-yellow-400 transition">
          ✉️ Envoyer le message
        </button>
      </form>

      <details className="mt-12 bg-white/10 p-6 rounded-lg max-w-2xl mx-auto text-left text-slate-200">
        <summary className="font-semibold text-gold cursor-pointer">
          📦 Comment accéder à mes ebooks ?
        </summary>
        <p className="mt-3">Connecte-toi dans la section Ressources en bas de cette page.</p>
      </details>
    </section>
  );
}
