export default function ArchetypesList() {
  const archetypes = [
    { icon: "🧙", name: "Magicien", desc: "Transformer la complexité en clarté." },
    { icon: "🧠", name: "Sage", desc: "Partager la connaissance et éveiller la conscience." },
    { icon: "🦸", name: "Héros", desc: "Agir avec courage pour guider la transformation." },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-8 max-w-5xl text-center mb-16">
      {archetypes.map((a) => (
        <div key={a.name} className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition">
          <h3 className="text-xl font-semibold text-gold mb-2">
            {a.icon} Archétype {a.name}
          </h3>
          <p className="text-slate-300">{a.desc}</p>
        </div>
      ))}
    </section>
  );
}
