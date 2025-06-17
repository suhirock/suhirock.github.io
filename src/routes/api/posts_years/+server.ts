import { json } from '@sveltejs/kit';

export async function GET() {
    const years = [
        '2025'
    ]
    return json(years);
}