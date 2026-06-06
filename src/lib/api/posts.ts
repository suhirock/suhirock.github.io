// src/lib/api/posts.ts
import type { Category, Post } from '$lib/types';

/**
 * 
 * @param year 
 * @returns 
 */
export async function getPosts(year?: string) {
    let posts: Post[] = [];
    const paths = import.meta.glob('/src/posts/**/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>;
            const post = { ...metadata, slug } satisfies Post;
            if (!year || new Date(post.date).getFullYear() === Number(year)) {
                (post.published || import.meta.env.DEV) && posts.push(post);
            }
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    );

    return posts;
}

/**
 * 
 * @returns 
 */
export function getYears() {
  // posts配下の全マークダウンファイルを取得
  const files = import.meta.glob('/src/posts/**/*.md', { eager: true });
  // ファイルパスから年を抽出
  const years = new Set<string>();
  for (const path of Object.keys(files)) {
    const match = path.match(/\/posts\/(\d{4})\//);
    if (match) years.add(match[1]);
  }
  // 年の降順で返す
  return Array.from(years).sort((a, b) => Number(b) - Number(a));
}

/**
 * 全記事のカテゴリーを集計して一覧で返す。
 * 表記揺れ（大文字小文字）はまとめ、最初に現れた表記を採用する。
 * @returns 投稿数の降順、同数ならカテゴリー名の昇順
 */
export async function getCategories(): Promise<Category[]> {
    const posts = await getPosts();
    const map = new Map<string, Category>();

    for (const post of posts) {
        for (const category of post.categories ?? []) {
            const key = category.toLowerCase();
            const existing = map.get(key);
            if (existing) {
                existing.count += 1;
            } else {
                map.set(key, { name: category, count: 1 });
            }
        }
    }

    return Array.from(map.values()).sort(
        (a, b) => b.count - a.count || a.name.localeCompare(b.name)
    );
}

/**
 * 指定したカテゴリーに属する記事を返す（大文字小文字は区別しない）。
 * @param category カテゴリー名
 */
export async function getPostsByCategory(category: string): Promise<Post[]> {
    const target = category.toLowerCase();
    const posts = await getPosts();
    return posts.filter((post) =>
        (post.categories ?? []).some((c) => c.toLowerCase() === target)
    );
}