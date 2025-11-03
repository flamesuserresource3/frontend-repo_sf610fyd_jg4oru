import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -60]);
  const blur = useTransform(scrollY, [0, 300], [0, 6]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85]);

  return (
    <section id="home" className="relative w-full h-[90vh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, filter: blur.to(b => `blur(${b}px)`), opacity }}>
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-white">
        <motion.span
          className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur"
          initial={{ opacity: 0, y: -8, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          Frontend Developer & Creative Coder
        </motion.span>
        <motion.h1
          className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          Jignesh D Maru
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
          initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        >
          I craft clean, responsive, and engaging web interfaces with a focus on
          user experience, performance, and aesthetic detail. I love turning ideas
          into interactive, high-performing digital products.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
