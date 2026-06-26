import SplashScreen from './components/SplashScreen'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import EducationCerts from './components/EducationCerts'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SplashScreen />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <EducationCerts />
      <Portfolio />
      <Contact />
    </div>
  )
}
