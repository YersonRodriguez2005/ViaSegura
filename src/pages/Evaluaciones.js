import React, { useState, useEffect } from "react";
import {
  Shield,
  Car,
  BookOpen,
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  AlertTriangle,
  Bike,
} from "lucide-react";
import {
  generalQuestions,
  motoQuestions,
  carroQuestions,
} from "./data/questions";

// ─── Configuración de modos ───────────────────────────────────────────────────
const MODES = [
  {
    id: "general",
    label: "Generales",
    sublabel: "Normas comunes",
    icon: BookOpen,
    color: "from-yellow-400 to-yellow-600",
    borderColor: "border-yellow-400/40",
    activeBg: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    textActive: "text-black",
    accent: "text-yellow-400",
    accentBg: "bg-yellow-400/10",
    accentBorder: "border-yellow-400/30",
    glow: "shadow-yellow-500/20",
    description:
      "Normas de tránsito, señales y seguridad vial aplicables a todos los conductores en Colombia.",
    questions: generalQuestions,
    badge: "28 preguntas",
  },
  {
    id: "moto",
    label: "Motociclistas",
    sublabel: "Categoría A1 / A2",
    icon: Bike,
    color: "from-orange-400 to-red-500",
    borderColor: "border-orange-400/40",
    activeBg: "bg-gradient-to-r from-orange-400 to-red-500",
    textActive: "text-white",
    accent: "text-orange-400",
    accentBg: "bg-orange-400/10",
    accentBorder: "border-orange-400/30",
    glow: "shadow-orange-500/20",
    description:
      "Preguntas específicas para motociclistas: equipamiento, técnicas de conducción, normativa A1/A2.",
    questions: motoQuestions,
    badge: "25 preguntas",
  },
  {
    id: "carro",
    label: "Automóvil",
    sublabel: "Categoría B",
    icon: Car,
    color: "from-blue-400 to-blue-600",
    borderColor: "border-blue-400/40",
    activeBg: "bg-gradient-to-r from-blue-400 to-blue-600",
    textActive: "text-white",
    accent: "text-blue-400",
    accentBg: "bg-blue-400/10",
    accentBorder: "border-blue-400/30",
    glow: "shadow-blue-500/20",
    description:
      "Preguntas específicas para conductores de automóvil: licencia B, mantenimiento, conducción defensiva.",
    questions: carroQuestions,
    badge: "25 preguntas",
  },
];

