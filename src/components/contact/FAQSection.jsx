export default function FAQSection() {
  const faqs = [
    {
      q: "Puis-je télécharger mes livres après l’achat ?",
      a: "Oui, ils sont disponibles dans ton Espace Ressources à tout moment.",
    },
    {
      q: "Comment contacter le support ?",
      a: "Par email à contact@catalyseur.digital ou via ce formulaire.",
    },
  ];

  return (
    <section className="max-w-3xl mt-20 text-center">
      <h2 className="text-3xl font-bold mb-6">❓ Questions fréquentes</h2>
      <div className="space-y-4 text-slate-300">
        {faqs.map((f) => (
          <details key={f.q} className="bg-white/10 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold text-gold">
              {f.q}
            </summary>
            <p className="mt-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
