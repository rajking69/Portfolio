import { researchAreas } from '../../data/portfolioData'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const ResearchFocusSection = () => {
  return (
    <section id="research" className="mx-auto max-w-6xl px-4 py-8 sm:py-10 md:px-6">
      <SectionTitle
        eyebrow="Core Competencies"
        title="Research & Development Focus"
        subtitle="My current work focuses on practical AI, scalable web systems, and research-backed engineering outcomes."
      />

      <div className="mt-7 grid gap-3.5 md:mt-8 md:grid-cols-2 xl:grid-cols-3">
        {researchAreas.map((area, index) => (
          <Reveal key={area.title} delay={0.05 * index}>
            <article className="h-full rounded-2xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-cyan-300/40">
              <h3 className="font-display text-xl font-semibold text-white">{area.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{area.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default ResearchFocusSection
