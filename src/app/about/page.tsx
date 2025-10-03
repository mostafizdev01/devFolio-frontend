"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Target, Calendar, Star } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Gradient / Particle */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-violet-500 opacity-20 rounded-full blur-3xl"
                />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-8 md:gap-12 max-w-6xl mx-auto">
                {/* Avatar / Illustration */}
                <motion.div
                    className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden bg-gradient-to-tr from-emerald-600 to-violet-600 flex items-center justify-center hover:scale-105 transition-transform duration-500"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                    width={500}
                    height={500}
                        src="https://avatars.githubusercontent.com/u/145785701?v=4"
                        alt="Profile avatar"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Profile Info */}
                <motion.div
                    className="flex-1 max-w-xl text-center md:text-left space-y-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400">
                        Md Mostafiz
                    </h1>
                    <p className="text-slate-400 mb-2">@Fullstack Developer & Designer</p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center md:justify-start text-slate-300">
                        <span className="flex items-center gap-2">
                            <User className="h-5 w-5 text-emerald-400" /> Software Engineer
                        </span>
                        <span className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-emerald-400" /> mostafiz4372@gmail.com
                        </span>
                    </div>
                    <p className="text-slate-400 mt-4">
                        Passionate about crafting modern web applications with clean code, beautiful UI, and engaging UX. Always exploring new technologies and improving skillset.
                    </p>
                </motion.div>
            </section>

            {/* Mission / Skills Section */}
            <section className="relative z-10 px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: User, title: "User-Centric", desc: "Focused on building intuitive user experiences." },
                    { icon: Target, title: "Goal-Oriented", desc: "Delivering projects efficiently with clear goals." },
                    { icon: Calendar, title: "Experience", desc: "Years of experience crafting modern apps." },
                    { icon: Star, title: "Quality", desc: "High-quality code and design aesthetics." },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                    >
                        <item.icon className="h-8 w-8 text-emerald-400 mb-3" />
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-slate-300 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </section>

            {/* Timeline / Experience Section */}
            <section className="relative z-10 px-6 py-16 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-emerald-400 mb-8 text-center">Experience</h2>
                <div className="space-y-6">
                    {[
                        { year: "2022", title: "Frontend Developer", desc: "Built responsive web applications using React & Next.js." },
                        { year: "2023", title: "Fullstack Developer", desc: "Developed scalable APIs with Node.js and integrated databases." },
                        { year: "2024", title: "Lead Developer", desc: "Leading projects and mentoring junior developers." },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl shadow-lg relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-1 before:rounded-full before:bg-emerald-400"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            <span className="text-emerald-400 font-bold">{item.year}</span>
                            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                            <p className="text-slate-300">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
