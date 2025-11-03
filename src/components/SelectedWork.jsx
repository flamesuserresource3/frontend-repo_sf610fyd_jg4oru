import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Janseva Kendra – Government Service Portal',
    description:
      'Responsive public service hub with dynamic content, seamless interactions, and optimized integration.',
    tech: 'React, Node.js, JavaScript',
    type: 'Private Project',
    link: '#',
  },
  {
    title: 'Santmegh – Student Management System',
    description:
      'Full-stack platform with CRUD, real-time updates, and scalable architecture across devices.',
    tech: 'React, Supabase, TypeScript',
    type: 'Live Project',
    link: '#',
  },
  {
    title: 'ToolHub – Productivity Dashboard',
    description:
      'All-in-one dashboard blending media and developer tools with modular UI and speed optimizations.',
    tech: 'React, Node.js, API Integration',
    type: 'Live Project',
    link: '#',
  },
  {
    title: 'FontConvo – Typography Mapping Tool',
    description:
      'Interactive typography mapping with real-time customization and dynamic feedback.',
    tech: 'JavaScript, CSS, HTML',
    type: 'Live Project',
    link: '#',
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Selected Work</h2>
        <p className="mt-2 text-white/70">
          A few highlights from recent projects focused on UX, performance, and clean design.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-white">{p.title}</h3>
                <span className="mt-1 inline-block text-xs text-white/60">{p.type}</span>
              </div>
              <a
                href={p.link}
                className="rounded-md border border-white/20 p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="Open project"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="mt-3 text-sm text-white/80">{p.description}</p>
            <p className="mt-3 text-xs text-white/60">Tech: {p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
