"use client";

import { motion } from "framer-motion";
import { Heart, Coins, CreditCard, Building2, Gift, Check } from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function DonatePageClient({ data }: { data: any }) {
  const hero = data.hero;
  const tiers = data.tiers as { amount: string; label: string; emoji: string; popular: boolean }[];
  const bank = data.bank_details;
  const benefits = data.donor_benefits;
  const trust = data.trust_banner;

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
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold text-gray-900">{data.tiers_title}</h2>
            <p className="text-gray-600 mt-4">{data.tiers_subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {tiers.map((tier, i) => (
              <motion.button
                key={tier.label}
                className={`relative text-left rounded-3xl p-8 border-2 transition-all hover:scale-105 hover:shadow-xl ${
                  tier.popular ? "border-primary bg-warm shadow-lg" : "border-gray-100 bg-white hover:border-primary/30"
                }`}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
              >
                {tier.popular && <span className="absolute -top-3 left-8 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>}
                <span className="text-4xl mb-4 block">{tier.emoji}</span>
                <div className="text-3xl font-bold text-gray-900 mb-2">{tier.amount}</div>
                <p className="text-gray-600 text-sm">{tier.label}</p>
              </motion.button>
            ))}
          </div>

          <motion.div className="bg-gradient-to-br from-warm to-white rounded-3xl p-10 border border-primary/10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-[var(--font-heading)] text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Building2 className="text-primary" size={28} /> {bank.title}
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Account Name", value: bank.account_name },
                    { label: "Account Number", value: bank.account_number },
                    { label: "IFSC Code", value: bank.ifsc_code },
                    { label: "Bank Name", value: bank.bank_name },
                    { label: "Branch", value: bank.branch },
                  ].map((d) => (
                    <div key={d.label} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-500 text-sm">{d.label}</span>
                      <span className="font-semibold text-gray-900">{d.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500"><CreditCard size={16} /> UPI: {bank.upi_id}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500"><Coins size={16} /> {bank.payment_note}</div>
                </div>
              </div>
              <div>
                <h3 className="font-[var(--font-heading)] text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Gift className="text-primary" size={28} /> {benefits.title}
                </h3>
                <ul className="space-y-3">
                  {(benefits.items as string[]).map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-600"><Check className="text-secondary shrink-0 mt-0.5" size={18} />{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="mx-auto mb-4" size={40} />
          <h3 className="font-[var(--font-heading)] text-3xl font-bold mb-4">{trust.title}</h3>
          <p className="text-white/80 max-w-2xl mx-auto">{trust.text}</p>
        </div>
      </section>
    </>
  );
}
