import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import About from './components/About';
import Contact from './components/Contact';
import { Sparkles } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header
        className={`sticky top-0 z-20 border-b border-white/10 transition-all ${
          scrolled ? 'bg-neutral-950/60 backdrop-blur-xl shadow-lg shadow-black/10' : 'bg-neutral-950/30 backdrop-blur'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <Sparkles size={18} className="text-white/80" /> Jignesh D Maru
          </a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#work" className="text-white/80 hover:text-white">Work</a>
            <a href="#about" className="text-white/80 hover:text-white">About</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Contact />
      </main>

      <div className="pointer-events-none fixed inset-0 -z-[1] opacity-40" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.12),rgba(0,0,0,0))]" />
      </div>
    </div>
  );
}

export default App;
