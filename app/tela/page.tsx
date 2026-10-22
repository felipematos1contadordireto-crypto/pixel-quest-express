'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const QRCode = dynamic(() => import('qrcode.react'), { ssr: false }) as any
export default function Tela() {
  const [qrValue, setQrValue] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setQrValue(`${window.location.origin}/sala`)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-black flex items-center justify-center p-8">
      <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="bg-white rounded-lg p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-black mb-4">📱 ESCANEIE!</h2>
          {qrValue && <QRCode value={qrValue} size={256} level="H" />}
        </div>
        <div className="bg-gradient-to-b from-purple-900 to-black rounded-lg p-8 text-center flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-green-400 mb-4">🎮 PIXEL QUEST</h1>
          <p className="text-2xl text-cyan-300">Esperando jogadores...</p>
        </div>
      </div>
    </main>
  )
}
