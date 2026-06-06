import { getCategories, getPostsByCategory } from '$lib/api/posts'

export async function load({ params }) {
  const { category } = params
  const posts = await getPostsByCategory(category)
  return { posts, category }
}

// 静的生成のために事前に生成すべきページを指定
export async function entries() {
  const categories = await getCategories()
  return categories.map((category) => ({ category: category.name }))
}

// 静的生成を有効にする
export const prerender = true