// ─── Componente principal ─────────────────────────────────────────────────────
export default function Evaluaciones() {
  const [selectedMode, setSelectedMode] = useState(null); // null = pantalla de selección
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Seleccionar modo e iniciar evaluación
  const startEvaluation = (mode) => {
    const shuffled = [...mode.questions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
    setUserAnswers({});
    setSubmitted(false);
    setScore(0);
    setSelectedMode(mode);
  };

  // Registrar respuesta
  const handleChange = (questionIndex, optionIndex) => {
    if (submitted) return;
    setUserAnswers({ ...userAnswers, [questionIndex]: optionIndex });
  };

  // Enviar evaluación
  const handleSubmit = () => {
    if (Object.keys(userAnswers).length < questions.length) {
      alert("Por favor responde todas las preguntas antes de enviar.");
      return;
    }
    let points = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.correctAnswer) points++;
    });
    setScore(points);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reintentar con el mismo modo
  const handleRetry = () => {
    startEvaluation(selectedMode);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Volver a la selección de modo
  const handleBack = () => {
    setSelectedMode(null);
    setSubmitted(false);
    setUserAnswers({});
    setScore(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mode = selectedMode;
  const answeredCount = Object.keys(userAnswers).length;
  const progress =
    questions.length > 0 ? (answeredCount / questions.length) * 100 : 0;

  // ── Mensaje de resultado ──
  const getResultMessage = (s) => {
    if (s === 10)
      return {
        text: "¡Perfecto! Dominas completamente este módulo. ¡Eres un conductor ejemplar!",
        color: "text-green-400",
      };
    if (s >= 8)
      return {
        text: "¡Excelente! Tienes un sólido conocimiento. Estás listo para la vía.",
        color: "text-green-400",
      };
    if (s >= 6)
      return {
        text: "Bien. Repasa los temas en los que fallaste antes de presentar tu examen.",
        color: "text-yellow-400",
      };
    if (s >= 4)
      return {
        text: "Regular. Te recomendamos estudiar el módulo de teoría antes de volver a intentarlo.",
        color: "text-orange-400",
      };
    return {
      text: "Necesitas repasar los conceptos fundamentales. ¡No te rindas, vuelve a la teoría!",
      color: "text-red-400",
    };
  };

  // ═════════════════════════════════════════════════════════════════
  // PANTALLA 1 — SELECCIÓN DE MODO
  // ═════════════════════════════════════════════════════════════════
  if (!selectedMode) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-12">
        {/* Fondo decorativo */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div
          className={`relative max-w-5xl mx-auto transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-6 text-sm font-medium text-yellow-400">
              <Shield className="w-4 h-4" />
              Simulador de Examen de Tránsito — Colombia
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
              Evaluaciones de{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Seguridad Vial
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Selecciona el módulo de evaluación según el tipo de vehículo o la
              categoría de licencia que estás preparando. Cada evaluación tiene{" "}
              <strong className="text-yellow-400">
                10 preguntas aleatorias
              </strong>
              .
            </p>
          </div>

          {/* Tarjetas de modo */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {MODES.map((m) => {
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => startEvaluation(m)}
                  className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 border ${m.borderColor} rounded-2xl p-6 text-left transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:${m.glow} focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                >
                  {/* Badge */}
                  <span
                    className={`absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full ${m.accentBg} ${m.accent} border ${m.accentBorder}`}
                  >
                    {m.badge}
                  </span>

                  {/* Icono */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${m.color} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Texto */}
                  <h2 className="text-xl font-bold text-white mb-1">
                    {m.label}
                  </h2>
                  <p className={`text-sm font-medium mb-3 ${m.accent}`}>
                    {m.sublabel}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {m.description}
                  </p>

                  {/* CTA */}
                  <div
                    className={`mt-5 flex items-center gap-2 text-sm font-semibold ${m.accent} group-hover:gap-3 transition-all duration-200`}
                  >
                    Comenzar evaluación
                    <span className="text-lg">→</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Nota informativa */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 text-center">
            <p className="text-gray-400 text-sm">
              💡 <strong className="text-gray-200">Consejo:</strong> Repasa el
              módulo de teoría correspondiente antes de presentar la evaluación.
              Las preguntas se mezclan aleatoriamente en cada intento.
            </p>
          </div>
        </div>
      </main>
    );
  }

  // ═════════════════════════════════════════════════════════════════
  // PANTALLA 2 — RESULTADO
  // ═════════════════════════════════════════════════════════════════
  if (submitted) {
    const result = getResultMessage(score);
    const pct = (score / 10) * 100;

    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header modo */}
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={handleBack}
              className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
            >
              ← Cambiar módulo
            </button>
            <span className="text-gray-600">|</span>
            <span className={`text-sm font-medium ${mode.accent}`}>
              {mode.label} — {mode.sublabel}
            </span>
          </div>

          {/* Tarjeta de resultado */}
          <div
            className={`bg-gray-900 rounded-3xl p-8 sm:p-10 text-center border-2 ${mode.borderColor} shadow-2xl mb-8`}
          >
            <Trophy
              className={`w-16 h-16 mx-auto mb-4 ${score >= 8 ? "text-yellow-400" : score >= 6 ? "text-orange-400" : "text-gray-500"}`}
            />
            <h2 className="text-3xl font-bold text-white mb-2">
              ¡Evaluación Finalizada!
            </h2>
            <p className={`text-sm font-medium mb-6 ${mode.accent}`}>
              {mode.label} · {mode.sublabel}
            </p>

            {/* Puntaje circular */}
            <div className="relative inline-flex items-center justify-center mb-6">
              <svg className="w-36 h-36 -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke={
                    score >= 8 ? "#facc15" : score >= 6 ? "#f97316" : "#ef4444"
                  }
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${pct * 3.14} 314`}
                  style={{ transition: "stroke-dasharray 1s ease" }}
                />
              </svg>
              <div className="absolute text-center">
                <p className="text-5xl font-extrabold text-white leading-none">
                  {score}
                </p>
                <p className="text-gray-400 text-sm">de 10</p>
              </div>
            </div>

            <p
              className={`text-base font-medium mb-8 max-w-md mx-auto ${result.color}`}
            >
              {result.text}
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRetry}
                className={`flex items-center justify-center gap-2 ${mode.activeBg} ${mode.textActive} font-bold px-8 py-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity`}
              >
                <RotateCcw className="w-4 h-4" />
                Volver a intentar
              </button>
              <button
                onClick={handleBack}
                className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-colors"
              >
                Cambiar módulo
              </button>
            </div>
          </div>

          {/* Revisión de respuestas */}
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-yellow-400" />
            Revisión de respuestas
          </h3>
          <div className="space-y-4">
            {questions.map((q, i) => {
              const isCorrect = userAnswers[i] === q.correctAnswer;
              return (
                <div
                  key={i}
                  className={`rounded-xl p-5 border ${
                    isCorrect
                      ? "bg-green-900/20 border-green-500/30"
                      : "bg-red-900/20 border-red-500/30"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="font-semibold text-white text-sm">
                      {i + 1}. {q.question}
                    </p>
                  </div>
                  <div className="pl-8 space-y-1">
                    {q.options.map((opt, j) => (
                      <div
                        key={j}
                        className={`text-sm px-3 py-1.5 rounded-lg ${
                          j === q.correctAnswer
                            ? "bg-green-500/20 text-green-300 font-medium"
                            : j === userAnswers[i] && !isCorrect
                              ? "bg-red-500/20 text-red-300 line-through"
                              : "text-gray-400"
                        }`}
                      >
                        {j === q.correctAnswer && "✓ "}
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  // ═════════════════════════════════════════════════════════════════
  // PANTALLA 3 — EVALUACIÓN EN CURSO
  // ═════════════════════════════════════════════════════════════════
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header sticky */}
        <div className="bg-gray-900/90 backdrop-blur border border-gray-700 rounded-2xl p-4 mb-8 sticky top-4 z-10 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <button
                onClick={handleBack}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                ← Salir
              </button>
              <span className="text-gray-600">|</span>
              <div
                className={`flex items-center gap-2 text-sm font-semibold ${mode.accent}`}
              >
                {React.createElement(mode.icon, { className: "w-4 h-4" })}
                {mode.label}
              </div>
            </div>
            <span className="text-gray-300 text-sm font-medium">
              {answeredCount} / {questions.length} respondidas
            </span>
          </div>
          {/* Barra de progreso */}
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${mode.color} transition-all duration-500`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Título de la evaluación */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-1">
            Evaluación: {mode.label}
          </h1>
          <p className={`text-sm ${mode.accent}`}>
            {mode.sublabel} · 10 preguntas aleatorias
          </p>
        </div>

        {/* Preguntas */}
        <div className="space-y-6">
          {questions.map((q, i) => {
            const answered = userAnswers[i] !== undefined;
            return (
              <div
                key={i}
                className={`bg-gray-800/80 rounded-2xl p-6 border transition-all duration-300 ${
                  answered ? mode.borderColor : "border-gray-700"
                }`}
              >
                {/* Número y pregunta */}
                <div className="flex items-start gap-3 mb-5">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      answered
                        ? `bg-gradient-to-br ${mode.color} text-white`
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <p className="font-semibold text-yellow-200 leading-snug pt-0.5">
                    {q.question}
                  </p>
                </div>

                {/* Opciones */}
                <div className="space-y-2 pl-11">
                  {q.options.map((opt, j) => {
                    const isSelected = userAnswers[i] === j;
                    return (
                      <label
                        key={j}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 border ${
                          isSelected
                            ? `${mode.accentBg} ${mode.accentBorder} ${mode.accent}`
                            : "bg-gray-700/40 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${i}`}
                          value={j}
                          checked={isSelected}
                          onChange={() => handleChange(i, j)}
                          className="sr-only"
                        />
                        {/* Radio personalizado */}
                        <span
                          className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                            isSelected
                              ? `border-current bg-current`
                              : "border-gray-500"
                          }`}
                        >
                          {isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
                          )}
                        </span>
                        <span className="text-sm leading-snug">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Advertencia si faltan preguntas */}
        {answeredCount < questions.length && (
          <div className="mt-6 flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-xl px-4 py-3">
            <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <p className="text-yellow-300 text-sm">
              Te faltan <strong>{questions.length - answeredCount}</strong>{" "}
              pregunta(s) por responder.
            </p>
          </div>
        )}

        {/* Botón de envío */}
        <div className="text-center mt-8 pb-8">
          <button
            onClick={handleSubmit}
            disabled={answeredCount < questions.length}
            className={`inline-flex items-center gap-3 font-bold px-10 py-4 rounded-2xl shadow-lg text-lg transition-all duration-300 ${
              answeredCount === questions.length
                ? `bg-gradient-to-r ${mode.color} ${mode.textActive} hover:opacity-90 hover:scale-105`
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            Enviar Evaluación
          </button>
          <p className="text-gray-500 text-xs mt-3">
            Responde todas las preguntas para habilitar el envío.
          </p>
        </div>
      </div>
    </main>
  );
}
