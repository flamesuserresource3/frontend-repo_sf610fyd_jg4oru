import React from 'react';

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">About Me</h2>
        <p className="mt-2 max-w-3xl text-white/80">
          I’m a frontend developer passionate about creating elegant, responsive, and
          efficient web experiences. With experience across both frontend and backend,
          I build complete, high-performance web solutions that feel natural to use
          and look beautiful everywhere. I constantly push to improve accessibility,
          speed, and usability in everything I create.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-lg font-medium text-white">Skills & Technologies</h3>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/80 sm:grid-cols-3">
            <span className="rounded-md bg-white/10 px-3 py-1">HTML</span>
            <span className="rounded-md bg-white/10 px-3 py-1">CSS</span>
            <span className="rounded-md bg-white/10 px-3 py-1">JavaScript</span>
            <span className="rounded-md bg-white/10 px-3 py-1">React</span>
            <span className="rounded-md bg-white/10 px-3 py-1">TypeScript</span>
            <span className="rounded-md bg-white/10 px-3 py-1">Node.js</span>
            <span className="rounded-md bg-white/10 px-3 py-1">Supabase</span>
            <span className="rounded-md bg-white/10 px-3 py-1">API Development</span>
            <span className="rounded-md bg-white/10 px-3 py-1">Responsive Design</span>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-lg font-medium text-white">Experience & Education</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <span className="font-medium text-white">Frontend & Backend Developer — Santmegh Computer Education</span>
              <br />
              Designed and maintained websites, built user-friendly UIs, developed backend features, and ensured performance.
            </li>
            <li>
              <span className="font-medium text-white">Personal Projects — Self-directed</span>
              <br />
              Built a Discord bot with automation, integrated APIs, and managed projects from concept to deployment.
            </li>
            <li>
              <span className="font-medium text-white">Education</span>
              <br />
              CO&PA – ITI Tarsali (78%), DCA – Santmegh (B), CCC – Santmegh (A), Web Development – Skill India
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
