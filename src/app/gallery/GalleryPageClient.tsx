"use client";

import { motion } from "framer-motion";
import { Camera, Video } from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function GalleryPageClient({ data }: { data: any }) {
  const hero = data.hero;
  const categories = data.categories as string[];
  const items = data.items as { title: string; category: string; emoji: string }[];

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

      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium whitespace-nowrap">
              <Camera size={16} /> All Photos
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 transition-colors">
              <Video size={16} /> Videos
            </button>
            {categories.map((cat) => (
              <button key={cat} className="px-5 py-2.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <motion.div key={item.title} className="group relative aspect-[4/3] bg-gradient-to-br from-warm to-warm-dark rounded-2xl overflow-hidden cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <span className="text-xs text-amber-300 font-semibold uppercase">{item.category}</span>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">Replace these placeholders with your actual goshala photos and videos</p>
          </div>
        </div>
      </section>
    </>
  );
}
