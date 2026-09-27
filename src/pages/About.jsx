import { motion } from 'framer-motion'
import { ArrowRight, HeartHandshake, Flower2, Sparkle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

import gymInterior from '../assets/images/gym-interior.jpg.jpeg'
import pilatesStudio from '../assets/images/pilates-studio.jpg.jpeg'
import archway from '../assets/images/archway.jpg.jpeg'

const team = [
  { name: 'Nisha Verma', role: 'Head of Movement', image: gymInterior },
  { name: 'Kabir Shah', role: 'Pilates Specialist', image: pilatesStudio },
  { name: 'Aarohi Mehta', role: 'Recovery Coach', image: archway },
]

export default function About() {
  return (
    <main className="pb-20 pt-32">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Our story</p>
          <SectionTitle
            title="Luxury, intention, and performance — thoughtfully woven together."
            text="The House of Wellness exists to redefine what a club can feel like in PCMC. Born from a belief that beauty and discipline belong together, we designed a place where movement meets architecture, and self-care becomes a daily ritual."
          />
        </motion.div>
      </section>

      <section className="bg-[#1A2F25] py-20 text-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            { icon: HeartHandshake, title: 'The Vision', text: 'We believe fitness is not just physical; it is an architectural experience.' },
            { icon: Flower2, title: 'The Standard', text: 'We designed each detail to calm, elevate, and fortify the body and mind.' },
            { icon: Sparkle, title: 'The Feeling', text: 'From the first step inside to the final breath of recovery, every experience is deliberate.' },
          ].map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Icon size={24} />
              </div>
              <h3 className="mb-4 font-display text-3xl text-cream">{title}</h3>
              <p className="text-base leading-8 text-cream/75">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mt-20 overflow-hidden">
        <div
          className="h-[500px] bg-cover bg-fixed bg-center"
          style={{ backgroundImage: `url(${archway})` }}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Elite trainers</p>
          <h2 className="font-display text-4xl text-forest sm:text-5xl">Meet the team guiding your strongest season yet.</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="overflow-hidden rounded-[2rem] border border-[#d4af37]/20 bg-[#F9F6F0] shadow-xl"
            >
              <img src={member.image} alt={member.name} className="h-[420px] w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-3xl text-forest">{member.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gold">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-[#d4af37]/30 bg-[#F9F6F0] p-8 text-center shadow-xl"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold">The promise</p>
          <h3 className="font-display text-4xl text-forest">We create spaces where discipline feels indulgent and wellness becomes a way of life.</h3>
          <button
            type="button"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1A2F25] px-6 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-cream transition hover:scale-[1.02] hover:bg-[#233c31]"
          >
            Join the waitlist
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>
    </main>
  )
}
