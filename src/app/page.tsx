"use client"

import BlogPosts from "../components/BlogPosts/BlogPosts";
import Contact from "../components/ContactSection/Contact";
import { DesktopNavbar } from "../components/DesktopNavbar";
import HeroDev from "../components/HeroSection/HeroDev";
import Projects from "../components/ProjectsSection/Projects";
import { SkillsSection } from "../components/SkillsSection";
import { ToolsSection } from "../components/ToolsSection";

export default function Home() {

  // const handleSonner = () => {
  //   toast.success("Payment Successfull")
  // }

  return (
    <div className=" max-h-screen bg-black text-white">
      <main className="text-white bg-black box-border caret-transparent">
        <DesktopNavbar />
        <HeroDev />
        <SkillsSection />
        <ToolsSection />
        <Projects />
        <BlogPosts />
        <Contact />
      </main>
      {/* <div className="absolute box-border caret-transparent block"></div> */}
    </div>
  );
}
