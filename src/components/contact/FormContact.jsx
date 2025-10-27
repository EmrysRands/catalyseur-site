export default function FormContact() {
  return (
    <form className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-md w-full text-left">
      <label className="block mb-4">
        <span className="text-gold font-semibold">Nom</span>
        <input
          type="text"
          placeholder="Ton nom complet"
          className="w-full mt-2 p-3 rounded-lg bg-white/20 text-white focus:outline-none"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gold font-semibold">Email</span>
        <input
          type="email"
          placeholder="ton@email.com"
          className="w-full mt-2 p-3 rounded-lg bg-white/20 text-white focus:outline-none"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gold font-semibold">Message</span>
        <textarea
          rows="4"
          placeholder="Explique-nous ton besoin"
          className="w-full mt-2 p-3 rounded-lg bg-white/20 text-white focus:outline-none"
        ></textarea>
      </label>
      <button className="w-full bg-gold text-dark font-bold py-3 rounded-lg hover:bg-yellow-400 transition">
        ✉️ Envoyer le message
      </button>
    </form>
  );
}
