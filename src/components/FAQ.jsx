import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "C’est quoi exactement la méthode Catalyseur Digital ?",
      answer:
        "Catalyseur Digital est une approche moderne pour aider les entrepreneurs à renaître professionnellement à l’ère de l’IA. Elle t’apprend à transformer la technologie en levier concret de liberté et d’impact, sans jargon ni complexité.",
    },
    {
      question: "Est-ce que c’est fait pour moi si je ne suis pas expert en IA ?",
      answer:
        "Absolument. La collection Renaissance IA a été créée pour ceux qui veulent comprendre et utiliser l’intelligence artificielle sans être développeur. L’objectif : t’aider à créer, vendre et vivre mieux grâce à l’IA.",
    },
    {
      question: "Les eBooks sont-ils seulement théoriques ?",
      answer:
        "Non. Chaque eBook est un plan d’action pratique : modèles, prompts ChatGPT, exercices guidés et stratégies concrètes. Tu apprends, tu appliques, tu vois les résultats.",
    },
    {
      question: "Pourquoi parle-t-on d’une 'Renaissance professionnelle' ?",
      answer:
        "Parce qu’à chaque révolution, ceux qui s’adaptent rapidement créent une nouvelle richesse. Cette collection t’aide à redevenir acteur de ton avenir, même si tu repars de zéro.",
    },
    {
      question: "Puis-je tester avant d’acheter ?",
      answer:
        "Oui. Tu peux télécharger un extrait gratuit avant de prendre ta décision. Catalyseur Digital valorise la transparence et la preuve par l’expérience.",
    },
    {
      question: "Est-ce que le paiement est sécurisé ?",
      answer:
        "Oui, 100 %. Les paiements sont gérés via PayPal et Mobile Money, avec un chiffrement complet et une redirection sécurisée vers la page de confirmation.",
    },
    {
      question: "Puis-je me faire rembourser si je change d’avis ?",
      answer:
        "Oui, tu disposes d’une garantie de 7 jours satisfait ou remboursé. Aucune justification demandée.",
    },
    {
      question: "Pourquoi limiter les exemplaires à 300 ?",
      answer:
        "Cette première édition est volontairement limitée pour préserver l’accompagnement humain et la valeur du programme. Les premiers bénéficient d’un suivi et de bonus exclusifs.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50 text-center"
    >
      {/* Titre principal */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold font-[Inter] mb-14 text-slate-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Questions fréquentes
      </motion.h2>

      {/* Grille de FAQ */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6 text-left">
        {faqs.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md border border-indigo-100 hover:border-indigo-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{
              scale: 1.02,
              boxShadow:
                "0 0 25px rgba(59,130,246,0.15), 0 8px 20px rgba(0,0,0,0.05)",
            }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-blue-600">
              {item.question}
            </h3>
            <p className="text-slate-700 leading-relaxed">{item.answer}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA bas de page */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.a
          href="#cta"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-500"
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 0 30px rgba(139,92,246,0.7), 0 0 50px rgba(59,130,246,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Commencer ma renaissance
        </motion.a>
      </motion.div>
    </section>
  );
}
