"use client";

import { Trash2, ExternalLink, Github, Star, X, Check } from "lucide-react";
import Image from "next/image";
import UpdateProject from "./UpdateProject";
import { toast } from "sonner";
import { useState } from "react";

export default function ProjectCard({ project }: {
    project: {
        id: string;
        title: string;
        description: string;
        technologies: string[];
        githubUrl?: string;
        liveUrl?: string;
        imageUrl: string;
        featured: boolean;
    }
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async (id: string) => {
        try {
            setIsDeleting(true);

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete blog");

            toast.success("Project deleted successfully ✅");
            setIsModalOpen(false);
            window.location.reload(); // Optional: you can replace with state update
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete the project ❌");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="bg-[#0b0b0c] border border-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            {/* 🔹 Image section */}
            <div className="relative w-full h-40 overflow-hidden">
                <Image
                    width={500}
                    height={500}
                    src={"https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg"}
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
                    <UpdateProject id={project.id} />
                    <button
                        onClick={() =>setIsModalOpen(true)}
                        className="p-2 rounded-md hover:bg-rose-600/20 transition-colors"
                    >
                        <Trash2 className="h-4 w-4 text-rose-400" />
                    </button>
                </div>
            </div>
            {/* delete modal  */}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-[#111] border border-slate-800 rounded-xl p-6 w-[90%] sm:w-[400px] text-center shadow-lg">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Confirm Delete
                        </h3>
                        <p className="text-slate-400 mb-6">
                            Are you sure you want to delete <br />
                            This action cannot be undone.
                        </p>

                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                disabled={isDeleting}
                                className="flex items-center gap-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-md text-slate-300 transition-colors"
                            >
                                <X className="w-4 h-4" /> Cancel
                            </button>
                            <button
                                onClick={() => handleDelete(project?.id)}
                                disabled={isDeleting}
                                className="flex items-center gap-1 px-4 py-2 bg-rose-600 hover:bg-rose-700 rounded-md text-white transition-colors"
                            >
                                {isDeleting ? (
                                    "Deleting..."
                                ) : (
                                    <>
                                        <Check className="w-4 h-4" /> Yes, Delete
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
