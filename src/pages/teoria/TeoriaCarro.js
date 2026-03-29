import { useState, useEffect } from "react";
import {
  Shield,
  AlertTriangle,
  Eye,
  Wrench,
  BookOpen,
  Clock,
  CheckCircle,
  XCircle,
  Users,
  MapPin,
  Car,
  Gauge,
  Navigation,
  FileText,
} from "lucide-react";

import carroHeroImg from "../../assets/conductorCarro.avif";
import libroImg from "../../assets/libro.webp";
import señalesImg from "../../assets/señales.jpg";
import volantePosImg from "../../assets/volante.png";
import herramientasImg from "../../assets/kitCarro.jpg";
import documentosImg from "../../assets/documentos.jpg";

export default function TeoriaCarro() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    { id: "normas", title: "Normas Generales", icon: Shield },
    { id: "senales", title: "Señales de Tránsito", icon: AlertTriangle },
    { id: "defensiva", title: "Conducción Defensiva", icon: Eye },
    { id: "mantenimiento", title: "Mantenimiento", icon: Wrench },
    { id: "licencias", title: "Licencias y Documentos", icon: BookOpen },
    { id: "infracciones", title: "Infracciones Comunes", icon: XCircle },
  ];

  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen">
      {/* ══════════════════════════════════════════════
                HERO SECTION
            ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div
            className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-6 text-sm font-medium text-yellow-400">
              <Car className="w-4 h-4" />
              Teoría Completa para Conductores de Automóvil
            </div>

            {/* Título principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent leading-tight">
              Teoría de{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Automóvil
              </span>
            </h1>

            {/* Introducción */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Prepárate para ser un conductor responsable en Colombia. Aquí
              encontrarás todo el conocimiento teórico necesario: normativas del
              Código Nacional de Tránsito, señales viales, técnicas de
              conducción defensiva, mantenimiento básico y documentación
              obligatoria para circular legalmente.
            </p>

            {/* Tarjetas de datos rápidos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
              {[
                { icon: Shield, label: "6 Módulos", sub: "de teoría completa" },
                {
                  icon: BookOpen,
                  label: "Ley 769 / 2002",
                  sub: "Código de Tránsito",
                },
                { icon: Car, label: "Categoría B", sub: "Automóviles < 3.5 t" },
                {
                  icon: CheckCircle,
                  label: "100% Colombia",
                  sub: "Normativa vigente",
                },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="bg-gray-800/60 border border-gray-700 rounded-xl p-3 text-center"
                >
                  <Icon className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                  <p className="text-white text-sm font-semibold">{label}</p>
                  <p className="text-gray-400 text-xs">{sub}</p>
                </div>
              ))}
            </div>

            {/* ── IMAGEN HERO ── */}
            <div className="w-full max-w-5xl mx-auto mb-12">
              <div className="relative bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl shadow-xl p-6 sm:p-10 text-center overflow-hidden">
                {/* Halo */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-72 h-72 bg-yellow-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                </div>
                <div className="relative z-10 w-80 sm:w-96 h-56 bg-gray-700/50 border-2 border-dashed border-yellow-400/40 rounded-xl flex flex-col items-center justify-center mx-auto mb-4">
                  <Car className="w-16 h-16 text-yellow-400/50 mb-2" />
                  <p className="text-yellow-400/60 text-sm font-medium">
                    <img
                      src={carroHeroImg}
                      alt="Conductor de automovil"
                      className="relative z-10 w-80 sm:w-96 h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 mx-auto"
                    />
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Conductor/a al volante — src=&#123;carroHeroImg&#125;
                  </p>
                </div>

                <p className="relative z-10 mt-2 text-sm text-yellow-200 italic">
                  Imagen referencial: seguridad vial en automóvil, Colombia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
                NAVEGACIÓN DE SECCIONES
            ══════════════════════════════════════════════ */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === index
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-yellow-400"
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

      {/* ══════════════════════════════════════════════
                CONTENIDO DE SECCIONES
            ══════════════════════════════════════════════ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* ─────────────────────────────────────────
                        SECCIÓN 0 — NORMAS GENERALES
                    ───────────────────────────────────────── */}
          {activeSection === 0 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    Normas Generales para Conductores
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    En Colombia, la conducción de automóviles está regulada por
                    el Código Nacional de Tránsito (Ley 769 de 2002 y sus
                    modificaciones). Todo conductor debe conocer y respetar
                    estas normas para garantizar la seguridad vial propia y de
                    los demás usuarios de la vía.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    La categoría de licencia para automóviles particulares es la{" "}
                    <strong className="text-yellow-400">Categoría B</strong>,
                    habilitando la conducción de vehículos de hasta 3.500 kg de
                    peso bruto vehicular.
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
                      Imagen referencial: libro codigo nacional de transito,
                      Colombia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Equipamiento Obligatorio */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Equipamiento Obligatorio en el Vehículo
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      titulo: "Cinturón de Seguridad",
                      desc: "Obligatorio para conductor y todos los pasajeros en todo momento. Las sillas infantiles son obligatorias para menores de 10 años o menos de 36 kg.",
                    },
                    {
                      titulo: "Kit de Carretera",
                      desc: "Triángulos de señalización (2 unidades), botiquín de primeros auxilios, extintor y linterna. Deben estar en buen estado.",
                    },
                    {
                      titulo: "Luces Reglamentarias",
                      desc: "Faros delanteros, luces traseras, direccionales y de freno en perfecto funcionamiento. Luces de posición y retromarcha operativas.",
                    },
                    {
                      titulo: "Llantas en Buen Estado",
                      desc: "Profundidad mínima de labrado de 1,6 mm. Presión correcta según manual del fabricante. Sin deformaciones ni cortes.",
                    },
                    {
                      titulo: "Bocina Homologada",
                      desc: "De sonido reglamentario, sin uso de bocinas de aire comprimido o altavoces no homologados.",
                    },
                    {
                      titulo: "Espejos Retrovisores",
                      desc: "Espejo interior y dos espejos exteriores en óptimas condiciones. Sin daños que distorsionen la visión.",
                    },
                  ].map(({ titulo, desc }) => (
                    <div
                      key={titulo}
                      className="bg-gray-800/50 rounded-xl p-4 border border-gray-700"
                    >
                      <h4 className="font-bold text-yellow-300 mb-2">
                        {titulo}
                      </h4>
                      <p className="text-gray-300 text-sm">{desc}</p>
                    </div>
                  ))}
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
                      <li>• Pico y Placa según último dígito de la placa</li>
                      <li>
                        • Pico y Placa Ambiental en alerta amarilla/naranja/roja
                      </li>
                      <li>
                        • Prohibición de circulación en zonas de TransMilenio
                      </li>
                      <li>• Límite de velocidad 50 km/h en vías arteriales</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <h4 className="font-bold text-yellow-300 mb-3">Medellín</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Pico y Placa por números de placa par/impar</li>
                      <li>• Restricción en el centro histórico</li>
                      <li>• Zonas de cero emisiones en el centro</li>
                      <li>• Control especial en vías del Metro Cable</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <h4 className="font-bold text-yellow-300 mb-3">Cali</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Pico y Placa en horas pico (6-9 AM / 5-8 PM)</li>
                      <li>• Restricción en corredores del MIO</li>
                      <li>• Límite 30 km/h en zonas escolares</li>
                      <li>• Control de emisiones en zona industrial</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <h4 className="font-bold text-yellow-300 mb-3">
                      Otras ciudades
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>
                        • Cada municipio puede establecer sus propias
                        restricciones
                      </li>
                      <li>• Consultar la Secretaría de Tránsito local</li>
                      <li>• Respetar señalización temporal en obras</li>
                      <li>• Atenerse a restricciones en eventos públicos</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Documentos que siempre debes portar */}
              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  Documentos que Siempre Debes Portar
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      icon: BookOpen,
                      titulo: "Licencia Cat. B",
                      sub: "Vigente y sin suspensiones",
                    },
                    {
                      icon: Shield,
                      titulo: "SOAT",
                      sub: "Seguro obligatorio vigente",
                    },
                    {
                      icon: FileText,
                      titulo: "Tarjeta de Propiedad",
                      sub: "Original o copia autenticada",
                    },
                    {
                      icon: Wrench,
                      titulo: "Revisión Técnico-Mecánica",
                      sub: "RTM vigente del CDA",
                    },
                  ].map(({ icon: Icon, titulo, sub }) => (
                    <div key={titulo} className="text-center">
                      <div className="bg-yellow-400/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <h4 className="font-semibold text-white">{titulo}</h4>
                      <p className="text-xs text-gray-300">{sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────
                        SECCIÓN 1 — SEÑALES DE TRÁNSITO
                    ───────────────────────────────────────── */}
          {activeSection === 1 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-3">
                  <AlertTriangle className="w-8 h-8" />
                  Señales de Tránsito
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Las señales de tránsito son el lenguaje universal de la vía.
                  Reconocerlas y obedecerlas correctamente es obligatorio para
                  todos los conductores en Colombia.
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

              {/* Tipos de señales */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Reglamentarias */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-2xl p-6">
                  <div className="bg-red-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <XCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">
                    Señales Reglamentarias
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    De fondo blanco con orla roja. Indican normas de obligatorio
                    cumplimiento.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0"></span>{" "}
                      Señal de PARE (STOP)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0"></span>{" "}
                      Ceda el paso
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0"></span>{" "}
                      No girar a la izquierda/derecha
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0"></span>{" "}
                      Límites de velocidad (30, 50, 60, 80 km/h)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0"></span>{" "}
                      Prohibido adelantar
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0"></span>{" "}
                      Sentido único de circulación
                    </li>
                  </ul>
                </div>

                {/* Preventivas */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-500/30 rounded-2xl p-6">
                  <div className="bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">
                    Señales Preventivas
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    De fondo amarillo con forma de rombo. Advierten situaciones
                    de peligro o precaución.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></span>{" "}
                      Curva peligrosa
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></span>{" "}
                      Cruce escolar
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></span>{" "}
                      Cruce peatonal
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></span>{" "}
                      Pendiente pronunciada
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></span>{" "}
                      Superficie deslizante
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></span>{" "}
                      Semáforo próximo
                    </li>
                  </ul>
                </div>

                {/* Informativas */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-blue-500/30 rounded-2xl p-6">
                  <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Navigation className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-4">
                    Señales Informativas
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    De fondo verde o azul. Orientan al conductor sobre rutas,
                    destinos y servicios.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>{" "}
                      Indicaciones de destino y ruta
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>{" "}
                      Hospitales y servicios de emergencia
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>{" "}
                      Estaciones de servicio
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>{" "}
                      Parqueaderos
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>{" "}
                      Distancias entre municipios
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>{" "}
                      Zonas de interés turístico
                    </li>
                  </ul>
                </div>
              </div>

              {/* Semáforos */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                  <Eye className="w-6 h-6" />
                  Semáforos y su Significado
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                    <div className="w-10 h-10 bg-red-500 rounded-full mx-auto mb-3 shadow-lg shadow-red-500/50"></div>
                    <h4 className="font-bold text-red-400 text-center mb-2">
                      Luz Roja
                    </h4>
                    <p className="text-gray-300 text-sm text-center">
                      Detención obligatoria. Debes parar antes de la línea de
                      pare y esperar.
                    </p>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full mx-auto mb-3 shadow-lg shadow-yellow-400/50"></div>
                    <h4 className="font-bold text-yellow-400 text-center mb-2">
                      Luz Amarilla
                    </h4>
                    <p className="text-gray-300 text-sm text-center">
                      Precaución: el semáforo cambiará a rojo. Detente si puedes
                      hacerlo con seguridad.
                    </p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full mx-auto mb-3 shadow-lg shadow-green-500/50"></div>
                    <h4 className="font-bold text-green-400 text-center mb-2">
                      Luz Verde
                    </h4>
                    <p className="text-gray-300 text-sm text-center">
                      Puedes avanzar, verificando que la vía esté libre de
                      peatones y vehículos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Marcas viales */}
              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                  Marcas Viales
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      color: "bg-white",
                      titulo: "Línea continua blanca",
                      desc: "Prohibido cruzar o adelantar",
                    },
                    {
                      color: "bg-yellow-400",
                      titulo: "Línea amarilla",
                      desc: "Separación de flujos contrarios",
                    },
                    {
                      color: "bg-white border border-gray-600",
                      titulo: "Línea discontinua",
                      desc: "Cruce permitido con precaución",
                    },
                    {
                      color: "bg-white",
                      titulo: "Cebra peatonal",
                      desc: "Paso prioritario para peatones",
                    },
                  ].map(({ color, titulo, desc }) => (
                    <div
                      key={titulo}
                      className="bg-gray-800/30 rounded-xl p-4 text-center"
                    >
                      <div
                        className={`w-12 h-3 ${color} rounded-full mx-auto mb-3`}
                      ></div>
                      <h4 className="font-bold text-white text-sm mb-1">
                        {titulo}
                      </h4>
                      <p className="text-gray-400 text-xs">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────
                        SECCIÓN 2 — CONDUCCIÓN DEFENSIVA
                    ───────────────────────────────────────── */}
          {activeSection === 2 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-3">
                  <Eye className="w-8 h-8" />
                  Conducción Defensiva en Automóvil
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  La conducción defensiva es la habilidad de anticipar peligros,
                  tomar decisiones acertadas y mantener el control del vehículo
                  para evitar accidentes, independientemente de las condiciones
                  del tráfico o el comportamiento de otros conductores.
                </p>
              </div>

              <div className="relative bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl shadow-xl p-6 sm:p-10 text-center overflow-hidden">
                {/* Halo luminoso detrás de la imagen */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-72 h-72 bg-yellow-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                </div>

                <img
                  src={volantePosImg}
                  alt="Conductor de automovil con equipo de protección"
                  className="relative z-10 w-80 sm:w-96 h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 mx-auto"
                />

                <p className="relative z-10 mt-4 text-sm text-yellow-200 italic">
                  Imagen referencial: posicion correcta del conductor, Colombia.
                </p>
              </div>

              {/* Principios Fundamentales */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    Principios Fundamentales
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Eye,
                        titulo: "Visibilidad Constante",
                        desc: "Usa los espejos cada 5-8 segundos. Verifica puntos ciegos al cambiar de carril. Mantén los cristales limpios.",
                      },
                      {
                        icon: Clock,
                        titulo: "Anticipación",
                        desc: "Mira al menos 15 segundos hacia adelante. Identifica peligros potenciales antes de que se conviertan en críticos.",
                      },
                      {
                        icon: Shield,
                        titulo: "Espacio de Seguridad",
                        desc: "Regla de los 3 segundos: mantén al menos 3 segundos de distancia con el vehículo de adelante en condiciones normales.",
                      },
                    ].map(({ icon: Icon, titulo, desc }) => (
                      <div key={titulo} className="flex items-start gap-3">
                        <div className="bg-yellow-400/20 rounded-full p-2 mt-1">
                          <Icon className="w-4 h-4 text-yellow-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{titulo}</h4>
                          <p className="text-gray-300 text-sm">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    Posición Correcta al Volante
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">
                        Postura Corporal
                      </h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Espalda recta y apoyada en el respaldar</li>
                        <li>• Manos en posición 10 y 2 (o 9 y 3)</li>
                        <li>• Pies alcanzando los pedales sin estirarse</li>
                        <li>• Rodillas ligeramente dobladas al frenar</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">
                        Ajuste del Puesto de Conducción
                      </h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Asiento: distancia correcta al volante</li>
                        <li>• Cabeza apoyada en el reposacabezas</li>
                        <li>• Espejos ajustados antes de conducir</li>
                        <li>• Cinturón bien abrochado y sin torceduras</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Técnicas Específicas */}
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">
                    Frenado Seguro
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        t: "Frenado Progresivo",
                        d: "Presión gradual, nunca brusca",
                      },
                      {
                        t: "Sistema ABS",
                        d: "No soltar el pedal: el sistema lo gestiona",
                      },
                      {
                        t: "Distancia Segura",
                        d: "Mínimo 3 segundos al vehículo de adelante",
                      },
                      {
                        t: "Frenada en Curva",
                        d: "Frenar antes, no durante la curva",
                      },
                    ].map(({ t, d }) => (
                      <div key={t} className="bg-gray-800/50 rounded-lg p-3">
                        <h4 className="font-semibold text-yellow-300 text-sm">
                          {t}
                        </h4>
                        <p className="text-gray-400 text-xs">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">
                    Cambio de Carril
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        t: "Señalizar Siempre",
                        d: "Al menos 30 m antes del cambio",
                      },
                      {
                        t: "Verificar Espejos",
                        d: "Interior y lateral antes de moverse",
                      },
                      { t: "Punto Ciego", d: "Giro de cabeza para verificar" },
                      {
                        t: "Cambio Progresivo",
                        d: "Sin movimientos bruscos del volante",
                      },
                    ].map(({ t, d }) => (
                      <div key={t} className="bg-gray-800/50 rounded-lg p-3">
                        <h4 className="font-semibold text-yellow-300 text-sm">
                          {t}
                        </h4>
                        <p className="text-gray-400 text-xs">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">
                    Adelantamientos
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        t: "Solo cuando sea Seguro",
                        d: "Visibilidad > 200 m en carretera",
                      },
                      {
                        t: "Señalizar y Verificar",
                        d: "Antes, durante y después",
                      },
                      {
                        t: "Zonas Permitidas",
                        d: "Donde no haya línea continua",
                      },
                      {
                        t: "Velocidad Diferencial",
                        d: "Superar con suficiente diferencia",
                      },
                    ].map(({ t, d }) => (
                      <div key={t} className="bg-gray-800/50 rounded-lg p-3">
                        <h4 className="font-semibold text-yellow-300 text-sm">
                          {t}
                        </h4>
                        <p className="text-gray-400 text-xs">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Condiciones Especiales */}
              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                  Conducción en Condiciones Especiales
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      emoji: "🌧️",
                      titulo: "Lluvia",
                      items: [
                        "Reduce velocidad 20–30%",
                        "Aumenta distancia de frenado",
                        "Enciende luces de posición",
                        "Evita acuaplaning",
                      ],
                    },
                    {
                      emoji: "🌙",
                      titulo: "Noche",
                      items: [
                        "Usa luces bajas en ciudad",
                        "Luces altas en carretera",
                        "Mayor distancia de seguridad",
                        "Cuidado con peatones oscuros",
                      ],
                    },
                    {
                      emoji: "🌫️",
                      titulo: "Niebla",
                      items: [
                        "Velocidad muy reducida",
                        "Luces de niebla si las tienes",
                        "Sigue líneas del pavimento",
                        "No adelantes",
                      ],
                    },
                    {
                      emoji: "🚧",
                      titulo: "Tráfico Pesado",
                      items: [
                        "Paciencia y tranquilidad",
                        "Respeta la distancia",
                        "No cambies de carril innecesariamente",
                        "Atentos a motos y ciclistas",
                      ],
                    },
                  ].map(({ emoji, titulo, items }) => (
                    <div key={titulo} className="bg-gray-800/30 rounded-xl p-4">
                      <h4 className="font-bold text-white mb-2">
                        {emoji} {titulo}
                      </h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {items.map((i) => (
                          <li key={i}>• {i}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────
                        SECCIÓN 3 — MANTENIMIENTO
                    ───────────────────────────────────────── */}
          {activeSection === 3 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-3">
                  <Wrench className="w-8 h-8" />
                  Mantenimiento Preventivo del Automóvil
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  El mantenimiento regular no solo prolonga la vida útil del
                  vehículo, sino que es fundamental para garantizar la seguridad
                  de todos en la vía.
                </p>
              </div>

              <div className="relative bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl shadow-xl p-6 sm:p-10 text-center overflow-hidden">
                {/* Halo luminoso detrás de la imagen */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-72 h-72 bg-yellow-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                </div>

                <img
                  src={herramientasImg}
                  alt="Conductor de automovil con kit de carretera"
                  className="relative z-10 w-80 sm:w-96 h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 mx-auto"
                />

                <p className="relative z-10 mt-4 text-sm text-yellow-200 italic">
                  Imagen referencial: herramientas para mantenimiento o de
                  carretera de automovil, Colombia.
                </p>
              </div>

              {/* Revisión Pre-operacional */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Revisión Pre-operacional (Antes de Conducir)
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      titulo: "👁️ Nivel de Aceite",
                      items: [
                        "Dipstick entre MIN y MAX",
                        "Color adecuado (ámbar)",
                        "Sin olor a quemado",
                        "Revisar semanalmente",
                      ],
                    },
                    {
                      titulo: "💧 Líquidos",
                      items: [
                        "Refrigerante al nivel",
                        "Líquido de frenos completo",
                        "Agua del limpiaparabrisas",
                        "Dirección hidráulica (si aplica)",
                      ],
                    },
                    {
                      titulo: "🔋 Batería y Luces",
                      items: [
                        "Luces delanteras y traseras",
                        "Direccionales y freno",
                        "Exploradoras (si tiene)",
                        "Indicadores del tablero",
                      ],
                    },
                    {
                      titulo: "🚗 Llantas y Frenos",
                      items: [
                        "Presión correcta (según manual)",
                        "Sin deformaciones visibles",
                        "Freno de mano funcional",
                        "Escuchar ruidos al frenar",
                      ],
                    },
                  ].map(({ titulo, items }) => (
                    <div key={titulo} className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="font-bold text-yellow-300 mb-3 text-sm">
                        {titulo}
                      </h4>
                      <ul className="space-y-1">
                        {items.map((i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-300 text-xs"
                          >
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mantenimiento por Kilometraje */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                  <Gauge className="w-6 h-6" />
                  Mantenimiento por Kilometraje
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      km: "Cada 5.000 km",
                      color: "border-green-500/50",
                      items: [
                        "Cambio de aceite del motor",
                        "Revisión del filtro de aceite",
                        "Inspección de niveles de líquidos",
                        "Revisión de llantas y presión",
                      ],
                    },
                    {
                      km: "Cada 10.000 km",
                      color: "border-yellow-500/50",
                      items: [
                        "Cambio de filtro de aire",
                        "Revisión del sistema de frenos",
                        "Rotación y balanceo de llantas",
                        "Revisión de bujías",
                      ],
                    },
                    {
                      km: "Cada 30.000 km",
                      color: "border-orange-500/50",
                      items: [
                        "Cambio de bujías (si no se hizo antes)",
                        "Revisión de correa de distribución",
                        "Cambio de líquido de frenos",
                        "Limpieza de inyectores",
                      ],
                    },
                    {
                      km: "Cada 60.000 km",
                      color: "border-red-500/50",
                      items: [
                        "Cambio de correa de distribución",
                        "Cambio de amortiguadores (evaluar)",
                        "Revisión completa del sistema eléctrico",
                        "Ajuste del embrague (si es manual)",
                      ],
                    },
                  ].map(({ km, color, items }) => (
                    <div
                      key={km}
                      className={`bg-gray-800/40 border ${color} rounded-xl p-4`}
                    >
                      <h4 className="font-bold text-white mb-3">{km}</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {items.map((i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-gray-300 text-sm"
                          >
                            <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></span>
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revisión Técnico-Mecánica */}
              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                  Revisión Técnico-Mecánica (RTM) en Colombia
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-white mb-3">
                      ¿Qué revisa el CDA?
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {[
                        "Sistema de frenos (pedal, ABS, freno de mano)",
                        "Sistema de dirección y suspensión",
                        "Sistema eléctrico y luces",
                        "Emisiones de gases contaminantes",
                        "Chasis y carrocería (sin daños estructurales)",
                        "Vidrios, espejos y sistema de limpiabrisas",
                        "Bocina y sistema de escape",
                        "Identificación del vehículo (VIN, placa)",
                      ].map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3">
                      Periodicidad de la RTM
                    </h4>
                    <div className="space-y-3">
                      {[
                        { tipo: "Vehículos 0-5 años", freq: "Cada 2 años" },
                        { tipo: "Vehículos 6-10 años", freq: "Cada año" },
                        { tipo: "Vehículos > 10 años", freq: "Cada año" },
                        { tipo: "Transporte público", freq: "Cada 6 meses" },
                      ].map(({ tipo, freq }) => (
                        <div
                          key={tipo}
                          className="flex justify-between items-center bg-gray-800/50 rounded-lg p-3"
                        >
                          <span className="text-gray-300 text-sm">{tipo}</span>
                          <span className="text-yellow-400 font-semibold text-sm">
                            {freq}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-gray-400 text-xs italic">
                      La RTM solo es válida en Centros de Diagnóstico Automotor
                      (CDA) autorizados por el MinTransporte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────
                        SECCIÓN 4 — LICENCIAS Y DOCUMENTOS
                    ───────────────────────────────────────── */}
          {activeSection === 4 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-3">
                  <BookOpen className="w-8 h-8" />
                  Licencias y Documentos para Automóvil
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Conoce los requisitos, categorías y documentos obligatorios
                  para conducir legalmente un automóvil en Colombia.
                </p>
              </div>

              <div className="relative bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl shadow-xl p-6 sm:p-10 text-center overflow-hidden">
                {/* Halo luminoso detrás de la imagen */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-72 h-72 bg-yellow-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                </div>

                <img
                  src={documentosImg}
                  alt="Conductor de automovil con equipo de protección"
                  className="relative z-10 w-80 sm:w-96 h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 mx-auto"
                />

                <p className="relative z-10 mt-4 text-sm text-yellow-200 italic">
                  Imagen referencial: documentos oficiales que debe portar el
                  conductor, Colombia.
                </p>
              </div>

              {/* Categorías de Licencia */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                    Categoría B — Automóvil Particular
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-400/10 rounded-lg p-4 border border-yellow-400/30">
                      <h4 className="font-bold text-yellow-300 mb-2">
                        Vehículos Habilitados
                      </h4>
                      <p className="text-white text-sm">
                        Automóviles y camperos con PBV hasta 3.500 kg, con o sin
                        remolque hasta 750 kg.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">Requisitos:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        {[
                          "Edad mínima: 16 años",
                          "Curso de conducción (20 horas teóricas, 20 prácticas)",
                          "Examen médico y psicosensométrico",
                          "Examen teórico de normas de tránsito",
                          "Examen práctico en vía",
                          "Autorización escrita de padres (menores de edad)",
                        ].map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                    Categoría C — Camiones y Busetas
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-400/10 rounded-lg p-4 border border-yellow-400/30">
                      <h4 className="font-bold text-yellow-300 mb-2">
                        Vehículos Habilitados
                      </h4>
                      <p className="text-white text-sm">
                        Vehículos de transporte de mercancía con PBV superior a
                        3.500 kg.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">Requisitos:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        {[
                          "Edad mínima: 18 años",
                          "Licencia categoría B con mínimo 2 años de experiencia",
                          "Curso de recategorización",
                          "Examen médico actualizado",
                          "Examen práctico en vehículo de mayor tonelaje",
                          "Sin multas o sanciones pendientes",
                        ].map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentos Obligatorios */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                  Documentos Obligatorios
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: BookOpen,
                      titulo: "Licencia de Conducción",
                      items: [
                        "Vigente y con categoría correcta",
                        "Sin suspensiones vigentes",
                        "Datos actualizados en RUNT",
                        "No puede ser digital",
                      ],
                    },
                    {
                      icon: Shield,
                      titulo: "SOAT",
                      items: [
                        "Vigencia mínima 1 año",
                        "Placa del vehículo correcta",
                        "Cobertura médica completa",
                        "Original o copia en buen estado",
                      ],
                    },
                    {
                      icon: FileText,
                      titulo: "Tarjeta de Propiedad",
                      items: [
                        "Acredita la propiedad del vehículo",
                        "Datos del propietario vigentes",
                        "Sin prendas ni embargo",
                        "Traspaso debidamente registrado",
                      ],
                    },
                    {
                      icon: Wrench,
                      titulo: "RTM",
                      items: [
                        "Vigente según año del vehículo",
                        "Expedida por CDA autorizado",
                        "Todos los sistemas aprobados",
                        "Original o copia legible",
                      ],
                    },
                  ].map(({ icon: Icon, titulo, items }) => (
                    <div key={titulo} className="text-center">
                      <div className="bg-yellow-400/20 rounded-2xl p-6 mb-4">
                        <Icon className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                        <h4 className="font-bold text-white">{titulo}</h4>
                      </div>
                      <div className="text-left bg-gray-800/50 rounded-lg p-3">
                        <ul className="text-gray-400 text-xs space-y-1">
                          {items.map((i) => (
                            <li key={i}>✓ {i}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consecuencias de no cumplir */}
              <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Consecuencias de No Cumplir con la Documentación
                </h3>
                <p className="text-gray-300 mb-4">
                  Circular sin los documentos obligatorios puede acarrear graves
                  consecuencias legales y económicas:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Multas económicas significativas (hasta 30 SMDLV)</li>
                  <li>Inmovilización del vehículo en patios autorizados</li>
                  <li>Comparendo por infracción al Código de Tránsito</li>
                  <li>
                    En caso de accidente, responsabilidad civil mayor sin SOAT
                  </li>
                  <li>
                    Impedimentos para realizar trámites futuros en el RUNT
                  </li>
                </ul>
                <p className="mt-4 text-gray-400 italic">
                  La documentación no solo es un requisito legal, es una
                  garantía de tu seguridad y la de todos en la vía.
                </p>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────
                        SECCIÓN 5 — INFRACCIONES COMUNES
                    ───────────────────────────────────────── */}
          {activeSection === 5 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-3">
                  <AlertTriangle className="w-8 h-8" />
                  Infracciones Comunes en Automóvil
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Conoce las infracciones más frecuentes cometidas por
                  conductores de automóvil y sus consecuencias para evitar
                  sanciones y contribuir a la seguridad vial.
                </p>
              </div>

              {/* Tabla de infracciones */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                  Principales Infracciones y Sanciones
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      infraccion: "Exceso de velocidad",
                      gravedad: "Grave",
                      sancion: "Multa + posible inmovilización + cursos viales",
                    },
                    {
                      infraccion: "No usar cinturón de seguridad",
                      gravedad: "Leve",
                      sancion: "Multa económica (conductor y pasajeros)",
                    },
                    {
                      infraccion: "Usar el celular al conducir",
                      gravedad: "Grave",
                      sancion: "Multa alta + suspensión preventiva de licencia",
                    },
                    {
                      infraccion: "Circular sin SOAT",
                      gravedad: "Grave",
                      sancion: "Multa + inmovilización del vehículo",
                    },
                    {
                      infraccion: "No respetar semáforos o señales de PARE",
                      gravedad: "Gravísima",
                      sancion: "Multa máxima + suspensión de licencia",
                    },
                    {
                      infraccion: "Conducir bajo efectos del alcohol",
                      gravedad: "Gravísima",
                      sancion: "Multa máxima + suspensión + proceso penal",
                    },
                    {
                      infraccion: "No respetar el paso peatonal",
                      gravedad: "Grave",
                      sancion: "Multa + posible responsabilidad penal",
                    },
                    {
                      infraccion: "Adelantar en zona prohibida",
                      gravedad: "Grave",
                      sancion: "Multa + cursos de reentrenamiento vial",
                    },
                    {
                      infraccion: "No portar documentos al conducir",
                      gravedad: "Leve",
                      sancion: "Comparendo + inmovilización preventiva",
                    },
                    {
                      infraccion: "Estacionarse en zonas prohibidas",
                      gravedad: "Leve",
                      sancion: "Multa + grúa a expensas del infractor",
                    },
                  ].map(({ infraccion, gravedad, sancion }) => {
                    const color =
                      gravedad === "Gravísima"
                        ? "bg-red-500/20 text-red-400 border-red-500/30"
                        : gravedad === "Grave"
                          ? "bg-orange-500/20 text-orange-400 border-orange-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
                    return (
                      <div
                        key={infraccion}
                        className="flex flex-col sm:flex-row sm:items-center gap-3 bg-gray-800/40 rounded-xl p-4"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">
                            {infraccion}
                          </h4>
                          <p className="text-gray-400 text-sm mt-1">
                            {sancion}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full border self-start sm:self-center whitespace-nowrap ${color}`}
                        >
                          {gravedad}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sistema de puntos */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Consecuencias Acumuladas
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      titulo: "Primera infracción grave",
                      color: "border-yellow-500/30",
                      items: [
                        "Multa económica",
                        "Registro en RUNT",
                        "Posibles cursos viales",
                        "Antecedente en historial",
                      ],
                    },
                    {
                      titulo: "Reincidencia (2–3 infracciones)",
                      color: "border-orange-500/30",
                      items: [
                        "Multas más altas",
                        "Suspensión temporal de licencia",
                        "Cursos de reentrenamiento obligatorios",
                        "Mayor control policial",
                      ],
                    },
                    {
                      titulo: "Infracciones gravísimas",
                      color: "border-red-500/30",
                      items: [
                        "Suspensión prolongada de licencia",
                        "Cancelación definitiva (posible)",
                        "Proceso penal (alcohol/homicidio)",
                        "Inhabilitación para conducir",
                      ],
                    },
                  ].map(({ titulo, color, items }) => (
                    <div
                      key={titulo}
                      className={`bg-gray-800/40 border ${color} rounded-xl p-4`}
                    >
                      <h4 className="font-bold text-white mb-3">{titulo}</h4>
                      <ul className="space-y-2">
                        {items.map((i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-300 text-sm"
                          >
                            <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consecuencias generales */}
              <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Recuerda Siempre
                </h3>
                <p className="text-gray-300 mb-4">
                  Las infracciones de tránsito no solo afectan tu bolsillo, sino
                  que ponen en riesgo tu vida, la de tus pasajeros y la de todos
                  en la vía:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>
                    Multas económicas que pueden ser significativas según el
                    tipo de infracción
                  </li>
                  <li>
                    Inmovilización del vehículo con costos de grúa y patios a tu
                    cargo
                  </li>
                  <li>Suspensión o cancelación de la licencia de conducción</li>
                  <li>
                    Sanciones penales en casos de conducción bajo el alcohol o
                    accidentes graves
                  </li>
                  <li>
                    Problemas legales que pueden complicar trámites futuros en
                    el RUNT
                  </li>
                </ul>
                <p className="mt-4 text-gray-400 italic">
                  Respetar las normas de tránsito no solo es una obligación
                  legal, es una responsabilidad con tu vida y la de los demás
                  usuarios de la vía.
                </p>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════
                        CIERRE MOTIVACIONAL
                    ══════════════════════════════════════════════ */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md shadow-md mt-8">
            <p className="text-gray-800 font-medium">
              🚗 Conocer y cumplir con las normativas de tránsito y la
              documentación requerida es esencial para ser un conductor
              responsable. ¡Sé un ejemplo en la vía y contribuye a una Colombia
              más segura!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
