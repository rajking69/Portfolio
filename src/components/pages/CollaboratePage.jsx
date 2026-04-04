import { useState } from 'react'
import PropTypes from 'prop-types'
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
import { profile } from '../../data/portfolioData'

const whatsappPhone = '01882287039'
const mapsLocationLink = 'https://maps.app.goo.gl/eK2eCY8Pt9c3e3Zv8'

const normalizeWhatsAppNumber = (number) => {
  const digits = number.replace(/[^0-9]/g, '')
  if (digits.startsWith('0')) {
    return `88${digits}`
  }
  return digits
}

const socialItems = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/smrajking39/',
    icon: FaFacebookF,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/smrajking/',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rajking69',
    icon: FaGithub,
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${normalizeWhatsAppNumber(whatsappPhone)}`,
    icon: FaWhatsapp,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/rajking_69',
    icon: FaTelegramPlane,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sm_rajking',
    icon: FaInstagram,
  },
  {
    label: 'Reddit',
    href: 'https://www.reddit.com/user/Fun-Anything-7644/',
    icon: FaRedditAlien,
  },
  {
    label: 'X',
    href: 'https://x.com/SM_Rajking',
    icon: FaXTwitter,
  },
]

const CollaboratePage = ({ theme }) => {
  const isLight = theme === 'light'
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim() || ''
    const email = formData.get('email')?.toString().trim() || ''
    const subject = formData.get('subject')?.toString().trim() || ''
    const message = formData.get('message')?.toString().trim() || ''

    if (!name || !email || !subject || !message) {
      setStatus('Please fill in all fields before sending.')
      return
    }

    const composedSubject = encodeURIComponent(subject)
    const composedBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )

    window.location.href = `mailto:${profile.email}?subject=${composedSubject}&body=${composedBody}`
    setStatus('Opening your email app with a prefilled message...')
    event.currentTarget.reset()
  }

  return (
    <section className="collab-page min-h-screen pt-24 pb-12 md:pt-32 md:pb-20" id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <p
            className={`inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
              isLight
                ? 'border border-sky-300/60 bg-sky-100 text-sky-700'
                : 'border border-cyan-300/30 bg-cyan-400/10 text-cyan-300'
            }`}
          >
            Collaborate
          </p>
          <h2 className={`mt-4 font-serifDisplay text-3xl font-bold md:text-5xl ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
            Let&apos;s Build Something Meaningful
          </h2>
          <p className={`mt-4 max-w-3xl ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
            Reach out for project collaborations, technical consulting, startup ideas, and high-impact product work.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside
            className={`rounded-3xl border p-6 shadow-xl md:p-8 ${
              isLight
                ? 'border-slate-200 bg-gradient-to-br from-white to-slate-100 shadow-slate-300/40'
                : 'border-slate-800 bg-gradient-to-br from-slate-950 to-slate-900 shadow-black/30'
            }`}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className={`font-serifDisplay text-2xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Contact Hub</h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  isLight ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-500/20 text-emerald-300'
                }`}
              >
                Available
              </span>
            </div>

            <div className="space-y-4">
              <div className={`rounded-2xl border p-4 ${isLight ? 'border-slate-200 bg-white/90' : 'border-slate-800 bg-slate-900/60'}`}>
                <p className={`mb-2 text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className={`flex items-center gap-2 break-all ${isLight ? 'text-slate-800 hover:text-sky-700' : 'text-slate-200 hover:text-cyan-300'}`}
                >
                  <Mail size={18} className="text-cyan-300" />
                  {profile.email}
                </a>
              </div>

              <div className={`rounded-2xl border p-4 ${isLight ? 'border-slate-200 bg-white/90' : 'border-slate-800 bg-slate-900/60'}`}>
                <p className={`mb-2 text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>Phone / WhatsApp</p>
                <a href={`tel:${profile.phone}`} className={`inline-flex items-center gap-2 ${isLight ? 'text-slate-800 hover:text-sky-700' : 'text-slate-200 hover:text-cyan-300'}`}>
                  <Phone size={18} className="text-cyan-300" />
                  {profile.phone}
                </a>
              </div>

              <div className={`rounded-2xl border p-4 ${isLight ? 'border-slate-200 bg-white/90' : 'border-slate-800 bg-slate-900/60'}`}>
                <p className={`mb-2 text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>Location</p>
                <a
                  href={mapsLocationLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-start gap-2 ${isLight ? 'text-slate-800 hover:text-sky-700' : 'text-slate-200 hover:text-cyan-300'}`}
                >
                  <MapPin size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                  {profile.location}
                </a>
              </div>
            </div>

            <div className={`mt-7 border-t pt-6 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
              <p className={`mb-3 text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>Connect Socially</p>
              <div className="flex flex-wrap gap-3">
                {socialItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      title={item.label}
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border text-xl shadow-sm transition ${
                        isLight
                          ? 'border-slate-400 bg-white text-slate-800 shadow-[0_8px_20px_rgba(15,23,42,0.12)] hover:border-sky-500 hover:text-sky-700'
                          : 'border-slate-600 bg-slate-900 text-slate-100 shadow-[0_8px_20px_rgba(8,47,73,0.24)] hover:border-cyan-300 hover:text-cyan-300'
                      }`}
                    >
                      <Icon className="collab-social-icon" />
                    </a>
                  )
                })}
              </div>
            </div>
          </aside>

          <div
            className={`rounded-3xl border p-6 shadow-xl md:p-8 ${
              isLight ? 'border-slate-200 bg-white/90 shadow-slate-300/35' : 'border-slate-800 bg-slate-900/85 shadow-black/25'
            }`}
          >
            <h3 className={`mb-6 font-serifDisplay text-2xl font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
              Drop Your Message
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition-all ${
                      isLight
                        ? 'border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                        : 'border-slate-800 bg-slate-950 text-slate-200 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                    }`}
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition-all ${
                      isLight
                        ? 'border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                        : 'border-slate-800 bg-slate-950 text-slate-200 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>Subject</label>
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="Project or Collaboration Subject"
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition-all ${
                    isLight
                      ? 'border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                      : 'border-slate-800 bg-slate-950 text-slate-200 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                  }`}
                />
              </div>

              <div className="space-y-2">
                <label className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>Message</label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Share your idea, timeline, and what you need help with."
                  className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition-all ${
                    isLight
                      ? 'border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                      : 'border-slate-800 bg-slate-950 text-slate-200 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                  }`}
                />
              </div>

              <button
                type="submit"
                className={`inline-flex w-full items-center justify-center rounded-xl border px-8 py-4 font-bold transition-all hover:-translate-y-0.5 ${
                  isLight
                    ? 'border-sky-300 bg-white text-sky-700 shadow-[0_8px_24px_rgba(56,189,248,0.18)] hover:border-sky-500 hover:bg-sky-50 hover:text-sky-800'
                    : 'border-cyan-300/35 bg-slate-950 text-cyan-300 shadow-[0_0_22px_rgba(6,182,212,0.2)] hover:border-cyan-300 hover:bg-slate-900 hover:text-cyan-200'
                }`}
              >
                Send Message
              </button>

              {status ? <p className={`text-sm ${isLight ? 'text-sky-700' : 'text-cyan-300'}`}>{status}</p> : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

CollaboratePage.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
}

export default CollaboratePage
