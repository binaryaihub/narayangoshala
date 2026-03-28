"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Phone } from "lucide-react";

interface CTAProps {
  titleLine1: string;
  titleLine2: string;
  text: string;
  primaryButton: string;
  secondaryButton: string;
}

export default function CTA({ titleLine1, titleLine2, text, primaryButton, secondaryButton }: CTAProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-4xl">🐄</span>
          </div>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {titleLine1} <span className="text-primary">{titleLine2}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">{text}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/donate" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-primary/25 hover:scale-105 transition-all">
              <Heart size={20} />
              {primaryButton}
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-primary hover:text-primary transition-all">
              <Phone size={20} />
              {secondaryButton}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
