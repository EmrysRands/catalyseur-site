import { motion } from "framer-motion";

export default function Testimonials() {
  const stories = [
    {
      name: "Sarah — Maman reconvertie",
      story:
        "Après la fermeture de son magasin, Sarah pensait devoir repartir de zéro. En suivant les conseils de Catalyseur Digital, elle est devenue assistante virtuelle à distance. Aujourd’hui, elle gagne sa vie depuis chez elle, tout en étant présente pour ses enfants.",
      result: "Revenus stables en 3 mois",
      highlight: "“J’ai retrouvé confiance, du temps et une vraie liberté.”",
    },
    {
      name: "Lucas — Jeune diplômé perdu",
      story:
        "Cinq ans d’études, zéro opportunité… Lucas a découvert le copywriting et l’IA comme tremplin. En trois mois, il a décroché ses premiers clients et compris qu’il pouvait créer sa propre voie, sans patron ni diplôme supplémentaire.",
      result: "Premier client en 4 semaines",
      highlight: "“Je ne cherche plus un emploi. Je crée ma carrière.”",
    },
    {
      name: "Marc — Ancien chauffeur devenu digital",
      story:
        "Licencié à 45 ans, Marc n’avait jamais utilisé un logiciel. En appliquant le plan Catalyseur Digital, il s’est formé à Notion et Make. Il est maintenant gestionnaire de projets à distance pour plusieurs petites entreprises.",
      result: "Nouvelle activité en 2 mois",
      highlight: "“J’ai transformé une crise en nouvelle vie.”",
    },
  ];

  return (
    <section
      id="temoignages"
      className="py-24 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 text-center overflow-hidden"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ils ont <span className="text-blue-600">réinventé leur carrière</span>
      </motion.h2>

      <motion.p
        className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Chaque histoire est différente, mais toutes prouvent une chose : avec l’IA et le
        digital, la crise peut devenir un nouveau départ.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stories.map((s, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-lg rounded-2xl border border-indigo-100 p-8 text-left relative hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
            />
            <p className="italic text-slate-700 mb-6">“{s.story}”</p>
            <p className="font-semibold text-blue-600">{s.name}</p>
            <p className="text-sm text-slate-500">{s.result}</p>
            <p className="text-slate-900 mt-4 font-medium">{s.highlight}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <a
          href="#cta"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-500"
        >
          💡 Je veux moi aussi me réinventer
        </a>
      </motion.div>
    </section>
  );
}
