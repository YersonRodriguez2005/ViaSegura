// src/pages/Tips.js
import { useState, useEffect, useMemo } from 'react';
import {
    Lightbulb, ShieldCheck, AlertTriangle, Users, Heart, BookOpen,
    Info, CloudRain, Bike, Zap, Eye, Clock, Umbrella, CloudDrizzle,
    Activity, Car, Moon, Sun, Search, Copy, Check,
    Navigation, Wrench, MapPin, Coffee, Gauge, Wind, Flame, Star
} from 'lucide-react';

// ══════════════════════════════════════════════════════════════════
// BANCO DE TIPS — 7 categorías, 8+ tips por categoría
// ══════════════════════════════════════════════════════════════════
const ALL_TIPS = [
    // ─── GENERAL ─────────────────────────────────────────────────
    {
        category: 'General',
        icon: ShieldCheck,
        title: 'Mantén tu distancia de seguridad',
        description: 'Conserva al menos 3 segundos de distancia con el vehículo de adelante. En lluvia o mal tiempo, duplica ese margen.',
        priority: 'alta',
    },
    {
        category: 'General',
        icon: Eye,
        title: 'Anticipa el entorno vial',
        description: 'Escanea la vía 15 segundos hacia adelante. Observa retrovisores cada 5–8 segundos y revisa los puntos ciegos antes de maniobrar.',
        priority: 'alta',
    },
    {
        category: 'General',
        icon: Users,
        title: 'Respeta siempre a los peatones',
        description: 'Cede el paso en cruces peatonales aunque el semáforo te favorezca. Reduce velocidad en zonas escolares y parques.',
        priority: 'alta',
    },
    {
        category: 'General',
        icon: Clock,
        title: 'Evita conducir con sueño',
        description: 'La fatiga reduce tus reflejos hasta un 50%. Haz pausas de 15 minutos cada 2 horas. Si bostezas más de 3 veces seguidas, detente.',
        priority: 'alta',
    },
    {
        category: 'General',
        icon: BookOpen,
        title: 'Conoce el Código Nacional de Tránsito',
        description: 'La Ley 769 de 2002 establece tus derechos y deberes. Mantenerse actualizado evita sanciones y te hace un conductor más seguro.',
        priority: 'media',
    },
    {
        category: 'General',
        icon: Heart,
        title: 'Conduce con empatía',
        description: 'La cortesía vial reduce el estrés colectivo. Cede el paso, usa el pito solo cuando sea necesario y agradece con las luces.',
        priority: 'media',
    },
    {
        category: 'General',
        icon: Zap,
        title: 'Cero teléfono al conducir',
        description: 'Usar el celular multiplica por 4 el riesgo de accidente. Si debes atender una llamada, detente en un lugar seguro.',
        priority: 'alta',
    },
    {
        category: 'General',
        icon: Navigation,
        title: 'Señaliza siempre tus maniobras',
        description: 'Usa los direccionales al menos 30 metros antes de girar o cambiar de carril. Nunca asumas que los demás adivinarán tu intención.',
        priority: 'alta',
    },
    {
        category: 'General',
        icon: Gauge,
        title: 'Respeta los límites de velocidad',
        description: '30 km/h en zonas escolares, 50 km/h en vías urbanas, 80 km/h en vías secundarias y 100–120 km/h en autopistas según señalización.',
        priority: 'alta',
    },
    {
        category: 'General',
        icon: Info,
        title: 'No conduzcas bajo el efecto del alcohol',
        description: 'En Colombia el límite es 0.0 grados. Incluso una copa altera la percepción del riesgo y el tiempo de reacción.',
        priority: 'alta',
    },

    // ─── LLUVIA ──────────────────────────────────────────────────
    {
        category: 'Lluvia',
        icon: AlertTriangle,
        title: 'Reduce la velocidad en un 30%',
        description: 'En lluvia la distancia de frenado puede triplicarse. Baja la velocidad progresivamente antes de llegar a zonas mojadas.',
        priority: 'alta',
    },
    {
        category: 'Lluvia',
        icon: Umbrella,
        title: 'Evita frenar bruscamente',
        description: 'Frena con suavidad y de forma progresiva. En motos, aplica freno trasero antes que delantero para evitar deslizamientos.',
        priority: 'alta',
    },
    {
        category: 'Lluvia',
        icon: CloudDrizzle,
        title: 'Verifica el estado de las llantas',
        description: 'El labrado mínimo es 1,6 mm. Llantas desgastadas generan hidroplaneo incluso con poca lluvia. Revísalas mensualmente.',
        priority: 'alta',
    },
    {
        category: 'Lluvia',
        icon: CloudRain,
        title: 'Duplica la distancia de seguridad',
        description: 'Aumenta a 6 segundos la distancia con el vehículo de adelante. El agua en el pavimento elimina la fricción habitual.',
        priority: 'alta',
    },
    {
        category: 'Lluvia',
        icon: Lightbulb,
        title: 'Enciende luces de posición',
        description: 'En Colombia es obligatorio circular con luces encendidas en lluvia o baja visibilidad. Las luces altas empeoran la visibilidad en niebla.',
        priority: 'media',
    },
    {
        category: 'Lluvia',
        icon: Zap,
        title: 'Evita charcos y encharcamientos',
        description: 'Un charco de 10 cm puede ocultar un hueco que dañe la llanta o desestabilice el vehículo. Rodea siempre que sea posible.',
        priority: 'media',
    },
    {
        category: 'Lluvia',
        icon: Wind,
        title: 'Cuidado con el viento lateral',
        description: 'La lluvia intensa suele venir acompañada de viento. Afirma bien el volante o el manubrio al cruzar puentes o zonas descubiertas.',
        priority: 'media',
    },
    {
        category: 'Lluvia',
        icon: Eye,
        title: 'Mantén el parabrisas limpio',
        description: 'Revisa los limpiaparabrisas mensualmente. En emergencia usa una papa cruda para mejorar la visibilidad si no tienes líquido limpiaparabrisas.',
        priority: 'baja',
    },
    {
        category: 'Lluvia',
        icon: MapPin,
        title: 'Identifica zonas de inundación frecuente',
        description: 'Conoce los puntos críticos de tu ciudad en época de lluvias. Evita rutas propensas a inundaciones aunque sean más cortas.',
        priority: 'media',
    },

    // ─── MOTOCICLISTAS ───────────────────────────────────────────
    {
        category: 'Motociclistas',
        icon: Lightbulb,
        title: 'Usa ropa reflectiva siempre',
        description: 'El chaleco reflectivo es obligatorio entre 6 PM y 6 AM en Colombia. De día también mejora tu visibilidad ante otros conductores.',
        priority: 'alta',
    },
    {
        category: 'Motociclistas',
        icon: Bike,
        title: 'Evita los puntos ciegos de camiones',
        description: 'Si no ves los espejos del camionero, él no te ve a ti. Nunca te quedes en el lateral trasero de un bus o camión.',
        priority: 'alta',
    },
    {
        category: 'Motociclistas',
        icon: ShieldCheck,
        title: 'Casco certificado: sin excepciones',
        description: 'El casco debe cumplir la norma NTC 4533 o DOT. Un casco sin certificación no protege en impactos reales. Cambia el casco tras un golpe.',
        priority: 'alta',
    },
    {
        category: 'Motociclistas',
        icon: Activity,
        title: 'Revisión pre-operacional diaria',
        description: 'Antes de arrancar: frenos, luces, llantas (presión y labrado), cadena, nivel de aceite y combustible. Dura menos de 5 minutos.',
        priority: 'alta',
    },
    {
        category: 'Motociclistas',
        icon: Clock,
        title: 'Cero distracciones en movimiento',
        description: 'Los auriculares aislan sonidos de emergencia (sirenas, bocinas). En moto la distracción tiene consecuencias más graves que en carro.',
        priority: 'alta',
    },
    {
        category: 'Motociclistas',
        icon: Navigation,
        title: 'Posición correcta al frenar en curva',
        description: 'Frena ANTES de entrar a la curva, nunca durante. Aplica 70% freno delantero y 30% trasero de forma progresiva en línea recta.',
        priority: 'alta',
    },
    {
        category: 'Motociclistas',
        icon: Gauge,
        title: 'Mantén presión correcta en llantas',
        description: 'Llantas desinfladas aumentan el consumo, reducen el agarre y desgastan el aro. Revisa la presión en frío, al menos una vez por semana.',
        priority: 'media',
    },
    {
        category: 'Motociclistas',
        icon: Users,
        title: 'Equipa bien a tu parrillero',
        description: 'El pasajero también debe usar casco certificado, ropa protectora y sujetarse al conductor o a los agarraderos. No en las alforjas.',
        priority: 'media',
    },
    {
        category: 'Motociclistas',
        icon: Moon,
        title: 'Extrema precaución de noche',
        description: 'Reduce velocidad un 20% adicional. Evita circular por vías no iluminadas a alta velocidad. La fauna puede cruzar en carreteras nocturnas.',
        priority: 'alta',
    },
    {
        category: 'Motociclistas',
        icon: Flame,
        title: 'No zigzaguees entre carriles',
        description: 'Circular entre carriles en movimiento es una infracción en Colombia y una de las causas más frecuentes de accidentes de moto.',
        priority: 'alta',
    },

    // ─── AUTOMÓVIL ───────────────────────────────────────────────
    {
        category: 'Automóvil',
        icon: Car,
        title: 'Cinturón: siempre y para todos',
        description: 'Todos los ocupantes deben llevar el cinturón. En caso de colisión, el cinturón reduce la mortalidad hasta en un 50%.',
        priority: 'alta',
    },
    {
        category: 'Automóvil',
        icon: Eye,
        title: 'Ajusta los espejos antes de arrancar',
        description: 'Espejo interior centrado en la luneta trasera. Espejos laterales ajustados para minimizar el punto ciego. Nunca mientras conduces.',
        priority: 'alta',
    },
    {
        category: 'Automóvil',
        icon: ShieldCheck,
        title: 'Usa el sistema ABS correctamente',
        description: 'Con ABS, presiona el freno a fondo y mantén la presión. No sueltes el pedal — el sistema bombea solo. Así reduces la distancia de parada.',
        priority: 'media',
    },
    {
        category: 'Automóvil',
        icon: Navigation,
        title: 'Manos en posición 9 y 3',
        description: 'La posición 10 y 2 ya no se recomienda con airbags. La posición 9 y 3 permite mejor control y aleja las manos del área de despliegue del airbag.',
        priority: 'media',
    },
    {
        category: 'Automóvil',
        icon: Users,
        title: 'Silla infantil homologada',
        description: 'Obligatoria en Colombia para menores de 10 años o menos de 36 kg. Instálala siempre en el asiento trasero, nunca frente al airbag del copiloto.',
        priority: 'alta',
    },
    {
        category: 'Automóvil',
        icon: Lightbulb,
        title: 'Luces bajas en ciudad, siempre',
        description: 'En Colombia es obligatorio circular con luces encendidas en ciudad. Las luces altas deslumbran a otros conductores — úsalas solo en carretera sin tráfico.',
        priority: 'media',
    },
    {
        category: 'Automóvil',
        icon: Gauge,
        title: 'No bloquees el paso de emergencias',
        description: 'Al escuchar sirenas, desplázate a la derecha y detente si es necesario. Obstruir ambulancias o bomberos es una infracción grave.',
        priority: 'alta',
    },
    {
        category: 'Automóvil',
        icon: Activity,
        title: 'Regla de los 3 pasos al cambiar de carril',
        description: '1. Señaliza. 2. Verifica espejos. 3. Gira la cabeza para revisar el punto ciego. Nunca omitas el paso 3, aunque hayas mirado los espejos.',
        priority: 'alta',
    },
    {
        category: 'Automóvil',
        icon: MapPin,
        title: 'Estaciona correctamente',
        description: 'No obstruyas rampas de accesibilidad, hidrantes, garajes ni señales. El parqueo en doble fila genera accidentes y multas cuantiosas.',
        priority: 'media',
    },
    {
        category: 'Automóvil',
        icon: Coffee,
        title: 'Adapta la conducción al estado emocional',
        description: 'La ira o el estrés intenso afectan la toma de decisiones. Si estás muy alterado, espera 5 minutos antes de arrancar o para en un lugar seguro.',
        priority: 'media',
    },

    // ─── MANTENIMIENTO ───────────────────────────────────────────
    {
        category: 'Mantenimiento',
        icon: Zap,
        title: 'Revisa los frenos cada 10.000 km',
        description: 'Pastillas, discos y líquido de frenos. El líquido se cambia cada 2 años ya que absorbe humedad y reduce la eficiencia de frenado.',
        priority: 'alta',
    },
    {
        category: 'Mantenimiento',
        icon: BookOpen,
        title: 'Sigue el plan de mantenimiento del fabricante',
        description: 'El manual del vehículo indica intervalos exactos de cambio de aceite, filtros, correas y más. Seguirlo prolonga la vida útil y evita averías.',
        priority: 'alta',
    },
    {
        category: 'Mantenimiento',
        icon: Eye,
        title: 'Verifica todas las luces mensualmente',
        description: 'Faros, stop, direccionales, marcha atrás y luces de posición. Una luz fundida puede generar un accidente o una multa en cualquier control.',
        priority: 'media',
    },
    {
        category: 'Mantenimiento',
        icon: Umbrella,
        title: 'Presión de llantas: revisa en frío',
        description: 'Mide la presión cuando las llantas estén frías (sin conducir en las últimas 3 horas). Revisa el manual para los valores correctos por eje.',
        priority: 'media',
    },
    {
        category: 'Mantenimiento',
        icon: CloudRain,
        title: 'Cambia filtros de aire y combustible',
        description: 'Cada 15.000–30.000 km según el fabricante. Un filtro sucio aumenta el consumo y reduce la potencia del motor significativamente.',
        priority: 'media',
    },
    {
        category: 'Mantenimiento',
        icon: Heart,
        title: 'Revisa amortiguadores y suspensión',
        description: 'Amortiguadores deteriorados aumentan la distancia de frenado un 20% y reducen el control en curvas. Cambia en pares siempre.',
        priority: 'media',
    },
    {
        category: 'Mantenimiento',
        icon: Activity,
        title: 'Controla el nivel del refrigerante',
        description: 'Un motor sobrecalentado puede fundirse en minutos. Verifica el nivel de refrigerante cada 2 semanas y usa solo el tipo recomendado.',
        priority: 'alta',
    },
    {
        category: 'Mantenimiento',
        icon: Wrench,
        title: 'Rota y balancea las llantas',
        description: 'Cada 10.000 km. La rotación homogeniza el desgaste y puede extender la vida útil de las llantas hasta un 30%.',
        priority: 'media',
    },
    {
        category: 'Mantenimiento',
        icon: Gauge,
        title: 'Atiende los testigos del tablero',
        description: 'Un testigo encendido (aceite, batería, temperatura, ABS) no es decorativo. Ignorarlo puede convertir un problema menor en una avería mayor.',
        priority: 'alta',
    },
    {
        category: 'Mantenimiento',
        icon: Zap,
        title: 'Revisa la batería cada 2 años',
        description: 'Una batería débil puede dejarte varado sin previo aviso. Pide un diagnóstico en el taller cada 2 años o si el arranque tarda más de lo normal.',
        priority: 'media',
    },

    // ─── HORARIO Y RUTAS ─────────────────────────────────────────
    {
        category: 'Horario',
        icon: Clock,
        title: 'Evita las horas pico si puedes',
        description: 'El tráfico denso multiplica la exposición al riesgo. Si tu horario es flexible, sale 30 minutos antes o espera el pico más intenso.',
        priority: 'media',
    },
    {
        category: 'Horario',
        icon: Activity,
        title: 'Planifica tu ruta con anticipación',
        description: 'Usa Waze o Google Maps para conocer el estado de las vías antes de salir. Rutas alternativas pueden ahorrarte tiempo y estrés.',
        priority: 'media',
    },
    {
        category: 'Horario',
        icon: Info,
        title: 'Conoce las horas de mayor siniestralidad',
        description: 'En Colombia los accidentes fatales se concentran entre 6 PM y 2 AM, especialmente los viernes y sábados. Extrema precaución en esos horarios.',
        priority: 'alta',
    },
    {
        category: 'Horario',
        icon: Users,
        title: 'Coordina viajes compartidos',
        description: 'Menos vehículos en vía significa menos riesgo colectivo. El carpooling también reduce emisiones y el costo del desplazamiento.',
        priority: 'baja',
    },
    {
        category: 'Horario',
        icon: Umbrella,
        title: 'Revisa el pronóstico del tiempo antes de salir',
        description: 'Alerta temprana de lluvia o neblina te permite ajustar la hora de salida, la ruta y el tiempo de desplazamiento.',
        priority: 'media',
    },
    {
        category: 'Horario',
        icon: Moon,
        title: 'Prepárate diferente para conducir de noche',
        description: 'Limpia los faros, verifica que estén correctamente orientados y reduce la velocidad un 20% respecto al límite diurno en vías no iluminadas.',
        priority: 'alta',
    },
    {
        category: 'Horario',
        icon: Sun,
        title: 'Cuidado con el sol al amanecer y atardecer',
        description: 'El sol bajo puede enceguecer a plenitud. Ten gafas de sol polarizadas en el vehículo y usa el parasol siempre que sea necesario.',
        priority: 'media',
    },
    {
        category: 'Horario',
        icon: Coffee,
        title: 'No conduzcas si no has dormido bien',
        description: 'Conducir con menos de 5 horas de sueño es comparable a conducir con 0.5 grados de alcohol en sangre. Programa tu salida con tiempo de descanso.',
        priority: 'alta',
    },

    // ─── PLANIFICACIÓN ───────────────────────────────────────────
    {
        category: 'Planificación',
        icon: Activity,
        title: 'Revisa el estado de la vía antes de salir',
        description: 'Consulta la página de INVIAS o de la Secretaría de Tránsito local. Obras, cierres o accidentes previos pueden cambiar tu ruta ideal.',
        priority: 'media',
    },
    {
        category: 'Planificación',
        icon: Info,
        title: 'Lleva siempre el kit de emergencia',
        description: 'Triángulos de señalización (mínimo 2), botiquín de primeros auxilios, extintor vigente, linterna y herramientas básicas. Revisa el extintor cada año.',
        priority: 'alta',
    },
    {
        category: 'Planificación',
        icon: Users,
        title: 'Informa tu itinerario a un familiar',
        description: 'En viajes largos comparte ruta, hora estimada de llegada y teléfonos de contacto. Si algo pasa, alguien sabrá dónde buscarte.',
        priority: 'media',
    },
    {
        category: 'Planificación',
        icon: Clock,
        title: 'Sal siempre con tiempo de sobra',
        description: 'La prisa es una de las causas más frecuentes de accidentes. Si calculas 30 minutos de trayecto, sal con 15 minutos de margen.',
        priority: 'alta',
    },
    {
        category: 'Planificación',
        icon: CloudRain,
        title: 'Planifica considerando el clima',
        description: 'En temporada de lluvias en Colombia (marzo–mayo y octubre–noviembre), añade un 25% de tiempo extra a tu trayecto habitual.',
        priority: 'media',
    },
    {
        category: 'Planificación',
        icon: Wrench,
        title: 'Documenta tu vehículo siempre al día',
        description: 'SOAT, tarjeta de propiedad, licencia de conducción y RTM vigentes. Un comparendo por documentación vencida supera el costo de renovarla.',
        priority: 'alta',
    },
    {
        category: 'Planificación',
        icon: MapPin,
        title: 'Conoce los números de emergencia vial',
        description: 'INVIAS: 018000 910010. Línea de emergencias: 123. Guardia Civil: 156. Tenlos guardados antes de necesitarlos.',
        priority: 'alta',
    },
    {
        category: 'Planificación',
        icon: Star,
        title: 'Haz una pausa activa en viajes largos',
        description: 'Cada 2 horas: sal del vehículo, camina 5 minutos, estira brazos y piernas. La circulación activa reduce la fatiga y mejora la concentración.',
        priority: 'media',
    },
];

