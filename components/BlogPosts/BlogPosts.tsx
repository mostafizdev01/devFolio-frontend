import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { mockBlogPosts } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ProjectsSection/ProjectCard";


export default function BlogPosts() {
    const featuredPosts = mockBlogPosts.filter((post) => post.featured).slice(0, 2)
    return (
        <section className="py-16 max-w-[1300px] mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
                <Link href="/blog">
                    <Button variant="ghost">
                        View All Posts
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                    <Card key={post.id}>
                        <CardHeader>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {post.tags.map((tag) => (
                                    <Button size={"sm"} key={tag} variant="outline">
                                        {tag}
                                    </Button>
                                ))}
                            </div>
                            <CardTitle>
                                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                    {post.title}
                                </Link>
                            </CardTitle>
                            <CardDescription>
                                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{post.excerpt}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
