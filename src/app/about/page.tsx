import type {Metadata} from 'next'
import {PageIntro} from '@/components/page-intro'
import {SiteLayout} from '@/components/site-layout'
import {getSiteSettings} from '@/sanity/lib/site-settings'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about LeSeft Nigeria Limited and its corporate profile.',
}

export default async function AboutPage() {
  const content = await getSiteSettings()

  return (
    <SiteLayout content={content}>
      <PageIntro
        eyebrow="About the company"
        title={content?.aboutTitle || 'About LeSeft Nigeria Limited'}
        description={content?.aboutDescription}
      />
      <section className="container-width section-padding">
        <div className="grid gap-12 md:grid-cols-[1fr_0.8fr] md:items-start">
          <div>
            <p className="section-label">Company profile</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-navy md:text-4xl">
              A clearer picture of LeSeft, shaped by approved company information.
            </h2>
            {content?.aboutDescription ? (
              <p className="mt-6 whitespace-pre-line text-base leading-8 text-slate-600">{content.aboutDescription}</p>
            ) : (
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                The company profile is being prepared. Published information will appear here as it is approved and added to the content studio.
              </p>
            )}
          </div>
          <aside className="border-t-2 border-gold bg-slate-50 p-7 md:p-9">
            <p className="section-label">Mission, vision & values</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              These company statements are not part of the current content model. They can be added here when approved information is available.
            </p>
          </aside>
        </div>
      </section>
      <section className="bg-navy text-white">
        <div className="container-width section-padding">
          <p className="section-label">Corporate positioning</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            A professional introduction, grounded in the facts shared by the company.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            This website brings the company’s published profile, capabilities and contact information together in one place. Further details can be managed through Sanity Studio.
          </p>
        </div>
      </section>
    </SiteLayout>
  )
}
