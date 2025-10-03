"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

export default function ProjectModal({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>

            <DialogContent className="sm:max-w-lg bg-white dark:bg-zinc-900 text-black dark:text-white rounded-2xl shadow-lg">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">
                        Add New Project
                    </DialogTitle>
                </DialogHeader>

                <form className="space-y-4">
                    {/* Project Title */}
                    <div>
                        <Label htmlFor="title">Project Title</Label>
                        <Input id="title" placeholder="Enter project title" className="mt-1" />
                    </div>

                    {/* Description */}
                    <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Short description of the project..."
                            className="mt-1 h-20"
                        />
                    </div>

                    {/* Technologies */}
                    <div>
                        <Label htmlFor="technologies">Technologies</Label>
                        <Input
                            id="technologies"
                            placeholder="react, nextjs, tailwind"
                            className="mt-1"
                        />
                    </div>

                    {/* Github URL */}
                    <div>
                        <Label htmlFor="githubUrl">Github URL</Label>
                        <Input id="githubUrl" placeholder="https://github.com/user/repo" />
                    </div>

                    {/* Live URL */}
                    <div>
                        <Label htmlFor="liveUrl">Live Demo URL</Label>
                        <Input id="liveUrl" placeholder="https://yourproject.com" />
                    </div>

                    {/* Image URL */}
                    <div>
                        <Label htmlFor="imageUrl">Image URL</Label>
                        <Input id="imageUrl" placeholder="https://link-to-image.jpg" />
                    </div>

                    {/* Featured */}
                    <div className="flex items-center space-x-2">
                        <Checkbox id="featured" />
                        <Label htmlFor="featured">Mark as Featured</Label>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-2">
                        <Button
                            variant="outline"
                            onClick={() => setOpen(false)}
                            type="button"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="bg-green-600 text-white hover:bg-green-700"
                        >
                            Save Project
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
