import React from 'react';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold tracking-tight">Jignesh D Maru</a>
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
    </div>
  );
}

export default App;
