import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
          Notre mission
        </h2>

        <div className="space-y-6 text-lg text-slate-200 leading-relaxed">
          <p className="text-center mb-12">
            Tu te sens débordé par les outils, perdu dans le chaos digital, et l'IA te semble être une énième complexité à gérer ?
          </p>

          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <p className="text-xl font-semibold text-[#D4AF37] mb-4">
              Nous pensons que tu mérites mieux.
            </p>
            <p>
              Catalyseur Digital existe pour transformer le chaos en système, la confusion en clarté, et la surcharge en liberté. 
              Pas avec des promesses vides. Avec des méthodes concrètes, testées, et adaptées à ton rythme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl mb-3">🧭</div>
              <h3 className="font-semibold text-[#D4AF37] mb-2">Clarté</h3>
              <p className="text-sm text-slate-300">Comprendre avant d'agir. Pas de jargon, que des solutions.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-[#D4AF37] mb-2">Action</h3>
              <p className="text-sm text-slate-300">Des résultats visibles en 5 minutes, pas en 5 mois.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-semibold text-[#D4AF37] mb-2">Liberté</h3>
              <p className="text-sm text-slate-300">Reprends le contrôle de ton temps et de ton énergie.</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-center italic text-slate-300">
              L'IA n'est pas ton ennemi. C'est un levier. Et nous sommes là pour te montrer comment t'en servir — sans perdre ton humanité.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
