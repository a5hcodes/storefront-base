import './App.css'
import About from './components/About'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Values from './components/Values'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Values />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
