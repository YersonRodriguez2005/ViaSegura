import React, { useState, useEffect } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    LineChart, Line, CartesianGrid, PieChart, Pie, Cell
} from 'recharts';
import {
    TrendingUp, TrendingDown, Users, AlertCircle, Bike, Car,
    Shield, AlertTriangle, MapPin, Calendar, Activity, ExternalLink,
    ChevronDown, ChevronUp
} from 'lucide-react';

// ─── Datos actualizados al Q1 2025 (fuente: ANSV / ONSV) ──────────────────────
const muertesPorAnio = [
    { year: '2017', deaths: 7159 },
    { year: '2018', deaths: 7079 },
    { year: '2019', deaths: 7121 },
    { year: '2020', deaths: 5654 }, // Pandemia
    { year: '2021', deaths: 7267 },
    { year: '2022', deaths: 8469 },
    { year: '2023', deaths: 8546 },
    { year: '2024', deaths: 8271 },
];

const muertesPorActor2024 = [
    { name: 'Motociclistas', value: 61.35, fill: '#facc15' },
    { name: 'Peatones',      value: 22.1,  fill: '#fb923c' },
    { name: 'Conductores',   value: 11.2,  fill: '#60a5fa' },
    { name: 'Ciclistas',     value: 4.1,   fill: '#34d399' },
    { name: 'Otros',         value: 1.25,  fill: '#a78bfa' },
];

const tendencia2025 = [
    { mes: 'Ene',  reduccion: 3 },
    { mes: 'Feb',  reduccion: 5 },
    { mes: 'Mar',  reduccion: 5 },
];

const ciudadesMejora2025 = [
    { ciudad: 'Chocó (dpto.)',  pct: -60 },
    { ciudad: 'Tolima (dpto.)', pct: -23 },
    { ciudad: 'Neiva',          pct: -42 },
    { ciudad: 'Medellín',       pct: -12 },
    { ciudad: 'Ibagué',         pct: -71 },
    { ciudad: 'Arauca',         pct: -33 },
];

const causasPrincipales = [
    { causa: 'Desobedecer señales de tránsito', pct: 50,  color: 'bg-red-500' },
    { causa: 'Exceso de velocidad',             pct: 23.6, color: 'bg-orange-500' },
    { causa: 'Exceso de horas de conducción',   pct: 5.2,  color: 'bg-yellow-400' },
    { causa: 'Malas condiciones de la vía',     pct: 5.2,  color: 'bg-blue-400' },
    { causa: 'Otras causas',                    pct: 16,   color: 'bg-gray-500' },
];

