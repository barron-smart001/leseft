import Link from 'next/link'

interface SiteFooterProps {
  siteName?: string
  email?: string
  phone?: string
  address?: string
}

export function SiteFooter({siteName, email, phone, address}: SiteFooterProps) {
  const name = siteName || 'LeSeft Nigeria'
  const phoneHref = phone?.replace(/[^\d+]/g, '')

  return (
    <footer className="bg-navy text-white">
      <div className="container-width grid gap-12 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:py-18">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tight">
            {name}<span className="text-gold">.</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            A corporate introduction to LeSeft Nigeria Limited. Company information is managed through the Sanity content studio.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link href="/commodities" className="hover:text-gold">Commodities</Link></li>
            <li><Link href="/equipment" className="hover:text-gold">Equipment & Technologies</Link></li>
            <li><Link href="/projects" className="hover:text-gold">Projects & Services</Link></li>
            <li><Link href="/partners" className="hover:text-gold">For Partners</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Contact</h2>
          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            {email && <p><a href={`mailto:${email}`} className="hover:text-gold">{email}</a></p>}
            {phone && phoneHref && <p><a href={`tel:${phoneHref}`} className="hover:text-gold">{phone}</a></p>}
            {address && <p className="whitespace-pre-line">{address}</p>}
            {!email && !phone && !address && (
              <p>Contact details will be published here when available.</p>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-width flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {name}. All rights reserved.</p>
          <Link href="/studio" className="hover:text-white">Content managed in Sanity Studio</Link>
        </div>
      </div>
    </footer>
  )
}
