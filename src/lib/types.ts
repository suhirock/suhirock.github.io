export type Categories = string

export type Post = {
    title: string,
    slug: string,
    description: string,
    date: string,
    categories: Categories[],
    published: boolean,
}

export type Category = {
    name: string,
    count: number,
}