import { ArrowRight, Badge, ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { mockProjects } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ProjectCard";
import Image from "next/image";

export default function Projects() {
    const featuredProjects = mockProjects.filter((project) => project.featured).slice(0, 3)
    return (
        <section className="py-16 max-w-[1300px] m-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <Link href="/projects">
                    <Button variant="ghost">
                        View All Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                    <Card
                        key={project.id}
                        className="overflow-hidden bg-[#0d0d0d] dark:bg-[#0d0d0d] border border-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:border-gray-600 transition-all duration-300"
                    >
                        {/* Image Section */}
                        <div className="aspect-video relative group">
                            <Image
                                width={500}
                                height={500}
                                src={project.imageUrl || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        </div>

                        {/* Card Header */}
                        <CardHeader className="p-4">
                            <CardTitle className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                {project.title}
                            </CardTitle>
                            <CardDescription className="text-gray-400 mt-1">
                                {project.description}
                            </CardDescription>
                        </CardHeader>

                        {/* Card Content */}
                        <CardContent className="p-4">
                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-3">
                                {project.githubUrl && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        asChild
                                        className="bg-gray-900 text-gray-200 hover:bg-indigo-600 hover:text-white border border-gray-700"
                                    >
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="mr-2 h-4 w-4" />
                                            Code
                                        </a>
                                    </Button>
                                )}

                                {project.liveUrl && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        asChild
                                        className="bg-gray-900 text-gray-200 hover:bg-green-600 hover:text-white border border-gray-700"
                                    >
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Live Demo
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                ))}
            </div>
        </section>
    )
}
