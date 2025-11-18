import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] sm:h-[85vh] lg:h-screen w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur text-white/90">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Now featuring interactive 3D
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow">
            Spectacles that blend fashion and technology
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Explore new and trending designs in a hyper-interactive experience. Rotate, compare and add to your cart in seconds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#marketplace" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow/30 shadow-white/20 hover:shadow-white/40 transition">
              Shop the marketplace
            </a>
            <a href="#trending" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition">
              See what's trending
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/10 to-slate-950" />
    </section>
  );
}
