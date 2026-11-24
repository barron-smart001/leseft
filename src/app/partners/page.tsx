import type {Metadata} from 'next'
import Link from 'next/link'
import {PageIntro} from '@/components/page-intro'
import {SiteLayout} from '@/components/site-layout'
import {getSiteSettings} from '@/sanity/lib/site-settings'

export const metadata: Metadata = {
  title: 'For Partners',
  description: 'Explore partnership enquiries with LeSeft Nigeria Limited.',
}

export default async function PartnersPage() {
  const content = await getSiteSettings()

  return (
    <SiteLayout content={content}>
      <PageIntro
        eyebrow="Partnership opportunities"
        title={content?.partnerTitle || 'For Partners'}
        description={content?.partnerDescription}
      />
      <section className="container-width section-padding">
        <div className="grid gap-12 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="section-label">Start a conversation</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-navy md:text-4xl">
              Explore whether there is an opportunity to work together.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Share your organisation’s interests and objectives with the LeSeft team. Partnership information can be added to this page as approved details become available.
            </p>
          </div>
          <aside className="border-l-2 border-gold bg-slate-50 p-7 md:p-9">
            <h3 className="text-xl font-semibold text-navy">Continue the conversation</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              For partnership enquiries, use the contact details published by the company.
            </p>
            <Link href="/contact" className="mt-6 inline-flex bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-gold">
              Contact LeSeft
            </Link>
          </aside>
        </div>
      </section>
    </SiteLayout>
  )
}
