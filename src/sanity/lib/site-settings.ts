import type {SanityImageSource} from '@sanity/image-url'
import {client} from '@/sanity/lib/client'

export interface SiteContentItem {
  _key: string
  name?: string
  title?: string
  description?: string
  image?: SanityImageSource
}

export interface SiteSettings {
  siteName?: string
  heroTitle?: string
  heroDescription?: string
  heroImage?: SanityImageSource
  aboutTitle?: string
  aboutDescription?: string
  commodities?: SiteContentItem[]
  equipment?: SiteContentItem[]
  projects?: SiteContentItem[]
  partnerTitle?: string
  partnerDescription?: string
  email?: string
  phone?: string
  address?: string
}

const siteSettingsQuery = `*[_type == "siteSettings"] | order(_updatedAt desc)[0] {
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

export async function getSiteSettings() {
  return client.fetch<SiteSettings | null>(siteSettingsQuery)
}

