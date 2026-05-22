import { useState } from 'react'
import { navLinks } from '../../data/siteData'
import Icon from '../icons/Icon'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="fixed top-0 left-0 z-50 h-20 w-full border-b border-white/5 bg-[#0b0b0b]/90 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-container-max items-center justify-between px-margin-desktop">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-white cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          VEDANTHA GLOBAL
        </a>

        <nav className="hidden items-center space-x-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-on-surface-variant transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            className="rounded-md border border-primary/30 bg-primary/20 px-6 py-2 text-sm font-bold tracking-wider text-primary uppercase transition-all hover:bg-primary/30"
          >
            Apply
          </a>
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <Icon name={mobileOpen ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-white/5 bg-[#0b0b0b] px-margin-desktop py-6 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg font-medium text-on-surface-variant hover:text-white"
                  onClick={closeMobile}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#apply"
                className="inline-block rounded-md border border-primary/30 bg-primary/20 px-6 py-2 text-lg font-bold tracking-wider text-primary uppercase"
                onClick={closeMobile}
              >
                Apply
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
