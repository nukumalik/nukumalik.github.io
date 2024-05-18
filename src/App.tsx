import Experiences from './components/Experiences'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Trusted from './components/Trusted'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex flex-col items-center py-16 md:py-12 relative">
        <Hero />
        <Trusted />
        <Technologies />
        <Projects />
        <Experiences />
      </div>
      <Footer />
    </div>
  )
}

export default App
