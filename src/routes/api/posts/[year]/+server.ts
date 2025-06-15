import { json } from '@sveltejs/kit';
import { getPosts } from '$lib/api/posts';

export async function GET({ params }) {
    const posts = await getPosts(params.year);
    return json(posts);
}