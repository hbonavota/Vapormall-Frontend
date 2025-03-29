import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-purple-900 via-pink-500 to-cyan-400">
      {/* Grid de fondo estilo vaporwave */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_transparent_1px),_linear-gradient(90deg,_transparent_1px,_transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-wider [text-shadow:0_0_10px_rgba(255,255,255,0.5)]">
            VAPORMALL
          </h1>
          <p className="text-xl text-white/80 font-light">
            Tu destino para la nostalgia digital
          </p>
        </header>

        <main className="flex flex-col h-[calc(100vh-200px)]">
          {/* Componente 1 */}
          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:border-pink-400 transition-all duration-300 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <h2 className="text-xl font-bold text-white mb-2">Componente 1</h2>
            <p className="text-white/80 text-sm">Contenido del primer componente</p>
          </div>

          {/* Componente 2 */}
          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <h2 className="text-xl font-bold text-white mb-2">Componente 2</h2>
            <p className="text-white/80 text-sm">Contenido del segundo componente</p>
          </div>
        </main>

        <footer className="mt-8 text-center text-white/60">
          <p>© 2024 VapormallFE - Todos los derechos reservados</p>
        </footer>
      </div>
    </div>
  )
}

export default App
