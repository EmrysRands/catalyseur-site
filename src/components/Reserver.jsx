export default function Reserver() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Réservation de l’ebook</h1>
      <p className="text-gray-600 mb-6">
        Vous êtes en train de réserver l’ebook : <span className="font-semibold">{type}</span>
      </p>
      <a
        href="/"
        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Retour à l’accueil
      </a>
    </div>
  );
}
