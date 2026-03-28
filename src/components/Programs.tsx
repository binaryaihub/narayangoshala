"use client";

import { motion } from "framer-motion";
import { Heart, Stethoscope, HandHeart, TreePine, Milk, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Heart, Stethoscope, HandHeart, TreePine, Milk, BookOpen };

interface Program {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface ProgramsProps {
  label: string;
  title: string;
  subtitle: string;
  items: Program[];
}

export default function Programs({ label, title, subtitle, items }: ProgramsProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-warm to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">{label}</span>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-gray-900 mt-3">{title}</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((program, i) => {
            const Icon = iconMap[program.icon] || Heart;
            return (
              <motion.div
                key={program.title}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
