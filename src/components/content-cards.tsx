import Link from 'next/link'
import type {CSSProperties} from 'react'
import type {SanityImageSource} from '@sanity/image-url'
import {urlFor} from '@/sanity/lib/image'
import type {SiteContentItem} from '@/sanity/lib/site-settings'

interface ContentCardsProps {
  items?: SiteContentItem[]
  kind: 'commodity' | 'equipment' | 'project'
  limit?: number
  tone?: 'light' | 'dark'
}

function ContentImage({image, label, className}: {image?: SanityImageSource; label: string; className: string}) {
  const style: CSSProperties | undefined = image
    ? {backgroundImage: `url("${urlFor(image).width(960).height(640).fit('crop').url()}")`}
    : undefined

  return (
    <div
      role={image ? 'img' : undefined}
      aria-label={image ? label : undefined}
      aria-hidden={image ? undefined : true}
      className={`${className} bg-cover bg-center ${image ? '' : 'flex items-center justify-center bg-slate-100'}`}
      style={style}
    >
      {!image && <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Image not provided</span>}
    </div>
  )
}

export function ContentCards({items, kind, limit, tone = 'light'}: ContentCardsProps) {
  const visibleItems = limit ? items?.slice(0, limit) : items
  const dark = tone === 'dark'

  if (!visibleItems?.length) {
    return (
      <p className={`border-l-2 border-gold py-2 pl-5 text-sm leading-7 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
        {kind === 'project'
          ? 'Project and service information is being prepared for publication.'
          : `${kind === 'commodity' ? 'Commodity' : 'Equipment'} information is being prepared for publication.`}
      </p>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {visibleItems.map((item) => {
        const title = kind === 'project' ? item.title : item.name
        return (
          <article key={item._key} className={`overflow-hidden border ${dark ? 'border-white/20 bg-white/5' : 'border-slate-200 bg-white'}`}>
            <ContentImage
              image={item.image}
              label={title || 'Company content'}
              className="aspect-[3/2] w-full"
            />
            <div className="p-6 md:p-7">
              <h3 className={`text-xl font-semibold ${dark ? 'text-white' : 'text-navy'}`}>
                {title || (kind === 'project' ? 'Project or service' : kind === 'commodity' ? 'Commodity' : 'Equipment')}
              </h3>
              {item.description
                ? <p className={`mt-4 whitespace-pre-line text-sm leading-7 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{item.description}</p>
                : <p className={`mt-4 text-sm leading-7 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Further details will be added when available.</p>}
            </div>
          </article>
        )
      })}
    </div>
  )
}

export function SectionLink({href, children}: {href: string; children: string}) {
  return (
    <Link href={href} className="inline-flex items-center gap-3 text-sm font-semibold text-navy hover:text-gold">
      {children}<span aria-hidden="true">→</span>
    </Link>
  )
}
