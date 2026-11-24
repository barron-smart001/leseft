import type {CSSProperties} from 'react'
import type {Metadata} from 'next'
import Link from 'next/link'
import {ContentCards, SectionLink} from '@/components/content-cards'
import {SiteLayout} from '@/components/site-layout'
import {getSiteSettings} from '@/sanity/lib/site-settings'
import {urlFor} from '@/sanity/lib/image'

export const metadata: Metadata = {
  title: 'LeSeft Nigeria Limited',
  description: 'Explore LeSeft Nigeria Limited, its published company profile, business capabilities and partnership opportunities.',
}

export default async function HomePage() {
  const content = await getSiteSettings()
  const heroStyle: CSSProperties | undefined = content?.heroImage
    ? {backgroundImage: `url("${urlFor(content.heroImage).width(1800).height(1100).fit('crop').url()}")`}
    : undefined

  return (
    <SiteLayout content={content}>
      <section className="relative isolate flex min-h-140 items-center overflow-hidden bg-navy text-white md:min-h-162.5">
        {heroStyle && <div aria-hidden="true" className="absolute inset-0 -z-20 bg-cover bg-center" style={heroStyle} />}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#14243a]/85" />
        <div className="container-width py-24 md:py-32">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#e2bd7a]">
            LeSeft Nigeria Limited
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl lg:text-7xl">
            {content?.heroTitle || 'Business capability. Built on partnership.'}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            {content?.heroDescription || 'Explore LeSeft Nigeria Limited and the company information, capabilities and opportunities shared here.'}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/about" className="bg-gold px-7 py-4 text-sm font-semibold text-white hover:bg-white hover:text-navy">
              Discover LeSeft
            </Link>
            <Link href="/contact" className="border border-white/60 px-7 py-4 text-sm font-semibold text-white hover:border-white hover:bg-white hover:text-navy">
              Contact the team
            </Link>
          </div>
        </div>
      </section>

      <section className="container-width section-padding">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="section-label">Who we are</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy md:text-4xl">
              {content?.aboutTitle || 'A company profile built on clear information'}
            </h2>
          </div>
          <div>
            <p className="whitespace-pre-line text-base leading-8 text-slate-600">
              {content?.aboutDescription || 'LeSeft’s company introduction will be published here as approved content becomes available.'}
            </p>
            <div className="mt-7">
              <SectionLink href="/about">More about the company</SectionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-width section-padding">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Our business</p>
              <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">Commodities</h2>
            </div>
            <SectionLink href="/commodities">View commodities</SectionLink>
          </div>
          <ContentCards items={content?.commodities} kind="commodity" limit={3} />
        </div>
      </section>

      <section className="container-width section-padding">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Our capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">Equipment & Technologies</h2>
          </div>
          <SectionLink href="/equipment">Explore capabilities</SectionLink>
        </div>
        <ContentCards items={content?.equipment} kind="equipment" limit={3} />
      </section>

      <section className="bg-navy text-white">
        <div className="container-width section-padding">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Our experience</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Projects & Services</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-3 text-sm font-semibold text-white hover:text-[#e2bd7a]">
              View projects & services <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ContentCards items={content?.projects} kind="project" limit={3} tone="dark" />
        </div>
      </section>

      <section className="container-width section-padding">
        <div className="grid gap-10 border-y border-slate-200 py-10 md:grid-cols-[1fr_auto] md:items-center md:py-14">
          <div>
            <p className="section-label">Work with us</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-navy md:text-4xl">
              {content?.partnerTitle || 'Explore a strategic partnership'}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              {content?.partnerDescription || 'Connect with LeSeft to discuss potential areas of collaboration.'}
            </p>
          </div>
          <Link href="/partners" className="inline-flex w-fit bg-navy px-7 py-4 text-sm font-semibold text-white hover:bg-gold">
            Partnership enquiries
          </Link>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="container-width flex flex-col gap-7 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <p className="section-label">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-navy">Start a conversation with LeSeft.</h2>
          </div>
          <Link href="/contact" className="inline-flex w-fit bg-navy px-7 py-4 text-sm font-semibold text-white hover:bg-gold">
            Get in touch
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}
