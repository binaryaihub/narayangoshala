"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Calendar } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Heart, Users, Award, Calendar };

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function AboutPageClient({ data }: { data: any }) {
  const hero = data.hero;
  const mission = data.mission;
  const vision = data.vision;
  const values = data.values;
  const timeline = data.timeline;

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-earth via-primary-dark to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-amber-300 font-semibold text-sm uppercase tracking-widest">{hero.label}</span>
            <h1 className="font-[var(--font-heading)] text-5xl sm:text-6xl font-bold mt-3 mb-6">{hero.title}</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">{hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div className="bg-warm rounded-3xl p-10" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <Target className="text-primary mb-4" size={40} />
              <h2 className="font-[var(--font-heading)] text-3xl font-bold text-gray-900 mb-4">{mission.title}</h2>
              <p className="text-gray-600 leading-relaxed">{mission.text}</p>
            </motion.div>
            <motion.div className="bg-secondary/5 rounded-3xl p-10" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <Eye className="text-secondary mb-4" size={40} />
              <h2 className="font-[var(--font-heading)] text-3xl font-bold text-gray-900 mb-4">{vision.title}</h2>
              <p className="text-gray-600 leading-relaxed">{vision.text}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">{values.label}</span>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold text-gray-900 mt-3">{values.title}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.items.map((value: any, i: number) => {
              const Icon = iconMap[value.icon] || Heart;
              return (
                <motion.div key={value.title} className="text-center bg-white rounded-3xl p-8 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">{timeline.label}</span>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold text-gray-900 mt-3">{timeline.title}</h2>
          </motion.div>
          <div className="space-y-8">
            {timeline.events.map((event: any, i: number) => (
              <motion.div key={event.year} className="flex gap-6 items-start" initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-lg shadow-lg">{event.year}</div>
                <div className="bg-white rounded-2xl p-6 shadow-sm flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