// ── Configuración de categorías ────────────────────────────────────
const CATEGORIES = [
    { id: 'General',        label: 'General',       icon: Info,        color: 'from-yellow-400 to-yellow-600',   text: 'text-yellow-400',  border: 'border-yellow-400/40',  bg: 'bg-yellow-400/10' },
    { id: 'Lluvia',         label: 'Lluvia',         icon: CloudRain,   color: 'from-blue-400 to-blue-600',      text: 'text-blue-400',    border: 'border-blue-400/40',    bg: 'bg-blue-400/10' },
    { id: 'Motociclistas',  label: 'Motociclistas',  icon: Bike,        color: 'from-orange-400 to-red-500',     text: 'text-orange-400',  border: 'border-orange-400/40',  bg: 'bg-orange-400/10' },
    { id: 'Automóvil',      label: 'Automóvil',      icon: Car,         color: 'from-sky-400 to-cyan-500',       text: 'text-sky-400',     border: 'border-sky-400/40',     bg: 'bg-sky-400/10' },
    { id: 'Mantenimiento',  label: 'Mantenimiento',  icon: Wrench,      color: 'from-violet-400 to-purple-600',  text: 'text-violet-400',  border: 'border-violet-400/40',  bg: 'bg-violet-400/10' },
    { id: 'Horario',        label: 'Horario',        icon: Clock,       color: 'from-green-400 to-emerald-600',  text: 'text-green-400',   border: 'border-green-400/40',   bg: 'bg-green-400/10' },
    { id: 'Planificación',  label: 'Planificación',  icon: Navigation,  color: 'from-pink-400 to-rose-600',      text: 'text-pink-400',    border: 'border-pink-400/40',    bg: 'bg-pink-400/10' },
];

