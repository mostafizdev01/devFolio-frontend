# 🚀 DevFolio — Modern Developer Portfolio & Blog

Welcome to **DevFolio**, a modern, responsive, and developer-focused portfolio + blog platform built with the latest web technologies like **Next.js**, **TypeScript**, and **Tailwind CSS**.  
Perfect for showcasing your projects, writing technical blogs, and building your personal brand as a developer.

---

## 🌟 Features

✅ **Modern UI/UX** — Minimal, elegant, and fully responsive design.  
✅ **Dynamic Blog System** — Add, edit, and showcase blog posts with rich markdown content.  
✅ **Tag & Category System** — Pre-defined developer tags like `HTML`, `CSS`, `JavaScript`, `TypeScript`, `React`, `Next.js`, `Tailwind`, `Redux`, `Prisma`, `MongoDB`, and more.  
✅ **SEO Optimized** — Dynamic meta tags, OpenGraph & Twitter Card integration.  
✅ **Featured Posts** — Highlight your top blogs or projects.  
✅ **Dark/Light Mode** — Auto & manual theme switcher.  
✅ **Type Safe** — Full TypeScript support for safety & scalability.  
✅ **Developer-Ready Codebase** — Clean folder structure, reusable components, and modular design.

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Next.js 14** | React framework for production-grade SSR & routing |
| **TypeScript** | Type safety and maintainable code |
| **Tailwind CSS** | Utility-first styling |
| **Prisma / Mongoose** | Database ORM/ODM (depending on setup) |
| **MongoDB / PostgreSQL** | Database for blog & user data |
| **ShadCN UI** | Modern, accessible UI components |
| **JWT Auth** | Secure authentication (if used) |

---

## 🧱 Folder Structure

<details>
    devfolio/
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── blog/
│       └── images/
│
├── src/
│   ├── app/
│   │   ├── (site)/
│   │   │   ├── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/page.tsx
│   │   │   └── about/page.tsx
│   │   │
│   │   ├── (dashboard)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── posts/
│   │   │       ├── create/page.tsx
│   │   │       └── edit/[id]/page.tsx
│   │   │
│   │   ├── api/
│   │   │   ├── posts/route.ts
│   │   │   └── contact/route.ts
│   │   │
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── blog/
│   │   ├── projects/
│   │   └── shared/
│   │
│   ├── data/
│   │   ├── blogs.ts
│   │   ├── projects.ts
│   │   └── socialLinks.ts
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── seo.ts
│   │   ├── prisma.ts
│   │   ├── db.ts
│   │   └── markdown.ts
│   │
│   ├── types/
│   │   ├── blog.d.ts
│   │   ├── project.d.ts
│   │   └── index.d.ts
│   │
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useScrollPosition.ts
│   │
│   ├── context/
│   │   ├── ThemeContext.tsx
│   │   └── BlogContext.tsx
│   │
│   ├── constants/
│   │   └── siteConfig.ts
│   │
│   └── styles/
│       └── theme.css
│
├── .env.local
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
</details>
---

## 📝 Blog Data Example

```ts
{
  title: "Mastering Next.js 14 App Router",
  slug: "mastering-nextjs-14",
  excerpt: "Learn how to use the new App Router in Next.js 14 for modern web apps.",
  content: "Full markdown or rich text content goes here...",
  featured: true,
  tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  createdAt: "2025-10-20"
}

⚙️ Installation & Setup

# 1️⃣ Clone the repository
git clone https://github.com/yourusername/devfolio.git

# 2️⃣ Navigate to project directory
cd devfolio

# 3️⃣ Install dependencies
npm install  # or yarn install

# 4️⃣ Run development server
npm run dev  # http://localhost:3000
