import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat Platform',
    description: 'WebSockets powered messaging with rooms, presence, and file sharing.',
    stack: ['React', 'FastAPI', 'WebSockets', 'Tailwind'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'E-commerce Starter',
    description: 'Payments, product catalog, and dashboard with a clean architecture.',
    stack: ['React', 'FastAPI', 'Stripe', 'MongoDB'],
    demo: '#',
    repo: '#',
  },
  {
    title: '3D Landing Experiment',
    description: 'Playful hero built with Spline and smooth motion interactions.',
    stack: ['React', 'Spline', 'Framer Motion'],
    demo: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Selected Projects
      </motion.h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
            <div className="relative p-6">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-1 rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-white transition hover:brightness-110">
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-semibold text-gray-900 transition hover:bg-gray-50">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gray-200/60 blur-2xl transition duration-500 group-hover:scale-125" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
