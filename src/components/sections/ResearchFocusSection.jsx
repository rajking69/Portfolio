import { researchAreas } from '../../data/portfolioData'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const ResearchFocusSection = () => {
  return (
    <section id="research" className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
      <SectionTitle
        eyebrow="Core Competencies"
        title="Research Focus Areas"
        subtitle="My academic journey focuses on developing interpretable and scalable solutions for high-stakes domains."
      />

      <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 xl:grid-cols-3">
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
