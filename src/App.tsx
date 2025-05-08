import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl bg-white/80 shadow-lg">
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
