"use client";
import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import Link from "next/link";

export default function SpotlightCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <style jsx>{`
        @property --border-angle {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }

        @keyframes border-spin {
          100% {
            --border-angle: 360deg;
          }
        }

        .animate-border {
          animation: border-spin 6s linear infinite;
        }
      `}</style>
      <div className="w-full flex items-center justify-center p-4 min-h-screen bg-black">
        {/* Outer animated border container */}
        <div className="relative w-full max-w-[422px] mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.900)_50%,#111)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.teal.500)_86%,theme(colors.cyan.300)_90%,theme(colors.teal.500)_94%,theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">

          {/* Inner Card */}
          <div className="relative text-center z-10 px-8 py-12 rounded-2xl w-full bg-black h-full mx-auto">

            {/* Close button (top-right) */}
            <Link
              href="/"
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </Link>

            {/* Header */}
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Admin Login!
            </h1>
            <p className="text-sm mt-2 text-slate-400">
              Login with your credentials
            </p>

            {/* Form */}
            <form className="flex flex-col gap-4 mt-8 text-left">
              {/* Email Input */}
              <div>
                <label className="block text-sm text-slate-400 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring focus:ring-cyan-500/20 outline-none"
                />
              </div>

              {/* Password Input with toggle */}
              <div>
                <label className="block text-sm text-slate-400 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 pr-10 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring focus:ring-cyan-500/20 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-cyan-500 py-2 font-semibold text-black hover:bg-cyan-400 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
