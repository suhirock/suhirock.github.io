import { json } from '@sveltejs/kit'
import { getPosts } from '$lib/api/posts'

export async function GET({ params }) {
    const { year } = params
    const posts = await getPosts(year)
    return json(posts)
}