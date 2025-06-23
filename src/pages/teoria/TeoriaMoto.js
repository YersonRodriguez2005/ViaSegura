import { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Eye, Wrench, BookOpen, Clock, CheckCircle, XCircle, Users, MapPin } from 'lucide-react';
import conductorImg from '../../assets/conductor.jpg';
import libroImg from '../../assets/libro.webp';
import señalesImg from '../../assets/señales.jpg';
import posicionImg from '../../assets/posicion.webp';
import herramientasImg from '../../assets/herramientas.avif';
import documentosImg from '../../assets/documentos.jpg';

export default function TeoriaMoto() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const sections = [
        { id: 'normas', title: 'Normas Generales', icon: Shield },
        { id: 'senales', title: 'Señales de Tránsito', icon: AlertTriangle },
        { id: 'defensiva', title: 'Conducción Defensiva', icon: Eye },
        { id: 'mantenimiento', title: 'Mantenimiento', icon: Wrench },
        { id: 'licencias', title: 'Licencias y Documentos', icon: BookOpen },
        { id: 'infracciones', title: 'Infracciones Comunes', icon: XCircle }
    ];

    return (
        <main className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-6 text-sm font-medium text-yellow-400">
                            <Shield className="w-4 h-4" />
                            Teoría Completa para Motociclistas
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent leading-tight">
                            Teoría de{' '}
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                Motocicleta
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Domina todos los aspectos teóricos de la conducción de motocicletas en Colombia.
                            Desde normativas básicas hasta técnicas avanzadas de seguridad vial.
                        </p>

                        <div className="w-full max-w-5xl mx-auto mb-12">
                            <div className="relative bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl shadow-xl p-6 sm:p-10 text-center overflow-hidden">

                                {/* Halo luminoso detrás de la imagen */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-72 h-72 bg-yellow-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                                </div>

                                <img
                                    src={conductorImg}
                                    alt="Motociclista con equipo de protección"
                                    className="relative z-10 w-80 sm:w-96 h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 mx-auto"
                                />

                                <p className="relative z-10 mt-4 text-sm text-yellow-200 italic">
                                    Imagen referencial: seguridad vial en motocicleta, Colombia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {sections.map((section, index) => {
                            const IconComponent = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(index)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeSection === index
                                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-yellow-400'
                                        }`}
                                >
                                    <IconComponent className="w-4 h-4" />
                                    <span className="hidden sm:inline">{section.title}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Normas Generales */}
                    {activeSection === 0 && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="grid lg:grid-cols-2 gap-8 items-start">
                                <div>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
                                        <Shield className="w-8 h-8" />
                                        Normas Generales para Motociclistas
                                    </h2>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                        En Colombia, la conducción de motocicletas está regulada por el Código Nacional de Tránsito
                                        (Ley 769 de 2002 y sus modificaciones). Los motociclistas tienen derechos y deberes específicos
                                        que buscan garantizar la seguridad vial y proteger tanto a los conductores como a los peatones.
                                    </p>
                                </div>

                                <div className="w-full max-w-5xl mx-auto mb-12">
                                    <div className="relative bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl shadow-xl p-6 sm:p-10 text-center overflow-hidden">

                                        {/* Halo luminoso detrás de la imagen */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-62 h-62 bg-yellow-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                                        </div>

                                        <img
                                            src={libroImg}
                                            alt="Motociclista con equipo de protección"
                                            className="relative z-10 w-52 sm:w-64 h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 mx-auto"
                                        />

                                        <p className="relative z-10 mt-4 text-sm text-yellow-200 italic">
                                            Imagen referencial: libro codigo nacional de transito, Colombia.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* Equipamiento Obligatorio */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                                    <CheckCircle className="w-6 h-6" />
                                    Equipamiento Obligatorio
                                </h3>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <h4 className="font-bold text-yellow-300 mb-2">Casco Certificado</h4>
                                        <p className="text-gray-300 text-sm">Debe cumplir normas NTC 4533 o DOT. Obligatorio para conductor y acompañante, bien abrochado en todo momento.</p>
                                    </div>

                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <h4 className="font-bold text-yellow-300 mb-2">Prendas Reflectivas</h4>
                                        <p className="text-gray-300 text-sm">Chaleco o bandas reflectivas obligatorias entre 6:00 PM y 6:00 AM, o en condiciones de baja visibilidad.</p>
                                    </div>

                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <h4 className="font-bold text-yellow-300 mb-2">Luces</h4>
                                        <p className="text-gray-300 text-sm">Luz delantera encendida las 24 horas. Luz trasera y direccionales en perfecto funcionamiento.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Restricciones por Ciudades */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                                    <MapPin className="w-6 h-6" />
                                    Restricciones Especiales por Ciudades
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <h4 className="font-bold text-yellow-300 mb-3">Bogotá</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Parrillero del mismo género</li>
                                            <li>• Restricción nocturna (11:00 PM - 4:00 AM)</li>
                                            <li>• Prohibición en TransMilenio y ciclorrutas</li>
                                            <li>• Pico y placa según último dígito</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <h4 className="font-bold text-yellow-300 mb-3">Medellín</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Parrillero del mismo género en ciertas zonas</li>
                                            <li>• Restricción en vías del Metro</li>
                                            <li>• Zonas de alta restricción en el centro</li>
                                            <li>• Controles especiales en puentes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Documentos Obligatorios */}
                            <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Documentos que Siempre Debes Portar</h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="text-center">
                                        <div className="bg-yellow-400/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                            <BookOpen className="w-6 h-6 text-yellow-400" />
                                        </div>
                                        <h4 className="font-semibold text-white">Licencia A1/A2</h4>
                                        <p className="text-xs text-gray-300">Vigente y según cilindraje</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-yellow-400/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                            <Shield className="w-6 h-6 text-yellow-400" />
                                        </div>
                                        <h4 className="font-semibold text-white">SOAT</h4>
                                        <p className="text-xs text-gray-300">Seguro obligatorio vigente</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-yellow-400/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                            <Users className="w-6 h-6 text-yellow-400" />
                                        </div>
                                        <h4 className="font-semibold text-white">Cédula</h4>
                                        <p className="text-xs text-gray-300">Documento de identidad</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-yellow-400/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                            <Wrench className="w-6 h-6 text-yellow-400" />
                                        </div>
                                        <h4 className="font-semibold text-white">Tecno-mecánica</h4>
                                        <p className="text-xs text-gray-300">Revisión vigente</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Señales de Tránsito */}
                    {activeSection === 1 && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-3">
                                    <AlertTriangle className="w-8 h-8" />
                                    Señales de Tránsito
                                </h2>
                                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                                    Las señales de tránsito son el lenguaje universal de la vía. Conocerlas y respetarlas
                                    es fundamental para la seguridad de todos los actores viales.
                                </p>
                            </div>

                            <div className="w-full max-w-5xl mx-auto mb-12">
                                <div className="relative bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl shadow-xl p-6 sm:p-10 text-center overflow-hidden">

                                    {/* Halo luminoso detrás de la imagen */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-72 h-72 bg-yellow-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                                    </div>

                                    <img
                                        src={señalesImg}
                                        alt="Motociclista con equipo de protección"
                                        className="relative z-10 w-80 sm:w-96 h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 mx-auto"
                                    />

                                    <p className="relative z-10 mt-4 text-sm text-yellow-200 italic">
                                        Imagen referencial: señales de transito, Colombia.
                                    </p>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Señales Reglamentarias */}
                                <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-red-500/20 rounded-full p-2">
                                            <XCircle className="w-6 h-6 text-red-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-red-400">Señales Reglamentarias</h3>
                                    </div>
                                    <p className="text-gray-300 mb-4">Indican normas obligatorias que deben cumplirse. Su desobediencia constituye falta.</p>

                                    <div className="space-y-3">
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-red-300">PARE</h4>
                                            <p className="text-sm text-gray-400">Detención completa obligatoria</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-red-300">Ceda el Paso</h4>
                                            <p className="text-sm text-gray-400">Prioridad a otros vehículos</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-red-300">Prohibido Adelantar</h4>
                                            <p className="text-sm text-gray-400">Zona de no rebase</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-red-300">Velocidad Máxima</h4>
                                            <p className="text-sm text-gray-400">Límite de velocidad permitido</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Señales Preventivas */}
                                <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border border-yellow-500/30 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-yellow-500/20 rounded-full p-2">
                                            <AlertTriangle className="w-6 h-6 text-yellow-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-yellow-400">Señales Preventivas</h3>
                                    </div>
                                    <p className="text-gray-300 mb-4">Alertan sobre posibles peligros en la vía. Permiten tomar precauciones.</p>

                                    <div className="space-y-3">
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-yellow-300">Curva Peligrosa</h4>
                                            <p className="text-sm text-gray-400">Reducir velocidad en curvas</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-yellow-300">Pendiente Peligrosa</h4>
                                            <p className="text-sm text-gray-400">Subida o bajada pronunciada</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-yellow-300">Cruce de Peatones</h4>
                                            <p className="text-sm text-gray-400">Zona de alto tráfico peatonal</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-yellow-300">Derrumbe</h4>
                                            <p className="text-sm text-gray-400">Posible caída de rocas</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Señales Informativas */}
                                <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-blue-500/20 rounded-full p-2">
                                            <MapPin className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-blue-400">Señales Informativas</h3>
                                    </div>
                                    <p className="text-gray-300 mb-4">Orientan sobre rutas, destinos y servicios disponibles en la vía.</p>

                                    <div className="space-y-3">
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-blue-300">Destinos</h4>
                                            <p className="text-sm text-gray-400">Ciudades y direcciones</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-blue-300">Servicios</h4>
                                            <p className="text-sm text-gray-400">Gasolineras, hospitales, etc.</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-blue-300">Kilómetros</h4>
                                            <p className="text-sm text-gray-400">Distancias a destinos</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-blue-300">Rutas Alternas</h4>
                                            <p className="text-sm text-gray-400">Vías opcionales</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recordatorio Legal */}
                            <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Shield className="w-6 h-6 text-yellow-400" />
                                    <h3 className="text-xl font-bold text-yellow-400">Recordatorio Legal</h3>
                                </div>
                                <p className="text-gray-300 text-lg font-medium">
                                    El desconocimiento de las señales de tránsito NO exime de su cumplimiento.
                                    Es responsabilidad de cada conductor conocer y respetar toda la señalización vial.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Conducción Defensiva */}
                    {activeSection === 2 && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-3">
                                    <Eye className="w-8 h-8" />
                                    Técnicas de Conducción Defensiva
                                </h2>
                                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                                    La conducción defensiva es una actitud preventiva que anticipa situaciones de riesgo
                                    y minimiza las posibilidades de accidentes.
                                </p>
                            </div>

                            <div className="relative bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl shadow-xl p-6 sm:p-10 text-center overflow-hidden">

                                {/* Halo luminoso detrás de la imagen */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-72 h-72 bg-yellow-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                                </div>

                                <img
                                    src={posicionImg}
                                    alt="Motociclista con equipo de protección"
                                    className="relative z-10 w-80 sm:w-96 h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 mx-auto"
                                />

                                <p className="relative z-10 mt-4 text-sm text-yellow-200 italic">
                                    Imagen referencial: posicion correcta del conductor, Colombia.
                                </p>
                            </div>

                            {/* Principios Fundamentales */}
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">Principios Fundamentales</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-yellow-400/20 rounded-full p-2 mt-1">
                                                <Eye className="w-4 h-4 text-yellow-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white">Visibilidad Constante</h4>
                                                <p className="text-gray-300 text-sm">Mantente visible y visible. Usa ropa clara, luces y posiciónate estratégicamente.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="bg-yellow-400/20 rounded-full p-2 mt-1">
                                                <Clock className="w-4 h-4 text-yellow-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white">Anticipación</h4>
                                                <p className="text-gray-300 text-sm">Predice las acciones de otros conductores y prepárate para reaccionar.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="bg-yellow-400/20 rounded-full p-2 mt-1">
                                                <Shield className="w-4 h-4 text-yellow-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white">Espacio de Seguridad</h4>
                                                <p className="text-gray-300 text-sm">Mantén distancias adecuadas en todos los sentidos: adelante, atrás y a los lados.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">Posición de Manejo</h3>
                                    <div className="space-y-4">
                                        <div className="bg-gray-800/50 rounded-lg p-4">
                                            <h4 className="font-semibold text-white mb-2">Postura Corporal</h4>
                                            <ul className="text-gray-300 text-sm space-y-1">
                                                <li>• Espalda recta, ligeramente inclinada hacia adelante</li>
                                                <li>• Brazos relajados con ligera flexión</li>
                                                <li>• Ambas manos en el manubrio</li>
                                                <li>• Pies sobre los posapiés</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-4">
                                            <h4 className="font-semibold text-white mb-2">Control Visual</h4>
                                            <ul className="text-gray-300 text-sm space-y-1">
                                                <li>• Mirada hacia adelante, no al suelo</li>
                                                <li>• Uso constante de espejos</li>
                                                <li>• Revisión de puntos ciegos</li>
                                                <li>• Observación periférica activa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Técnicas Específicas */}
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-yellow-400 mb-4">Frenado Seguro</h3>
                                    <div className="space-y-3">
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-yellow-300 text-sm">Frenado Progresivo</h4>
                                            <p className="text-gray-400 text-xs">70% freno delantero, 30% trasero</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-yellow-300 text-sm">Evitar Bloqueos</h4>
                                            <p className="text-gray-400 text-xs">Presión gradual y controlada</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-yellow-300 text-sm">Distancia de Frenado</h4>
                                            <p className="text-gray-400 text-xs">Mínimo 3 segundos de distancia</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-yellow-400 mb-4">Toma de Curvas</h3>
                                    <div className="space-y-3">
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-yellow-300 text-sm">Reducir Velocidad</h4>
                                            <p className="text-gray-400 text-xs">Antes de entrar a la curva</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-yellow-300 text-sm">Inclinación Gradual</h4>
                                            <p className="text-gray-400 text-xs">Moto y cuerpo en armonía</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-yellow-300 text-sm">Acelerar en Salida</h4>
                                            <p className="text-gray-400 text-xs">Recuperar velocidad progresivamente</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-yellow-400 mb-4">Evitar Puntos Ciegos</h3>
                                    <div className="space-y-3">
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-yellow-300 text-sm">Posición Estratégica</h4>
                                            <p className="text-gray-400 text-xs">Mantenerse visible siempre</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-yellow-300 text-sm">Cambio de Carril</h4>
                                            <p className="text-gray-400 text-xs">Señalizar, verificar, ejecutar</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-3">
                                            <h4 className="font-semibold text-yellow-300 text-sm">Adelantamientos</h4>
                                            <p className="text-gray-400 text-xs">Solo cuando sea seguro y legal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Condiciones Especiales */}
                            <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Conducción en Condiciones Especiales</h3>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="bg-gray-800/30 rounded-xl p-4">
                                        <h4 className="font-bold text-white mb-2">🌧️ Lluvia</h4>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            <li>• Reducir velocidad 20-30%</li>
                                            <li>• Aumentar distancia de frenado</li>
                                            <li>• Evitar frenadas bruscas</li>
                                            <li>• Usar ropa impermeable</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-800/30 rounded-xl p-4">
                                        <h4 className="font-bold text-white mb-2">🌙 Noche</h4>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            <li>• Prendas reflectivas obligatorias</li>
                                            <li>• Verificar luces antes de salir</li>
                                            <li>• Reducir velocidad</li>
                                            <li>• Mayor distancia de seguridad</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-800/30 rounded-xl p-4">
                                        <h4 className="font-bold text-white mb-2">🌫️ Niebla</h4>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            <li>• Velocidad muy reducida</li>
                                            <li>• Luces bajas encendidas</li>
                                            <li>• Seguir líneas del pavimento</li>
                                            <li>• Evitar adelantamientos</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-800/30 rounded-xl p-4">
                                        <h4 className="font-bold text-white mb-2">🚧 Tráfico Pesado</h4>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            <li>• Paciencia y tranquilidad</li>
                                            <li>• No zigzaguear entre carros</li>
                                            <li>• Respetar carriles</li>
                                            <li>• Mantener distancias</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mantenimiento */}
                    {activeSection === 3 && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-3">
                                    <Wrench className="w-8 h-8" />
                                    Mantenimiento Preventivo
                                </h2>
                                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                                    Un mantenimiento adecuado no solo prolonga la vida de tu motocicleta,
                                    sino que garantiza tu seguridad en cada viaje.
                                </p>
                            </div>

                            <div className="relative bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl shadow-xl p-6 sm:p-10 text-center overflow-hidden">

                                {/* Halo luminoso detrás de la imagen */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-72 h-72 bg-yellow-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                                </div>

                                <img
                                    src={herramientasImg}
                                    alt="Motociclista con equipo de protección"
                                    className="relative z-10 w-80 sm:w-96 h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 mx-auto"
                                />

                                <p className="relative z-10 mt-4 text-sm text-yellow-200 italic">
                                    Imagen referencial: herramientas para mantenimiento de motocicleta, Colombia.
                                </p>
                            </div>

                            {/* Revisión Pre-operacional */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Revisión Pre-operacional Diaria</h3>
                                <p className="text-gray-300 mb-6">Antes de cada viaje, dedica 5 minutos a esta revisión que puede salvarte la vida:</p>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="bg-yellow-400/20 rounded-full p-1">
                                                <Eye className="w-4 h-4 text-yellow-400" />
                                            </div>
                                            <h4 className="font-bold text-yellow-300">Luces</h4>
                                        </div>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            <li>✓ Luz delantera funcionando</li>
                                            <li>✓ Luz trasera encendida</li>
                                            <li>✓ Direccionales operativas</li>
                                            <li>✓ Luz de freno activa</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="bg-yellow-400/20 rounded-full p-1">
                                                <Shield className="w-4 h-4 text-yellow-400" />
                                            </div>
                                            <h4 className="font-bold text-yellow-300">Frenos</h4>
                                        </div>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            <li>✓ Palanca de freno firme</li>
                                            <li>✓ Pedal de freno trasero</li>
                                            <li>✓ Sin ruidos extraños</li>
                                            <li>✓ Recorrido adecuado</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="bg-yellow-400/20 rounded-full p-1">
                                                <Wrench className="w-4 h-4 text-yellow-400" />
                                            </div>
                                            <h4 className="font-bold text-yellow-300">Llantas</h4>
                                        </div>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            <li>✓ Presión correcta</li>
                                            <li>✓ Desgaste uniforme</li>
                                            <li>✓ Sin objetos incrustados</li>
                                            <li>✓ Profundidad de labrado</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="bg-yellow-400/20 rounded-full p-1">
                                                <Clock className="w-4 h-4 text-yellow-400" />
                                            </div>
                                            <h4 className="font-bold text-yellow-300">Cadena</h4>
                                        </div>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            <li>✓ Tensión apropiada</li>
                                            <li>✓ Lubricación visible</li>
                                            <li>✓ Sin eslabones rígidos</li>
                                            <li>✓ Desgaste uniforme</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="bg-yellow-400/20 rounded-full p-1">
                                                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                                            </div>
                                            <h4 className="font-bold text-yellow-300">Niveles</h4>
                                        </div>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            <li>✓ Aceite del motor</li>
                                            <li>✓ Líquido de frenos</li>
                                            <li>✓ Refrigerante (si aplica)</li>
                                            <li>✓ Combustible suficiente</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="bg-yellow-400/20 rounded-full p-1">
                                                <Users className="w-4 h-4 text-yellow-400" />
                                            </div>
                                            <h4 className="font-bold text-yellow-300">General</h4>
                                        </div>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            <li>✓ Espejos limpios y ajustados</li>
                                            <li>✓ Manubrio sin juego</li>
                                            <li>✓ Pernos principales ajustados</li>
                                            <li>✓ Sin fugas visibles</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Mantenimiento Periódico */}
                            <div className="grid lg:grid-cols-2 gap-8">
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">Mantenimiento Semanal</h3>
                                    <div className="space-y-4">
                                        <div className="bg-gray-800/50 rounded-lg p-4">
                                            <h4 className="font-semibold text-yellow-300 mb-2">Limpieza General</h4>
                                            <p className="text-gray-300 text-sm mb-2">Lavar la moto y revisar por daños visibles</p>
                                            <ul className="text-gray-400 text-xs space-y-1">
                                                <li>• Eliminar suciedad y grasa acumulada</li>
                                                <li>• Revisar por grietas o desgaste</li>
                                                <li>• Limpiar filtro de aire si es necesario</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-800/50 rounded-lg p-4">
                                            <h4 className="font-semibold text-yellow-300 mb-2">Lubricación de Cadena</h4>
                                            <p className="text-gray-300 text-sm mb-2">Aplicar lubricante específico para cadenas</p>
                                            <ul className="text-gray-400 text-xs space-y-1">
                                                <li>• Limpiar cadena antes de lubricar</li>
                                                <li>• Aplicar en eslabón por eslabón</li>
                                                <li>• Girar rueda para distribución uniforme</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">Mantenimiento Mensual</h3>
                                    <div className="space-y-4">
                                        <div className="bg-gray-800/50 rounded-lg p-4">
                                            <h4 className="font-semibold text-yellow-300 mb-2">Cambio de Aceite</h4>
                                            <p className="text-gray-300 text-sm mb-2">Según especificaciones del fabricante</p>
                                            <ul className="text-gray-400 text-xs space-y-1">
                                                <li>• Verificar nivel y color del aceite</li>
                                                <li>• Cambiar filtro de aceite</li>
                                                <li>• Usar aceite de grado correcto</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-800/50 rounded-lg p-4">
                                            <h4 className="font-semibold text-yellow-300 mb-2">Revisión de Frenos</h4>
                                            <p className="text-gray-300 text-sm mb-2">Pastillas, discos y líquido de frenos</p>
                                            <ul className="text-gray-400 text-xs space-y-1">
                                                <li>• Medir grosor de pastillas</li>
                                                <li>• Revisar nivel de líquido</li>
                                                <li>• Verificar que no haya fugas</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Señales de Alerta */}
                            <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-500/30 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6" />
                                    Señales de Alerta - Revisar Inmediatamente
                                </h3>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-red-900/10 rounded-lg p-4">
                                        <h4 className="font-bold text-red-300 mb-2">🔊 Ruidos Extraños</h4>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            <li>• Chirridos al frenar</li>
                                            <li>• Golpeteos en el motor</li>
                                            <li>• Ruidos en la cadena</li>
                                        </ul>
                                    </div>

                                    <div className="bg-red-900/10 rounded-lg p-4">
                                        <h4 className="font-bold text-red-300 mb-2">🌡️ Sobrecalentamiento</h4>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            <li>• Temperatura alta</li>
                                            <li>• Vapor del radiador</li>
                                            <li>• Pérdida de potencia</li>
                                        </ul>
                                    </div>

                                    <div className="bg-red-900/10 rounded-lg p-4">
                                        <h4 className="font-bold text-red-300 mb-2">⚠️ Vibraciones</h4>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            <li>• Manubrio tembloroso</li>
                                            <li>• Vibraciones excesivas</li>
                                            <li>• Inestabilidad en curvas</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Licencias y Documentos */}
                    {activeSection === 4 && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-3">
                                    <BookOpen className="w-8 h-8" />
                                    Licencias y Documentación
                                </h2>
                                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                                    Conoce los requisitos, categorías y procedimientos para obtener y mantener
                                    tu licencia de conducción en Colombia.
                                </p>
                            </div>

                            <div className="relative bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl shadow-xl p-6 sm:p-10 text-center overflow-hidden">

                                {/* Halo luminoso detrás de la imagen */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-72 h-72 bg-yellow-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                                </div>

                                <img
                                    src={documentosImg}
                                    alt="Motociclista con equipo de protección"
                                    className="relative z-10 w-80 sm:w-96 h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 mx-auto"
                                />

                                <p className="relative z-10 mt-4 text-sm text-yellow-200 italic">
                                    Imagen referencial: documentos oficiales que debe portar el conductor, Colombia.
                                </p>
                            </div>

                            {/* Categorías de Licencias */}
                            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold text-yellow-400 mb-6">Categoría A1</h3>
                                    <div className="space-y-4">
                                        <div className="bg-yellow-400/10 rounded-lg p-4 border border-yellow-400/30">
                                            <h4 className="font-bold text-yellow-300 mb-2">Cilindraje Permitido</h4>
                                            <p className="text-white text-lg font-semibold">Hasta 125 cc</p>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-white">Requisitos:</h4>
                                            <ul className="text-gray-300 text-sm space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                    <span>Edad mínima: 16 años</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                    <span>Curso de conducción (20 horas teóricas, 20 prácticas)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                    <span>Examen médico y psicológico</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                    <span>Examen teórico-práctico</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                    <span>Autorización escrita de padres (menores de edad)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold text-yellow-400 mb-6">Categoría A2</h3>
                                    <div className="space-y-4">
                                        <div className="bg-yellow-400/10 rounded-lg p-4 border border-yellow-400/30">
                                            <h4 className="font-bold text-yellow-300 mb-2">Cilindraje Permitido</h4>
                                            <p className="text-white text-lg font-semibold">Más de 125 cc</p>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-white">Requisitos:</h4>
                                            <ul className="text-gray-300 text-sm space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                    <span>Edad mínima: 18 años</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                    <span>Licencia A1 con mínimo 2 años de experiencia</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                    <span>Curso de recategorización</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                    <span>Examen médico actualizado</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                    <span>Examen práctico en moto de mayor cilindraje</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Documentos Obligatorios */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Documentos Obligatorios</h3>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="text-center">
                                        <div className="bg-yellow-400/20 rounded-2xl p-6 mb-4">
                                            <BookOpen className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                                            <h4 className="font-bold text-white">Licencia de Conducción</h4>
                                        </div>
                                        <div className="text-left bg-gray-800/50 rounded-lg p-3">
                                            <p className="text-gray-300 text-sm mb-2">Debe estar:</p>
                                            <ul className="text-gray-400 text-xs space-y-1">
                                                <li>✓ Vigente</li>
                                                <li>✓ Categoría correcta</li>
                                                <li>✓ Sin suspensiones</li>
                                                <li>✓ Datos actualizados</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="bg-yellow-400/20 rounded-2xl p-6 mb-4">
                                            <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                                            <h4 className="font-bold text-white">SOAT</h4>
                                        </div>
                                        <div className="text-left bg-gray-800/50 rounded-lg p-3">
                                            <p className="text-gray-300 text-sm mb-2">Seguro obligatorio:</p>
                                            <ul className="text-gray-400 text-xs space-y-1">
                                                <li>✓ Vigencia mínima 1 año</li>
                                                <li>✓ Placa correcta</li>
                                                <li>✓ Cobertura completa</li>
                                                <li>✓ Original o copia</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="bg-yellow-400/20 rounded-2xl p-6 mb-4">
                                            <Users className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                                            <h4 className="font-bold text-white">Tarjeta de Propiedad</h4>
                                        </div>
                                        <div className="text-left bg-gray-800/50 rounded-lg p-3">
                                            <p className="text-gray-300 text-sm mb-2">Acredita propiedad:</p>
                                            <ul className="text-gray-400 text-xs space-y-1">
                                                <li>✓ Datos del propietario</li>
                                                <li>✓ Características del vehículo</li>
                                                <li>✓ Sin prendas ni embargo</li>
                                                <li>✓ Traspaso al día</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="bg-yellow-400/20 rounded-2xl p-6 mb-4">
                                            <Wrench className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                                            <h4 className="font-bold text-white">Revisión Técnico-Mecánica</h4>
                                        </div>
                                        <div className="text-left bg-gray-800/50 rounded-lg p-3">
                                            <p className="text-gray-300 text-sm mb-2">Certificado técnico:</p>
                                            <ul className="text-gray-400 text-xs space-y-1">
                                                <li>✓ Vigencia 1 año</li>
                                                <li>✓ CDA autorizado</li>
                                                <li>✓ Aprobación de todos los sistemas</li>
                                                <li>✓ Original o copia</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Consecuencias de No Cumplir */}
                            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6" />
                                    Consecuencias de No Cumplir con la Documentación
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Circular sin los documentos obligatorios puede acarrear graves consecuencias legales y económicas:
                                </p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>Multas económicas significativas</li>
                                    <li>Inmovilización del vehículo</li>
                                    <li>Posibilidad de sanciones penales</li>
                                    <li>Problemas en caso de accidentes</li>
                                    <li>Impedimentos para realizar trámites futuros</li>
                                </ul>
                                <p className="mt-4 text-gray-400 italic">
                                    Recuerda que la documentación no solo es un requisito legal, sino una garantía de tu seguridad y la de los demás en la vía.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* infracciones comunes */}
                    {activeSection === 5 && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-3">
                                    <AlertTriangle className="w-8 h-8" />
                                    Infracciones Comunes
                                </h2>
                                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                                    Conoce las infracciones más frecuentes y sus consecuencias para evitar sanciones.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Principales Infracciones</h3>
                                <ul className="list-disc pl-6 text-gray-300 space-y-4">
                                    <li>
                                        <span className="font-semibold">Exceso de velocidad:</span> Superar los límites establecidos puede resultar en multas severas y pérdida de puntos.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Conducir sin casco:</span> No usar el casco reglamentario es una infracción grave que pone en riesgo tu vida.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Circular sin SOAT:</span> La falta del Seguro Obligatorio de Accidentes de Tránsito (SOAT) conlleva sanciones económicas y la inmovilización del vehículo.
                                    </li>
                                    <li>
                                        <span className="font-semibold">No respetar señales de tránsito:</span> Ignorar semáforos, señales de pare o ceda el paso puede resultar en accidentes y multas.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Conducir bajo los efectos del alcohol:</span> Esta infracción no solo es peligrosa, sino que también puede llevar a sanciones penales.
                                    </li>
                                </ul>
                            </div>

                            {/* Consecuencias */}
                            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6" />
                                    Consecuencias de las Infracciones
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Las infracciones de tránsito no solo afectan tu bolsillo, sino que también ponen en riesgo tu seguridad y la de los demás. Algunas consecuencias incluyen:
                                </p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>Multas económicas que pueden ser significativas</li>
                                    <li>Inmovilización del vehículo</li>
                                    <li>Pérdida de puntos en la licencia de conducción</li>
                                    <li>Posibilidad de sanciones penales, especialmente en casos de conducción bajo los efectos del alcohol</li>
                                    <li>Problemas legales que pueden complicar futuros trámites</li>
                                </ul>
                                <p className="mt-4 text-gray-400 italic">
                                    Recuerda que respetar las normas de tránsito no solo es una obligación legal, sino una responsabilidad hacia ti mismo y los demás usuarios de la vía.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Cierre motivacional */}
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md shadow-md mt-8">
                        <p className="text-gray-800 font-medium">
                            Conocer y cumplir con las normativas de tránsito y la documentación requerida es esencial para ser un motociclista responsable. ¡Sé un ejemplo en la vía!
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};