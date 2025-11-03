import React from 'react';
import { Mail, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  return (
    <AnimatedSection id="contact" className="mx-auto max-w-6xl px-6 py-20" delay={0.2}>
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-semibold text-white sm:text-3xl"
        >
          Let’s Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-2 max-w-2xl text-white/80"
        >
          I’m always open to new opportunities and creative collaborations. Let’s build something awesome together.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap gap-3"
      >
        <a
          href="mailto:"
          className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
        >
          <Mail size={16} /> Send me an email
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
        >
          <Github size={16} /> View on GitHub
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="mt-12 text-center text-xs text-white/50"
      >
        © 2025 Jignesh D Maru — All Rights Reserved.
      </motion.p>
    </AnimatedSection>
  );
};

export default Contact;
