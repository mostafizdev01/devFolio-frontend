// types/blog.ts
export interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured: boolean;
    publishedAt?: string;
    tags: string[];
}
