import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const panelVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 110,
      damping: 18,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const ExploreChoicePage = ({ theme }) => {
  const isLight = theme === 'light'

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 lg:px-8" id="explore-choice">
      <motion.div
        className={`pointer-events-none absolute -top-24 left-1/4 h-44 w-44 rounded-full blur-3xl ${
          isLight ? 'bg-cyan-300/35' : 'bg-cyan-400/20'
        }`}
        animate={{ y: [0, -12, 0], x: [0, 8, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full blur-3xl ${
          isLight ? 'bg-sky-300/30' : 'bg-blue-400/20'
        }`}
        animate={{ y: [0, 10, 0], x: [0, -10, 0], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <main className="mx-auto flex min-h-[calc(100vh-140px)] max-w-3xl items-center justify-center">
          <motion.div
            className="w-full text-center"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className={`text-xs font-semibold uppercase tracking-[0.14em] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
            >
              Explore Gateway
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`mx-auto mt-3 max-w-2xl text-sm md:text-base ${isLight ? 'text-slate-600' : 'text-slate-300'}`}
            >
              Jump straight into research milestones or browse your latest project work.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <motion.a
                href="/research"
                className={`rounded-full border px-7 py-3 text-sm font-bold transition-all sm:text-[1.05rem] ${
                  isLight
                    ? 'border-transparent bg-gradient-to-r from-cyan-400 to-sky-100 text-slate-900 hover:from-cyan-300 hover:to-sky-50'
                    : 'border-transparent bg-gradient-to-r from-cyan-400 to-slate-200 text-slate-900 hover:from-cyan-300 hover:to-white'
                }`}
                whileHover={{ y: -4, scale: 1.03, boxShadow: '0 10px 28px rgba(34,211,238,0.28)' }}
                whileTap={{ scale: 0.97 }}
              >
                View Research
              </motion.a>

              <motion.a
                href="/projects"
                className={`rounded-full border px-7 py-3 text-sm font-bold transition-all sm:text-[1.05rem] ${
                  isLight
                    ? 'border-cyan-500 bg-transparent text-cyan-700 hover:bg-cyan-50'
                    : 'border-cyan-400 bg-transparent text-cyan-300 hover:bg-cyan-500/10'
                }`}
                whileHover={{ y: -4, scale: 1.03, boxShadow: '0 10px 24px rgba(56,189,248,0.2)' }}
                whileTap={{ scale: 0.97 }}
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>
      </main>
    </section>
  )
}

ExploreChoicePage.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
}

export default ExploreChoicePage
