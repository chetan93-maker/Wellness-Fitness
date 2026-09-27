import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Membership', to: '/membership' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#1A2F25]/90 shadow-xl backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 text-cream">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/70 bg-[#1A2F25]/70 font-display text-lg text-gold shadow-lg shadow-gold/10">
            H
          </div>
          <div className="leading-none">
            <div className="font-display text-xl tracking-[0.2em] text-cream">THE HOUSE</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.45em] text-sage">of wellness</div>
          </div>
        </NavLink>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive ? 'text-gold' : 'text-cream/80 hover:text-gold'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex">
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-gold bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2F25] transition-all duration-300 hover:scale-[1.02] hover:bg-[#e7c75a]"
          >
            Join Now
          </NavLink>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-gold/60 p-2 text-cream transition hover:border-gold hover:text-gold lg:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#1A2F25] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? 'text-gold' : 'text-cream/80'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2F25]"
            >
              Join Now
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