// ─── Tooltip personalizado ─────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-800 border border-yellow-400/30 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-yellow-400 font-bold text-sm mb-1">{label}</p>
                {payload.map((p, i) => (
                    <p key={i} className="text-white text-sm">
                        {typeof p.value === 'number'
                            ? p.name === 'deaths'
                                ? `${new Intl.NumberFormat('es-CO').format(p.value)} fallecidos`
                                : `${p.value}% de reducción`
                            : p.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

// ─── Componente KPI card ───────────────────────────────────────────────────────
function KpiCard({ icon: Icon, value, label, sub, color, trend }) {
    return (
        <div className={`bg-gray-800/70 border ${color} rounded-2xl p-5 flex flex-col gap-2 shadow-lg hover:scale-[1.02] transition-transform duration-300`}>
            <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${color.replace('border-', 'from-').replace('/40', '/20')} to-transparent`}>
                    <Icon className="w-5 h-5 text-yellow-400" />
                </div>
                {trend && (
                    <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${trend > 0 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
                        {trend > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {Math.abs(trend)}%
                    </span>
                )}
            </div>
            <div>
                <p className="text-2xl sm:text-3xl font-black text-white leading-none">{value}</p>
                <p className="text-yellow-400 font-semibold text-sm mt-1">{label}</p>
                {sub && <p className="text-gray-400 text-xs mt-1 leading-relaxed">{sub}</p>}
            </div>
        </div>
    );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function Estadisticas() {
    const [isVisible, setIsVisible] = useState(false);
    const [expandCausas, setExpandCausas] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 px-4">

            {/* Fondo decorativo */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-red-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className={`relative max-w-6xl mx-auto space-y-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                {/* ── ENCABEZADO ── */}
                <header className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 text-sm font-medium text-yellow-400">
                        <Activity className="w-4 h-4" />
                        Fuente: ANSV · ONSV · Datos actualizados Q1 2025
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                        Estadísticas de{' '}
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            Seguridad Vial
                        </span>
                        <br />en Colombia
                    </h1>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                        Conoce el impacto real de los siniestros viales en Colombia, los actores más vulnerables
                        y las tendencias más recientes para entender por qué la educación vial salva vidas.
                    </p>
                </header>

                {/* ── KPIs PRINCIPALES ── */}
                <section>
                    <h2 className="text-xl font-bold text-gray-300 mb-5 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-yellow-400" />
                        Cifras clave 2024–2025
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <KpiCard
                            icon={AlertCircle}
                            value="8.271"
                            label="Fallecidos en 2024"
                            sub="Leve reducción vs 8.546 en 2023"
                            color="border-red-500/40"
                            trend={-3.2}
                        />
                        <KpiCard
                            icon={Bike}
                            value="61,35%"
                            label="Víctimas motociclistas"
                            sub="17.128 lesionados en 2024 de 27.924 totales"
                            color="border-yellow-500/40"
                            trend={null}
                        />
                        <KpiCard
                            icon={TrendingDown}
                            value="98 vidas"
                            label="Salvadas en Q1 2025"
                            sub="Reducción del 5% vs mismo período de 2024"
                            color="border-green-500/40"
                            trend={-5}
                        />
                        <KpiCard
                            icon={Users}
                            value="22 / día"
                            label="Promedio de muertes"
                            sub="Registradas durante 2024 en todo el país"
                            color="border-orange-500/40"
                            trend={null}
                        />
                    </div>
                </section>

                {/* ── GRÁFICA HISTÓRICA ── */}
                <section className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-xl">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
                                <TrendingUp className="w-6 h-6" />
                                Fallecidos por año (2017–2024)
                            </h2>
                            <p className="text-gray-400 text-sm mt-1">
                                Histórico de víctimas fatales en siniestros viales a nivel nacional.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-700/50 rounded-lg px-3 py-2">
                            <Calendar className="w-3.5 h-3.5" />
                            Fuente: ANSV / Medicina Legal
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={muertesPorAnio} barSize={36}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                            <XAxis dataKey="year" stroke="#9ca3af" tick={{ fontSize: 13 }} />
                            <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} tickFormatter={v => new Intl.NumberFormat('es-CO').format(v)} />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="deaths" name="deaths" radius={[6, 6, 0, 0]}>
                                {muertesPorAnio.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.year === '2020' ? '#60a5fa' : entry.year === '2024' ? '#4ade80' : '#facc15'}
                                        fillOpacity={entry.year === '2024' ? 1 : 0.85}
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                    <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-yellow-400 inline-block"></span> Años regulares</span>
                        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-blue-400 inline-block"></span> 2020 — reducción por pandemia</span>
                        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-400 inline-block"></span> 2024 — primer descenso post pandemia</span>
                    </div>
                </section>

                {/* ── ACTORES VIALES + PIE ── */}
                <section className="grid lg:grid-cols-2 gap-6">
                    {/* Pie Chart */}
                    <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-xl">
                        <h2 className="text-xl font-bold text-yellow-400 mb-1 flex items-center gap-2">
                            <Users className="w-5 h-5" />
                            Fallecidos por actor vial — 2024
                        </h2>
                        <p className="text-gray-400 text-xs mb-4">Distribución porcentual a nivel nacional</p>
                        <ResponsiveContainer width="100%" height={220}>
                            <PieChart>
                                <Pie
                                    data={muertesPorActor2024}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={55}
                                    outerRadius={90}
                                    paddingAngle={3}
                                    dataKey="value"
                                >
                                    {muertesPorActor2024.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(v) => `${v}%`} contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: 8 }} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="grid grid-cols-2 gap-2 mt-3">
                            {muertesPorActor2024.map(({ name, value, fill }) => (
                                <div key={name} className="flex items-center gap-2 text-xs text-gray-300">
                                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: fill }}></span>
                                    <span>{name}</span>
                                    <span className="ml-auto font-bold text-white">{value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tarjetas actores */}
                    <div className="space-y-4">
                        {[
                            {
                                icon: Bike,
                                titulo: 'Motociclistas — el actor más vulnerable',
                                color: 'border-yellow-500/40 bg-yellow-500/5',
                                accent: 'text-yellow-400',
                                badge: '61.35% de los fallecidos',
                                badgeColor: 'bg-yellow-400/20 text-yellow-300',
                                texto: 'En 2024, 17.128 motociclistas resultaron lesionados — el 61.35% del total. El crecimiento de muertes entre 2020 y 2024 fue del 113.67%, impulsado por el auge de la motorización.',
                            },
                            {
                                icon: Users,
                                titulo: 'Jóvenes entre 15 y 35 años',
                                color: 'border-orange-500/40 bg-orange-500/5',
                                accent: 'text-orange-400',
                                badge: '44% de las víctimas',
                                badgeColor: 'bg-orange-400/20 text-orange-300',
                                texto: 'Los jóvenes siguen siendo el grupo etario más afectado, concentrando casi la mitad de todas las muertes en vía. La inexperiencia y conductas de riesgo son factores determinantes.',
                            },
                            {
                                icon: AlertCircle,
                                titulo: 'Baja judicialización',
                                color: 'border-red-500/40 bg-red-500/5',
                                accent: 'text-red-400',
                                badge: 'Solo el 4% llega a juicio',
                                badgeColor: 'bg-red-400/20 text-red-300',
                                texto: 'Menos del 4% de los siniestros viales mortales derivan en un proceso judicial formal, lo que evidencia una brecha en la rendición de cuentas del sistema.',
                            },
                        ].map(({ icon: Icon, titulo, color, accent, badge, badgeColor, texto }) => (
                            <div key={titulo} className={`border ${color} rounded-xl p-4 flex gap-4`}>
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                                        <Icon className={`w-5 h-5 ${accent}`} />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 flex-wrap mb-1">
                                        <h3 className={`font-bold text-sm ${accent}`}>{titulo}</h3>
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${badgeColor}`}>{badge}</span>
                                    </div>
                                    <p className="text-gray-300 text-xs leading-relaxed">{texto}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── TENDENCIA 2025 ── */}
                <section className="bg-gray-800/60 border border-green-500/30 rounded-2xl p-6 shadow-xl">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
                                <TrendingDown className="w-6 h-6" />
                                Tendencia positiva en 2025
                            </h2>
                            <p className="text-gray-400 text-sm mt-1">
                                Primera reducción sostenida de fallecidos desde la pandemia (ONSV, Q1 2025)
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-green-300 bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-2">
                            <Shield className="w-3.5 h-3.5" />
                            98 vidas salvadas en Q1 2025
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Gráfica de reducción mensual */}
                        <div>
                            <p className="text-sm text-gray-400 mb-3">% de reducción vs mismo período 2024</p>
                            <ResponsiveContainer width="100%" height={180}>
                                <LineChart data={tendencia2025}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                    <XAxis dataKey="mes" stroke="#9ca3af" tick={{ fontSize: 12 }} />
                                    <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} domain={[0, 8]} tickFormatter={v => `${v}%`} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line type="monotone" dataKey="reduccion" stroke="#4ade80" strokeWidth={3} dot={{ fill: '#4ade80', r: 5 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Ciudades con mayor mejora */}
                        <div>
                            <p className="text-sm text-gray-400 mb-3 flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                Ciudades y departamentos con mayor reducción
                            </p>
                            <div className="space-y-2">
                                {ciudadesMejora2025.map(({ ciudad, pct }) => (
                                    <div key={ciudad} className="flex items-center gap-3">
                                        <span className="text-xs text-gray-300 w-32 flex-shrink-0">{ciudad}</span>
                                        <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                                                style={{ width: `${Math.abs(pct)}%` }}
                                            />
                                        </div>
                                        <span className="text-green-400 text-xs font-bold w-10 text-right">{pct}%</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 mt-3 italic">
                                * Chocó, Tolima, Caldas, Boyacá y Antioquia lideraron la reducción departamental.
                            </p>
                        </div>
                    </div>

                    {/* Desglose por actor vial en 2025 */}
                    <div className="mt-6 grid sm:grid-cols-3 gap-4 border-t border-gray-700 pt-6">
                        {[
                            { label: 'Motociclistas', vidas: 40, icon: Bike, color: 'text-yellow-400' },
                            { label: 'Conductores de vehículo', vidas: 35, icon: Car, color: 'text-blue-400' },
                            { label: 'Peatones', vidas: 23, icon: Users, color: 'text-orange-400' },
                        ].map(({ label, vidas, icon: Icon, color }) => (
                            <div key={label} className="bg-gray-700/40 rounded-xl p-4 text-center">
                                <Icon className={`w-6 h-6 ${color} mx-auto mb-2`} />
                                <p className="text-2xl font-black text-white">+{vidas}</p>
                                <p className="text-xs text-gray-300 mt-1">vidas salvadas</p>
                                <p className={`text-xs font-semibold mt-1 ${color}`}>{label}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-4 text-xs text-gray-500 italic text-center">
                        ⚠ Excepción: ciclistas registraron un aumento del 22% en enero–febrero de 2025.
                    </p>
                </section>

                {/* ── CAUSAS PRINCIPALES ── */}
                <section className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-xl">
                    <button
                        onClick={() => setExpandCausas(!expandCausas)}
                        className="w-full flex items-center justify-between mb-4"
                    >
                        <h2 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
                            <AlertTriangle className="w-6 h-6" />
                            Causas principales de siniestros fatales
                        </h2>
                        {expandCausas ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </button>

                    <div className="space-y-3">
                        {(expandCausas ? causasPrincipales : causasPrincipales.slice(0, 3)).map(({ causa, pct, color }) => (
                            <div key={causa}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-200">{causa}</span>
                                    <span className="text-yellow-400 font-bold">{pct}%</span>
                                </div>
                                <div className="w-full h-2.5 bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${color} rounded-full transition-all duration-700`}
                                        style={{ width: `${pct}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {!expandCausas && (
                        <p className="text-xs text-gray-500 mt-3 text-center">
                            Toca el título para ver todas las causas →
                        </p>
                    )}

                    <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-300 border-t border-gray-700 pt-5">
                        <div className="flex items-start gap-2">
                            <Calendar className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <p>Los <strong className="text-white">martes</strong> son los días con mayor reducción de siniestros en 2025 (–35.6%), seguidos de los lunes (–12.4%).</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                            <p>Los corredores <strong className="text-white">IP Antioquia–Bolívar, IP Cesar–Guajira y Rumichaca–Pasto</strong> concentran más víctimas en vías concesionadas.</p>
                        </div>
                    </div>
                </section>

                {/* ── CONTEXTO REGIONAL ── */}
                <section className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-xl">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                        <MapPin className="w-6 h-6" />
                        Contexto regional y global
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        {[
                            { stat: '103.000+', desc: 'muertes viales acumuladas en Colombia en los últimos 15 años', color: 'border-red-500/30 text-red-400' },
                            { stat: '145.000', desc: 'muertes en las Américas en 2021 (12% del total global) — OPS', color: 'border-orange-500/30 text-orange-400' },
                            { stat: '27.924', desc: 'personas lesionadas (no fatales) en vías colombianas en 2024', color: 'border-yellow-500/30 text-yellow-400' },
                            { stat: '652',    desc: 'fallecidos en Bogotá durante 2024, con 4.902 lesionados', color: 'border-blue-500/30 text-blue-400' },
                        ].map(({ stat, desc, color }) => (
                            <div key={stat} className={`border ${color.split(' ')[0]} rounded-xl p-4`}>
                                <p className={`text-3xl font-black ${color.split(' ')[1]} mb-1`}>{stat}</p>
                                <p className="text-gray-300 text-xs leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ── */}
                <div className="text-center space-y-4 pb-4">
                    <p className="text-gray-400 text-sm max-w-xl mx-auto">
                        Datos provistos por la Agencia Nacional de Seguridad Vial (ANSV) y el Observatorio Nacional
                        de Seguridad Vial (ONSV). Última actualización: Q1 2025.
                    </p>
                    <a
                        href="https://www.ansv.gov.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-3 rounded-full shadow-xl hover:scale-105 transition-transform"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Ver informe completo ANSV
                    </a>
                </div>

            </div>
        </main>
    );
}