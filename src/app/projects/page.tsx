import type {Metadata} from 'next'
import {ContentCards} from '@/components/content-cards'
import {PageIntro} from '@/components/page-intro'
import {SiteLayout} from '@/components/site-layout'
import {getSiteSettings} from '@/sanity/lib/site-settings'

export const metadata: Metadata = {
  title: 'Projects & Services',
  description: 'Review project and service information published by LeSeft Nigeria Limited.',
}

export default async function ProjectsPage() {
  const content = await getSiteSettings()

  return (
    <SiteLayout content={content}>
      <PageIntro
        eyebrow="Our experience"
        title="Projects & Services"
        description="Project and service information is drawn from the entries currently published in the company’s Sanity content."
      />
      <section className="container-width section-padding">
        <ContentCards items={content?.projects} kind="project" />
      </section>
    </SiteLayout>
  )
}
