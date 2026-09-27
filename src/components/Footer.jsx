import { Camera, Mail, MapPin, Phone, Send } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Membership', href: '/membership' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About Us', href: '/about' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/70 bg-forest text-lg font-display text-gold">
              H
            </div>
            <div>
              <div className="font-display text-lg tracking-[0.18em] text-cream">THE HOUSE</div>
              <div className="text-[9px] uppercase tracking-[0.45em] text-sage">of wellness</div>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-7 text-cream/70">
            PCMC&apos;s most luxurious fitness club, where architecture, movement, and recovery meet in effortless harmony.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-sm uppercase tracking-[0.3em] text-gold">Quick Links</h3>
          <ul className="space-y-3 text-sm text-cream/75">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm uppercase tracking-[0.3em] text-gold">Opening Hours</h3>
          <ul className="space-y-3 text-sm text-cream/75">
            <li>Mon - Fri: 5:30 AM - 10:00 PM</li>
            <li>Saturday: 6:00 AM - 8:00 PM</li>
            <li>Sunday: 7:00 AM - 7:00 PM</li>
            <li>Recovery Lounge: By Appointment</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm uppercase tracking-[0.3em] text-gold">Connect</h3>
          <div className="space-y-4 text-sm text-cream/75">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-gold" />
              <span>Charholi, PCMC, Maharashtra</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gold" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gold" />
              <span>hello@houseofwellness.in</span>
            </div>
            <div className="flex items-center gap-3">
              <Camera size={16} className="text-gold" />
              <span>@houseofwellness</span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
            />
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-[#111111] transition hover:scale-105"
              aria-label="Subscribe to newsletter"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs uppercase tracking-[0.2em] text-cream/50 sm:px-6 lg:px-8">
        © 2026 The House of Wellness
      </div>
    </footer>
  )
}
