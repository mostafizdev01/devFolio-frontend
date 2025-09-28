"use client"

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {

  const handleSonner = ()=> {
    toast.success("Payment Successfull")
  }
  return (
    <div className=" min-h-dvh flex flex-col justify-center gap-5 items-center text-5xl">
      <h2>WellCome to DevFolio</h2>
      <Button onClick={()=>handleSonner()}>Click me</Button>
    </div>
  );
}
