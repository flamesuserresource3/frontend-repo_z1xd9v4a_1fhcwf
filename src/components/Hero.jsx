import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

const social = [
  { href: 'https://github.com/', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'mailto:fardan@example.com', label: 'Email', Icon: Mail },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center px-6 pt-28 pb-24 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-white shadow-lg backdrop-blur">
          <Rocket className="h-4 w-4 text-yellow-300" />
          <span className="text-xs font-medium tracking-wide">Full Stack Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-6xl">
          Fardan Abu Arbaz Basyari
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
          I build delightful, performant web experiences from pixel to production — crafting robust APIs, scalable systems, and immersive interfaces with modern tooling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl hover:brightness-110">
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-10 flex items-center gap-3">
          {social.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md">
              <Icon className="h-5 w-5 transition group-hover:scale-110" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
