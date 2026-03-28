"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowDown } from "lucide-react";

interface HeroProps {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export default function Hero({ badge, titleLine1, titleLine2, subtitle, ctaPrimary, ctaSecondary }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-earth via-primary-dark to-secondary" />
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-amber-200 text-sm font-medium mb-8 border border-white/10">
            {badge}
          </span>
        </motion.div>

        <motion.h1
          className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          {titleLine1}<br />
          <span className="text-amber-300">{titleLine2}</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/donate" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-primary/25 hover:scale-105 transition-all">
            <Heart size={20} />
            {ctaPrimary}
          </Link>
          <Link href="/about" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all">
            {ctaSecondary}
          </Link>
        </motion.div>

        <motion.div className="mt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <a href="#about" className="inline-flex flex-col items-center text-white/50 hover:text-white/80 transition-colors">
            <span className="text-xs mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
