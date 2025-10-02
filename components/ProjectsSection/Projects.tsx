import { ArrowRight, Badge, ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { mockProjects } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ProjectCard";

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
                    <Card key={project.id} className="overflow-hidden">
                        <div className="aspect-video bg-muted">
                            <img
                                src={project.imageUrl || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech) => (
                                    <Button variant={"secondary"} key={tech}>
                                        {tech}
                                    </Button>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                {project.githubUrl && (
                                    <Button variant="outline" size="sm" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            Code
                                        </a>
                                    </Button>
                                )}
                                {project.liveUrl && (
                                    <Button variant="outline" size="sm" asChild>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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
