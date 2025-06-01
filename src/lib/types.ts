export type Category = string
export type Tag = string

export type Post = {
    title: string,
    slug: string,
    description: string,
    date: string,
    categories: Category[],
    tags: Tag[],
    published: boolean,
}