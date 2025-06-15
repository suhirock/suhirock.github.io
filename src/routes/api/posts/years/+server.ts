import fs from 'fs';
import path from 'path';
import { json } from '@sveltejs/kit';

// src/lib/api/posts.ts
/**
 * 
 * @returns 
 */
export async function GET() {
    const targetDir = path.resolve('src/posts');
    const entries = fs.readdirSync(targetDir, { withFileTypes: true });
    const dirs = entries
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name);
    
    return json(dirs);
}