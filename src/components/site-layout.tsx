import type {ReactNode} from 'react'
import type {SiteSettings} from '@/sanity/lib/site-settings'
import {SiteFooter} from '@/components/site-footer'
import {SiteHeader} from '@/components/site-header'

interface SiteLayoutProps {
  children: ReactNode
  content: SiteSettings | null
}

export function SiteLayout({children, content}: SiteLayoutProps) {
  return (
    <>
      <SiteHeader siteName={content?.siteName} />
      <main className="flex-1">{children}</main>
      <SiteFooter
        siteName={content?.siteName}
        email={content?.email}
        phone={content?.phone}
        address={content?.address}
      />
    </>
  )
}
