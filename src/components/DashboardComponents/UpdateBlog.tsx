"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Dialog,
    DialogContent,
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
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Edit3 } from "lucide-react";


// ✅ TypeScript interface for a single blog
interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    publishedAt?: string;
    status?: string;
    featured: boolean;
    tags?: string[];
}

// ✅ Zod validation schema
const blogSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters."),
    slug: z.string().min(2, "Slug is required."),
    excerpt: z.string().min(10, "Excerpt must be at least 10 characters."),
    content: z.string().min(20, "Content must be at least 20 characters."),
    featured: z.boolean(),
    publishedAt: z.string().optional(),
    tags: z.string().optional(), // user enters tags as comma-separated string
});

type BlogFormValues = z.infer<typeof blogSchema>;

export default function UpdateBlogModal({ id }: { id: string }) {
    const [open, setOpen] = useState(false);
    const [blog, setBlog] = useState<Blog | null>(null); // ekhane string kore dile default value select korte gele error astesilo.
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ✅ Fetch blog by ID
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_API}/blog/${id}`,
                    { cache: "no-store" }
                );

                if (!res.ok) throw new Error("Failed to fetch blog");
                const data = await res.json();
                setBlog(data?.result || null);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };

        fetchBlog();
    }, [id]);

    // ✅ Initialize form
    const form = useForm<BlogFormValues>({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            title: "",
            slug: "",
            excerpt: "",
            content: "",
            featured: false,
            publishedAt: "",
            tags: "",
        },
    });

    // ✅ Reset form when blog data is fetched
    useEffect(() => {
        if (blog) {
            form.reset({
                title: blog.title || "",
                slug: blog.slug || "",
                excerpt: blog.excerpt || "",
                content: blog.content || "",
                featured: blog.featured || false,
                publishedAt: blog.publishedAt || "",
                tags: blog.tags?.join(", ") || "",
            });
        }
    }, [blog, form]);

    // ✅ Submit handler
    const onSubmit: SubmitHandler<BlogFormValues> = async (values) => {
        setIsSubmitting(true);
        try {
            const payload = {
                ...values,
                tags: values.tags
                    ? values.tags.split(",").map((t) => t.trim())
                    : [],
            };

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_API}/blog/${id}`,
                {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );

            if (!res.ok) {
                const err = await res.text();
                console.error(err);
                toast.error("Update failed!");
                return;
            }

            toast.success("✅ Blog updated successfully!");
            setOpen(false);
        } catch (error) {
            console.error("Error updating blog:", error);
            toast.error("Something went wrong!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* 🟢 Trigger Button */}
            <DialogTrigger asChild>
                <button className="p-2 rounded-md hover:bg-zinc-800 transition-colors">
                    <Edit3 className="h-4 w-4 text-slate-300" />
                </button>
            </DialogTrigger>

            {/* 🧩 Modal */}
            <DialogContent className="sm:max-w-lg md:max-w-6xl bg-neutral-950 border border-neutral-800 text-white rounded-2xl shadow-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-green-500">
                        Update Blog
                    </DialogTitle>
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
                                        <Input placeholder="Enter blog title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Slug */}
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Slug</FormLabel>
                                    <FormControl>
                                        <Input placeholder="unique-blog-url" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Excerpt */}
                        <FormField
                            control={form.control}
                            name="excerpt"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Excerpt</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Short description..."
                                            className="h-20"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Content */}
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Content</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Write full blog content..."
                                            className="h-40"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Tags */}
                        <FormField
                            control={form.control}
                            name="tags"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tags</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="react, nextjs, ui"
                                            className="h-16"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Published At */}
                        <FormField
                            control={form.control}
                            name="publishedAt"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Published At</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
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
                                        <input
                                            type="checkbox"
                                            id="featured"
                                            checked={field.value}
                                            onChange={(e) => field.onChange(e.target.checked)}
                                            className="h-4 w-4 accent-green-500"
                                        />
                                    </FormControl>
                                    <Label htmlFor="featured">Featured Blog</Label>
                                </FormItem>
                            )}
                        />

                        {/* Buttons */}
                        <div className="flex justify-end gap-3 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-green-600 hover:bg-green-700"
                            >
                                {isSubmitting ? "Updating..." : "Update Blog"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
