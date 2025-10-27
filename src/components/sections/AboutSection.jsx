import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 text-center bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white px-6">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-gold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        💫 À propos de Catalyseur Digital
      </motion.h2>

      <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-12">
        Nous aidons les humains à se reconnecter à leur potentiel, à apprivoiser l’IA et à créer leur liberté digitale.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          { icon: "🧙", title: "Magicien", desc: "Transformer la complexité en clarté." },
          { icon: "🧠", title: "Sage", desc: "Partager la connaissance et éveiller la conscience." },
          { icon: "🦸", title: "Héros", desc: "Agir avec courage pour guider la transformation." },
        ].map((item) => (
          <div key={item.title} className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition">
            <h3 className="text-xl font-semibold text-gold mb-2">
              {item.icon} {item.title}
            </h3>
            <p className="text-slate-300">{item.desc}</p>
          </div>
        ))}
      </div>

      <ul className="mt-16 space-y-2 text-slate-300 font-medium">
        <li>✨ Humanité avant tout</li>
        <li>🚀 Innovation utile</li>
        <li>💡 Transmission durable</li>
      </ul>
    </section>
  );
}
