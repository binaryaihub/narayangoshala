"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, TrendingUp, Clock, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Heart, TrendingUp, Clock, Award };

interface ImpactItem {
  icon: string;
  number: string;
  label: string;
  description: string;
}

interface ImpactProps {
  label: string;
  title: string;
  subtitle: string;
  items: ImpactItem[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

export default function Impact({ label, title, subtitle, items, ctaTitle, ctaText, ctaButton }: ImpactProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-earth via-primary-dark to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <span className="text-amber-300 font-semibold text-sm uppercase tracking-widest">{label}</span>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold mt-3">{title}</h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] || Heart;
            return (
              <motion.div key={item.label} className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}>
                <Icon className="mx-auto mb-4 text-amber-300" size={32} />
                <div className="text-4xl font-bold mb-2">{item.number}</div>
                <div className="text-lg font-semibold text-amber-200">{item.label}</div>
                <div className="text-sm text-white/60 mt-1">{item.description}</div>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
          <h3 className="font-[var(--font-heading)] text-3xl font-bold mb-4">{ctaTitle}</h3>
          <p className="text-white/70 max-w-xl mx-auto mb-8">{ctaText}</p>
          <Link href="/donate" className="inline-flex items-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all">
            <Heart size={20} />
            {ctaButton}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
