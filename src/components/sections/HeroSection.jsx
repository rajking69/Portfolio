import { motion } from 'framer-motion'
import { profile, socialLinks, stats } from '../../data/portfolioData'
import SocialLinks from '../ui/SocialLinks'
import Reveal from '../ui/Reveal'

const HeroSection = () => {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-16">
      <div className="grid items-start gap-8 lg:grid-cols-[1.35fr_0.95fr]">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-slate-900/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
            <span>Growing Through</span>
            <span className="text-violet-300">Continuous Research</span>
          </div>

          <h1 className="mt-7 font-display text-5xl font-bold leading-[0.95] text-white md:text-7xl">
            Hi!
            <br />I am
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
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
          <div className="space-y-6">
            <motion.article
              className="rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-slate-900/90 to-violet-900/30 p-6 shadow-glow"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="font-display text-2xl font-semibold text-transparent [background-image:linear-gradient(to_right,#22d3ee,#c084fc)] [background-clip:text]">
                Seeking Opportunities
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">{profile.opportunitiesText}</p>
              <a
                href={profile.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="btn mt-5 border-0 bg-gradient-to-r from-cyan-400 to-violet-500 px-6 text-white hover:from-cyan-300 hover:to-violet-400"
              >
                View Resume
              </a>
            </motion.article>

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
              <div className="absolute bottom-6 right-6 rounded-xl border border-cyan-300/20 bg-slate-950/90 px-4 py-3 text-xs shadow-xl">
                <p className="font-mono text-cyan-300">const Developer = {'{'}</p>
                <p className="font-mono text-slate-300">
                  {'focus: "'}
                  {stats[0]?.value || 'Web'}
                  {'",'}
                </p>
                <p className="font-mono text-slate-300">
                  {'status: "'}
                  {stats[2]?.value || 'Open'}
                  {'"'}
                </p>
                <p className="font-mono text-cyan-300">{'}'};</p>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default HeroSection
