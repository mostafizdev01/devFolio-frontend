// Mock data for the portfolio - can be replaced with real database later
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  publishedAt: string
  tags: string[]
  featured: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl: string
  featured: boolean
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  email: string
  location: string
  skills: string[]
  experience: Array<{
    company: string
    position: string
    duration: string
    description: string
  }>
  education: Array<{
    institution: string
    degree: string
    year: string
  }>
}

// Mock data
export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Web Applications with Next.js",
    slug: "building-modern-web-apps-nextjs",
    excerpt: "Exploring the latest features in Next.js and how they improve developer experience.",
    content: "Full blog post content would go here...",
    publishedAt: "2024-01-15",
    tags: ["Next.js", "React", "Web Development"],
    featured: true,
  },
  {
    id: "2",
    title: "The Future of TypeScript",
    slug: "building-modern-web-apps-nextjs",
    excerpt: "What's coming next in the TypeScript ecosystem and why it matters.",
    content: "Full blog post content would go here...",
    publishedAt: "2024-01-10",
    tags: ["TypeScript", "JavaScript", "Development"],
    featured: true,
  }
]

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    imageUrl: "https://v0-personal-portfolio-website-ten-wine.vercel.app/ecommerce-dashboard.png",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/example/taskapp",
    liveUrl: "https://taskapp-demo.com",
    imageUrl: "https://v0-personal-portfolio-website-ten-wine.vercel.app/task-management-app.png",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/example/taskapp",
    liveUrl: "https://taskapp-demo.com",
    imageUrl: "https://v0-personal-portfolio-website-ten-wine.vercel.app/task-management-app.png",
    featured: true,
  },
]

export const mockPersonalInfo: PersonalInfo = {
  name: "Alex Developer",
  title: "Full Stack Developer",
  bio: "Passionate full-stack developer with 5+ years of experience building modern web applications. I love creating efficient, scalable solutions and staying up-to-date with the latest technologies.",
  email: "alex@example.com",
  location: "San Francisco, CA",
  skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS"],
  experience: [
    {
      company: "Tech Startup Inc.",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description:
        "Lead development of core platform features, mentored junior developers, and improved system performance by 40%.",
    },
    {
      company: "Digital Agency",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description:
        "Built custom web applications for clients, worked with diverse tech stacks, and delivered projects on time.",
    },
  ],
  education: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      year: "2020",
    },
  ],
}
