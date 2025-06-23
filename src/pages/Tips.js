// src/pages/Tips.js
import { useState } from 'react';
import { Lightbulb, ShieldCheck, AlertTriangle, Users, Heart, BookOpen, Info, CloudRain, Bike, Zap, Eye, Clock, Umbrella, CloudDrizzle, Activity } from 'lucide-react';

export default function Tips() {
    const [selectedCategory, setSelectedCategory] = useState('General');

    const tips = [
        {
            category: 'General',
            icon: <ShieldCheck className="w-6 h-6 text-yellow-300" />,
            title: 'Mantén tu distancia',
            description: 'Conservar al menos 3 segundos de distancia con el vehículo de adelante reduce el riesgo de colisión.',
        },
        {
            category: 'General',
            icon: <Eye className="w-6 h-6 text-yellow-300" />,
            title: 'Anticipa el entorno',
            description: 'Observa constantemente tus retrovisores y puntos ciegos para prever maniobras de otros conductores.',
        },
        {
            category: 'General',
            icon: <Users className="w-6 h-6 text-yellow-300" />,
            title: 'Respeta a los peatones',
            description: 'Dales prioridad en pasos peatonales. Muchos accidentes involucran a peatones por imprudencia del conductor.',
        },
        {
            category: 'General',
            icon: <Clock className="w-6 h-6 text-yellow-300" />,
            title: 'Evita conducir con sueño',
            description: 'La fatiga disminuye tus reflejos. Haz pausas cada 2 horas en trayectos largos.',
        },
        {
            category: 'General',
            icon: <BookOpen className="w-6 h-6 text-yellow-300" />,
            title: 'Conoce el Código Nacional de Tránsito',
            description: 'Familiarízate con las normas y señales de tránsito para evitar sanciones y accidentes.',
        },
        {
            category: 'General',
            icon: <Heart className="w-6 h-6 text-yellow-300" />,
            title: 'Conduce con empatía',
            description: 'Respeta a otros conductores y peatones. La cortesía vial mejora la convivencia en las vías.',
        },

        // 🌧️ lluvia',
        {
            category: 'Lluvia',
            icon: <AlertTriangle className="w-6 h-6 text-yellow-300" />,
            title: 'Reduce la velocidad',
            description: 'La visibilidad y el frenado disminuyen en condiciones de lluvia. Disminuye la velocidad y enciende luces.',
        },
        {
            category: 'Lluvia',
            icon: <Umbrella className="w-6 h-6 text-yellow-300" />,
            title: 'Evita frenar bruscamente',
            description: 'Frena suavemente para evitar deslizamientos o pérdida de control.',
        },
        {
            category: 'Lluvia',
            icon: <CloudDrizzle className="w-6 h-6 text-yellow-300" />,
            title: 'Verifica el estado de las llantas',
            description: 'Una buena profundidad en la banda de rodadura mejora la tracción sobre superficies mojadas.',
        },
        {
            category: 'Lluvia',
            icon: <CloudRain className="w-6 h-6 text-yellow-300" />,
            title: 'Mantén distancia con otros vehículos',
            description: 'Aumenta la distancia de seguridad para tener más tiempo de reacción ante cualquier imprevisto.',
        },

        {
            category: 'lluvia',
            icon: <Lightbulb className="w-6 h-6 text-yellow-300" />,
            title: 'Usa limpiaparabrisas y luces',
            description: 'Asegúrate de que tus limpiaparabrisas funcionen correctamente y usa las luces bajas para mejorar la visibilidad.',
        },
        {
            category: 'lluvia',
            icon: <Zap className="w-6 h-6 text-yellow-300" />,
            title: 'Evita charcos profundos',
            description: 'No intentes pasar por charcos grandes, ya que pueden ocultar baches o causar hidroplaneo.',
        },

        // 🏍️ Motociclistas
        {
            category: 'Motociclistas',
            icon: <Lightbulb className="w-6 h-6 text-yellow-300" />,
            title: 'Usa ropa reflectiva',
            description: 'Durante la noche o lluvia, el uso de prendas reflectivas mejora tu visibilidad ante otros conductores.',
        },
        {
            category: 'Motociclistas',
            icon: <Bike className="w-6 h-6 text-yellow-300" />,
            title: 'Evita los puntos ciegos',
            description: 'Mantente fuera del ángulo muerto de los vehículos grandes y usa luces direccionales con anticipación.',
        },
        {
            category: 'Motociclistas',
            icon: <Zap className="w-6 h-6 text-yellow-300" />,
            title: 'Nunca conduzca sin casco',
            description: 'Un casco certificado puede salvarte la vida ante un siniestro vial.',
        },
        {
            category: 'Motociclistas',
            icon: <Activity className="w-6 h-6 text-yellow-300" />,
            title: 'Revisa tu moto antes de salir',
            description: 'Verifica frenos, luces, presión de llantas y niveles de aceite y combustible.',
        },
        {
            category: 'Motociclistas',
            icon: <Clock className="w-6 h-6 text-yellow-300" />,
            title: 'Evita distracciones',
            description: 'No uses el celular ni auriculares mientras conduces. Mantén la atención en la vía.',
        },
        // ⚙️ Mantenimiento
        {
            category: 'Mantenimiento',
            icon: <Zap className="w-6 h-6 text-yellow-300" />,
            title: 'Revisa los frenos regularmente',
            description: 'Un sistema de frenos en buen estado es crucial para tu seguridad y la de los demás.',
        },
        {
            category: 'Mantenimiento',
            icon: <BookOpen className="w-6 h-6 text-yellow-300" />,
            title: 'Mantén el aceite del motor al día',
            description: 'Cambia el aceite según las recomendaciones del fabricante para un rendimiento óptimo.',
        },
        {
            category: 'Mantenimiento',
            icon: <Eye className="w-6 h-6 text-yellow-300" />,
            title: 'Verifica las luces y señales',
            description: 'Asegúrate de que todas las luces funcionen correctamente para una buena visibilidad y comunicación con otros conductores.',
        },
        {
            category: 'Mantenimiento',
            icon: <Umbrella className="w-6 h-6 text-yellow-300" />,
            title: 'Revisa la presión de las llantas',
            description: 'Mantener la presión adecuada mejora la estabilidad y el consumo de combustible.',
        },
        {
            category: 'Mantenimiento',
            icon: <CloudRain className="w-6 h-6 text-yellow-300" />,
            title: 'Limpia los filtros de aire y combustible',
            description: 'Un motor limpio funciona mejor y consume menos combustible.',
        },
        {
            category: 'Mantenimiento',
            icon: <Heart className="w-6 h-6 text-yellow-300" />,
            title: 'Revisa el sistema de suspensión',
            description: 'Un buen sistema de suspensión mejora la comodidad y seguridad al conducir.',
        },
        // ⏰ Horario
        {
            category: 'Horario',
            icon: <Clock className="w-6 h-6 text-yellow-300" />,
            title: 'Evita las horas pico',
            description: 'Conducir en horarios de menor tráfico reduce el estrés y el riesgo de accidentes.',
        },
        {
            category: 'Horario',
            icon: <Activity className="w-6 h-6 text-yellow-300" />,
            title: 'Planifica tus rutas',
            description: 'Usa aplicaciones de navegación para evitar congestiones y encontrar rutas más seguras.',
        },
        {
            category: 'Horario',
            icon: <Info className="w-6 h-6 text-yellow-300" />,
            title: 'Conoce las horas de mayor siniestralidad',
            description: 'Evita conducir durante la noche o en condiciones climáticas adversas si no es necesario.',
        },
        {
            category: 'Horario',
            icon: <Users className="w-6 h-6 text-yellow-300" />,
            title: 'Coordina viajes compartidos',
            description: 'Viajar con otros reduce el número de vehículos en la vía y mejora la seguridad.',
        },
        {
            category: 'Horario',
            icon: <Umbrella className="w-6 h-6 text-yellow-300" />,
            title: 'Revisa el clima antes de salir',
            description: 'Conocer las condiciones climáticas te permite prepararte mejor y evitar sorpresas.',
        },
        // 🗓️ Planificación
        {
            category: 'Planificación',
            icon: <Activity className="w-6 h-6 text-yellow-300" />,
            title: 'Revisa el estado de la vía',
            description: 'Antes de salir, verifica si hay cierres o condiciones especiales en tu ruta.',
        },
        {
            category: 'Planificación',
            icon: <Info className="w-6 h-6 text-yellow-300" />,
            title: 'Lleva un kit de emergencia',
            description: 'Incluye triángulos, botiquín, linterna y herramientas básicas para imprevistos.',
        },
        {
            category: 'Planificación',
            icon: <Users className="w-6 h-6 text-yellow-300" />,
            title: 'Informa a alguien sobre tu ruta',
            description: 'Comparte tu itinerario con un familiar o amigo para mayor seguridad.',
        },
        {
            category: 'Planificación',
            icon: <Clock className="w-6 h-6 text-yellow-300" />,
            title: 'Sal con tiempo suficiente',
            description: 'Evita la prisa y conduce con calma para reducir el riesgo de accidentes.',
        },
        {
            category: 'Planificación',
            icon: <CloudRain className="w-6 h-6 text-yellow-300" />,
            title: 'Considera el clima en tu planificación',
            description: 'Si hay pronóstico de mal tiempo, ajusta tus planes y toma precauciones adicionales.',
        },
    ];

    const filteredTips = tips.filter(t => t.category === selectedCategory);

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto text-white">
                <h1 className="text-4xl md:text-5xl font-black text-center text-yellow-400 mb-12 drop-shadow-md">
                    Consejos para una Conducción Responsable
                </h1>

                {/* Filtro de categorías con diseño mejorado */}
                <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {[
                                { title: 'General', icon: Info },
                                { title: 'Lluvia', icon: CloudRain },
                                { title: 'Motociclistas', icon: Bike },
                                { title: 'Mantenimiento', icon: Zap },
                                { title: 'Horario ', icon: Clock },
                                { title: 'Planificación ', icon: Activity },
                            ].map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                    <button
                                        key={cat.title}
                                        onClick={() => setSelectedCategory(cat.title)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === cat.title
                                            ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-yellow-400'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="hidden sm:inline">{cat.title}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>


                {/* Grid de tarjetas */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredTips.map((tip, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-400/20 rounded-2xl p-6 group hover:shadow-2xl hover:scale-105 transform transition duration-500"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-yellow-500/10 p-3 rounded-full">{tip.icon}</div>
                                <span className="font-bold text-yellow-300 text-sm">{tip.category}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-2 group-hover:text-yellow-200 transition">
                                {tip.title}
                            </h3>
                            <p className="text-gray-300 text-sm">{tip.description}</p>
                        </div>
                    ))}
                </div>

                {/* Aplicación de Consejos Viales */}
                <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-6 sm:p-8 mt-16">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
                        ¿Por Qué Aplicar Estos Consejos?
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="text-center">
                            <div className="bg-yellow-400/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <ShieldCheck className="w-6 h-6 text-yellow-400" />
                            </div>
                            <h4 className="font-semibold text-white">Tu Seguridad</h4>
                            <p className="text-xs text-gray-300">Reduce el riesgo de accidentes graves en carretera.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-yellow-400/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <Users className="w-6 h-6 text-yellow-400" />
                            </div>
                            <h4 className="font-semibold text-white">Protege a Otros</h4>
                            <p className="text-xs text-gray-300">Conducción responsable también cuida peatones y pasajeros.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-yellow-400/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <BookOpen className="w-6 h-6 text-yellow-400" />
                            </div>
                            <h4 className="font-semibold text-white">Cumples la Ley</h4>
                            <p className="text-xs text-gray-300">Evitas comparendos y sanciones del Código Nacional de Tránsito.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-yellow-400/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                <Heart className="w-6 h-6 text-yellow-400" />
                            </div>
                            <h4 className="font-semibold text-white">Cultura Vial</h4>
                            <p className="text-xs text-gray-300">Con tu ejemplo fomentas respeto, empatía y conciencia ciudadana.</p>
                        </div>

                    </div>
                </div>


                {/* CTA final */}
                <div className="text-center mt-20">
                    <div className="inline-flex items-center px-8 py-4 bg-black text-yellow-400 rounded-full font-bold text-lg shadow-xl hover:scale-110 transition transform duration-300 cursor-pointer">
                        <Users className="w-5 h-5 mr-3" />
                        Comparte estos tips con otros
                    </div>
                </div>
            </div>
        </main>
    );
}
