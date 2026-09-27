import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Camera, ArrowRight, BadgeCheck } from 'lucide-react'

const inputClass =
  'mt-2 w-full rounded-2xl border border-[#d4af37]/20 bg-white/80 px-4 py-3 text-sm text-[#1A2F25] placeholder:text-[#1A2F25]/50 outline-none transition focus:border-gold focus:shadow-[0_0_0_4px_rgba(212,175,55,0.15)]'

export default function Contact() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="grid overflow-hidden rounded-[2.5rem] border border-[#d4af37]/20 bg-[#F9F6F0] shadow-xl lg:grid-cols-2">
        <div className="p-8 sm:p-10 lg:p-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Contact us</p>
          <h1 className="font-display text-4xl text-forest sm:text-5xl">Request your private tour.</h1>

          <form className="mt-10 space-y-6">
            {[
              { label: 'Name', type: 'text', placeholder: 'Your full name' },
              { label: 'Email', type: 'email', placeholder: 'name@example.com' },
              { label: 'Phone', type: 'tel', placeholder: '+91 98765 43210' },
            ].map((field, index) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
              >
                <label className="text-sm uppercase tracking-[0.22em] text-[#1A2F25]/70">{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} className={inputClass} />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.36 }}
            >
              <label className="text-sm uppercase tracking-[0.22em] text-[#1A2F25]/70">Interest</label>
              <select className={`${inputClass} appearance-none`} defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option>General Membership</option>
                <option>Personal Training</option>
                <option>Private Tour</option>
                <option>Wellness Consultation</option>
              </select>
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.48 }}
              className="group relative inline-flex overflow-hidden rounded-full bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#1A2F25] transition hover:scale-[1.02]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition group-hover:translate-x-full" />
              <span className="relative inline-flex items-center gap-3">
                Submit
                <ArrowRight size={16} />
              </span>
            </motion.button>
          </form>
        </div>

        <div className="bg-[#1A2F25] p-8 text-cream sm:p-10 lg:p-12">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] border border-gold/30">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Charholi%20PCMC&output=embed"
              className="h-[260px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-5 text-sm text-cream/80">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-gold" />
              <span>Charholi, PCMC, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gold" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gold" />
              <span>hello@houseofwellness.in</span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 text-gold">
            <Camera size={18} />
            <BadgeCheck size={18} />
            <span className="text-xs uppercase tracking-[0.3em] text-cream/70">@houseofwellness</span>
          </div>
        </div>
      </div>
    </main>
  )
}
