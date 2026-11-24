'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState} from 'react'

const navigation = [
  {href: '/', label: 'Home'},
  {href: '/about', label: 'About Us'},
  {href: '/commodities', label: 'Commodities'},
  {href: '/equipment', label: 'Equipment'},
  {href: '/projects', label: 'Projects & Services'},
  {href: '/partners', label: 'For Partners'},
]

interface SiteHeaderProps {
  siteName?: string
}

export function SiteHeader({siteName}: SiteHeaderProps) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const name = siteName || 'LeSeft Nigeria'

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav aria-label="Main navigation" className="container-width flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 text-xl font-bold tracking-tight text-navy sm:text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          {name}<span className="text-gold">.</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navigation.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`text-sm font-medium ${active ? 'text-navy' : 'text-slate-600 hover:text-gold'}`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <Link href="/contact" className="hidden bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-gold sm:inline-flex">
          Contact Us
        </Link>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-slate-300 text-navy lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.8">
            {menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <div className="container-width flex flex-col">
            {navigation.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-slate-100 py-3 text-sm font-medium ${active ? 'text-navy' : 'text-slate-600'}`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-4 bg-navy px-5 py-3 text-center text-sm font-semibold text-white">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
