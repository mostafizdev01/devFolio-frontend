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

export default function DashboardPage() {
  // demo data
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data = await res.json();

        // Defensive check
        setBlogs(data?.result || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const [projects, setProjects] = useState([
    { id: "p1", title: "Project Alpha", description: "Cool project", tech: ["React", "Next"], liveUrl: "#" },
    { id: "p2", title: "Project Beta", description: "Another one", tech: ["Node"], liveUrl: "#" },
  ]);

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
                <BlogCard key={post.id} post={post}/>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Projects</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onEdit={handleEditProject} onDelete={handleDeleteProject} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
