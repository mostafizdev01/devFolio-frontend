import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  featured?: boolean;
};

export default async function BlogsPage() {
  // Fake blog data
  // const blogs: Blog[] = [
  //   {
  //     id: "b1",
  //     title: "Understanding React 18 Features",
  //     slug: "react-18-features",
  //     excerpt: "Explore the new features introduced in React 18 and how they improve performance and developer experience.",
  //     publishedAt: "2025-09-25",
  //     tags: ["React", "JavaScript", "Frontend"],
  //     featured: true,
  //   },
  //   {
  //     id: "b2",
  //     title: "Next.js 15: What's New?",
  //     slug: "nextjs-15-whats-new",
  //     excerpt: "Next.js 15 introduces powerful new capabilities for faster builds and server-side rendering improvements.",
  //     publishedAt: "2025-09-20",
  //     tags: ["Next.js", "SSR", "React"],
  //   },
  //   {
  //     id: "b3",
  //     title: "TailwindCSS Tips & Tricks",
  //     slug: "tailwind-tips-tricks",
  //     excerpt: "Learn some advanced TailwindCSS techniques to create stunning UI quickly and efficiently.",
  //     publishedAt: "2025-09-18",
  //     tags: ["TailwindCSS", "CSS", "Design"],
  //   },
  //   {
  //     id: "b4",
  //     title: "Framer Motion Animations",
  //     slug: "framer-motion-animations",
  //     excerpt: "Step-by-step guide to building smooth, performant animations in React using Framer Motion.",
  //     publishedAt: "2025-09-15",
  //     tags: ["Framer Motion", "Animations", "React"],
  //     featured: true,
  //   },
  //   {
  //     id: "b5",
  //     title: "Fullstack Project Ideas",
  //     slug: "fullstack-project-ideas",
  //     excerpt: "A list of fullstack project ideas to help you practice and showcase your skills.",
  //     publishedAt: "2025-09-10",
  //     tags: ["Fullstack", "Projects", "Ideas"],
  //   },
  //   {
  //     id: "b6",
  //     title: "Understanding Prisma ORM",
  //     slug: "prisma-orm-guide",
  //     excerpt: "Learn how Prisma ORM simplifies database access and management in modern web apps.",
  //     publishedAt: "2025-09-05",
  //     tags: ["Prisma", "Database", "Node.js"],
  //   },
  // ];

  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`);
  // const blogs = await res.json();
  // console.log("this is blog pages")

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12 relative">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
          Blogs
        </h1>
        <p className="text-lg text-slate-400">
          Read, explore, and stay updated
        </p>
        <motion.div
          className="absolute bottom-0 left-1/2 w-32 h-1 rounded-full bg-emerald-500 -translate-x-1/2 mt-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Blogs Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", minWidth: "1300px" }}>
        {blogs.map((blog) => (
          <motion.article
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative rounded-2xl border border-transparent bg-slate-900/50 backdrop-blur-md p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${blog.featured ? "lg:col-span-2" : ""
              }`}
          >
            {/* Featured Badge */}
            {blog.featured && (
              <span className="absolute top-4 right-4 bg-emerald-500 text-black font-semibold text-xs px-2 py-1 rounded-full animate-pulse">
                FEATURED
              </span>
            )}

            {/* Blog Content */}
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-sm text-slate-400 mb-3">
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-slate-200 mb-4">{blog.excerpt}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag) => (
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
              className="inline-block px-4 py-2 bg-emerald-500 text-black font-semibold rounded-lg hover:scale-105 transform transition-transform duration-200"
              aria-label={`Read more about ${blog.title}`}
            >
              Read More
            </Link>
          </motion.article>
        ))}
      </section>

    </div>
  );
}
