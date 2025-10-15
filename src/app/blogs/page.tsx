"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/src/components/BlogPosts/BlogCard";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  featured?: boolean;
}

export default function BlogsPage() {
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
        setBlogs(data?.result || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-1 sm:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
          Blogs
        </h1>
        <p className="text-lg text-slate-400">Read, explore, and stay updated</p>
        <div className="mx-auto mt-4 h-[2px] w-24 bg-emerald-500 rounded-full" />
      </section>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-slate-400 text-lg py-20">
          Loading blogs...
        </div>
      )}

      {/* Empty State */}
      {!loading && blogs.length === 0 && (
        <div className="text-center text-slate-500 py-20">
          No blogs found.
        </div>
      )}

      {/* Blogs Grid */}
      {!loading && blogs.length > 0 && (
        <section
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          }}
        >
          {blogs.map((blogDate) => (
           <BlogCard key={blogDate.id} blog={blogDate} />
          ))}
        </section>
      )}
    </div>
  );
}
