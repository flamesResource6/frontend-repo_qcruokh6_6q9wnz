import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slides from './components/Slides'
import Marketplace from './components/Marketplace'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.08),transparent_60%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Slides />
        <Marketplace />
        <footer className="border-t border-white/10 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white/60 text-sm">
            © {new Date().getFullYear()} Spectra. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