const PRIORITY_CONFIG = {
    alta:  { label: 'Prioridad alta',  dot: 'bg-red-400',    text: 'text-red-400',    bg: 'bg-red-400/10 border-red-400/30' },
    media: { label: 'Prioridad media', dot: 'bg-yellow-400', text: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/30' },
    baja:  { label: 'Prioridad baja',  dot: 'bg-green-400',  text: 'text-green-400',  bg: 'bg-green-400/10 border-green-400/30' },
};

// ── Tarjeta de tip ─────────────────────────────────────────────────
function TipCard({ tip, catConfig, index }) {
    const Icon = tip.icon;
    const priority = PRIORITY_CONFIG[tip.priority];
    return (
        <div
            className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 border ${catConfig.border} rounded-2xl p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
            style={{ animationDelay: `${index * 60}ms` }}
        >
            {/* Prioridad badge */}
            <span className={`absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full border ${priority.bg} ${priority.text}`}>
                <span className={`inline-block w-1.5 h-1.5 rounded-full ${priority.dot} mr-1`}></span>
                {priority.label}
            </span>

            {/* Icono + categoría */}
            <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-xl ${catConfig.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${catConfig.text}`} />
                </div>
                <span className={`text-xs font-semibold ${catConfig.text} uppercase tracking-wider`}>{tip.category}</span>
            </div>

            {/* Contenido */}
            <h3 className={`text-base font-bold text-white mb-2 group-hover:${catConfig.text} transition-colors leading-snug pr-24`}>
                {tip.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{tip.description}</p>

            {/* Línea de acento inferior */}
            <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${catConfig.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        </div>
    );
}

// ══════════════════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL
// ══════════════════════════════════════════════════════════════════
export default function Tips() {
    const [selectedCategory, setSelectedCategory] = useState('General');
    const [searchQuery, setSearchQuery] = useState('');
    const [copied, setCopied] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [showOnlyHigh, setShowOnlyHigh] = useState(false);

    useEffect(() => { setIsVisible(true); }, []);

    const activeCat = CATEGORIES.find(c => c.id === selectedCategory);

    const filteredTips = useMemo(() => {
        let base = ALL_TIPS.filter(t => t.category === selectedCategory);
        if (showOnlyHigh) base = base.filter(t => t.priority === 'alta');
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            base = base.filter(t =>
                t.title.toLowerCase().includes(q) ||
                t.description.toLowerCase().includes(q)
            );
        }
        return base;
    }, [selectedCategory, searchQuery, showOnlyHigh]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500); })
            .catch(() => { });
    };

    const totalByCat = (catId) => ALL_TIPS.filter(t => t.category === catId).length;
    const highByCat  = (catId) => ALL_TIPS.filter(t => t.category === catId && t.priority === 'alta').length;

    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 px-4">

            {/* Fondo decorativo */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
                <div className="absolute top-20 left-10 w-80 h-80 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className={`relative max-w-7xl mx-auto transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                {/* ── HERO ── */}
                <header className="text-center mb-12 space-y-5">
                    <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 text-sm font-medium text-yellow-400">
                        <Lightbulb className="w-4 h-4" />
                        {ALL_TIPS.length} consejos para conducir con responsabilidad
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                        Consejos para una{' '}
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            Conducción Segura
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                        Tips prácticos organizados por categoría para motociclistas y conductores de automóvil en Colombia.
                        Aplícalos diariamente y reduce tu riesgo en la vía.
                    </p>
                </header>

                {/* ── STATS RÁPIDAS ── */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                    {[
                        { value: ALL_TIPS.length,                                               label: 'Consejos totales',       icon: Lightbulb,  color: 'text-yellow-400' },
                        { value: ALL_TIPS.filter(t => t.priority === 'alta').length,            label: 'Prioridad alta',          icon: AlertTriangle, color: 'text-red-400' },
                        { value: CATEGORIES.length,                                             label: 'Categorías',             icon: Star,       color: 'text-blue-400' },
                        { value: ALL_TIPS.filter(t => t.category === 'Motociclistas').length,   label: 'Tips para motociclistas', icon: Bike,       color: 'text-orange-400' },
                    ].map(({ value, label, icon: Icon, color }) => (
                        <div key={label} className="bg-gray-800/60 border border-gray-700 rounded-2xl p-4 text-center">
                            <Icon className={`w-5 h-5 ${color} mx-auto mb-2`} />
                            <p className="text-2xl font-black text-white">{value}</p>
                            <p className="text-gray-400 text-xs mt-0.5">{label}</p>
                        </div>
                    ))}
                </div>

                {/* ── NAVEGACIÓN DE CATEGORÍAS ── */}
                <section className="mb-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {CATEGORIES.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => { setSelectedCategory(cat.id); setSearchQuery(''); setShowOnlyHigh(false); }}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${isActive
                                        ? `bg-gradient-to-r ${cat.color} text-black shadow-lg scale-[1.04]`
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                                    }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span className="hidden sm:inline">{cat.label}</span>
                                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/20 text-black' : 'bg-gray-700 text-gray-400'}`}>
                                        {totalByCat(cat.id)}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* ── BUSCADOR + FILTROS ── */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    {/* Buscador */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder={`Buscar en ${activeCat?.label}...`}
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/30 transition-colors"
                        />
                    </div>

                    {/* Filtro prioridad alta */}
                    <button
                        onClick={() => setShowOnlyHigh(v => !v)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${showOnlyHigh
                            ? 'bg-red-500/20 border-red-400/40 text-red-400'
                            : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                        }`}
                    >
                        <AlertTriangle className="w-4 h-4" />
                        Solo alta prioridad
                        {showOnlyHigh && <span className="bg-red-500/30 text-red-300 text-xs px-1.5 py-0.5 rounded-full">{highByCat(selectedCategory)}</span>}
                    </button>
                </div>

                {/* ── CABECERA DE SECCIÓN ACTIVA ── */}
                {activeCat && (
                    <div className={`flex items-center gap-4 bg-gradient-to-r ${activeCat.bg.replace('bg-', 'from-').replace('/10', '/5')} to-transparent border ${activeCat.border} rounded-2xl p-5 mb-8`}>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeCat.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            {(() => { const Icon = activeCat.icon; return <Icon className="w-6 h-6 text-white" />; })()}
                        </div>
                        <div className="flex-1">
                            <h2 className={`text-xl font-bold ${activeCat.text}`}>{activeCat.label}</h2>
                            <p className="text-gray-400 text-sm">
                                {filteredTips.length} consejo{filteredTips.length !== 1 ? 's' : ''} encontrado{filteredTips.length !== 1 ? 's' : ''}
                                {showOnlyHigh && ' · filtrando por prioridad alta'}
                                {searchQuery && ` · búsqueda: "${searchQuery}"`}
                            </p>
                        </div>
                    </div>
                )}

                {/* ── GRID DE TIPS ── */}
                {filteredTips.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                        {filteredTips.map((tip, idx) => (
                            <TipCard key={`${tip.category}-${idx}`} tip={tip} catConfig={activeCat} index={idx} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 mb-16">
                        <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-400 text-lg font-medium">No se encontraron consejos</p>
                        <p className="text-gray-600 text-sm mt-1">Intenta con otro término de búsqueda o quita el filtro de prioridad.</p>
                        <button onClick={() => { setSearchQuery(''); setShowOnlyHigh(false); }} className="mt-4 text-yellow-400 text-sm underline">Limpiar filtros</button>
                    </div>
                )}

                {/* ── ¿POR QUÉ APLICAR ESTOS CONSEJOS? ── */}
                <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-6 sm:p-8 mb-12">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
                        ¿Por qué aplicar estos consejos?
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: ShieldCheck, titulo: 'Tu Seguridad',  texto: 'Reduce hasta un 40% el riesgo de accidentes graves aplicando conducción defensiva.' },
                            { icon: Users,       titulo: 'Protege a Otros', texto: 'Tu conducta también protege peatones, ciclistas y pasajeros que dependen de ti.' },
                            { icon: BookOpen,    titulo: 'Cumples la Ley', texto: 'Evita comparendos y sanciones del Código Nacional de Tránsito (Ley 769 de 2002).' },
                            { icon: Heart,       titulo: 'Cultura Vial',   texto: 'Cada conductor responsable cambia el entorno: genera respeto y empatía colectiva.' },
                        ].map(({ icon: Icon, titulo, texto }) => (
                            <div key={titulo} className="text-center group">
                                <div className="bg-yellow-400/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6 text-yellow-400" />
                                </div>
                                <h4 className="font-bold text-white mb-1">{titulo}</h4>
                                <p className="text-xs text-gray-400 leading-relaxed">{texto}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CONSEJO DESTACADO DEL DÍA ── */}
                <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 mb-12">
                    <div className="flex items-center gap-2 mb-3">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Recuerda siempre</span>
                    </div>
                    <blockquote className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3">
                        "Un conductor que anticipa, respeta y se cuida a sí mismo rara vez tiene accidentes."
                    </blockquote>
                    <p className="text-gray-400 text-sm">
                        La conducción defensiva no es para los momentos difíciles — es un hábito constante que te protege incluso cuando los demás cometen errores.
                    </p>
                </div>

                {/* ── CTA FINAL ── */}
                <div className="text-center space-y-4 pb-4">
                    <p className="text-gray-500 text-sm">¿Estos tips te fueron útiles? Compártelos con otros conductores.</p>
                    <button
                        onClick={handleCopyLink}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full font-bold text-base shadow-xl hover:scale-105 transition-transform duration-300"
                    >
                        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        {copied ? '¡Enlace copiado!' : 'Comparte estos consejos'}
                    </button>
                </div>

            </div>
        </main>
    );
}