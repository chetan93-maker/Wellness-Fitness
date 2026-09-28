import { motion } from 'framer-motion'
import { ArrowRight, Dumbbell, HeartPulse, Sparkles } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import SectionTitle from '../components/SectionTitle'

import gymInterior from '../assets/images/gym-interior.jpg.jpeg'
import pilatesStudio from '../assets/images/pilates-studio.jpg.jpeg'
import archway from '../assets/images/archway.jpg.jpeg'

const heroVideo = new URL('../assets/images/Gym Interrior theme 1.mp4', import.meta.url).href
const equipmentVideo = new URL('../assets/images/Gym Interrior theme 2.mp4', import.meta.url).href
const interiorVideos = [
  {
    id: 1,
    title: 'Strength Hall',
    description: 'A dramatic performance floor built for power training, precision coaching, and immersive focus.',
    video: new URL('../assets/images/Gym Interrior theme 1.mp4', import.meta.url).href,
    poster: gymInterior,
  },
  {
    id: 2,
    title: 'Gym Interior',
    description: 'A premium training floor with rich club atmosphere, polished finishes, and a confident move-ready energy.',
    video: new URL('../assets/images/Gym Interrior theme 3.mp4', import.meta.url).href,
    poster: gymInterior,
  },
]

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

const equipmentGallery = [
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
]

const galleryPreview = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
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
            className="mb-6"
          >
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Signature spaces</p>
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
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition group-hover:scale-105 group-hover:bg-gold group-hover:text-[#1A2F25]">
                  <Icon size={28} />
                </div>
                <h3 className="mb-3 font-display text-3xl text-cream">{title}</h3>
                <p className="text-base leading-7 text-cream/75">{description}</p>
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

          <div className="equipment-slider overflow-hidden rounded-[2rem] border border-[#d4af37]/20 bg-[#1A2F25] shadow-xl">
            <div className="equipment-track">
              {[...equipmentGallery, ...equipmentGallery].map((image, index) => (
                <div key={`${image}-${index}`} className="equipment-slide">
                  <img
                    src={image}
                    alt="Gym equipment training zone"
                    className="h-[420px] w-full object-cover object-center sm:h-[480px]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#f3eee6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Interior motion</p>
            <h2 className="font-display text-4xl text-forest sm:text-5xl">Experience the atmosphere of the club in motion.</h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {interiorVideos.map(({ title, description, video, poster }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[2rem] border border-[#d4af37]/20 bg-[#1A2F25] text-cream shadow-luxe"
              >
                <div className="overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={poster}
                    className="h-[420px] w-full object-cover object-center transition duration-700 group-hover:scale-110"
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
                <div className="space-y-4 p-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">Club view</p>
                  <h3 className="font-display text-3xl text-cream">{title}</h3>
                  <p className="text-base leading-7 text-cream/75">{description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
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
                    className="h-full w-full scale-[1.08] rounded-[1.5rem] object-cover object-center"
                    loading="lazy"
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
