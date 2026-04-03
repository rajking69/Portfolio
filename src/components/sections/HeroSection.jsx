import { motion } from 'framer-motion'
import { profile, socialLinks, stats } from '../../data/portfolioData'
import SocialLinks from '../ui/SocialLinks'
import Reveal from '../ui/Reveal'

const HeroSection = () => {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-16">
      <div className="grid items-start gap-8 lg:grid-cols-[1.35fr_0.95fr]">
        <Reveal>
          <h1 className="mt-7 text-5xl font-black leading-[0.93] text-white md:text-7xl">
            <span className="font-serifDisplay">Hi!</span>
            <br />
            <span className="font-serifDisplay">I am</span>
            <br />
            <span className="font-display tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              {profile.name.toUpperCase()}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-slate-200 md:text-lg">{profile.shortBio}</p>
          <p className="mt-2 max-w-2xl text-base text-slate-300">{profile.longBio}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="btn border-0 bg-gradient-to-r from-cyan-400 to-blue-500 px-6 text-white hover:from-cyan-300 hover:to-blue-400"
            >
              View LinkedIn Profile
            </a>
            <a href="#contact" className="btn border-slate-600/70 bg-slate-900/70 text-slate-100 hover:border-cyan-300">
              Collaborate
            </a>
          </div>

          <div className="mt-10">
            <SocialLinks items={socialLinks} compact />
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-cyan-300/15 pt-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-cyan-300/20 bg-slate-950/70 px-4 py-6 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                <p className="font-display text-4xl font-bold text-cyan-300">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.13em] text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-900/85 p-3"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-[340px] w-full rounded-xl object-cover object-top md:h-[420px]"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

export default HeroSection
