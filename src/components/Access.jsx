import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products.json";

export default function Access() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  const allProducts = [...products.ebooks, products.bundle];
  const ebook = allProducts.find((p) => p.type === type) || {
    title: "Renaissance IA",
    file: "/ebooks/default.pdf",
    description: "Retrouve ici tous tes contenus Catalyseur Digital.",
  };

  const bonuses = [
    {
      title: "🎥 Masterclass – IA & Reconnexion Professionnelle",
      description:
        "Une session complète pour comprendre comment aligner ton potentiel avec l’IA, même sans compétences techniques.",
      link: "https://catalyseur-digital.com/masterclass",
    },
    {
      title: "📒 Plan d’action 7 jours – Renaissance IA",
      description:
        "7 missions guidées pour reprendre le contrôle de ton avenir professionnel, pas à pas.",
      link: "/pdfs/plan-renaissance-ia.pdf",
    },
    {
      title: "💬 Communauté Catalyseur",
      description:
        "Rejoins des centaines d’entrepreneurs francophones qui apprennent à bâtir leur liberté digitale.",
      link: "https://discord.gg/catalyseurdigital",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white py-24 px-6 relative overflow-hidden">
      {/* Halo bleu-violet */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-600 to-transparent blur-3xl opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />

      {/* Titre principal */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-6 text-center z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Espace Membre – <span className="text-blue-300">{ebook.title}</span>
      </motion.h1>

      <motion.p
        className="max-w-2xl text-center text-slate-200 mb-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Merci d’avoir rejoint <strong>Catalyseur Digital</strong> 🌍  
        Voici ton espace privé pour accéder à tes contenus et ressources.
      </motion.p>

      {/* Bloc principal */}
      <motion.div
        className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 max-w-3xl w-full z-10 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Ebook */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-300">
          📘 {ebook.title}
        </h2>
        <p className="text-slate-200 mb-6">{ebook.description}</p>

        <a
          href={ebook.file}
          download
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-500"
        >
          📥 Télécharger ton eBook
        </a>

        {/* Bonus */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-purple-300">
            🎁 Tes bonus exclusifs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bonuses.map((b, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5 text-left hover:bg-white/10 transition-all duration-300"
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 0 20px rgba(139,92,246,0.3), 0 6px 15px rgba(0,0,0,0.1)",
                }}
              >
                <h4 className="font-semibold text-blue-300 mb-2">{b.title}</h4>
                <p className="text-sm text-slate-300 mb-3">{b.description}</p>
                <a
                  href={b.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-purple-400 hover:underline font-semibold"
                >
                  ➜ Accéder
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upsell */}
        {type !== "bundle" && (
          <motion.div
            className="mt-12 bg-gradient-to-r from-blue-600/30 to-purple-600/30 p-6 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold text-yellow-300 mb-3">
              🚀 Passe au niveau supérieur
            </h3>
            <p className="text-slate-200 mb-4">
              Découvre le <strong>{products.bundle.title}</strong> : les 3
              ebooks + outils IA + plan d’action complet Renaissance IA pour
              seulement{" "}
              <span className="text-yellow-300 font-semibold">
                {products.bundle.price} €
              </span>
              .
            </p>
            <a
              href="/bundle"
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-500"
            >
              💎 Découvrir le bundle complet
            </a>
          </motion.div>
        )}
      </motion.div>

      {/* Lien retour */}
      <motion.a
        href="/#books"
        className="mt-12 text-purple-300 hover:underline text-sm z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        ← Retour à la collection Renaissance IA
      </motion.a>
    </section>
  );
}
