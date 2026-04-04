import PropTypes from 'prop-types'
import { Orbit } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiResearchgate } from 'react-icons/si'

const iconMap = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  ResearchGate: SiResearchgate,
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
                ? `social-logo-badge inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200/35 bg-gradient-to-br ${colorClasses[index % colorClasses.length]} text-white shadow-[0_10px_26px_rgba(6,182,212,0.32)] transition hover:scale-110`
                : 'btn btn-sm gap-2 border-cyan-300/20 bg-slate-900/80 text-slate-100 hover:border-cyan-300 hover:bg-slate-800'
            }
            aria-label={item.label}
          >
            <Icon size={compact ? 18 : 14} />
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
