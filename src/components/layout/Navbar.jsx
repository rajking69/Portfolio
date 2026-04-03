import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Download, Menu, X } from 'lucide-react'
import { profile } from '../../data/portfolioData'

const desktopItems = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About Me', href: '#research' },
  { label: 'Bio', href: '#research', chevron: true },
  { label: 'Research', href: '#research', chevron: true },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur"
      initial={{ y: -36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-2 md:px-6">
        <motion.a
          href="#home"
          className="group z-50 mr-2 flex items-center space-x-3"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-700 shadow-sm transition-all duration-500 group-hover:border-accent"
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
              className="font-serif text-xl font-bold text-slate-100 leading-none group-hover:text-accent transition-colors md:text-2xl"
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
              className={
                item.active
                  ? 'relative flex cursor-pointer items-center space-x-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm font-medium text-white shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300'
                  : 'relative flex cursor-pointer items-center space-x-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:bg-slate-800/50 hover:text-white'
              }
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

          <div className="mx-2 h-4 w-px bg-slate-800" />
          <motion.a
            href={profile.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1.5 rounded-lg border border-cyan-300/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all hover:bg-cyan-400 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.32 }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Resume</span>
            <Download size={12} />
          </motion.a>
        </div>

        <div className="z-50 flex items-center lg:hidden">
          <motion.button
            type="button"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
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
            className="border-t border-white/10 bg-slate-950/95 px-4 py-3 lg:hidden"
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
                  className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800/60 hover:text-white"
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
                className="mt-2 inline-flex items-center gap-2 rounded-lg border border-cyan-300/20 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.22 }}
              >
                Resume
                <Download size={14} />
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
