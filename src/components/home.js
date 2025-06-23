import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Car, Lightbulb, FileText, BarChart3, ArrowRight, Shield } from 'lucide-react';

export default function HomePage() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        {
            title: 'Formación Responsable',
            description: 'Accede a contenido teórico completo sobre normas, señales y maniobras, adaptado a la normativa colombiana.',
            icon: Car,
            color: 'from-yellow-400 to-yellow-600',
            stats: '300+ Lecciones'
        },
        {
            title: 'Consejos Prácticos',
            description: 'Aplica recomendaciones claras y realistas para mejorar tu seguridad al conducir moto o carro en diferentes contextos.',
            icon: Lightbulb,
            color: 'from-amber-400 to-orange-500',
            stats: '100+ Tips'
        },
        {
            title: 'Autoevaluación Interactiva',
            description: 'Evalúa tu conocimiento con preguntas tipo test, recibe retroalimentación inmediata y mejora continuamente.',
            icon: FileText,
            color: 'from-yellow-300 to-yellow-500',
            stats: '100+ Preguntas'
        },
        {
            title: 'Estadísticas Visuales',
            description: 'Visualiza tu progreso, identifica puntos débiles y haz seguimiento a tus resultados de forma gráfica.',
            icon: BarChart3,
            color: 'from-yellow-500 to-amber-600',
            stats: 'Análisis Detallado'
        },
    ];

    return (
        <main className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                {/* Decorative Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto text-center">
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-6 text-sm font-medium text-yellow-400">
                            <Shield className="w-4 h-4" />
                            Educación Vial Certificada
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent leading-tight">
                            Bienvenido a{' '}
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                ViaSegura
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                            Conducir con responsabilidad no es solo una obligación, es un compromiso contigo, tu familia y quienes comparten la vía.
                            En <span className="text-yellow-400 font-semibold">ViaSegura</span> encontrarás las herramientas necesarias para formarte, evaluar tus conocimientos y adoptar hábitos de conducción segura.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <Link
                                to="/teoria"
                                className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center gap-2"
                            >
                                Comenzar Ahora
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                            Todo lo que necesitas para conducir seguro
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Herramientas integrales diseñadas para formar conductores responsables y seguros
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={feature.title}
                                    className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-left transition-all duration-500 ease-out hover:scale-[1.02] hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/10 transform ${isVisible
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-8 opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: `${400 + index * 150}ms`,
                                        transformOrigin: 'center bottom'
                                    }}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                                    {/* Icon with animated background */}
                                    <div className="relative mb-6">
                                        <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-sm scale-110`}></div>
                                        <div className="relative bg-gray-800 p-3 rounded-xl group-hover:bg-gray-750 transition-colors duration-300">
                                            <IconComponent className={`w-8 h-8 text-yellow-400 group-hover:scale-110 transition-all duration-300 ${hoveredCard === index ? 'animate-pulse' : ''}`} />
                                        </div>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-lg sm:text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                                                {feature.title}
                                            </h3>
                                            <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded-full group-hover:bg-gray-600 transition-colors duration-300">
                                                {feature.stats}
                                            </span>
                                        </div>

                                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Decorative corner accent */}
                                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                                        <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full`}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-yellow-400/30 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-yellow-600/5"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                ¿Listo para ser un conductor más seguro?
                            </h2>
                            <p className="text-gray-300 mb-8 text-lg">
                                Únete a los conductores que confían en ViaSegura para mejorar su seguridad vial
                            </p>
                            <Link
                                to="/teoria"
                                className="w-fit mx-auto bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center gap-2"
                            >
                                Empezar Mi Formación
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}