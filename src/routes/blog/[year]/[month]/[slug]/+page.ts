import { error } from '@sveltejs/kit'

export async function load({ params }) {
  console.log(params.slug)
  try {
    const post = await import(`../../../../../posts/${params.year}/${params.month}/${params.slug}.md`)
    return {
      content: post.default,
      meta: post.metadata
    }
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`)
  }
}