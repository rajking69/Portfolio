import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { FolderKanban } from 'lucide-react'
import { projects } from '../../data/portfolioData'

const categories = ['All', ...new Set(projects.map((project) => project.category))]

const ProjectsPage = ({ theme }) => {
  const isLight = theme === 'light'
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects
    }

    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <section
      className={`min-h-screen px-4 pb-12 pt-24 sm:px-6 lg:px-8 ${
        isLight
          ? 'bg-gradient-to-b from-slate-100 via-slate-100 to-cyan-50/40'
          : 'bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900'
      }`}
      id="projects-page"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${isLight ? 'border-cyan-300 bg-cyan-100 text-cyan-800' : 'border-cyan-300/35 bg-cyan-400/10 text-cyan-300'}`}>
            <FolderKanban size={13} />
            Project Portfolio
          </p>
          <h1 className={`mt-4 font-serifDisplay text-3xl font-bold md:text-5xl ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
            All Projects
          </h1>
          <p className={`mx-auto mt-3 max-w-2xl text-sm md:text-base ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
            Browse projects by category.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  isActive
                    ? isLight
                      ? 'border-cyan-500 bg-cyan-500 text-white'
                      : 'border-cyan-300 bg-cyan-400 text-slate-950'
                    : isLight
                      ? 'border-slate-300 bg-white text-slate-700 hover:border-cyan-500'
                      : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-300'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`group flex w-full min-w-0 flex-col overflow-hidden rounded-2xl border transition-shadow ${
                isLight
                  ? 'border-slate-300 bg-white/95 shadow-[0_4px_16px_rgba(15,23,42,0.08)] hover:shadow-[0_10px_24px_rgba(6,182,212,0.18)]'
                  : 'border-slate-800 bg-slate-900/85 shadow-[0_4px_18px_rgba(2,6,23,0.35)] hover:shadow-[0_10px_26px_rgba(34,211,238,0.18)]'
              }`}
              style={{ aspectRatio: '1 / 1' }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -5, scale: 1.015 }}
            >
              <div className="relative h-24 w-full shrink-0 sm:h-28">
                <img
                  src={project.overviewImage || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'}
                  alt={`${project.title} overview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>

              <div className="flex min-h-0 flex-1 flex-col p-2.5">
                <p className={`mb-1.5 inline-flex w-fit items-center rounded-md border px-1.5 py-0.5 text-[9px] font-bold uppercase leading-none tracking-[0.09em] ${isLight ? 'border-indigo-400 bg-indigo-50 text-indigo-700' : 'border-indigo-300/60 bg-indigo-400/10 text-indigo-200'}`}>
                  {project.category}
                </p>

                <h3
                  className={`text-sm font-bold leading-tight ${isLight ? 'text-slate-900' : 'text-white'}`}
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className={`mt-1 text-xs leading-[1.35] ${isLight ? 'text-slate-700' : 'text-slate-300'}`}
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {project.description}
                </p>

                <div className="mt-1.5 flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md border px-1.5 py-0.5 text-[10px] font-medium ${
                        isLight
                          ? 'border-cyan-300 bg-cyan-50 text-cyan-800'
                          : 'border-cyan-300/30 bg-slate-800 text-slate-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.repoUrl || project.liveUrl) ? (
                  <div className="mt-1 flex flex-wrap gap-1">
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold transition-colors ${
                          isLight
                            ? 'border-slate-300 bg-white text-slate-700 hover:border-cyan-500 hover:text-cyan-700'
                            : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-400 hover:text-cyan-300'
                        }`}
                      >
                        GitHub
                      </a>
                    ) : null}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold transition-colors ${
                          isLight
                            ? 'border-cyan-500 bg-cyan-500 text-white hover:bg-cyan-600'
                            : 'border-cyan-300/40 bg-cyan-500 text-white hover:bg-cyan-400'
                        }`}
                      >
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

ProjectsPage.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
}

export default ProjectsPage
