import { Mail, MapPin, Phone } from 'lucide-react'
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRedditAlien,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { quickLinks, profile } from '../../data/portfolioData'

const mapsLocationLink = 'https://maps.app.goo.gl/eK2eCY8Pt9c3e3Zv8'

const footerSocialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/smrajking/', icon: FaLinkedinIn },
  { label: 'GitHub', href: 'https://github.com/rajking69', icon: FaGithub },
  { label: 'Facebook', href: 'https://www.facebook.com/smrajking39/', icon: FaFacebookF },
  { label: 'WhatsApp', href: 'https://wa.me/8801882287039', icon: FaWhatsapp },
  { label: 'Telegram', href: 'https://t.me/rajking_69', icon: FaTelegramPlane },
  { label: 'Instagram', href: 'https://www.instagram.com/sm_rajking', icon: FaInstagram },
  { label: 'Reddit', href: 'https://www.reddit.com/user/Fun-Anything-7644/', icon: FaRedditAlien },
  { label: 'X', href: 'https://x.com/SM_Rajking', icon: FaXTwitter },
]

const quickLinkHrefMap = {
  About: '/#about-me',
  Experience: '/#bio',
  Skills: '/#research',
  Projects: '/#projects',
  Contact: '/collaborate',
}

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/95">
      <div className="site-footer-grid mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:py-12 md:grid-cols-3 md:px-6">
        <div className="text-center md:text-left">
          <h3 className="font-display text-xl font-semibold text-white">{profile.name}</h3>
          <p className="mt-3 text-sm text-slate-300">{profile.headline}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
            {footerSocialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/35 bg-slate-900/75 text-cyan-200 shadow-[0_8px_18px_rgba(8,47,73,0.28)] transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-100"
                >
                  <Icon className="footer-social-icon" size={17} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {quickLinks.map((item) => (
              <li key={item}>
                <a href={quickLinkHrefMap[item] || '/#home'} className="hover:text-cyan-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Contact Info</h4>
          <ul className="mt-3 space-y-2 break-words text-sm text-slate-300">
            <li>
              <a href={mapsLocationLink} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 hover:text-cyan-200">
                <MapPin size={16} className="footer-contact-icon mt-0.5 shrink-0 text-cyan-300" />
                <span>{profile.location}</span>
              </a>
            </li>
            {profile.email ? (
              <li>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-cyan-200">
                  <Mail size={16} className="shrink-0 text-cyan-300 footer-contact-icon" />
                  <span>{profile.email}</span>
                </a>
              </li>
            ) : null}
            {profile.phone ? (
              <li>
                <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2 hover:text-cyan-200">
                  <Phone size={16} className="shrink-0 text-cyan-300 footer-contact-icon" />
                  <span>{profile.phone}</span>
                </a>
              </li>
            ) : null}
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
