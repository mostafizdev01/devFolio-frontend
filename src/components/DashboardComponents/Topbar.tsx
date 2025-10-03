"use client";

import { useState } from "react";
import { User2, Bell } from "lucide-react";

export default function Topbar({ title = "Dashboard" }: { title?: string }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-transparent">
            <div>
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <p className="text-sm text-slate-400">Manage your content & site</p>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 rounded-md hover:bg-zinc-800 transition-colors">
                    <Bell className="h-5 w-5 text-slate-300" />
                </button>

                <div className="relative">
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 rounded-full px-3 py-1 bg-zinc-900/60 hover:bg-zinc-800 transition-colors"
                    >
                        <User2 className="h-5 w-5 text-slate-300" />
                        <div className="text-sm text-white">Mostafiz</div>
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-slate-800 rounded-md shadow-lg p-2">
                            <button className="w-full text-left px-2 py-2 text-sm text-slate-200 hover:bg-zinc-800 rounded">
                                Profile
                            </button>
                            <button className="w-full text-left px-2 py-2 text-sm text-slate-200 hover:bg-zinc-800 rounded">
                                Settings
                            </button>
                            <button className="w-full text-left px-2 py-2 text-sm text-rose-400 hover:bg-zinc-800 rounded">
                                Sign out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
