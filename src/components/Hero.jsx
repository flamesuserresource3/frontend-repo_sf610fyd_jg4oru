import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-white">
        <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          Frontend Developer & Creative Coder
        </span>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Jignesh D Maru
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          I craft clean, responsive, and engaging web interfaces with a focus on
          user experience, performance, and aesthetic detail. I love turning ideas
          into interactive, high-performing digital products.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Get in touch
            <ArrowRight size={16} />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            View my work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
