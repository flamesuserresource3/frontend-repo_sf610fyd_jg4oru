import React from 'react';
import { Mail, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Let’s Work Together</h2>
        <p className="mt-2 max-w-2xl text-white/80">
          I’m always open to new opportunities and creative collaborations. Let’s build something awesome together.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
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
      </div>

      <p className="mt-12 text-center text-xs text-white/50">© 2025 Jignesh D Maru — All Rights Reserved.</p>
    </section>
  );
};

export default Contact;
