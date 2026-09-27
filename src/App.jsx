import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Membership from './pages/Membership'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
}

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#111111]">
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="overflow-hidden"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default App
