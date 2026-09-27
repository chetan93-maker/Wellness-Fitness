import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import GalleryGrid from '../components/GalleryGrid'

import gymInterior from '../assets/images/gym-interior.jpg.jpeg'
import pilatesStudio from '../assets/images/pilates-studio.jpg.jpeg'
import archway from '../assets/images/archway.jpg.jpeg'

const galleryItems = [
  { id: 1, title: 'Arched Lobby', category: 'Interiors', src: archway },
  { id: 2, title: 'Pilates Studio', category: 'Equipment', src: pilatesStudio },
  { id: 3, title: 'Recovery Lounge', category: 'Wellness', src: gymInterior },
  { id: 4, title: 'Strength Zone', category: 'Equipment', src: gymInterior },
  { id: 5, title: 'Olive Courtyard', category: 'Wellness', src: archway },
  { id: 6, title: 'Sunlit Entry', category: 'Interiors', src: gymInterior },
  { id: 7, title: 'Private Lounge', category: 'Interiors', src: pilatesStudio },
  { id: 8, title: 'Mobility Deck', category: 'Wellness', src: archway },
  { id: 9, title: 'Reformer Room', category: 'Equipment', src: pilatesStudio },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = useMemo(() => {
    if (activeFilter === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Gallery</p>
        <h1 className="font-display text-4xl text-forest sm:text-6xl">A life shaped by ritual and flow.</h1>
      </motion.div>

      <GalleryGrid
        images={filteredImages}
        selectedCategory={activeFilter}
        onSelectCategory={setActiveFilter}
        onOpenLightbox={setSelectedImage}
      />

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111]/85 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-[2rem] border border-gold/40 bg-[#1A2F25] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-[#111111]/60 text-cream transition hover:border-gold hover:text-gold"
              >
                <X size={20} />
              </button>
              <img src={selectedImage.src} alt={selectedImage.title} className="max-h-[90vh] w-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
