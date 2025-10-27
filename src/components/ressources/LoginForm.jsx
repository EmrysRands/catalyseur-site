export default function LoginForm() {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-md w-full text-left">
      <label className="block mb-4">
        <span className="text-gold font-semibold">Email</span>
        <input
          type="email"
          placeholder="ton@email.com"
          className="w-full mt-2 p-3 rounded-lg bg-white/20 text-white focus:outline-none"
        />
      </label>
      <label className="block mb-6">
        <span className="text-gold font-semibold">Mot de passe</span>
        <input
          type="password"
          placeholder="********"
          className="w-full mt-2 p-3 rounded-lg bg-white/20 text-white focus:outline-none"
        />
      </label>
      <button className="w-full bg-gold text-dark font-bold py-3 rounded-lg hover:bg-yellow-400 transition">
        🔐 Se connecter
      </button>
    </div>
  );
}
