/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1A2F25',
        sage: '#8A9A8A',
        gold: '#D4AF37',
        cream: '#F9F6F0',
        charcoal: '#111111',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 30px 80px rgba(26, 47, 37, 0.35)',
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at 20% 20%, rgba(212,175,55,0.08), transparent 35%), radial-gradient(circle at 80% 0%, rgba(138,154,138,0.12), transparent 30%)',
      },
    },
  },
  plugins: [],
}
