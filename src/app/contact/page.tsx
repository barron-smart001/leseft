import type {Metadata} from 'next'
import {PageIntro} from '@/components/page-intro'
import {SiteLayout} from '@/components/site-layout'
import {getSiteSettings} from '@/sanity/lib/site-settings'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact LeSeft Nigeria Limited for company and partnership enquiries.',
}

export default async function ContactPage() {
  const content = await getSiteSettings()
  const phoneHref = content?.phone?.replace(/[^\d+]/g, '')

  return (
    <SiteLayout content={content}>
      <PageIntro
        eyebrow="Get in touch"
        title="Contact LeSeft"
        description="Use the company contact information below to start a conversation."
      />
      <section className="container-width section-padding">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label">Contact information</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy">We welcome your enquiry.</h2>
            <div className="mt-8 space-y-6 border-t border-slate-200 pt-6">
              {content?.email && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Email</h3>
                  <a href={`mailto:${content.email}`} className="mt-2 inline-block text-base font-medium text-navy hover:text-gold">{content.email}</a>
                </div>
              )}
              {content?.phone && phoneHref && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Telephone</h3>
                  <a href={`tel:${phoneHref}`} className="mt-2 inline-block text-base font-medium text-navy hover:text-gold">{content.phone}</a>
                </div>
              )}
              {content?.address && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Address</h3>
                  <p className="mt-2 whitespace-pre-line text-base leading-7 text-slate-700">{content.address}</p>
                </div>
              )}
              {!content?.email && !content?.phone && !content?.address && (
                <p className="text-sm leading-7 text-slate-600">
                  Company contact details have not been published yet. They will appear here when available in Sanity Studio.
                </p>
              )}
            </div>
          </div>

          <div className="border border-slate-200 bg-slate-50 p-6 sm:p-9">
            <h2 className="text-2xl font-semibold text-navy">Send an enquiry</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {content?.email
                ? 'Complete the form to open a message in your default email application.'
                : 'The enquiry form will be available when a company email address is published.'}
            </p>
            <form
              action={content?.email ? `mailto:${content.email}?subject=${encodeURIComponent('Business enquiry for LeSeft Nigeria')}` : undefined}
              method="post"
              encType="text/plain"
              className="mt-7 space-y-5"
            >
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700">Your name</label>
                <input id="contact-name" name="Name" type="text" autoComplete="name" required disabled={!content?.email} className="w-full border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-gold disabled:bg-slate-100" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">Your email</label>
                <input id="contact-email" name="Email" type="email" autoComplete="email" required disabled={!content?.email} className="w-full border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-gold disabled:bg-slate-100" />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700">How can we help?</label>
                <textarea id="contact-message" name="Message" rows={5} required disabled={!content?.email} className="w-full resize-y border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-gold disabled:bg-slate-100" />
              </div>
              <button type="submit" disabled={!content?.email} className="bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-gold disabled:cursor-not-allowed disabled:bg-slate-400">
                Prepare email enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
