import { motion } from 'framer-motion'

export default function GalleryGrid({ images, selectedCategory, onSelectCategory, onOpenLightbox }) {
  const filters = ['All', 'Interiors', 'Equipment', 'Wellness']

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            onClick={() => onSelectCategory(filter)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.28em] transition-all duration-300 ${
              selectedCategory === filter
                ? 'border-gold bg-gold text-[#1A2F25]'
                : 'border-[#d4af37]/30 bg-transparent text-forest hover:border-gold hover:text-gold'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {images.map((image) => (
          <motion.button
            layout
            key={image.id}
            type="button"
            onClick={() => onOpenLightbox(image)}
            className="group relative mb-5 block w-full overflow-hidden rounded-[1.5rem] border border-[#d4af37]/15 bg-[#1A2F25] text-left"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
          >
            <div className="overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="aspect-[4/5] w-full scale-[1.08] object-cover object-center transition duration-500 group-hover:scale-[1.18]"
                style={{ objectPosition: 'center center' }}
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent opacity-80" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">{image.category}</p>
              <h3 className="mt-2 font-display text-2xl text-cream">{image.title}</h3>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}
