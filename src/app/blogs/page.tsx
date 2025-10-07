"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";

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
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 py-12">
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
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          }}
        >
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className={`relative rounded-2xl border border-gray-800 bg-slate-900/50 backdrop-blur-md p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
                blog.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Featured Badge */}
              {blog.featured && (
                <span className="absolute top-4 right-4 bg-emerald-500 text-black font-semibold text-xs px-2 py-1 rounded-full">
                  FEATURED
                </span>
              )}

              {/* Blog Content */}
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              {blog.publishedAt && (
                <p className="text-sm text-slate-400 mb-3">
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
              <p className="text-slate-200 mb-4 line-clamp-3">{blog.excerpt}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2 py-1 bg-emerald-700/20 text-emerald-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More Button */}
              <Link
                href={`/blog/${blog.slug}`}
                aria-label={`Read more about ${blog.title}`}
              >
                <Button className=" cursor-pointer" variant={"secondary"} >Read More</Button>
              </Link>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
