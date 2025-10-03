"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function BlogModal() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* Trigger button */}
            <DialogTrigger asChild>
                <button className="px-4 py-2 rounded-md bg-cyan-500 text-black font-medium">+ Add New Blog</button>
            </DialogTrigger>

            {/* Modal Content */}
            <DialogContent className="sm:max-w-lg bg-white dark:bg-zinc-900 text-black dark:text-white rounded-2xl shadow-lg">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">Add New Blog</DialogTitle>
                </DialogHeader>

                <form className="space-y-4">
                    {/* Title */}
                    <div>
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Enter blog title" className="mt-1" />
                    </div>

                    {/* Slug */}
                    <div>
                        <Label htmlFor="slug">Slug</Label>
                        <Input id="slug" placeholder="unique-blog-url" className="mt-1" />
                    </div>

                    {/* Excerpt */}
                    <div>
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea id="excerpt" placeholder="Short description..." className="mt-1" />
                    </div>

                    {/* Content */}
                    <div>
                        <Label htmlFor="content">Content</Label>
                        <Textarea id="content" placeholder="Write full blog content..." className="mt-1 h-32" />
                    </div>

                    {/* Featured checkbox */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="featured" />
                        <Label htmlFor="featured">Featured Blog</Label>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit" className="bg-green-600 text-white hover:bg-green-700">
                            Save Blog
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
