import { motion } from 'framer-motion'
import { ArrowRight, Dumbbell, HeartPulse, Sparkles } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import SectionTitle from '../components/SectionTitle'

import gymInterior from '../assets/images/gym-interior.jpg.jpeg'
import pilatesStudio from '../assets/images/pilates-studio.jpg.jpeg'
import archway from '../assets/images/archway.jpg.jpeg'

const heroVideo = new URL('../assets/images/Gym Interrior theme 1.mp4', import.meta.url).href

const features = [
  {
    icon: Dumbbell,
    title: 'State-of-the-Art Equipment',
    description: 'Precision-engineered training zones, premium strength stations, and Pilates reformers designed for performance.',
  },
  {
    icon: HeartPulse,
    title: 'Holistic Wellness',
    description: 'Mindful movement, recovery rituals, mobility practice, and restorative spaces that support whole-body vitality.',
  },
  {
    icon: Sparkles,
    title: 'Luxury Amenities',
    description: 'Spa-inspired changing rooms, sauna moments, concierge service, and lounge spaces for true sanctuary living.',
  },
]

const galleryPreview = [
  gymInterior,
  pilatesStudio,
  archway,
  gymInterior,
  pilatesStudio,
  archway,
]

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <SectionTitle
            eyebrow="Welcome"
            title="Welcome to The House of Wellness."
            text="PCMC's most luxurious fitness club. A sanctuary where architectural beauty meets physical transformation. Arriving soon."
          />
        </motion.div>
      </section>

      <section className="bg-[#1A2F25] py-20 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionTitle
              eyebrow="Signature spaces"
              title="Designed for performance, poise, and recovery."
              text="Every room is intentionally composed to create a calm, elevated rhythm — from strength to stretch, cardio to stillness."
            />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 backdrop-blur-sm"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition group-hover:scale-105 group-hover:bg-gold group-hover:text-[#1A2F25]">
                  <Icon size={28} />
                </div>
                <h3 className="mb-4 font-display text-3xl text-cream">{title}</h3>
                <p className="text-base leading-8 text-cream/75">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Club experience</p>
            <h2 className="font-display text-4xl text-forest sm:text-5xl">A cinematic sense of calm, built into every movement.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-forest/75">
              From the first welcome to the final stretch, every space is designed with quiet luxury, thoughtful rhythm, and a feeling of restorative exclusivity.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#d4af37]/20 bg-[#1A2F25] shadow-xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={gymInterior}
              className="aspect-[4/3] w-full object-cover object-center sm:aspect-[5/4]"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </section>

      <section className="overflow-hidden py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Gallery preview</p>
            <h2 className="font-display text-4xl text-forest sm:text-5xl">A hall of luxury, light, and movement.</h2>
          </motion.div>

          <div className="marquee whitespace-nowrap">
            <div className="marquee-track">
              {[...galleryPreview, ...galleryPreview].map((image, index) => (
                <div key={`${image}-${index}`} className="marquee-item h-[260px] w-[320px] sm:h-[300px] sm:w-[420px]">
                  <img
                    src={image}
                    alt="Wellness club preview"
                    className="h-full w-full rounded-[1.5rem] object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[2.5rem] bg-[#1A2F25] px-6 py-12 text-cream shadow-luxe sm:px-10 lg:flex lg:items-center lg:justify-between"
          >
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold">Be first</p>
              <h3 className="font-display text-4xl sm:text-5xl">Be the first to experience the new standard.</h3>
            </div>
            <button
              type="button"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#1A2F25] transition hover:scale-[1.02] hover:bg-[#e7c75a] lg:mt-0"
            >
              Join the Waitlist
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
