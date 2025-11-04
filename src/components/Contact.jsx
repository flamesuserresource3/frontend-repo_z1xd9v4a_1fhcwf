import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Let’s build something great
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 max-w-2xl text-gray-700">
        I’m open to freelance, full-time roles, and collaborations. Reach out and I’ll get back soon.
      </motion.p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          href="mailto:fardan@example.com"
          className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold text-gray-900">fardan@example.com</p>
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-semibold text-gray-900">Open to Remote</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <a
          href="https://github.com/"
          className="inline-flex items-center gap-2 text-gray-700 transition hover:text-gray-900">
          <Github className="h-5 w-5" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/"
          className="inline-flex items-center gap-2 text-gray-700 transition hover:text-gray-900">
          <Linkedin className="h-5 w-5" /> LinkedIn
        </a>
      </div>

      <p className="mt-12 text-sm text-gray-500">© {new Date().getFullYear()} Fardan Abu Arbaz Basyari. All rights reserved.</p>
    </section>
  );
}
