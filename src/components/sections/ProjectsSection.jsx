import { projects } from '../../data/portfolioData'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const ProjectsSection = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
      <SectionTitle
        eyebrow="Portfolio"
        title="Featured Projects"
        subtitle="A selected collection of practical systems and research-driven implementations."
      />

      <div className="mt-8 grid gap-5 md:mt-10 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={0.05 * index}>
            <article className="card h-full border border-white/10 bg-slate-900/80">
              <div className="card-body">
                <h3 className="card-title text-white">{project.title}</h3>
                <p className="text-sm text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge border-cyan-300/30 bg-slate-800 text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href="#home" className="btn btn-outline w-full border-cyan-300/40 text-slate-100 sm:w-auto">
          View All Projects
        </a>
      </div>
    </section>
  )
}

export default ProjectsSection
