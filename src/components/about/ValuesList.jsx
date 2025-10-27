export default function ValuesList() {
  const values = [
    "✨ Humanité avant tout",
    "🚀 Innovation utile",
    "💡 Transmission durable",
  ];

  return (
    <section className="max-w-3xl text-center">
      <h3 className="text-2xl font-semibold mb-3 text-gold">Nos Valeurs</h3>
      <ul className="text-slate-300 space-y-2">
        {values.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
    </section>
  );
}
