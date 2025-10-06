"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ProjectsSection/ProjectCard";

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

            <div className="grid md:grid-cols-2 gap-6">
                {blogs.map((post) => (
                    <Card
                        key={post.id}
                        className="bg-[#0d0d0d] border border-gray-800 rounded-xl shadow-md hover:shadow-lg hover:border-gray-600 transition-all duration-300"
                    >
                        <CardHeader className="px-5 space-y-0">
                            {/* 🏷️ Tags */}
                            <div className="flex flex-wrap gap-2 mb-2">
                                {post.tags?.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700 hover:text-white transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* 📰 Title */}
                            <CardTitle className="text-xl font-semibold">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-white hover:text-green-400 transition-colors"
                                >
                                    {post.title}
                                </Link>
                            </CardTitle>

                            {/* 📅 Date */}
                            <CardDescription className="text-sm text-gray-400">
                                {new Date(post.publishedAt || post.createdAt).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </CardDescription>
                        </CardHeader>

                        {/* ✍️ Excerpt */}
                        <CardContent className="px-5 pt-0">
                            <p className="text-gray-300 leading-relaxed">{post.excerpt}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
