"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";

// 🧩 Blog Data Type
interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured: boolean;
    createdAt: string;
    publishedAt?: string;
    tags: string[];
}

// 📰 BlogPosts Component
export default function BlogPosts() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
                    cache: "no-store",
                });

                if (!res.ok) throw new Error("Failed to fetch blogs");

                const data = await res.json();

                // Defensive check
                setBlogs(data?.result || []);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading)
        return (
            <section className="py-16 text-center text-gray-400">Loading blogs...</section>
        );

    if (blogs.length === 0)
        return (
            <section className="py-16 text-center text-gray-400">
                No blog posts found.
            </section>
        );

    return (
        <section className="py-16 w-11/12 md:max-w-[1300px] mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl md:text-3xl font-bold">Latest Blog Posts</h2>
                <Link href="/blog">
                    <Button variant="ghost">
                        View All Posts
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-2">
                {blogs.map((post) => (
                  <BlogCard key={post.id} blog={post} />
                ))}
            </div>
        </section>
    );
}
