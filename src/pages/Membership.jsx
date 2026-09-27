import { motion } from 'framer-motion'
import MembershipCard from '../components/MembershipCard'
import SectionTitle from '../components/SectionTitle'

const plans = [
  {
    title: 'The Essential',
    price: '2,999',
    description: 'A focused membership for members who love the fundamentals and want access to a premium training environment.',
    features: ['Gym floor access', 'Locker room access', 'Standard fitness guidance'],
    tone: 'sage',
  },
  {
    title: 'The Signature',
    price: '4,999',
    description: 'Our elevated experience for members seeking movement, recovery, and a more complete luxury wellness rhythm.',
    features: ['Everything in Essential', 'Unlimited group classes', 'Pilates, yoga, and recovery zone'],
    tone: 'forest',
    featured: true,
  },
  {
    title: 'The House Elite',
    price: '8,999',
    description: 'The full expression of the House experience — one-on-one coaching, spa access, and complete lifestyle support.',
    features: ['Everything in Signature', 'Personal training', 'Spa access and concierge support'],
    tone: 'charcoal',
  },
]

export default function Membership() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Membership</p>
        <SectionTitle
          eyebrow="Invest in your wellness"
          title="Invest in Your Wellness."
          align="center"
        />
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <MembershipCard key={plan.title} {...plan} />
        ))}
      </div>
    </main>
  )
}
