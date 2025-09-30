"use client"

import { NavMenu } from "@/components/DesktopNavbar/DesktopNavbar";
// import { MobileNavHeader } from "@/components/DesktopNavbar/MobileNavbar";
// import HeroSection from "@/components/HeroSection";
import HeroDev from "@/components/HeroSection/HeroDev";
import { SkillsSection } from "@/components/SkillsSection";

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
      </main>
      {/* <div className="absolute box-border caret-transparent block"></div> */}
    </div>
  );
}
