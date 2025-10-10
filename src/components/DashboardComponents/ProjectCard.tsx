"use client";

import { Edit3, Trash2, ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({
    project,
    onEdit,
    onDelete,
}: {
    project: {
        id: string;
        title: string;
        description: string;
        technologies: string[];
        githubUrl?: string;
        liveUrl?: string;
        imageUrl: string;
        featured: boolean;
    };
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}) {
    return (
        <div className="bg-[#0b0b0c] border border-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            {/* 🔹 Image section */}
            <div className="relative w-full h-40 overflow-hidden">
                <Image
                width={300}
                height={300}
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                />
                {project.featured && (
                    <span className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-black" /> Featured
                    </span>
                )}
            </div>

            {/* 🔹 Content */}
            <div className="p-4">
                <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                <p className="text-sm text-slate-400 mt-2 line-clamp-3">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies?.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs bg-zinc-800 text-slate-300 px-2 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* 🔹 Footer */}
            <div className="flex items-center justify-between p-3 border-t border-slate-800 bg-transparent">
                <div className="flex gap-3 items-center">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-300 hover:text-white transition-colors"
                        >
                            <Github className="h-4 w-4" />
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    )}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(project.id)}
                        className="p-2 rounded-md hover:bg-zinc-800 transition-colors"
                    >
                        <Edit3 className="h-4 w-4 text-slate-300" />
                    </button>
                    <button
                        onClick={() => onDelete(project.id)}
                        className="p-2 rounded-md hover:bg-rose-600/20 transition-colors"
                    >
                        <Trash2 className="h-4 w-4 text-rose-400" />
                    </button>
                </div>
            </div>
        </div>
    );
}
