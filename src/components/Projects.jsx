import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Janseva Kendra – Government Service Portal',
    description:
      'Responsive public service hub featuring dynamic content management, seamless user interactions, and optimized frontend/backend integration.',
    tech: ['React', 'Node.js', 'JavaScript'],
    type: 'Private Project',
  },
  {
    title: 'Santmegh – Student Management System',
    description:
      'Full‑stack student management platform with CRUD, real-time updates, and scalable data architecture. Smooth cross-device functionality and intuitive UX.',
    tech: ['React', 'Supabase', 'TypeScript'],
    type: 'Live Project',
  },
  {
    title: 'ToolHub – Productivity Dashboard',
    description:
      'All‑in‑one productivity dashboard blending media and developer tools. Modular UI, speed optimization, and clean design.',
    tech: ['React', 'Node.js', 'API Integration'],
    type: 'Live Project',
  },
  {
    title: 'FontConvo – Typography Mapping Tool',
    description:
      'Interactive typography mapping tool with dynamic UI feedback and real-time customization, enhancing typing efficiency across devices.',
    tech: ['JavaScript', 'CSS', 'HTML'],
    type: 'Live Project',
  },
];

const Projects = () => {
  return (
    <section id="work" className="bg-neutral-50 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Selected Work</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              A snapshot of projects spanning platforms, tools, and product types.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 sm:inline-flex"
          >
            Get in touch <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    p.type.includes('Live')
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                      : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'
                  }`}
                >
                  {p.type}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-neutral-100 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
