import type {Metadata} from 'next'
import Link from 'next/link'
import {ContentCards} from '@/components/content-cards'
import {PageIntro} from '@/components/page-intro'
import {SiteLayout} from '@/components/site-layout'
import {getSiteSettings} from '@/sanity/lib/site-settings'

export const metadata: Metadata = {
  title: 'Equipment & Technologies',
  description: 'View equipment and technology information published by LeSeft Nigeria Limited.',
}

export default async function EquipmentPage() {
  const content = await getSiteSettings()

  return (
    <SiteLayout content={content}>
      <PageIntro
        eyebrow="Our capabilities"
        title="Equipment & Technologies"
        description="An overview of equipment and technology information currently published by the company."
      />
      <section className="container-width section-padding">
        <ContentCards items={content?.equipment} kind="equipment" />
        <div className="mt-16 border-t border-slate-200 pt-8">
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            For information about a particular capability, contact the LeSeft team using the details published on this website.
          </p>
          <Link href="/contact" className="mt-5 inline-flex bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-gold">
            Make an enquiry
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}
