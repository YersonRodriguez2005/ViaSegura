import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {
  TrendingUp,
  Users,
  AlertCircle,
  Bike
} from 'lucide-react';

const dataByYear = [
  { year: 2022, deaths: 8469 },
  { year: 2023, deaths: 8546 },
  { year: 2024, deaths: 8271 },
  { year: 2025, deaths: 639 }, // Primer trimestre
];

export default function Estadisticas() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Encabezado */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-black text-yellow-400 drop-shadow-md">Estadísticas de Seguridad Vial en Colombia</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Conoce el impacto anual de los siniestros viales, los grupos más afectados y las tendencias clave que definen la seguridad en las vías del país.
          </p>
        </header>

        {/* Gráfica anual */}
        <section className="bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" /> Muertes por año
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataByYear}>
              <XAxis dataKey="year" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                formatter={(value) => new Intl.NumberFormat().format(value)}
                labelStyle={{ color: '#fff' }}
                contentStyle={{ backgroundColor: '#333', borderRadius: 8, borderColor: '#888' }}
              />
              <Bar dataKey="deaths" fill="#facc15" />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-400 italic">
            En 2024 se registraron 8.271 muertes por siniestros viales, una leve reducción respecto a 2023.
          </p>
        </section>

        {/* Datos por tipo de actor vial */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: <Bike className="w-10 h-10 text-yellow-400 mx-auto mb-3" />,
              title: 'Motociclistas',
              text: '60 % de las víctimas fatales en accidentes viales corresponden a motociclistas.',
            },
            {
              icon: <Users className="w-10 h-10 text-yellow-400 mx-auto mb-3" />,
              title: 'Jóvenes (15–35 años)',
              text: 'El 44 % de las muertes en vías afecta a personas jóvenes en este rango de edad.',
            },
            {
              icon: <AlertCircle className="w-10 h-10 text-yellow-400 mx-auto mb-3" />,
              title: 'Procesos Judiciales',
              text: 'Solo el 4 % de las muertes viales derivan en un proceso judicial formal.',
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              {item.icon}
              <h3 className="text-xl font-bold text-yellow-300 mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}
        </section>

        {/* Tendencias */}
        <section className="bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Tendencias y Retos</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm">
            <li>En mayo de 2024 hubo una reducción del 13 % en fallecimientos frente al mismo mes de 2023.</li>
            <li>Los domingos siguen siendo los días con más siniestros, aunque han bajado un 10 % en 2024.</li>
            <li>En los primeros cuatro meses de 2025 se salvaron 137 vidas respecto al mismo periodo de 2024.</li>
            <li>Colombia acumula más de 103.000 muertes viales en los últimos 15 años.</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.ansv.gov.co/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-3 rounded-full shadow-xl hover:scale-105 transition-transform"
          >
            📈 Ver informe completo ANSV
          </a>
        </div>

      </div>
    </main>
  );
}
