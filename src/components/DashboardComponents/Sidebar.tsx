"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, FileText, Box, Users, Settings, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const items = [
    { label: "Dashboard", href: "/dashboard", icon: <Home className="h-5 w-5" /> },
    { label: "Blogs", href: "/dashboard/blogs", icon: <FileText className="h-5 w-5" /> },
    { label: "Projects", href: "/dashboard/projects", icon: <Box className="h-5 w-5" /> },
    { label: "Users", href: "/dashboard/users", icon: <Users className="h-5 w-5" /> },
    { label: "Settings", href: "/dashboard/settings", icon: <Settings className="h-5 w-5" /> },
];

export default function SidebarClient() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside className="bg-[#050507] text-white w-64 md:w-64 lg:w-72 flex-shrink-0">
            {/* Mobile header */}
            <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-slate-800">
                <div className="font-semibold">Admin</div>
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-2 rounded-md bg-zinc-900/40 hover:bg-zinc-800"
                    aria-label="Toggle menu"
                >
                    {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
                </button>
            </div>

            <div className={`hidden md:flex md:flex-col h-full`}>
                <div className="p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-black font-bold">
                        AD
                    </div>
                    <div>
                        <div className="font-semibold">Admin Panel</div>
                        <div className="text-xs text-slate-400">manage content</div>
                    </div>
                </div>

                <nav className="flex-1 p-2 space-y-1">
                    {items.map((it) => (
                        <Link
                            key={it.href}
                            href={it.href}
                            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-zinc-800 transition-colors"
                        >
                            <span className="text-slate-300">{it.icon}</span>
                            <span className="text-slate-100">{it.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <Button onClick={()=> signOut()} variant="destructive" className="w-full cursor-pointer text-left px-3 py-2 rounded-md hover:bg-zinc-800 transition-colors">
                        Sign out
                    </Button>
                </div>
            </div>

            {/* Collapsed (mobile) view */}
            <div className={`md:hidden ${collapsed ? "block" : "hidden"} bg-[#050507] border-t border-slate-800`}>
                <nav className="p-2 grid grid-cols-5 gap-2">
                    {items.map((it) => (
                        <Link
                            key={it.href}
                            href={it.href}
                            className="flex flex-col items-center gap-1 p-2 rounded-md hover:bg-zinc-800 transition-colors"
                        >
                            {it.icon}
                            <span className="text-xs text-slate-300">{it.label.split("")[0]}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
