"use-client"
import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ProjectCard";
import Image from "next/image";


/// project interface 
interface IProject {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl: string;
    featured: boolean;
}

export default function Projects({limit, button}: {limit: number, button:boolean}) {
    const [projects, setProjects] = useState([]);

    const projectsFilterData = limit ? projects.filter((project)=> project).slice(0, limit) : projects;
    
    useEffect(() => {
        const getProjects = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
                    cache: "no-store",
                });
                const data = await res.json();
                setProjects(data?.data || []);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        getProjects();
    }, []);

    return (
        <section className="py-16 w-11/12 md:max-w-[1300px] m-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className=" text-xl md:text-3xl font-bold">Featured Projects</h2>
                {
                    button ?                 <Link href="/projects">
                    <Button variant="ghost">
                        View All Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link> : 
                                <Link href="/">
                    <Button variant="ghost">
                        Back Home
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
                }
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {projects && projectsFilterData.map((project:IProject) => (
                    <Card
                        key={project.id}
                        className="overflow-hidden bg-[#0d0d0d] dark:bg-[#0d0d0d] border border-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:border-gray-600 transition-all duration-300"
                    >
                        {/* Image Section */}
                        <div className="aspect-video relative group">
                            <Image
                                width={500}
                                height={500}
                                src={"https://media.licdn.com/dms/image/v2/D4D12AQHnICrUfyxYWg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1727345945436?e=2147483647&v=beta&t=lc308h3Ud_k0-xVnBCux6qr8C0_CKq9_fcXgyvzGSps"}
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
                        <CardContent className="px-4">
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
                                        variant="default"
                                        size="sm"
                                        asChild
                                        className="bg-gray-900 text-gray-300 hover:text-white border border-gray-700"
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
                                        variant="default"
                                        size="sm"
                                        asChild
                                        className="bg-gray-900 text-gray-300 hover:text-white border border-gray-700"
                                    >
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Live Demo
                                        </Link>
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
