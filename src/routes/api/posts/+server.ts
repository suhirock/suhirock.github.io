import { json } from '@sveltejs/kit'
import { getPosts } from '$lib/api/posts'

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}