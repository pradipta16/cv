import { useEffect, useState } from 'react'

const links = [
  { label: 'Tentang',     href: '#about' },
  { label: 'Pengalaman',  href: '#experience' },
  { label: 'Portofolio',  href: '#portfolio' },
  { label: 'Keahlian',   href: '#skills' },
  { label: 'Kontak',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      for (const l of [...links].reverse()) {
        const el = document.getElementById(l.href.slice(1))
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(l.href.slice(1)); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className={`rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300
        bg-white/80 backdrop-blur-md border border-slate-200
        ${scrolled ? 'shadow-lg shadow-slate-200/60' : 'shadow-sm'}`}>
        <a href="#" className="font-black text-sm tracking-tight text-slate-900">
          GP<span className="text-blue-600">.</span>
        </a>
        <div className="hidden sm:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
                 ${active === l.href.slice(1)
                   ? 'text-blue-700 bg-blue-50'
                   : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
