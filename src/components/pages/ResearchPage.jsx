import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { ArrowUpRight, Calendar, Globe, Search, Sparkles } from 'lucide-react'
import { researchPapers } from '../../data/researchData'

const ResearchPage = ({ theme }) => {
  const isLight = theme === 'light'
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('newest')

  const visiblePapers = useMemo(() => {
    const loweredQuery = searchQuery.trim().toLowerCase()

    const filtered = researchPapers.filter((paper) => {
      const searchMatch =
        loweredQuery.length === 0 ||
        paper.title.toLowerCase().includes(loweredQuery) ||
        paper.venue.toLowerCase().includes(loweredQuery) ||
        paper.authors.some((author) => author.toLowerCase().includes(loweredQuery))

      return searchMatch
    })

    return filtered.sort((a, b) => {
      if (sortOrder === 'oldest') {
        return a.year - b.year
      }
      return b.year - a.year
    })
  }, [searchQuery, sortOrder])

  return (
    <section className="min-h-screen pt-24 pb-12 md:pt-36 md:pb-14" id="research-page">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative mb-8 overflow-hidden rounded-3xl border p-4 sm:p-5 md:mb-10 md:p-8 ${
            isLight
              ? 'border-slate-300 bg-gradient-to-br from-white via-slate-100 to-sky-50'
              : 'border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40'
          }`}
        >
          <div className="pointer-events-none absolute -top-20 right-0 h-52 w-52 rounded-full bg-cyan-400/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-10 h-52 w-52 rounded-full bg-indigo-400/25 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-end">
            <div>
              <div
                className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                  isLight
                    ? 'border-cyan-300 bg-cyan-100 text-cyan-800'
                    : 'border-cyan-300/35 bg-cyan-400/10 text-cyan-300'
                }`}
              >
                <Sparkles size={13} />
                Research Profile
              </div>

              <h2 className={`font-serifDisplay text-3xl font-bold leading-tight md:text-5xl ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                Publications that reflect
                <span className={isLight ? 'text-cyan-700' : 'text-cyan-300'}> focused AI research</span>
              </h2>

              <p className={`mt-4 max-w-2xl text-sm md:text-base ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                This page highlights my current scholarly work. It is intentionally designed as a clean publication gallery with quick filtering,
                searchable metadata, and direct publisher access.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className={`rounded-2xl border p-3 text-center ${isLight ? 'border-slate-300 bg-white/90' : 'border-slate-700 bg-slate-900/80'}`}>
                <p className={`text-2xl font-extrabold sm:text-3xl ${isLight ? 'text-slate-900' : 'text-white'}`}>{researchPapers.length}</p>
                <p className={`mt-1 text-[11px] font-semibold uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Paper</p>
              </div>
              <div className={`rounded-2xl border p-3 text-center ${isLight ? 'border-cyan-300/50 bg-cyan-50' : 'border-cyan-400/25 bg-cyan-400/10'}`}>
                <p className={`text-2xl font-extrabold sm:text-3xl ${isLight ? 'text-cyan-800' : 'text-cyan-300'}`}>1</p>
                <p className={`mt-1 text-[11px] font-semibold uppercase tracking-wider ${isLight ? 'text-cyan-700' : 'text-cyan-200/90'}`}>Track</p>
              </div>
              <div className={`rounded-2xl border p-3 text-center ${isLight ? 'border-indigo-300/50 bg-indigo-50' : 'border-indigo-400/25 bg-indigo-400/10'}`}>
                <p className={`text-2xl font-extrabold sm:text-3xl ${isLight ? 'text-indigo-800' : 'text-indigo-300'}`}>2025</p>
                <p className={`mt-1 text-[11px] font-semibold uppercase tracking-wider ${isLight ? 'text-indigo-700' : 'text-indigo-200/90'}`}>Latest</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div
            className={`sticky top-20 z-20 flex flex-col items-center justify-between gap-4 rounded-2xl border p-4 backdrop-blur sm:flex-row ${
              isLight ? 'border-slate-300 bg-white/95' : 'border-slate-700 bg-slate-900/85'
            }`}
          >
            <div className="group relative w-full sm:w-96">
              <Search
                size={16}
                className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${
                  isLight ? 'text-slate-500 group-focus-within:text-cyan-700' : 'text-slate-500 group-focus-within:text-cyan-300'
                }`}
              />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by title, author, or keyword..."
                className={`w-full rounded-lg border py-2.5 pl-10 pr-4 text-sm outline-none transition-all ${
                  isLight
                    ? 'border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
                    : 'border-slate-700 bg-slate-950 text-slate-200 placeholder:text-slate-600 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300'
                }`}
              />
            </div>

            <div className="flex w-full items-center justify-end sm:w-auto">
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
                className={`cursor-pointer rounded-lg border px-3 py-2.5 text-sm outline-none ${
                  isLight
                    ? 'border-slate-300 bg-white text-slate-700 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
                    : 'border-slate-700 bg-slate-950 text-slate-300 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300'
                }`}
              >
                <option value="newest">Year (Newest)</option>
                <option value="oldest">Year (Oldest)</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6">
            {visiblePapers.length === 0 ? (
              <div
                className={`rounded-2xl border p-8 text-center ${
                  isLight ? 'border-slate-300 bg-slate-50 text-slate-600' : 'border-slate-800 bg-slate-900/60 text-slate-400'
                }`}
              >
                No publication found in this category yet.
              </div>
            ) : (
              visiblePapers.map((paper) => (
                <article
                  key={paper.id}
                  className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isLight
                      ? 'border-slate-300 bg-white hover:border-cyan-400 hover:shadow-[0_24px_60px_rgba(14,116,144,0.16)]'
                      : 'border-slate-800 bg-slate-900 hover:border-cyan-400/60 hover:shadow-[0_24px_60px_rgba(34,211,238,0.1)]'
                  }`}
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-cyan-500/10 to-transparent" />
                  <div className="grid gap-0 md:grid-cols-[220px_1fr]">
                    <aside
                      className={`border-b p-4 sm:p-5 md:border-b-0 md:border-r md:p-6 ${
                        isLight ? 'border-slate-200 bg-slate-50/80' : 'border-slate-800 bg-slate-950/50'
                      }`}
                    >
                      <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        Publication
                      </p>
                      <p
                        className={`mt-3 inline-flex rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                          isLight ? 'border-cyan-300 bg-cyan-100 text-cyan-800' : 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300'
                        }`}
                      >
                        {paper.badge}
                      </p>

                      <div className={`mt-5 rounded-xl border p-3 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-700 bg-slate-900'}`}>
                        <p className={`text-[11px] uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Year</p>
                        <p className={`mt-1 flex items-center text-lg font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                          <Calendar size={14} className="mr-2" />
                          {paper.year}
                        </p>
                      </div>
                    </aside>

                    <div className="p-4 sm:p-5 md:p-8">
                      <h3
                        className={`font-serifDisplay text-xl font-bold leading-snug md:text-2xl ${
                          isLight ? 'text-slate-900' : 'text-slate-100'
                        }`}
                      >
                        {paper.title}
                      </h3>

                      <p
                        className={`mt-4 rounded-xl border px-4 py-3 text-sm italic md:text-base ${
                          isLight ? 'border-slate-200 bg-slate-50 text-slate-700' : 'border-slate-800 bg-slate-900/60 text-slate-300'
                        }`}
                      >
                        {paper.venue}
                      </p>

                      <p className={`mt-5 text-xs font-semibold uppercase tracking-[0.14em] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        Authors
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {paper.authors.map((author) => (
                          <span
                            key={`${paper.id}-${author}`}
                            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                              author === 'Sheikh Mohammad Rajking'
                                ? isLight
                                  ? 'border-emerald-300 bg-emerald-100 text-emerald-800'
                                  : 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                                : isLight
                                  ? 'border-slate-300 bg-white text-slate-700'
                                  : 'border-slate-700 bg-slate-900 text-slate-300'
                            }`}
                          >
                            {author}
                          </span>
                        ))}
                      </div>

                      <div className={`mt-6 border-t pt-5 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
                        <div className="flex flex-wrap items-center gap-3">
                          <span
                            className={`rounded-md border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                              isLight ? 'border-slate-300 bg-white text-slate-600' : 'border-slate-700 bg-slate-900 text-slate-300'
                            }`}
                          >
                            Publication Partner: {paper.publicationPartner}
                          </span>

                          {paper.publisherUrl ? (
                            <a
                              href={paper.publisherUrl}
                              target="_blank"
                              rel="noreferrer"
                              className={`inline-flex items-center space-x-1.5 rounded-lg border px-4 py-2.5 text-xs font-bold transition-all ${
                                isLight
                                  ? 'border-slate-300 bg-slate-100 text-slate-700 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-800'
                                  : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-400 hover:bg-slate-800 hover:text-white'
                              }`}
                            >
                              <Globe size={14} />
                              <span>Read Publication</span>
                              <ArrowUpRight size={13} />
                            </a>
                          ) : (
                            <span
                              className={`inline-flex items-center space-x-1.5 rounded-lg border px-4 py-2.5 text-xs font-bold ${
                                isLight
                                  ? 'border-red-300 bg-red-50 text-red-700'
                                  : 'border-red-400/30 bg-red-500/10 text-red-300'
                              }`}
                            >
                              <Globe size={14} />
                              <span>Link Coming Soon</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

ResearchPage.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
}

export default ResearchPage
