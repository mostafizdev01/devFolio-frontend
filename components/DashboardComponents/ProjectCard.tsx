"use client";

import { Edit3, Trash2, ExternalLink } from "lucide-react";

export default function ProjectCard({
    project,
    onEdit,
    onDelete,
}: {
    project: { id: string; title: string; description: string; tech?: string[]; liveUrl?: string };
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}) {
    return (
        <div className="bg-[#0b0b0c] border border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4">
                <h4 className="text-white font-semibold">{project.title}</h4>
                <p className="text-sm text-slate-400 mt-2">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {(project.tech || []).map((t) => (
                        <span key={t} className="text-xs bg-zinc-800 text-slate-300 px-2 py-1 rounded-full">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between p-3 border-t border-slate-800 bg-transparent">
                <div className="flex gap-2 items-center">
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-cyan-400">
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    )}
                </div>

                <div className="flex gap-2">
                    <button onClick={() => onEdit(project.id)} className="p-2 rounded-md hover:bg-zinc-800 transition-colors">
                        <Edit3 className="h-4 w-4 text-slate-300" />
                    </button>
                    <button onClick={() => onDelete(project.id)} className="p-2 rounded-md hover:bg-rose-600/20 transition-colors">
                        <Trash2 className="h-4 w-4 text-rose-400" />
                    </button>
                </div>
            </div>
        </div>
    );
}
