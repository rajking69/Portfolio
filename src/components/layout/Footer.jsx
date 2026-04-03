import { quickLinks, profile } from '../../data/portfolioData'

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/95">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="font-display text-xl font-semibold text-white">{profile.name}</h3>
          <p className="mt-3 text-sm text-slate-300">{profile.headline}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {quickLinks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Contact Info</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>{profile.location}</li>
            {profile.email ? (
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-cyan-200">
                  {profile.email}
                </a>
              </li>
            ) : null}
            {profile.phone ? <li>{profile.phone}</li> : null}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">
        © 2026 rajking. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
