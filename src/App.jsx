import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import ResearchFocusSection from './components/sections/ResearchFocusSection'
import ProjectsSection from './components/sections/ProjectsSection'

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="cyber-grid absolute inset-0 opacity-55" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      </div>
      <Navbar />
      <main>
        <HeroSection />
        <ResearchFocusSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
