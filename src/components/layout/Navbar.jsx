import { useState } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Download, Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../../data/portfolioData'

const desktopItems = [
  { label: 'Home', href: '/#home', active: true },
  { label: 'About Me', href: '/about' },
  { label: 'Bio', href: '/about#education' },
  { label: 'Certifications', href: '/about#certifications' },
  { label: 'Research', href: '/research' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/collaborate' },
]

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isLight = theme === 'light'

  const activeLinkClass = isLight
    ? 'relative flex cursor-pointer items-center space-x-1.5 rounded-lg border border-slate-300 bg-white/90 px-3 py-2 text-sm font-medium text-slate-900 shadow-[0_0_12px_rgba(14,165,233,0.15)] transition-all duration-300'
    : 'relative flex cursor-pointer items-center space-x-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm font-medium text-white shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300'

  const defaultLinkClass = isLight
    ? 'relative flex cursor-pointer items-center space-x-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900'
    : 'relative flex cursor-pointer items-center space-x-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:bg-slate-800/50 hover:text-white'

  return (
    <motion.header
      className={`site-navbar sticky top-0 z-40 border-b backdrop-blur ${
        isLight ? 'border-slate-200 bg-slate-100/90' : 'border-white/10 bg-slate-950/80'
      }`}
      initial={{ y: -36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="site-navbar-shell relative mx-auto flex max-w-6xl items-center justify-between px-3 py-2 sm:px-4 md:px-6">
        <motion.a
          href="/#home"
          className="group z-50 mr-2 flex items-center space-x-2 sm:space-x-3"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className={`navbar-brand-avatar relative h-9 w-9 overflow-hidden rounded-full border shadow-sm transition-all duration-500 group-hover:border-accent sm:h-10 sm:w-10 ${
              isLight ? 'border-slate-300' : 'border-slate-700'
            }`}
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.25 }}
          >
            <img
              src={profile.avatar}
              alt="Profile"
              className="h-full w-full scale-110 object-cover object-[center_22%] brightness-110 contrast-110"
            />
          </motion.div>
          <div className="flex flex-col justify-center">
            <motion.span
              className={`navbar-brand-text font-serif text-lg font-bold leading-none group-hover:text-accent transition-colors sm:text-xl md:text-2xl ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              rajking...
            </motion.span>
          </div>
        </motion.a>

        <div className="hidden items-center space-x-1 lg:flex">
          {desktopItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={item.active ? activeLinkClass : defaultLinkClass}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.06 * index }}
              whileHover={{ y: -2 }}
            >
              <span>{item.label}</span>
              {item.chevron ? (
                <motion.span whileHover={{ rotate: 180 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={14} />
                </motion.span>
              ) : null}
            </motion.a>
          ))}

          <div className={`mx-2 h-4 w-px ${isLight ? 'bg-slate-300' : 'bg-slate-800'}`} />
          <motion.a
            href={profile.resumeLink}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center space-x-1.5 rounded-lg border px-4 py-1.5 text-xs font-bold transition-all ${
              isLight
                ? 'border-sky-300 bg-sky-100 text-sky-700 hover:bg-sky-500 hover:text-white hover:shadow-[0_0_20px_rgba(14,165,233,0.35)]'
                : 'border-cyan-300/20 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]'
            }`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.32 }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Resume</span>
            <Download size={12} />
          </motion.a>

          <motion.button
            type="button"
            className={`ml-2 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
              isLight
                ? 'border-slate-300 bg-white text-slate-700 hover:border-sky-500 hover:text-slate-900'
                : 'border-slate-700 bg-slate-800/70 text-slate-200 hover:border-cyan-300 hover:text-white'
            }`}
            onClick={onToggleTheme}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Toggle theme"
            title="Toggle light and dark mode"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            {theme === 'dark' ? 'Light' : 'Night'}
          </motion.button>
        </div>

        <div className="z-50 flex items-center lg:hidden">
          <motion.button
            type="button"
            className={`mr-1 rounded-lg p-2 transition-colors ${
              isLight ? 'text-slate-600 hover:bg-slate-200 hover:text-slate-900' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            whileTap={{ scale: 0.92 }}
            title="Toggle light and dark mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          <motion.button
            type="button"
            className={`mobile-nav-toggle rounded-lg p-2 transition-colors ${
              isLight ? 'text-slate-600 hover:bg-slate-200 hover:text-slate-900' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            whileTap={{ scale: 0.92 }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className={`mobile-menu-panel border-t px-3 py-3 sm:px-4 lg:hidden ${
              isLight ? 'border-slate-200 bg-white/95' : 'border-white/10 bg-slate-950/95'
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="flex flex-col gap-1">
              {desktopItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    isLight ? 'text-slate-700 hover:bg-slate-200 hover:text-slate-900' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.03 * index }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={profile.resumeLink}
                target="_blank"
                rel="noreferrer"
                className={`mt-2 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold ${
                  isLight
                    ? 'border-sky-300 bg-sky-100 text-sky-700'
                    : 'border-cyan-300/20 bg-cyan-400/10 text-cyan-300'
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.22 }}
              >
                Resume
                <Download size={14} />
              </motion.a>
              <motion.button
                type="button"
                onClick={onToggleTheme}
                className={`mt-2 inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold ${
                  isLight ? 'border-slate-300 bg-white text-slate-700' : 'border-slate-700 bg-slate-800/70 text-slate-200'
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.24 }}
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                {theme === 'dark' ? 'Light Mode' : 'Night Mode'}
              </motion.button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

Navbar.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
}

export default Navbar
