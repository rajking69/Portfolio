import PropTypes from 'prop-types'
import { Orbit } from 'lucide-react'

const iconMap = {
  LinkedIn: Orbit,
  GitHub: Orbit,
  ResearchGate: Orbit,
  'Google Scholar': Orbit,
  IEEE: Orbit,
  ORCID: Orbit,
}

const colorClasses = [
  'from-blue-500 to-cyan-300',
  'from-slate-500 to-slate-300',
  'from-cyan-500 to-teal-300',
  'from-indigo-500 to-violet-300',
  'from-emerald-500 to-lime-300',
  'from-sky-500 to-fuchsia-300',
]

const SocialLinks = ({ items, compact = false }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {items.map((item, index) => {
        const Icon = iconMap[item.label] || Orbit
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={
              compact
                ? `inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/25 bg-gradient-to-br ${colorClasses[index % colorClasses.length]} text-white shadow-lg transition hover:scale-105`
                : 'btn btn-sm gap-2 border-cyan-300/20 bg-slate-900/80 text-slate-100 hover:border-cyan-300 hover:bg-slate-800'
            }
            aria-label={item.label}
          >
            <Icon size={14} />
            {compact ? null : item.label}
          </a>
        )
      })}
    </div>
  )
}

SocialLinks.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  compact: PropTypes.bool,
}

export default SocialLinks
