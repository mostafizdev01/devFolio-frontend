"use client";

import { useState } from "react";
import { z } from "zod";
import {
    useForm,
    SubmitHandler,
} from "react-hook-form";
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


// 🧠 Zod Schema (Validation Rules)
const blogSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters."),
    slug: z.string().min(2, "Slug is required."),
    excerpt: z.string().min(10, "Excerpt must be at least 10 characters."),
    content: z.string().min(20, "Content must be at least 20 characters."),
    featured: z.boolean(),
    publishedAt: z.string().optional(),
    tags: z.string().optional(),
});

type BlogFormValues = z.infer<typeof blogSchema>;

export default function BlogModal() {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ✅ Form Initialization (fully typed)
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

    // ✅ Properly typed submit handler
    const onSubmit: SubmitHandler<BlogFormValues> = async (values) => {
        // setIsSubmitting(true);
        try {

            const payload = {
                ...values,
                featured: !!values.featured,
                publishedAt: values.publishedAt ? new Date(values.publishedAt) : null,
                tags: values.tags ? values.tags.split(",").map(tag => tag.trim()) : [],
            }
            const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/create-blog`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(payload)
            })

            if (!result.ok) {
                toast.error("Something Wen't wrong!")
                const err = await result.text();
                console.log(err);
            }
            toast.success("Blog Created Successfull")
            form.reset();
            setOpen(false);
        } catch (error) {
            console.error("Error saving blog:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* 🟢 Trigger Button */}
            <DialogTrigger asChild>
                <button className="px-4 py-2 rounded-md bg-green-500 text-black font-medium hover:bg-green-600 transition">
                    + Add New Blog
                </button>
            </DialogTrigger>

            {/* 🧩 Modal Content */}
            <DialogContent className="sm:max-w-lg md:max-w-6xl bg-neutral-950 border border-neutral-800 text-white rounded-2xl shadow-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-green-500">
                        Create Blog
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
                                            placeholder="Enter tags separated by commas (e.g. react, nextjs, ui)"
                                            className="h-16"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Published Date */}
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
                                variant="default"
                                onClick={() => {
                                    form.reset();
                                    setOpen(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-green-600 text-white hover:bg-green-700"
                            >
                                {isSubmitting ? "Saving..." : "Save Blog"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
