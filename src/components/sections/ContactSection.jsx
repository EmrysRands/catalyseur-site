import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#1a1444] via-[#0A2540] to-[#0f172a] text-white px-6 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 font-['Montserrat']"
        style={{ color: '#D4AF37' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        💬 Contact & Support
      </motion.h2>

      <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-12 leading-relaxed">
        Une question, un besoin, une idée ? L'équipe Catalyseur est à ton écoute.
      </p>

      <form className="bg-[#0A2540]/40 backdrop-blur-md border border-[#D4AF37]/30 p-8 rounded-2xl max-w-md mx-auto text-left">
        <label className="block mb-4">
          <span className="font-semibold" style={{ color: '#D4AF37' }}>Nom</span>
          <input
            type="text"
            placeholder="Ton nom complet"
            className="w-full mt-2 p-3 rounded-lg bg-black/40 border border-[#D4AF37]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
          />
        </label>
        <label className="block mb-4">
          <span className="font-semibold" style={{ color: '#D4AF37' }}>Email</span>
          <input
            type="email"
            placeholder="ton@email.com"
            className="w-full mt-2 p-3 rounded-lg bg-black/40 border border-[#D4AF37]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
          />
        </label>
        <label className="block mb-4">
          <span className="font-semibold" style={{ color: '#D4AF37' }}>Message</span>
          <textarea
            rows="4"
            placeholder="Explique ton besoin..."
            className="w-full mt-2 p-3 rounded-lg bg-black/40 border border-[#D4AF37]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
          ></textarea>
        </label>
        <button 
          className="w-full text-black font-bold py-3 rounded-lg transition font-['Montserrat']"
          style={{ backgroundColor: '#D4AF37' }}
        >
          ✉️ Envoyer le message
        </button>
      </form>

      <details className="mt-12 bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-lg max-w-2xl mx-auto text-left text-slate-200">
        <summary className="font-semibold cursor-pointer font-['Montserrat']" style={{ color: '#D4AF37' }}>
          📦 Comment accéder à mes ebooks ?
        </summary>
        <p className="mt-3 text-sm text-gray-300">
          Connecte-toi dans la section <strong style={{ color: '#D4AF37' }}>Espace Nova</strong> pour accéder 
          à toutes tes ressources téléchargées et suivre ta progression.
        </p>
      </details>

      <div className="mt-12 text-sm text-gray-400">
        <p>
          💡 Besoin d'aide immédiate ? Consulte la <strong style={{ color: '#D4AF37' }}>FAQ</strong> ou 
          rejoins notre communauté Discord.
        </p>
      </div>
    </section>
  );
}
