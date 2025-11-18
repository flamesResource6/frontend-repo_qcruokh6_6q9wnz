import { Menu, ShoppingCart, Search, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 ring-2 ring-white/10">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-white/90 font-semibold tracking-tight">Spectra</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#new" className="text-sm text-white/80 hover:text-white transition">New</a>
              <a href="#trending" className="text-sm text-white/80 hover:text-white transition">Trending</a>
              <a href="#marketplace" className="text-sm text-white/80 hover:text-white transition">Marketplace</a>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90 ring-1 ring-white/15 hover:bg-white/15 transition">
                <Search className="h-4 w-4" />
                Search
              </button>
              <button className="rounded-xl bg-white/10 p-2 text-white/90 ring-1 ring-white/15 hover:bg-white/15 transition">
                <ShoppingCart className="h-5 w-5" />
              </button>
              <button className="md:hidden rounded-xl bg-white/10 p-2 text-white/90 ring-1 ring-white/15 hover:bg-white/15 transition" onClick={() => setOpen(!open)}>
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 sm:px-6">
              <nav className="grid gap-2">
                <a href="#new" className="rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5">New</a>
                <a href="#trending" className="rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5">Trending</a>
                <a href="#marketplace" className="rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5">Marketplace</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
