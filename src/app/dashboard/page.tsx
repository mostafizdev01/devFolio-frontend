"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SidebarClient from "@/src/components/DashboardComponents/Sidebar";
import Topbar from "@/src/components/DashboardComponents/Topbar";
import BlogModal from "@/src/components/DashboardComponents/CreateBlog";
import ProjectModal from "@/src/components/DashboardComponents/CreateProject";
import BlogCard from "@/src/components/DashboardComponents/BlogCard";
import ProjectCard from "@/src/components/DashboardComponents/ProjectCard";

export default function DashboardPage() {
  // demo data
  const [blogs, setBlogs] = useState([
    { id: "b1", title: "First Post", excerpt: "Quick intro...", publishedAt: new Date().toISOString(), status: "published" },
    { id: "b2", title: "Second Post", excerpt: "Another post...", publishedAt: new Date().toISOString(), status: "draft" },
  ]);

  const [projects, setProjects] = useState([
    { id: "p1", title: "Project Alpha", description: "Cool project", tech: ["React", "Next"], liveUrl: "#" },
    { id: "p2", title: "Project Beta", description: "Another one", tech: ["Node"], liveUrl: "#" },
  ]);

  const handleEditBlog = (id: string) => alert("Edit blog " + id);
  const handleDeleteBlog = (id: string) => setBlogs((s) => s.filter((b) => b.id !== id));

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
            <div className="flex gap-2">
              <BlogModal />
              <ProjectModal>
                <button className="px-3 sm:px-4 py-2 rounded-md bg-emerald-500 text-black font-medium text-sm sm:text-base">
                  + Add New Project
                </button>
              </ProjectModal>
            </div>
          </div>

          {/* Blogs */}
          <section className="mb-10">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Blogs</h4>
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs.map((post) => (
                <BlogCard key={post.id} post={post} onEdit={handleEditBlog} onDelete={handleDeleteBlog} />
              ))}
            </motion.div>
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
