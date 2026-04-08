import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import {
  Award,
  BarChart3,
  Binary,
  Bot,
  BrainCircuit,
  BookOpen,
  Boxes,
  Briefcase,
  Code2,
  FlaskConical,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  MessageSquareText,
  Monitor,
  FileText,
  Phone,
  ShieldCheck,
  Sparkles,
  SquareFunction,
  TrophyIcon,
  Trophy,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react'
import {
  SiC,
  SiCss,
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKeras,
  SiLatex,
  SiMongodb,
  Si365Datascience,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
} from 'react-icons/si'
import { aboutFeatureContent, profile, socialLinks, stats } from '../../data/portfolioData'
import SocialLinks from '../ui/SocialLinks'

const aboutFeatureItems = [
  { label: 'Education', icon: BookOpen },
  { label: 'Experience', icon: Briefcase },
  { label: 'Skills', icon: Code2 },
  { label: 'Leadership', icon: Users },
  { label: 'Achievements', icon: TrophyIcon },
  { label: 'Languages', icon: Languages },
  { label: 'Trainings', icon: FlaskConical },
  { label: 'Co-curricular', icon: BrainCircuit },
  { label: 'Memberships', icon: ShieldCheck },
  { label: 'Collaboration', icon: Workflow },
  { label: 'Certifications', icon: Award },
]

const featureHashMap = {
  Education: 'education',
  Experience: 'experience',
  Skills: 'skills',
  Leadership: 'leadership',
  Achievements: 'achievements',
  Languages: 'languages',
  Trainings: 'trainings',
  'Co-curricular': 'co-curricular',
  Memberships: 'memberships',
  Collaboration: 'collaboration',
  Certifications: 'certifications',
}

const getFeatureByHash = (hash) => {
  const normalized = hash.replace('#', '').trim().toLowerCase()
  if (!normalized || normalized === 'bio') {
    return null
  }

  return Object.keys(featureHashMap).find((label) => featureHashMap[label] === normalized) || null
}

const skillsShowcase = [
  {
    title: 'Programming',
    icon: Code2,
    items: ['C', 'C++', 'Python', 'JavaScript'],
    accent: 'cyan',
    layout: 'normal',
  },
  {
    title: 'Frameworks & Web',
    icon: Sparkles,
    items: ['HTML5', 'CSS3', 'React', 'Node.js', 'Express.js', 'Next.js', 'MongoDB', 'Tailwind', 'Firebase'],
    accent: 'emerald',
    layout: 'wide',
  },
  {
    title: 'Problem Solving',
    icon: BrainCircuit,
    items: ['Algorithms', 'Data Structures', 'Computer Networks'],
    accent: 'amber',
    layout: 'normal',
  },
  {
    title: 'AI / ML',
    icon: FlaskConical,
    items: ['NumPy', 'Pandas', 'Matplotlib', 'TensorFlow', 'Keras', 'CNN', 'NLP', 'LLMs'],
    accent: 'violet',
    layout: 'normal',
  },
  {
    title: 'Tools & Misc',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Postman', 'LaTeX', 'Microsoft Office 365', 'Windows OS', 'Netlify'],
    accent: 'rose',
    layout: 'normal',
  },
  {
    title: 'Learning Track',
    icon: TrophyIcon,
    items: ['Programming Hero Course', 'MERN Stack (Learning)'],
    accent: 'sky',
    layout: 'normal',
  },
]

const skillItemIconMap = {
  C: { icon: SiC, color: 'text-[#A8B9CC]' },
  'C++': { icon: SiCplusplus, color: 'text-[#00599C]' },
  Python: { icon: SiPython, color: 'text-[#3776AB]' },
  JavaScript: { icon: SiJavascript, color: 'text-[#F7DF1E]' },
  HTML5: { icon: SiHtml5, color: 'text-[#E34F26]' },
  CSS3: { icon: SiCss, color: 'text-[#1572B6]' },
  React: { icon: SiReact, color: 'text-[#61DAFB]' },
  'Node.js': { icon: SiNodedotjs, color: 'text-[#339933]' },
  'Express.js': { icon: SiExpress, color: 'text-slate-500' },
  'Next.js': { icon: SiNextdotjs, color: 'text-slate-500' },
  MongoDB: { icon: SiMongodb, color: 'text-[#47A248]' },
  Tailwind: { icon: SiTailwindcss, color: 'text-[#06B6D4]' },
  Firebase: { icon: SiFirebase, color: 'text-[#FFCA28]' },
  Algorithms: { icon: SquareFunction, color: 'text-fuchsia-400' },
  'Data Structures': { icon: Binary, color: 'text-indigo-400' },
  'Computer Networks': { icon: Workflow, color: 'text-sky-400' },
  NumPy: { icon: SiNumpy, color: 'text-[#013243]' },
  Pandas: { icon: SiPandas, color: 'text-[#150458]' },
  Matplotlib: { icon: BarChart3, color: 'text-orange-400' },
  TensorFlow: { icon: SiTensorflow, color: 'text-[#FF6F00]' },
  Keras: { icon: SiKeras, color: 'text-[#D00000]' },
  CNN: { icon: BrainCircuit, color: 'text-violet-400' },
  NLP: { icon: MessageSquareText, color: 'text-teal-400' },
  LLMs: { icon: Bot, color: 'text-cyan-400' },
  Git: { icon: SiGit, color: 'text-[#F05032]' },
  GitHub: { icon: SiGithub, color: 'text-slate-500' },
  Postman: { icon: SiPostman, color: 'text-[#FF6C37]' },
  LaTeX: { icon: SiLatex, color: 'text-[#008080]' },
  'Microsoft Office 365': { icon: Si365Datascience, color: 'text-[#D83B01]' },
  'Windows OS': { icon: Monitor, color: 'text-[#0078D4]' },
  Netlify: { icon: SiNetlify, color: 'text-[#00C7B7]' },
  'Programming Hero Course': { icon: BookOpen, color: 'text-cyan-400' },
  'MERN Stack (Learning)': { icon: Boxes, color: 'text-emerald-400' },
}

const AboutPage = ({ theme }) => {
  const isLight = theme === 'light'
  const [activeFeature, setActiveFeature] = useState(null)
  const activeContent = activeFeature ? aboutFeatureContent[activeFeature] : null

  const getSkillTone = (accent) => {
    const lightTones = {
      cyan: 'border-cyan-200 bg-cyan-50',
      emerald: 'border-emerald-200 bg-emerald-50',
      amber: 'border-amber-200 bg-amber-50',
      violet: 'border-violet-200 bg-violet-50',
      rose: 'border-rose-200 bg-rose-50',
      sky: 'border-sky-200 bg-sky-50',
    }

    const darkTones = {
      cyan: 'border-cyan-300/20 bg-gradient-to-b from-[#0a1726] to-[#0a2138]',
      emerald: 'border-emerald-300/20 bg-gradient-to-b from-[#0d1b18] to-[#132925]',
      amber: 'border-amber-300/20 bg-gradient-to-b from-[#1d170d] to-[#2d220f]',
      violet: 'border-violet-300/20 bg-gradient-to-b from-[#171227] to-[#221a38]',
      rose: 'border-rose-300/20 bg-gradient-to-b from-[#20141b] to-[#321b2a]',
      sky: 'border-sky-300/20 bg-gradient-to-b from-[#0d1728] to-[#12263f]',
    }

    return isLight ? lightTones[accent] : darkTones[accent]
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const applyHashFeature = () => {
      const feature = getFeatureByHash(window.location.hash)
      setActiveFeature(feature)
    }

    applyHashFeature()
    window.addEventListener('hashchange', applyHashFeature)

    return () => window.removeEventListener('hashchange', applyHashFeature)
  }, [])

  const handleFeatureToggle = (label) => {
    const isSame = activeFeature === label
    const nextFeature = isSame ? null : label

    setActiveFeature(nextFeature)

    if (typeof window === 'undefined') {
      return
    }

    if (nextFeature) {
      window.history.replaceState(null, '', `${window.location.pathname}#${featureHashMap[nextFeature]}`)
    } else {
      window.history.replaceState(null, '', `${window.location.pathname}#bio`)
    }
  }

  const handleAboutBadgeClick = () => {
    setActiveFeature(null)

    if (typeof window === 'undefined') {
      return
    }

    window.history.replaceState(null, '', `${window.location.pathname}#bio`)
  }

  return (
    <section className="min-h-screen px-4 pb-14 pt-24 sm:px-6 lg:px-8" id="about-page">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <button
            type="button"
            onClick={handleAboutBadgeClick}
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400/60 ${isLight ? 'border-cyan-300 bg-cyan-100 text-cyan-800' : 'border-cyan-300/30 bg-cyan-400/10 text-cyan-300'}`}
            title="Show About Bio"
          >
            About Me
          </button>
          <div className="mx-auto mt-4 w-fit">
            <img
              src={profile.avatar}
              alt={profile.name}
              className={`h-16 w-16 rounded-full border object-cover object-[center_18%] shadow-sm sm:h-20 sm:w-20 ${
                isLight ? 'border-slate-300' : 'border-slate-700'
              }`}
            />
          </div>
          <h1 className={`mt-4 font-serifDisplay text-3xl font-bold md:text-5xl ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
            {profile.name}
          </h1>
          <p className={`mx-auto mt-3 max-w-3xl text-sm md:text-base ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
            {profile.headline}
          </p>

          <div className="mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-2.5">
            {aboutFeatureItems.map((item, index) => {
              const isActive = activeFeature === item.label
              const Icon = item.icon

              return (
                <motion.button
                  key={item.label}
                  type="button"
                  onClick={() => handleFeatureToggle(item.label)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? isLight
                        ? 'border-cyan-500 bg-cyan-500 text-white shadow-[0_8px_18px_rgba(6,182,212,0.25)]'
                        : 'border-cyan-300/40 bg-cyan-500 text-white shadow-[0_8px_22px_rgba(6,182,212,0.3)]'
                      : isLight
                        ? 'border-slate-300 bg-white text-slate-700 hover:border-cyan-400 hover:text-cyan-700'
                        : 'border-slate-700 bg-slate-900/70 text-slate-300 hover:border-slate-500 hover:text-slate-100'
                  }`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={15} />
                  <span>{item.label}</span>
                </motion.button>
              )
            })}
          </div>

        </motion.div>

        {activeContent ? (
          <motion.article
            className={`mb-5 rounded-2xl border p-5 md:p-6 ${isLight ? 'border-slate-300 bg-white/95' : 'border-slate-800 bg-slate-900/80'}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <h2 className={`text-lg font-bold md:text-xl ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
              {activeContent.title}
            </h2>

            {activeFeature === 'Skills' ? (
              <div className="mt-3">
                <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.14em] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Skill Matrix
                </p>
              </div>
            ) : null}

            {activeFeature === 'Skills' ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {skillsShowcase.map((group) => {
                  const Icon = group.icon
                  const isWide = group.layout === 'wide'

                  return (
                    <div
                      key={group.title}
                      className={`${isWide ? 'md:col-span-2 xl:col-span-2' : ''} rounded-2xl border p-4 ${
                        getSkillTone(group.accent)
                      }`}
                    >
                      <div className="mb-3 flex items-center gap-2.5">
                        <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border ${isLight ? 'border-slate-300 bg-white text-slate-700' : 'border-white/10 bg-slate-900/70 text-slate-100'}`}>
                          <Icon size={17} />
                        </span>
                        <h3 className={`text-base font-semibold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>{group.title}</h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={`${group.title}-${item}`}
                            className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-sm ${
                              isLight
                                ? 'border-white bg-white/90 text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.06)]'
                                : 'border-white/15 bg-slate-900/60 text-slate-200'
                            }`}
                          >
                            {(() => {
                              const iconItem = skillItemIconMap[item]
                              if (!iconItem) {
                                return null
                              }

                              const IconComponent = iconItem.icon
                              return <IconComponent className={`shrink-0 ${iconItem.color}`} size={14} />
                            })()}
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : activeFeature === 'Certifications' ? (
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {activeContent.items.length ? (
                  activeContent.items.map((item, index) => {
                    const key = typeof item === 'object' && item !== null ? item.title || `cert-${index}` : `cert-${index}`
                    const title = typeof item === 'object' && item !== null ? item.title : item
                    const issuer = typeof item === 'object' && item !== null ? item.issuer : ''
                    const href = typeof item === 'object' && item !== null ? item.href : null
                    const image = typeof item === 'object' && item !== null ? item.image : null

                    const CardWrapper = href ? 'a' : 'div'

                    return (
                      <CardWrapper
                        key={key}
                        {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
                        className={`group block overflow-hidden rounded-2xl border transition-all ${
                          isLight
                            ? 'border-slate-300 bg-white hover:border-cyan-400 hover:shadow-[0_10px_24px_rgba(14,165,233,0.2)]'
                            : 'border-slate-700 bg-slate-900/80 hover:border-cyan-300/50 hover:shadow-[0_12px_26px_rgba(6,182,212,0.2)]'
                        }`}
                      >
                        <div className={`relative h-36 overflow-hidden ${isLight ? 'bg-gradient-to-br from-slate-200 via-slate-100 to-cyan-100' : 'bg-gradient-to-br from-slate-800 via-slate-900 to-[#0e2238]'}`}>
                          {image ? (
                            <img
                              src={image}
                              alt={title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${isLight ? 'border-slate-300 bg-white text-slate-600' : 'border-slate-600 bg-slate-900/70 text-slate-300'}`}>
                                <FileText size={24} />
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="space-y-1.5 p-4">
                          <h3 className={`text-lg font-bold leading-snug ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>{title}</h3>
                          {issuer ? <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>{issuer}</p> : null}
                          {href ? (
                            <p className={`pt-1 text-xs font-semibold uppercase tracking-[0.08em] ${isLight ? 'text-cyan-700' : 'text-cyan-300'}`}>
                              View Credential
                            </p>
                          ) : null}
                        </div>
                      </CardWrapper>
                    )
                  })
                ) : (
                  <div className={`rounded-lg border px-3 py-2 text-sm ${isLight ? 'border-slate-200 bg-slate-50 text-slate-500' : 'border-slate-700 bg-slate-900/70 text-slate-400'}`}>
                    Content will be added soon.
                  </div>
                )}
              </div>
            ) : (
              <ul className="mt-3 space-y-2">
                {activeContent.items.length ? (
                  activeContent.items.map((item, index) => {
                    const isObjectItem = typeof item === 'object' && item !== null
                    const key = isObjectItem ? item.title || item.href || `item-${index}` : item

                    return (
                      <li
                        key={key}
                        className={`rounded-lg border px-3 py-2 text-sm leading-relaxed ${isLight ? 'border-slate-200 bg-slate-50 text-slate-700' : 'border-slate-700 bg-slate-900/70 text-slate-300'}`}
                      >
                        {isObjectItem ? (
                          <div className="space-y-1">
                            <p className={`font-semibold ${isLight ? 'text-slate-800' : 'text-slate-100'}`}>{item.title}</p>
                            {item.issuer ? <p className="text-xs opacity-80">{item.issuer}</p> : null}
                            {item.href ? (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className={`mt-1 inline-flex rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors ${
                                  isLight
                                    ? 'border-cyan-400 bg-cyan-50 text-cyan-700 hover:bg-cyan-100'
                                    : 'border-cyan-300/40 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20'
                                }`}
                              >
                                View Credential
                              </a>
                            ) : null}
                          </div>
                        ) : (
                          item
                        )}
                      </li>
                    )
                  })
                ) : (
                  <li className={`rounded-lg border px-3 py-2 text-sm ${isLight ? 'border-slate-200 bg-slate-50 text-slate-500' : 'border-slate-700 bg-slate-900/70 text-slate-400'}`}>
                    Content will be added soon.
                  </li>
                )}
              </ul>
            )}
          </motion.article>
        ) : null}

        {!activeFeature ? (
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            className={`rounded-2xl border p-5 md:p-6 ${isLight ? 'border-slate-300 bg-white/95' : 'border-slate-800 bg-slate-900/80'}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <h2 className={`text-xl font-bold md:text-2xl ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>My Journey</h2>
            <div id="bio" className="scroll-mt-24" />
            <div className="mt-4 space-y-3">
              {profile.introParagraphs.map((paragraph) => (
                <p key={paragraph} className={`text-sm leading-relaxed md:text-base ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>

          <div className="space-y-5">
            <motion.article
              className={`rounded-2xl border p-5 ${isLight ? 'border-slate-300 bg-white/95' : 'border-slate-800 bg-slate-900/80'}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
            >
              <h3 className={`text-lg font-semibold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>Quick Snapshot</h3>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-xl border px-3 py-3 text-center ${isLight ? 'border-slate-200 bg-slate-50' : 'border-slate-700 bg-slate-900/70'}`}
                  >
                    <p className={`font-display text-2xl font-bold ${isLight ? 'text-cyan-700' : 'text-cyan-300'}`}>{item.value}</p>
                    <p className={`mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              className={`rounded-2xl border p-5 ${isLight ? 'border-slate-300 bg-white/95' : 'border-slate-800 bg-slate-900/80'}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
            >
              <h3 className={`text-lg font-semibold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>Contact & Links</h3>
              <div className="mt-3 space-y-2">
                <p className={`flex items-start gap-2 text-sm ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>{profile.location}</span>
                </p>
                <p className={`flex items-center gap-2 text-sm ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <Mail size={16} className="shrink-0" />
                  <span>{profile.email}</span>
                </p>
                <p className={`flex items-center gap-2 text-sm ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <Phone size={16} className="shrink-0" />
                  <span>{profile.phone}</span>
                </p>
              </div>

              <div className="mt-5">
                <SocialLinks items={socialLinks} compact />
              </div>
            </motion.article>
          </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

AboutPage.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
}

export default AboutPage