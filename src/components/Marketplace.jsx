import { useState } from 'react';
import { Heart, Filter, ChevronDown } from 'lucide-react';

const initial = [
  { id: 'mk1', name: 'Eclipse Matte', price: 129, tags: ['Matte', 'Lightweight'], img: 'https://images.unsplash.com/photo-1507099985932-87a4520ed1d1?q=80&w=1200&auto=format&fit=crop' },
  { id: 'mk2', name: 'Ray Forge', price: 159, tags: ['Polarized', 'Classic'], img: 'https://images.unsplash.com/photo-1503949234132-d6b4757e2015?q=80&w=1200&auto=format&fit=crop' },
  { id: 'mk3', name: 'Ion Clear', price: 99, tags: ['Clear', 'Urban'], img: 'https://images.unsplash.com/photo-1532879520709-8f7d8a0f7cf9?q=80&w=1200&auto=format&fit=crop' },
  { id: 'mk4', name: 'Vanta Pro', price: 189, tags: ['Premium', 'Polarized'], img: 'https://images.unsplash.com/photo-1518544801976-3e723902a767?q=80&w=1200&auto=format&fit=crop' },
  { id: 'mk5', name: 'Halo Flex', price: 139, tags: ['Flexible', 'Sport'], img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop' },
  { id: 'mk6', name: 'Prism Ghost', price: 119, tags: ['Translucent', 'Minimal'], img: 'https://images.unsplash.com/photo-1591079385271-4d8e7caea66d?q=80&w=1200&auto=format&fit=crop' },
];

export default function Marketplace() {
  const [items, setItems] = useState(initial);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');

  const filtered = items
    .filter(i => i.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a,b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <section id="marketplace" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Marketplace</h2>
            <p className="mt-1 text-white/60">Browse curated spectacles ready to ship</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search styles"
                className="w-56 rounded-xl bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/60 ring-1 ring-white/15 focus:outline-none focus:ring-white/30"
              />
            </div>
            <div className="relative">
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="appearance-none rounded-xl bg-white/10 px-4 py-2.5 pr-10 text-sm text-white ring-1 ring-white/15 focus:outline-none focus:ring-white/30"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm text-white ring-1 ring-white/15 hover:bg-white/15"><Filter className="h-4 w-4"/> Filters</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(i => (
            <article key={i.id} className="group overflow-hidden rounded-2xl ring-1 ring-white/10 bg-slate-900/40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/30">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={i.img} alt={i.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <button className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-slate-900 shadow hover:bg-white"><Heart className="h-4 w-4"/></button>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{i.name}</h3>
                <div className="mt-1 text-white/70 text-sm">{i.tags.join(' • ')}</div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-white font-bold">${i.price}</span>
                  <button className="rounded-xl bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/15 hover:bg-white/15">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
