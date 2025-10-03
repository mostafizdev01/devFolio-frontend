"use client";

import { Edit3, Trash2 } from "lucide-react";

export default function BlogCard({
    post,
    onEdit,
    onDelete,
}: {
    post: { id: string; title: string; excerpt: string; publishedAt: string; status?: string; tags?: string[] };
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}) {
    return (
        <article className="bg-[#0b0b0c] border border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-white font-semibold">{post.title}</h3>
                    <p className="text-sm text-slate-400 mt-1">{post.excerpt}</p>
                    <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs text-slate-400">{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span className="px-2 py-0.5 rounded-full text-xs bg-zinc-800 text-slate-300">{post.status || "draft"}</span>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                    <div className="flex gap-2">
                        <button onClick={() => onEdit(post.id)} className="p-2 rounded-md hover:bg-zinc-800 transition-colors">
                            <Edit3 className="h-4 w-4 text-slate-300" />
                        </button>
                        <button onClick={() => onDelete(post.id)} className="p-2 rounded-md hover:bg-rose-600/20 transition-colors">
                            <Trash2 className="h-4 w-4 text-rose-400" />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
