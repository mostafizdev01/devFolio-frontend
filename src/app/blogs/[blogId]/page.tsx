import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Blog = {
    title: string;
    excerpt: string;
    content: string;
    publishedAt: string;
    tags: string[];
    featured: boolean;
    slug: string;
};

interface BlogDetailsPageProps {
    params: { blogId: string };
}

// ✅ Server-side component
export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {

    // Fetch blog data from API
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${params.blogId}`, {
        next: { revalidate: 0 }, // always fetch fresh data
    });

    if (!res.ok) {
        // If blog not found, return 404
        notFound();
    }

    const data = await res.json();
    const blog: Blog = data.result;

    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white px-4 sm:px-8 py-12">

            {/* Hero Section */}
            <header className="mb-8">
            {/* Back Button */}
            <Link
                href="/blogs"
                className="flex md:w-[970px] items-center gap-2 text-green-500 hover:text-green-400 mb-6"
            >
                <ArrowLeft className="w-5 h-5" />
                Back
            </Link>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">{blog.title}</h1>
                {blog.featured && (
                    <span className="inline-block bg-green-500 text-black text-xs font-semibold px-2 py-1 rounded-full mb-2">
                        FEATURED
                    </span>
                )}
                <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                <p className="text-gray-500 text-sm">
                    Published:{" "}
                    {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {blog.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs hover:bg-green-500 hover:text-black transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            {/* Blog Content */}
            <p className="prose prose-invert md:w-[970px] mt-5">
                {blog.content.split("\n").map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
            </p>
            </header>

        </div>
    );
}
