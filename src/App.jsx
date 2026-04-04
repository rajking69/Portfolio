import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import ResearchFocusSection from './components/sections/ResearchFocusSection'
import ProjectsSection from './components/sections/ProjectsSection'
import CollaboratePage from './components/pages/CollaboratePage'

const THEME_STORAGE_KEY = 'portfolio-theme-mode'

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function HomePage({ theme, onToggleTheme }) {
  return (
    <div className="site-shell min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="cyber-grid absolute inset-0 opacity-55" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      </div>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <HeroSection />
        <ResearchFocusSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}

function CollaborateRoute({ theme, onToggleTheme }) {
  const isLight = theme === 'light'

  return (
    <div className={`collab-shell min-h-screen ${isLight ? 'bg-slate-100 text-slate-900' : 'bg-slate-950 text-slate-100'}`}>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute inset-0 ${isLight ? 'bg-slate-100' : 'bg-slate-950'}`} />
        <div className={`cyber-grid absolute inset-0 ${isLight ? 'opacity-25' : 'opacity-55'}`} />
        <div
          className={`absolute -left-20 top-20 h-72 w-72 rounded-full blur-3xl ${
            isLight ? 'bg-sky-300/35' : 'bg-cyan-500/20'
          }`}
        />
        <div
          className={`absolute bottom-10 right-10 h-72 w-72 rounded-full blur-3xl ${
            isLight ? 'bg-indigo-300/30' : 'bg-violet-500/20'
          }`}
        />
      </div>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <CollaboratePage theme={theme} />
      </main>
    </div>
  )
}

HomePage.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
}

CollaborateRoute.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme-mode', theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage theme={theme} onToggleTheme={toggleTheme} />} />
      <Route path="/collaborate" element={<CollaborateRoute theme={theme} onToggleTheme={toggleTheme} />} />
    </Routes>
  )
}

export default App
