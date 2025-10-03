"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SidebarClient from "@/components/DashboardComponents/Sidebar";
import Topbar from "@/components/DashboardComponents/Topbar";
import BlogCard from "@/components/DashboardComponents/BlogCard";
import ProjectCard from "@/components/DashboardComponents/ProjectCard";
import BlogModal from "@/components/DashboardComponents/CreateBlog";
import ProjectModal from "@/components/DashboardComponents/CreateProject";

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
      <SidebarClient />

      <div className="flex-1">
        <Topbar title="Admin Dashboard" />
        <main className="p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold">Content Management</h3>
            <div className="flex gap-2">
              <BlogModal />
              <div></div>
              <ProjectModal>
                <button className="px-4 py-2 rounded-md bg-emerald-500 text-black font-medium">+ Add New Project</button>
              </ProjectModal>
            </div>
          </div>

          {/* Blogs */}
          <section className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Blogs</h4>
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs.map((post) => (
                <BlogCard key={post.id} post={post} onEdit={handleEditBlog} onDelete={handleDeleteBlog} />
              ))}
            </motion.div>
          </section>

          {/* Projects */}
          <section>
            <h4 className="text-lg font-semibold mb-4">Projects</h4>
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
