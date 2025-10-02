import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { mockBlogPosts } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ProjectsSection/ProjectCard";


export default function BlogPosts() {
    const featuredPosts = mockBlogPosts.filter((post) => post.featured).slice(0, 2)
    console.log(featuredPosts);
    
    return (
        <section className="py-16 w-11/12 md:max-w-[1300px] mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className=" text-xl md:text-3xl font-bold">Latest Blog Posts</h2>
                <Link href="/blog">
                    <Button variant="ghost">
                        View All Posts
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                    <Card
                        key={post.id}
                        className="bg-[#0d0d0d] border border-gray-800 rounded-xl shadow-md hover:shadow-lg hover:border-gray-600 transition-all duration-300"
                    >
                        <CardHeader className="px-5 space-y-0">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700 hover:text-white transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Title */}
                            <CardTitle className="text-xl font-semibold">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-white hover:text-green-400 transition-colors"
                                >
                                    {post.title}
                                </Link>
                            </CardTitle>

                            {/* Date */}
                            <CardDescription className="text-sm text-gray-400">
                                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </CardDescription>
                        </CardHeader>

                        {/* Excerpt */}
                        <CardContent className=" px-5 pt-0">
                            <p className="text-gray-300 leading-relaxed">{post.excerpt}</p>
                        </CardContent>
                    </Card>

                ))}
            </div>
        </section>
    )
}
