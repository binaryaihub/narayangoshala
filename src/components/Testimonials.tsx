"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface TestimonialsProps {
  label: string;
  title: string;
  items: Testimonial[];
}

export default function Testimonials({ label, title, items }: TestimonialsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">{label}</span>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-gray-900 mt-3">{title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((testimonial, i) => (
            <motion.div key={testimonial.name} className="bg-warm rounded-3xl p-8 relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.15 }} viewport={{ once: true }}>
              <Quote className="text-primary/20 mb-4" size={40} />
              <p className="text-gray-700 leading-relaxed mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
