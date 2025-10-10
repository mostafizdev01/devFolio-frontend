"use client";

import { useEffect, useState } from "react";
import SidebarClient from "@/src/components/DashboardComponents/Sidebar";
import Topbar from "@/src/components/DashboardComponents/Topbar";
import BlogModal from "@/src/components/DashboardComponents/CreateBlog";
import BlogCard from "@/src/components/DashboardComponents/BlogCard";
import ProjectCard from "@/src/components/DashboardComponents/ProjectCard";
import ProjectCardDialog from "@/src/components/DashboardComponents/CreateProject";

// ✅ TypeScript interface
interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured: boolean;
  createdAt: string;
  publishedAt: string;
  tags: string[];
}

export interface Project {
  id: string;                    // প্রতিটি প্রজেক্টের ইউনিক আইডি
  title: string;                 // প্রজেক্টের নাম বা টাইটেল
  description: string;           // প্রজেক্ট সম্পর্কে সংক্ষিপ্ত বর্ণনা
  technologies: string[];        // কোন কোন টেকনোলজি ইউজ করা হয়েছে (array)
  githubUrl?: string;            // GitHub লিংক (optional)
  liveUrl?: string;              // Live site লিংক (optional)
  imageUrl: string;              // প্রজেক্টের কভার ইমেজ
  featured: boolean;             // Featured প্রজেক্ট কিনা
}


export default function DashboardPage() {
  // demo data
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [project, setProjects] = useState<Project[]>([]);


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // ✅ Fetch blog data
        const blogRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
          cache: "no-store",
        });
        const blogData = await blogRes.json();

        // ✅ Fetch project data (corrected endpoint)
        const projectRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
          cache: "no-store",
        });
        const projectData = await projectRes.json();

        if (!blogRes.ok || !projectRes.ok) throw new Error("Failed to fetch blogs or projects");

        // ✅ Set states
        setBlogs(blogData?.result || []);
        setProjects(projectData?.data || []);
      } catch (error) {
        console.error("Something wen't wrong", error);
      }
    };
    fetchBlogs();
  }, []);



  // const handleDeleteBlog = (id: string) => setBlogs((s) => s.filter((b) => b.id !== id));

  const handleEditProject = (id: string) => alert("Edit project " + id);
  const handleDeleteProject = (id: string) => setProjects((s) => s.filter((p) => p.id !== id));

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Sidebar (hidden on mobile, visible on lg) */}
      <div className="hidden lg:block">
        <SidebarClient />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Topbar (includes menu button for mobile) */}
        <Topbar title="Admin Dashboard" />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Content Management</h3>

            {/* Add blog && Add Project Buttons */}
            <div className="flex gap-2">
              <BlogModal />
              <ProjectCardDialog />
            </div>
          </div>

          {/* Blogs */}
          <section className="mb-10">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Blogs</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Projects</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.map((project) => (
                <ProjectCard key={project.id} project={project} onEdit={handleEditProject} onDelete={handleDeleteProject} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
