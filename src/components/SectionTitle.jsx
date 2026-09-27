export default function SectionTitle({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-tight text-forest sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-forest/80 sm:text-lg">{text}</p>}
    </div>
  )
}
