"use client";

import { motion } from "framer-motion";
import { Shield, Heart, Leaf, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Shield, Heart, Leaf, Users };

interface Stat {
  number: string;
  label: string;
  icon: string;
}

interface AboutSectionProps {
  label: string;
  titleLine1: string;
  titleLine2: string;
  paragraph1: string;
  paragraph2: string;
  stats: Stat[];
}

export default function AboutSection({ label, titleLine1, titleLine2, paragraph1, paragraph2, stats }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">{label}</span>
            <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-6">
              {titleLine1}<br /><span className="text-primary">{titleLine2}</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{paragraph1}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{paragraph2}</p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = iconMap[stat.icon] || Heart;
                return (
                  <motion.div key={stat.label} className="bg-warm rounded-2xl p-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}>
                    <Icon className="text-primary mb-2" size={24} />
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-warm to-warm-dark flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-6xl">🐄</span>
                </div>
                <p className="text-primary-dark font-[var(--font-heading)] text-2xl font-bold">Every Cow Deserves Love</p>
                <p className="text-primary-dark/70 mt-2">Add your goshala photos here</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center text-white text-3xl shadow-xl">🙏</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
