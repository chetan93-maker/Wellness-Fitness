import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import gymInterior from '../assets/images/gym-interior.jpg.jpeg'
import pilatesStudio from '../assets/images/pilates-studio.jpg.jpeg'
import archway from '../assets/images/archway.jpg.jpeg'

const slides = [
  {
    image: gymInterior,
    eyebrow: 'Wellness in motion',
    title: 'CHARHOLI, DON\'T RENEW YET. THE STANDARD IS ABOUT TO CHANGE.',
  },
  {
    image: pilatesStudio,
    eyebrow: 'Precision + flow',
    title: 'A deeply considered studio for strength, mobility, and calm.',
  },
  {
    image: archway,
    eyebrow: 'Design-led wellness',
    title: 'Architecture that invites recovery, ritual, and refined performance.',
  },
  {
    image: gymInterior,
    eyebrow: 'Elevated rituals',
    title: 'Every detail, from recovery to movement, is curated for balance.',
  },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const activeSlide = slides[index]

  return (
    <section className="relative h-[90vh] min-h-[620px] overflow-hidden bg-[#1A2F25] text-cream">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.04 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={activeSlide.image}
            alt={activeSlide.title}
            className="h-full w-full scale-[1.12] object-cover object-center opacity-55 brightness-[0.72] contrast-[1.08]"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,19,16,0.25),rgba(7,10,9,0.78))]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-5 text-xs uppercase tracking-[0.45em] text-gold"
          >
            {activeSlide.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="max-w-5xl font-display text-4xl leading-[0.95] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-[5rem]"
          >
            {activeSlide.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-full border border-gold bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#1A2F25] transition duration-300 hover:scale-[1.02] hover:bg-[#e7c75a]"
            >
              Explore Membership
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              className="rounded-full border border-white/25 bg-white/5 px-7 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-cream backdrop-blur-sm transition hover:border-gold hover:text-gold"
            >
              View Experience
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-10 bg-gold' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
