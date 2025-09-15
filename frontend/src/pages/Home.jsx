export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#0d1b2a] to-black text-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <p className="text-sm uppercase tracking-widest mb-4">
          Limited to 50 Pieces
        </p>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Open Gear Flying <br /> Tourbillon Paraiba
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg uppercase text-sm tracking-wider">
          Find Out More
        </button>
      </section>

      {/* Product Grid Preview */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/watch1.jpg"
            alt="watch"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Flying Grand Regulator</h3>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/watch2.jpg"
            alt="watch"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Skeleton Cowboy</h3>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/watch3.jpg"
            alt="watch"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Classic Regulator</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
