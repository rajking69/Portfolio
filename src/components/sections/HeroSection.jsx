import { motion } from 'framer-motion'
import { profile, socialLinks, stats } from '../../data/portfolioData'
import SocialLinks from '../ui/SocialLinks'
import Reveal from '../ui/Reveal'

const HeroSection = () => {
  return (
    <section id="home" className="hero-shell mx-auto max-w-6xl px-4 pb-12 pt-8 sm:pb-14 md:px-6 md:pb-16 md:pt-12">
      <div className="hero-layout grid items-start gap-8 md:grid-cols-[1.15fr_0.85fr] lg:grid-cols-[1.35fr_0.95fr]">
        <Reveal className="order-2 md:order-1">
          <div id="about-me" className="scroll-mt-24" />
          <h1 className="hero-title mt-4 text-4xl font-black leading-[0.93] text-white sm:text-5xl md:mt-6 md:text-6xl lg:text-7xl">
            <span className="font-serifDisplay">Hi!</span>
            <br />
            <span className="font-serifDisplay">I am</span>
            <br />
            <span className="font-display tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              {profile.name.toUpperCase()}
            </span>
          </h1>

          {profile.introParagraphs?.length ? (
            <div className="mt-5 max-w-2xl space-y-2 sm:space-y-3">
              {profile.introParagraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  id={index === 1 ? 'bio' : undefined}
                  className={`hero-copy text-sm sm:text-base ${index === 0 ? 'text-slate-100 md:text-lg' : 'text-slate-300'}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <>
              <p className="hero-copy mt-5 max-w-2xl text-sm text-slate-200 sm:text-base md:text-lg">{profile.shortBio}</p>
              <p className="hero-copy mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">{profile.longBio}</p>
            </>
          )}

          <div className="hero-cta mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/explore-choice"
              className="btn w-full border-0 bg-gradient-to-r from-cyan-400 to-blue-500 px-6 text-white hover:from-cyan-300 hover:to-blue-400 sm:w-auto"
            >
              View My Project & Publications
            </a>
            <a
              href="/collaborate"
              className="btn w-full border-slate-600/70 bg-slate-900/70 text-slate-100 hover:border-cyan-300 sm:w-auto"
            >
              Collaborate
            </a>
          </div>

          <div className="mt-10">
            <SocialLinks items={socialLinks} compact />
          </div>

          <div className="hero-stats-grid mt-8 grid max-w-xl grid-cols-1 gap-3 border-t border-cyan-300/15 pt-6 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-cyan-300/20 bg-slate-950/70 px-4 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:py-6 sm:text-left"
              >
                <p className="font-display text-3xl font-bold text-cyan-300 sm:text-4xl">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.13em] text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 md:order-2">
          <motion.div
            className="relative rounded-[1.7rem] bg-gradient-to-br from-cyan-300/55 via-sky-300/25 to-indigo-300/45 p-[1px] shadow-[0_22px_45px_rgba(2,6,23,0.38)]"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <div className="relative overflow-hidden rounded-[1.65rem] border border-slate-700/70 bg-slate-950/90 p-2.5 sm:p-3">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),transparent_36%,transparent_68%,rgba(34,211,238,0.12))]" />
              <img
                src={profile.avatar}
                alt={profile.name}
                className="hero-profile-image h-[280px] w-full rounded-[1.1rem] object-cover object-[center_0%] sm:h-[340px] md:h-[380px] md:object-top lg:h-[420px] lg:object-[center_0%]"
              />
              <div className="pointer-events-none absolute inset-2.5 rounded-[1.1rem] ring-1 ring-white/10 sm:inset-3" />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

export default HeroSection
