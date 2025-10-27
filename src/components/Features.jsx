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
      className="relative py-32 bg-gradient-to-b from-[#1a1444] via-[#0f172a] to-[#0b0b17] text-gold flex flex-col items-center px-6 overflow-hidden"
    >
      {/* Lueur douce d’arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-indigo-600/10 via-purple-500/10 to-transparent blur-3xl opacity-60 pointer-events-none"></div>

      {/* TITRE */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-center text-gold relative z-10"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Les 4 Strates de Transformation
      </motion.h2>

      <motion.p
        className="text-lg text-gray-300 max-w-2xl text-center mb-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Le Catalyseur Digital 3.0 est un parcours progressif qui t’aide à passer
        du chaos digital à la clarté, puis à la liberté.
      </motion.p>

      {/* CARTES */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">
        {strates.map((strate, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-yellow-400/10 p-8 rounded-2xl shadow-lg text-center hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-all"
            whileHover={{ y: -5, scale: 1.03 }}
          >
            <div className="text-5xl mb-4">{strate.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-gold">
              {strate.title}
            </h3>
            <p className="text-gray-300 mb-6 text-base leading-relaxed">
              {strate.desc}
            </p>
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
