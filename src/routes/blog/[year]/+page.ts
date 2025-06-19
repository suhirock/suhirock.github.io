import type { Post } from '$lib/types'
import { base } from '$app/paths'

export async function load({ fetch, params }) {
  const { year } = params
  const response = await fetch(`${base}/api/posts/${year}`)
  const posts: Post[] = await response.json()
  return { posts }
}