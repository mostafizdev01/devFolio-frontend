"use client"
import Projects from '@/src/components/ProjectsSection/Projects'

export default function ProjectsPage() {
  return (
    <div className=' min-h-dvh bg-black text-white'>
      <Projects limit={0} button={false}/>
    </div>
  )
}
