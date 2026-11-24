import {cacheLife} from 'next/cache'
import {defineLive} from 'next-sanity/live'
import {client} from './client'

export const {sanityFetch, SanityLive} = defineLive({
  client,
  serverToken: false,
  browserToken: false,
})

export async function cachedSanityFetch<T>(options: {
  query: string
  params?: Record<string, unknown>
}) {
  'use cache'
  cacheLife('minutes')
  const result = await sanityFetch({
    ...options,
    perspective: 'published',
    stega: false,
  })
  return result.data as T
}
