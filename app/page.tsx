export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 to-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-green-400 mb-4">⭐ PIXEL QUEST ⭐</h1>
        <p className="text-2xl text-cyan-300 mb-8">Por trás de todo CNPJ existe um CPF</p>
        <div className="space-y-4">
          <a href="/tela" className="inline-block px-8 py-3 bg-green-400 text-black font-bold rounded hover:bg-green-500">
            🖥️ Telão
          </a>
          <br/>
          <a href="/sala" className="inline-block px-8 py-3 bg-cyan-400 text-black font-bold rounded hover:bg-cyan-500">
            📱 Sala
          </a>
        </div>
      </div>
    </main>
  )
}
