import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function MembershipCard({ title, price, description, features, tone = 'sage', featured = false }) {
  const palette = {
    sage: 'bg-[#8A9A8A] text-[#F9F6F0] border border-transparent',
    forest: 'bg-[#1A2F25] text-[#F9F6F0] border border-gold',
    charcoal: 'bg-[#111111] text-[#F9F6F0] border border-[#2e2e2e]',
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.01 }}
      className={`group relative rounded-[2rem] p-8 shadow-2xl shadow-black/10 transition-all duration-300 ${palette[tone]} ${
        featured ? 'ring-1 ring-gold shadow-[0_30px_60px_rgba(212,175,55,0.2)]' : ''
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-gold bg-[#1A2F25] px-4 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
          Most Popular
        </div>
      )}

      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-current/70">Membership</p>
          <h3 className="mt-3 font-display text-3xl">{title}</h3>
        </div>
        {featured && <div className="h-3 w-3 rounded-full bg-gold shadow-[0_0_16px_rgba(212,175,55,0.8)]" />}
      </div>

      <div className="mb-5 flex items-end gap-2">
        <span className="font-display text-4xl">₹{price}</span>
        <span className="pb-2 text-sm uppercase tracking-[0.2em] text-current/70">/ month</span>
      </div>

      <p className="mb-8 text-sm leading-7 text-current/80">{description}</p>

      <ul className="space-y-4 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
              <Check size={14} />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-current/20 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-current transition hover:bg-gold hover:text-[#1A2F25]"
      >
        Get Started
      </button>
    </motion.article>
  )
}
