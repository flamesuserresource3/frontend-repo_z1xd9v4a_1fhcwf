import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Server } from 'lucide-react';

const skills = [
  {
    title: 'Frontend Engineering',
    icon: Code,
    points: ['React, Vite, Tailwind', 'Accessible UI & design systems', 'Animations that feel alive'],
  },
  {
    title: 'Backend Engineering',
    icon: Server,
    points: ['FastAPI, Node, REST', 'Auth, caching, WebSockets', 'Testing & observability'],
  },
  {
    title: 'Architecture',
    icon: Layers,
    points: ['Clean code & patterns', 'CI/CD & cloud deployments', 'Scalable data models'],
  },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        About
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 max-w-3xl text-gray-700">
        I’m Fardan, a developer who loves shipping polished products. I bring together systems thinking and design empathy to create experiences that are fast, resilient, and joyful to use.
      </motion.p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ title, icon: Icon, points }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gray-900" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
