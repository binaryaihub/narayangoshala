"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, FormEvent } from "react";

const iconMap: Record<string, LucideIcon> = { MapPin, Phone, Mail, Clock };

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ContactPageClient({ data }: { data: any }) {
  const [submitted, setSubmitted] = useState(false);
  const hero = data.hero;
  const form = data.form;
  const info = data.info;

  const contactItems = [
    { icon: "MapPin", title: info.address.title, details: info.address.lines },
    { icon: "Phone", title: info.phone.title, details: info.phone.numbers },
    { icon: "Mail", title: info.email.title, details: info.email.addresses },
    { icon: "Clock", title: info.hours.title, details: info.hours.schedule },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="font-[var(--font-heading)] text-3xl font-bold text-gray-900 mb-8">{info.title}</h2>
              <div className="space-y-6 mb-12">
                {contactItems.map((item) => {
                  const Icon = iconMap[item.icon] || Phone;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        {item.details.map((d: string) => (
                          <p key={d} className="text-gray-600 text-sm">{d}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="rounded-2xl overflow-hidden bg-warm aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto text-primary mb-2" size={40} />
                  <p className="text-gray-600 text-sm">Add Google Maps embed here</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              {submitted ? (
                <div className="bg-secondary/5 rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Send className="text-secondary" size={32} />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-3xl font-bold text-gray-900 mb-4">{form.success_title}</h3>
                  <p className="text-gray-600 mb-6">{form.success_text}</p>
                  <button onClick={() => setSubmitted(false)} className="text-primary font-semibold hover:underline">Send another message</button>
                </div>
              ) : (
                <div className="bg-warm rounded-3xl p-10">
                  <h2 className="font-[var(--font-heading)] text-3xl font-bold text-gray-900 mb-2">{form.title}</h2>
                  <p className="text-gray-600 mb-8">{form.subtitle}</p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                        {(form.subjects as string[]).map((s: string) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none" placeholder="Tell us how we can help..." />
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all">
                      <Send size={20} /> Send Message
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
