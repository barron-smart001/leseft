
import Image from 'next/image'
import Link from 'next/link'
import type {SanityImageSource} from '@sanity/image-url'
import {client} from '@/sanity/lib/client'
import {urlFor} from '@/sanity/lib/image'

interface ContentItem {
  _key: string
  name?: string
  title?: string
  description?: string
  image?: SanityImageSource
}

interface SiteSettings {
  siteName?: string
  heroTitle?: string
  heroDescription?: string
  heroImage?: SanityImageSource
  aboutTitle?: string
  aboutDescription?: string
  commodities?: ContentItem[]
  equipment?: ContentItem[]
  projects?: ContentItem[]
  partnerTitle?: string
  partnerDescription?: string
  email?: string
  phone?: string
  address?: string
}

const query = `*[_type == "siteSettings"] | order(_updatedAt desc)[0] {
  siteName,
  heroTitle,
  heroDescription,
  heroImage,
  aboutTitle,
  aboutDescription,
  commodities[]{_key, name, description, image},
  equipment[]{_key, name, description, image},
  projects[]{_key, title, description, image},
  partnerTitle,
  partnerDescription,
  email,
  phone,
  address
}`



export default async function Home() {
  const content = await client.fetch<SiteSettings | null>(query)

  const heroImage = content?.heroImage
    ? urlFor(content.heroImage).width(1800).height(1100).url()
    : null

  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="container-width flex min-h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight text-[#14243a]">
            {content?.siteName || 'LESEFT'}
            <span className="text-[#b68a45]">.</span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
            <a href="#about">About</a>
            <a href="#commodities">Commodities</a>
            <a href="#equipment">Equipment</a>
            <a href="#projects">Projects</a>
            <a href="#partners">Partners</a>
          </div>

          <a href="#contact" className="bg-[#14243a] px-6 py-3 text-sm font-bold text-white hover:bg-[#b68a45]">
            Contact Us
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-162.5 items-center bg-[#14243a] text-white">
        {heroImage && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{backgroundImage: `url("${heroImage}")`}}
          />
        )}
        <div className="absolute inset-0 bg-linear-to-r from-[#101f34] via-[#14243a]/90 to-transparent" />

        <div className="container-width relative z-10 py-28">
          <p className="section-label mb-7">Business • Resources • Solutions</p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.12] tracking-tight md:text-7xl">
            {content?.heroTitle || 'Connecting Resources. Delivering Possibilities.'}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            {content?.heroDescription}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#about" className="bg-[#b68a45] px-8 py-4 font-bold text-white hover:bg-white hover:text-[#14243a]">
              Discover LeSeft
            </a>
            <a href="#contact" className="border border-white/50 px-8 py-4 font-bold text-white hover:bg-white hover:text-[#14243a]">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="container-width section-padding">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="section-label">About the company</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              {content?.aboutTitle || 'Who We Are'}
            </h2>
          </div>
          <p className="text-lg leading-9 text-slate-600">
            {content?.aboutDescription}
          </p>
        </div>
      </section>

      <section id="commodities" className="section-padding bg-slate-50">
        <div className="container-width">
          <p className="section-label">Our business</p>
          <h2 className="mt-4 text-4xl font-bold">Commodities</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content?.commodities?.map((item) => (
              <article key={item._key} className="overflow-hidden border border-slate-200 bg-white">
                {item.image && (
                  <Image src={urlFor(item.image).width(800).height(500).url()} alt={item.name || 'Commodity'} width={800} height={500} sizes="(min-width: 768px) 33vw, 100vw" className="h-56 w-full object-cover" />
                )}
                <div className="p-7">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="container-width section-padding">
        <p className="section-label">Our capabilities</p>
        <h2 className="mt-4 text-4xl font-bold">Equipment & Technologies</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content?.equipment?.map((item) => (
            <article key={item._key} className="border-l-2 border-[#b68a45] bg-slate-50 p-8">
              {item.image && (
                <Image src={urlFor(item.image).width(700).height(400).url()} alt={item.name || 'Equipment'} width={700} height={400} sizes="(min-width: 768px) 33vw, 100vw" className="mb-6 h-44 w-full object-cover" />
              )}
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-padding bg-[#14243a] text-white">
        <div className="container-width">
          <p className="section-label">Our experience</p>
          <h2 className="mt-4 text-4xl font-bold">Projects & Services</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content?.projects?.map((item) => (
              <article key={item._key} className="border border-white/15 bg-white/5">
                {item.image && (
                  <Image src={urlFor(item.image).width(800).height(500).url()} alt={item.title || 'Project'} width={800} height={500} sizes="(min-width: 768px) 33vw, 100vw" className="h-52 w-full object-cover" />
                )}
                <div className="p-7">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="container-width section-padding">
        <p className="section-label">Partnership opportunities</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold">
          {content?.partnerTitle || 'Building Strategic Partnerships'}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {content?.partnerDescription}
        </p>
      </section>

      <footer id="contact" className="bg-[#0d1929] py-16 text-white">
        <div className="container-width grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">{content?.siteName || 'LeSeft Nigeria'}</h2>
            <p className="mt-5 max-w-md leading-8 text-slate-400">
              Connecting resources and delivering business solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Contact Information</h3>
            <div className="mt-6 space-y-4 text-slate-300">
              {content?.email && <p>Email: {content.email}</p>}
              {content?.phone && <p>Phone: {content.phone}</p>}
              {content?.address && <p>Address: {content.address}</p>}
            </div>
          </div>
        </div>
        <div className="container-width mt-14 border-t border-white/10 pt-7 text-sm text-slate-500">
          © {new Date().getFullYear()} {content?.siteName || 'LeSeft Nigeria'}. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
