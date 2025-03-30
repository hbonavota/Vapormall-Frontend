import { useState } from 'react'
import VideoSection from './components/VideoSection'

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider [text-shadow:0_0_10px_rgba(255,255,255,0.5)]">
            VAPORMALL
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light">
            Vaporwave radio station
          </p>
        </header>

        <main className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden">
          <VideoSection />
        </main>

        <footer className="mt-8 text-center text-white/60">
          <p>© 2024 Vapormall Team</p>
        </footer>
      </div>
    </div>
  )
}

export default App
