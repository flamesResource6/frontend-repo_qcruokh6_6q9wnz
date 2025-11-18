import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const products = [
  {
    id: 'nova-carbon',
    name: 'Nova Carbon',
    badge: 'New',
    price: 179,
    rating: 4.8,
    colors: ['#111827', '#6B7280', '#60A5FA'],
    image: 'https://images.unsplash.com/photo-1652361561822-b2aa3f30416a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb3ZhJTIwQ2FyYm9ufGVufDB8MHx8fDE3NjM0OTIzMDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'aurora-lite',
    name: 'Aurora Lite',
    badge: 'Trending',
    price: 149,
    rating: 4.6,
    colors: ['#F59E0B', '#EF4444', '#10B981'],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'zenith-pro',
    name: 'Zenith Pro',
    badge: 'Hot',
    price: 229,
    rating: 4.9,
    colors: ['#22C55E', '#0EA5E9', '#8B5CF6'],
    image: 'https://images.unsplash.com/photo-1649609732631-0c7b63d4ef52?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxaZW5pdGglMjBQcm98ZW58MHwwfHx8MTc2MzQ5MjMwN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'prism-air',
    name: 'Prism Air',
    badge: 'New',
    price: 129,
    rating: 4.5,
    colors: ['#F97316', '#06B6D4', '#A3E635'],
    image: 'https://images.unsplash.com/photo-1756224470421-12d866062da2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcmlzbSUyMEFpcnxlbnwwfDB8fHwxNzYzNDkyMzA4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function Slides() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i) => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollTo({ left: i * width, behavior: 'smooth' });
    setIndex(i);
  };

  useEffect(() => {
    const handleResize = () => scrollTo(index);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [index]);

  return (
    <section id="trending" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Trending picks</h2>
            <p className="mt-1 text-white/60">Swipe through featured styles</p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scrollTo(Math.max(0, index - 1))} className="rounded-xl bg-white/10 p-2 text-white/80 ring-1 ring-white/15 hover:bg-white/15">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scrollTo(Math.min(products.length - 1, index + 1))} className="rounded-xl bg-white/10 p-2 text-white/80 ring-1 ring-white/15 hover:bg-white/15">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={containerRef} className="relative aspect-[16/9] w-full overflow-x-auto snap-x snap-mandatory rounded-2xl ring-1 ring-white/10 bg-slate-900/40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/30">
          <div className="flex h-full w-[400%]" style={{ width: `${products.length * 100}%` }}>
            {products.map((p, i) => (
              <div key={p.id} className="relative h-full w-full flex-shrink-0 snap-start">
                <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-slate-950/30 to-transparent" />

                <div className="relative z-10 flex h-full items-end p-6 sm:p-10">
                  <div className="max-w-md">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" /> {p.badge}
                    </div>

                    <h3 className="mt-4 text-2xl sm:text-4xl font-semibold text-white drop-shadow">{p.name}</h3>
                    <div className="mt-2 flex items-center gap-2 text-amber-300">
                      <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
                      <span className="text-white/90">{p.rating}</span>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      {p.colors.map((c) => (
                        <span key={c} className="h-6 w-6 rounded-full ring-2 ring-white/30" style={{ backgroundColor: c }} />
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold shadow/30 shadow-white/20 hover:shadow-white/40 transition">Add to cart — ${p.price}</button>
                      <button className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition">View details</button>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0" aria-hidden>
                  <div className={`absolute inset-y-0 ${i % 2 === 0 ? 'left-0' : 'right-0'} w-1/2 bg-gradient-to-t from-transparent via-transparent to-white/5`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
