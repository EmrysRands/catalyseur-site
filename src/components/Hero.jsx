import { motion } from "framer-motion";

export default function Hero() {
  // 🌈 Fonction de scroll fluide vers une section cible
  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white overflow-hidden"
    >

      {/* Titre principal */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold font-[Inter] mb-6 leading-tight"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Le monde change. <br />
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Vous, où serez-vous ?
        </span>
      </motion.h1>

      {/* Introduction */}
      <motion.div
        className="max-w-2xl text-lg md:text-xl leading-relaxed mb-6 text-slate-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <p className="mb-4">
          Vous avez peut-être <strong>perdu votre travail</strong>.<br />
          Votre diplôme ne vaut plus grand-chose.<br />
          Vous envoyez des candidatures... et seul le{" "}
          <strong>silence</strong> répond.
        </p>
      </motion.div>

      {/* Phrase pivot */}
      <motion.p
        className="text-blue-400 text-xl md:text-2xl font-semibold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Et si cette crise était le signal de départ de votre nouvelle vie ?
      </motion.p>

      {/* Bloc narratif */}
      <motion.div
        className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 mb-8 max-w-3xl backdrop-blur-sm shadow-[0_0_25px_rgba(139,92,246,0.15)]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <p className="text-lg md:text-xl text-slate-100 leading-relaxed">
          <strong className="text-blue-400">La vérité :</strong> Pour la
          première fois dans l’histoire,{" "}
          <strong>une crise peut être une opportunité</strong>.  
          Vous pouvez apprendre, tester, lancer une activité, trouver des
          clients... avec un simple ordinateur et une connexion Internet.
        </p>
      </motion.div>

      {/* CTA principal */}
      <motion.a
        href="#books"
        onClick={(e) => handleSmoothScroll(e, "#books")}
        className="px-6 py-3 mt-8 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-md hover:scale-105 transition-all"
      >
        ✨ Découvrir la collection Renaissance IA
      </motion.a>


      {/* Texte complémentaire */}
      <motion.p
        className="mt-8 text-sm md:text-base text-purple-300 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        🎁 Édition limitée à 300 places · Bonus offert aux 50 premiers
      </motion.p>
    </section>
  );
}
