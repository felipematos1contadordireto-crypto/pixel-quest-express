'use client'
import { useState } from 'react'

const quizzes = [
  { id: 1, q: "Qual é a tese principal?", opts: ["Eficiência", "Confiança", "Tecnologia", "Preço"], ans: 1 },
  { id: 2, q: "O que diferencia uma empresa?", opts: ["Preço", "Tech", "Confiança", "Tamanho"], ans: 2 },
  { id: 3, q: "Por que marcas importam?", opts: ["Vender mais", "Confiança", "Marketing", "Propaganda"], ans: 1 },
  { id: 4, q: "Qual valor é essencial?", opts: ["Preço baixo", "Confiança", "Quantidade", "Velocidade"], ans: 1 },
  { id: 5, q: "Como construir confiança?", opts: ["Desconto", "Qualidade", "Propaganda", "Velocidade"], ans: 1 },
]

export default function Sala() {
  const [step, setStep] = useState('welcome')
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)

  const handleAnswer = (idx: number) => {
    if (idx === quizzes[qIdx].ans) setScore(score + 1)
    setQIdx(qIdx + 1)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 to-black flex items-center justify-center p-4">
      {step === 'welcome' && (
        <div className="text-center">
          <h1 className="text-5xl font-bold text-green-400 mb-8">⭐ PIXEL QUEST ⭐</h1>
          <button onClick={() => setStep('quiz')} className="px-8 py-4 bg-green-400 text-black font-bold text-lg rounded">
            COMEÇAR
          </button>
        </div>
      )}

      {step === 'quiz' && qIdx < quizzes.length && (
        <div className="max-w-sm w-full">
          <p className="text-green-400 mb-4 text-lg">{qIdx + 1}/{quizzes.length}</p>
          <h2 className="text-white text-lg mb-6">{quizzes[qIdx].q}</h2>
          <div className="space-y-3">
            {quizzes[qIdx].opts.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(i)} className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 text-left">
                {String.fromCharCode(65 + i)}) {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {qIdx >= quizzes.length && (
        <div className="text-center">
          <h1 className="text-5xl font-bold text-green-400 mb-4">🎉 PARABÉNS!</h1>
          <p className="text-3xl text-yellow-400 mb-4">{score}/{quizzes.length} acertos</p>
          <p className="text-cyan-300 mb-8">Horas conquistadas: {Math.ceil(score * 2)}</p>
          <button onClick={() => { setStep('welcome'); setQIdx(0); setScore(0); }} className="px-8 py-4 bg-green-400 text-black font-bold text-lg rounded">
            JOGAR NOVAMENTE
          </button>
        </div>
      )}
    </main>
  )
}
