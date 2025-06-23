import React, { useState, useEffect } from 'react';
import questionsData from './data/questions';

export default function Evaluaciones() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
  }, []);

  const handleChange = (questionIndex, optionIndex) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: optionIndex });
  };

  const handleSubmit = () => {
    let points = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.correctAnswer) {
        points++;
      }
    });
    setScore(points);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Evaluación de Seguridad Vial</h1>

        {!submitted ? (
          <form className="space-y-8">
            {questions.map((q, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-6 shadow-md border border-yellow-400/30">
                <p className="font-semibold text-yellow-300 mb-3">{i + 1}. {q.question}</p>
                <div className="space-y-2">
                  {q.options.map((opt, j) => (
                    <label key={j} className="block">
                      <input
                        type="radio"
                        name={`question-${i}`}
                        value={j}
                        checked={userAnswers[i] === j}
                        onChange={() => handleChange(i, j)}
                        className="mr-2 accent-yellow-400"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg shadow-lg mt-4"
              >
                Enviar Evaluación
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-gray-900 rounded-2xl p-8 text-center border-2 border-yellow-500 shadow-xl">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">¡Evaluación Finalizada!</h2>
            <p className="text-xl text-white mb-2">Tu puntaje fue:</p>
            <p className="text-5xl font-extrabold text-yellow-500">{score} / 10</p>
            <p className="mt-4 text-gray-300">
              {score >= 8 ? '¡Excelente! Has demostrado un buen conocimiento de seguridad vial.' :
              score >= 5 ? 'Bien. Sin embargo, te recomendamos repasar algunos temas.' :
              'Revisa nuevamente los conceptos y vuelve a intentarlo.'}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setUserAnswers({});
                setScore(0);
                const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
                setQuestions(shuffled.slice(0, 10));
              }}
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg shadow-lg"
            >
              Volver a Intentar
            </button>
          </div>
        )}
      </div> 
    </main>
  );
}
