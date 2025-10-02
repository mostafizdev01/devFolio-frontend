"use client"

import BlogPosts from "@/components/BlogPosts/BlogPosts";
import { NavMenu } from "@/components/DesktopNavbar/DesktopNavbar";
// import { MobileNavHeader } from "@/components/DesktopNavbar/MobileNavbar";
// import HeroSection from "@/components/HeroSection";
import HeroDev from "@/components/HeroSection/HeroDev";
import Projects from "@/components/ProjectsSection/Projects";
import { SkillsSection } from "@/components/SkillsSection";
import { ToolsSection } from "@/components/ToolsSection";

// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";

export default function Home() {

  // const handleSonner = () => {
  //   toast.success("Payment Successfull")
  // }

  return (
    <div className=" max-h-screen bg-black text-white">
      <main className="text-white bg-black box-border caret-transparent">
        <NavMenu />
        <HeroDev />
        <SkillsSection />
        <ToolsSection />
        <Projects />
        <BlogPosts />
      </main>
      {/* <div className="absolute box-border caret-transparent block"></div> */}
    </div>
  );
}
