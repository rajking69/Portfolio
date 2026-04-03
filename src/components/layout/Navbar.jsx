const links = [
  { label: 'Home', href: '#home' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="navbar mx-auto max-w-6xl px-4 md:px-6">
        <a href="#home" className="font-display text-lg font-semibold tracking-wide text-white">
          rajking..
        </a>
        <div className="ml-auto hidden gap-5 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-cyan-300">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
