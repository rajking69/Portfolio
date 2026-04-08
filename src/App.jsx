import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import ResearchFocusSection from './components/sections/ResearchFocusSection'
import ProjectsSection from './components/sections/ProjectsSection'
import CollaboratePage from './components/pages/CollaboratePage'
import ResearchPage from './components/pages/ResearchPage'
import ExploreChoicePage from './components/pages/ExploreChoicePage'
import ProjectsPage from './components/pages/ProjectsPage'
import AboutPage from './components/pages/AboutPage'

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
      <div className={`border-t px-4 py-4 text-center text-xs ${isLight ? 'border-slate-300 text-slate-600' : 'border-white/10 text-slate-400'}`}>
        © 2026 sm_rajking. All rights reserved.
      </div>
    </div>
  )
}

function ResearchRoute({ theme, onToggleTheme }) {
  const isLight = theme === 'light'

  return (
    <div className={`collab-shell min-h-screen ${isLight ? 'bg-slate-100 text-slate-900' : 'bg-slate-950 text-slate-100'}`}>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute inset-0 ${isLight ? 'bg-slate-100' : 'bg-slate-950'}`} />
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
        <ResearchPage theme={theme} />
      </main>
      <div className={`border-t px-4 py-4 text-center text-xs ${isLight ? 'border-slate-300 text-slate-600' : 'border-white/10 text-slate-400'}`}>
        © 2026 sm_rajking. All rights reserved.
      </div>
    </div>
  )
}

function ExploreChoiceRoute({ theme, onToggleTheme }) {
  const isLight = theme === 'light'

  return (
    <div className={`collab-shell min-h-screen ${isLight ? 'bg-slate-100 text-slate-900' : 'bg-slate-950 text-slate-100'}`}>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute inset-0 ${isLight ? 'bg-slate-100' : 'bg-slate-950'}`} />
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
        <ExploreChoicePage theme={theme} />
      </main>
      <div className={`border-t px-4 py-4 text-center text-xs ${isLight ? 'border-slate-300 text-slate-600' : 'border-white/10 text-slate-400'}`}>
        © 2026 sm_rajking. All rights reserved.
      </div>
    </div>
  )
}

function ProjectsRoute({ theme, onToggleTheme }) {
  const isLight = theme === 'light'

  return (
    <div className={`collab-shell min-h-screen ${isLight ? 'bg-slate-100 text-slate-900' : 'bg-slate-950 text-slate-100'}`}>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute inset-0 ${isLight ? 'bg-slate-100' : 'bg-slate-950'}`} />
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
        <ProjectsPage theme={theme} />
      </main>
      <div className={`border-t px-4 py-4 text-center text-xs ${isLight ? 'border-slate-300 text-slate-600' : 'border-white/10 text-slate-400'}`}>
        © 2026 sm_rajking. All rights reserved.
      </div>
    </div>
  )
}

function AboutRoute({ theme, onToggleTheme }) {
  const isLight = theme === 'light'

  return (
    <div className={`collab-shell min-h-screen ${isLight ? 'bg-slate-100 text-slate-900' : 'bg-slate-950 text-slate-100'}`}>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute inset-0 ${isLight ? 'bg-slate-100' : 'bg-slate-950'}`} />
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
        <AboutPage theme={theme} />
      </main>
      <div className={`border-t px-4 py-4 text-center text-xs ${isLight ? 'border-slate-300 text-slate-600' : 'border-white/10 text-slate-400'}`}>
        © 2026 sm_rajking. All rights reserved.
      </div>
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

ResearchRoute.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
}

ExploreChoiceRoute.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
}

ProjectsRoute.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
}

AboutRoute.propTypes = {
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
      <Route path="/research" element={<ResearchRoute theme={theme} onToggleTheme={toggleTheme} />} />
      <Route path="/projects" element={<ProjectsRoute theme={theme} onToggleTheme={toggleTheme} />} />
      <Route path="/about" element={<AboutRoute theme={theme} onToggleTheme={toggleTheme} />} />
      <Route path="/explore-choice" element={<ExploreChoiceRoute theme={theme} onToggleTheme={toggleTheme} />} />
    </Routes>
  )
}

export default App
