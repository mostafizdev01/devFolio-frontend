"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Edit3 } from "lucide-react";

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

// 🧠 Validation schema using Zod
const projectSchema = z.object({
    title: z.string().min(3, "Title is required"),
    description: z.string().min(10, "Description is required"),
    technologies: z.string().min(3, "At least one technology is required"),
    githubUrl: z.string().url("Must be a valid URL").optional(),
    liveUrl: z.string().url("Must be a valid URL").optional(),
    imageUrl: z.string().url("Must be a valid image URL"),
    featured: z.boolean(), /// ekhabe ifFeatured true korar jonno resolver && control a error show kortesilo.
});

type ProjectFormValues = z.infer<typeof projectSchema>;

export default function UpdateProject({ id }: { id: string }) {

    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [project, setProject] = useState<IProject | null>(null)


    /// cal useEffect && and get single project data
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`,
                    { cache: "no-store" }
                );

                if (!res.ok) throw new Error("Failed to fetch project");
                const data = await res.json();
                setProject(data?.data || null);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };

        fetchBlog();
    }, [id]);

    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: "",
            description: "",
            technologies: "",
            githubUrl: "",
            liveUrl: "",
            imageUrl: "",
        },
    });

    // ✅ Reset form when blog data is fetched
    useEffect(() => {
        if (project) {
            form.reset({
                title: project?.title || "",
                description: project?.description || "",
                technologies: project?.technologies?.join(", ") || "",
                githubUrl: project?.githubUrl || "",
                featured: project?.featured || false,
                liveUrl: project?.liveUrl || "",
                imageUrl: project?.imageUrl || "",
            });
        }
    }, [project, form]);

    const onSubmit = async (values: ProjectFormValues) => {
        setIsSubmitting(true);
        try {
            const dataToSend = {
                ...values,
                technologies: values.technologies.split(",").map((tech) => tech.trim()),
            };

            console.log("✅ Project Submitted:", dataToSend);

            // API call
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend),
            });

            if (!res.ok) {
                console.log(res.text());
                toast.error("Something wen't wrong!")
            }
            toast.success("Project Updated Successfull!")
            form.reset();
            // setOpen(false);
        } catch (err) {
            console.error("Error saving project:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button
                    // onClick={() => onEdit(project.id)}
                    className="p-2 rounded-md hover:bg-zinc-800 transition-colors"
                >
                    <Edit3 className="h-4 w-4 text-slate-300" />
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg md:max-w-5xl bg-neutral-950 border border-neutral-800 text-white rounded-2xl shadow-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-green-500">
                        Create Project
                    </DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Title */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Project Title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Description */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea className="h-24" placeholder="Project description..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Technologies */}
                        <FormField
                            control={form.control}
                            name="technologies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Technologies (comma separated)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Next.js, TailwindCSS, Framer Motion" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* GitHub URL */}
                        <FormField
                            control={form.control}
                            name="githubUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>GitHub URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://github.com/username/repo" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Live URL */}
                        <FormField
                            control={form.control}
                            name="liveUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Live Demo URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://yourproject.live" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Image URL */}
                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Image URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://via.placeholder.com/600x400.png" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Featured */}
                        <FormField
                            control={form.control}
                            name="featured"
                            render={({ field }) => (
                                <FormItem className="flex items-center gap-2">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <FormLabel>Featured Project</FormLabel>
                                </FormItem>
                            )}
                        />

                        {/* Buttons */}
                        <div className="flex justify-end gap-3 pt-4">
                            <Button type="button" variant="default" onClick={() => form.reset()}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isSubmitting} className="bg-green-600 text-white hover:bg-green-700">
                                {isSubmitting ? "Posting..." : "Post a Project"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
