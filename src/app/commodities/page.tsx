import type {Metadata} from 'next'
import {ContentCards} from '@/components/content-cards'
import {PageIntro} from '@/components/page-intro'
import {SiteLayout} from '@/components/site-layout'
import {getSiteSettings} from '@/sanity/lib/site-settings'

export const metadata: Metadata = {
  title: 'Commodities',
  description: 'Explore the commodity categories published by LeSeft Nigeria Limited.',
}

export default async function CommoditiesPage() {
  const content = await getSiteSettings()

  return (
    <SiteLayout content={content}>
      <PageIntro
        eyebrow="Our business"
        title="Commodities"
        description="Explore the commodity information currently published by LeSeft Nigeria Limited."
      />
      <section className="container-width section-padding">
        <ContentCards items={content?.commodities} kind="commodity" />
      </section>
    </SiteLayout>
  )
}
