"use client";

import { useState } from "react";
import { Trash2, X, Check } from "lucide-react";
import { toast } from "sonner";
import UpdateBlogModal from "./UpdateBlog";

export default function BlogCard({
    post,
}: {
    post: {
        id: string;
        title: string;
        excerpt: string;
        publishedAt: string;
        status?: string;
        tags?: string[];
    };
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async (id: string) => {
        try {
            setIsDeleting(true);

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete blog");

            toast.success("Blog deleted successfully ✅");
            setIsModalOpen(false);
            window.location.reload(); // Optional: you can replace with state update
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete the blog ❌");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
            {/* Blog Card */}
            <article className="bg-[#0b0b0c] border border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-white font-semibold">{post.title}</h3>
                        <p className="text-sm text-slate-400 mt-1">{post.excerpt}</p>
                        <div className="mt-2 flex items-center gap-2">
                            <span className="text-xs text-slate-400">
                                {new Date(post.publishedAt).toLocaleDateString()}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-xs bg-zinc-800 text-slate-300">
                                {post.status || "draft"}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-2">
                            <UpdateBlogModal id={post.id} />
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="p-2 rounded-md hover:bg-rose-600/20 transition-colors"
                                aria-label="Delete blog"
                            >
                                <Trash2 className="h-4 w-4 text-rose-400" />
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-[#111] border border-slate-800 rounded-xl p-6 w-[90%] sm:w-[400px] text-center shadow-lg">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Confirm Delete
                        </h3>
                        <p className="text-slate-400 mb-6">
                            Are you sure you want to delete <b>{post.title}</b>? <br />
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
                                onClick={() => handleDelete(post.id)}
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
        </>
    );
}
