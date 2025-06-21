import { getPosts, getYears } from '$lib/api/posts'

export async function load({ params }) {
  const { year } = params
  const posts = await getPosts(year)
  return { posts, year }
}

// 静的生成のために事前に生成すべきページを指定
export async function entries() {
  const years = getYears()
  return years.map(year => ({ year }))
}

// 静的生成を有効にする
export const prerender = true