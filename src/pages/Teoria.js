import { useState } from 'react';
import TeoriaMoto from './teoria/TeoriaMoto';
import TeoriaCarro from './teoria/TeoriaCarro';

export default function Teoria() {
  const [view, setView] = useState('moto');

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-10">
      {/* Fondo decorativo animado */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8 drop-shadow-md">
          Fundamentos de Educación Vial
        </h1>

        {/* Tabs de navegación */}
        <div className="flex justify-center mb-10 gap-4">
          <button
            onClick={() => setView('moto')}
            className={`px-6 py-2 rounded-full font-semibold border transition-all duration-300
              ${view === 'moto'
                ? 'bg-yellow-400 text-black shadow-lg'
                : 'border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black'
              }`}
          >
            Motocicleta
          </button>
          <button
            onClick={() => setView('carro')}
            className={`px-6 py-2 rounded-full font-semibold border transition-all duration-300
              ${view === 'carro'
                ? 'bg-yellow-400 text-black shadow-lg'
                : 'border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black'
              }`}
          >
            Carro
          </button>
        </div>

        {/* Vista dinámica */}
        <section className="relative z-10">
          {view === 'moto' ? <TeoriaMoto /> : <TeoriaCarro />}
        </section>
      </div>
    </main>
  );
}
