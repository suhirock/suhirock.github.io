import fs from 'fs';
import path from 'path';

// src/lib/api/posts.ts
/**
 * 
 * @returns 
 */
export async function getPostDirs() {
    const targetDir = path.resolve('/src/posts');
    const entries = fs.readdirSync(targetDir, { withFileTypes: true });
    const dirs = entries
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name);
    
    console.log(dirs);
    return dirs;
}