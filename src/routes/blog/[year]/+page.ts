import type { Post } from '$lib/types'

export async function load({ fetch, params }) {
  const response = await fetch(`/api/posts/${params.year}`)
  const posts: Post[] = await response.json()
  return { posts }
}