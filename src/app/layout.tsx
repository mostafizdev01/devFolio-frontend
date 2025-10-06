import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import AuthProvider from "../provider/AuthProvider";

// 🧩 Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🧠 Page Metadata (SEO)
export const metadata: Metadata = {
  title: "MostafizDev | Full-Stack Developer & Portfolio",
  description:
    "Explore the portfolio of Mostafiz Dev showcasing modern web applications, elegant UI/UX, and full-stack development expertise using Next.js, TailwindCSS, and cutting-edge technologies.",
};

// 🏗️ Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} cz-shortcut-listen="true">
        {/* 🔔 Global Toaster Notifications */}
        <Toaster richColors position="top-right" />

        {/* 🔐 Auth Context Provider */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
