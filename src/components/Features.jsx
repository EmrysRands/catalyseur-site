// Features.jsx (Catalyseur Digital 3.0 — Les 4 Strates de Transformation)
import { motion } from "framer-motion";

export default function Features() {
  const strates = [
    {
      icon: "🧠",
      title: "Réinvention",
      desc: "Clarifie ta vision, reconnecte ton potentiel et découvre comment l’IA peut libérer ton temps et ton esprit.",
      link: "/reinvention",
      btn: "Découvrir la Strate 1",
    },
    {
      icon: "⚙️",
      title: "Automatisation",
      desc: "Simplifie ton quotidien en transformant tes processus en systèmes IA. Gagne 2 à 3h par jour sans effort.",
      link: "/automatisation",
      btn: "Commencer à automatiser",
    },
    {
      icon: "🧩",
      title: "Application",
      desc: "Applique ce que tu apprends à travers nos outils, modèles et démos interactives. Vois les résultats concrets.",
      link: "/application",
      btn: "Tester un système en action",
    },
    {
      icon: "🏆",
      title: "Liberté",
      desc: "Ancre tes résultats avec un accompagnement personnalisé et des systèmes durables. Crée ta stabilité digitale.",
      link: "/liberte",
      btn: "Découvrir ton accompagnement",
    },
  ];

  return (
    <section
      id="strates"
      className="py-24 bg-dark text-gold flex flex-col items-center px-6"
    >
      {/* TITRE DE SECTION */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-center text-gold"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Les 4 Strates de Transformation
      </motion.h2>

      <motion.p
        className="text-lg text-gray-300 max-w-2xl text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Le Catalyseur Digital 3.0 est un parcours progressif qui t’aide à passer
        du chaos digital à la clarté, puis à la liberté.
      </motion.p>

      {/* CARTES STRATES */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl w-full">
        {strates.map((strate, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <div className="text-5xl mb-4">{strate.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{strate.title}</h3>
            <p className="text-gray-300 mb-6">{strate.desc}</p>
            <a
              href={strate.link}
              className="inline-block bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
            >
              {strate.btn}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
