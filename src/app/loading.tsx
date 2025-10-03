"use client";

import React, { useEffect, useId, useState } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

type RocketLoaderProps = {
    /** called after rocket finishes launching */
    onFinish?: () => void;
};

export default function RocketLoader({ onFinish }: RocketLoaderProps) {
    const uid = useId().replace(/:/g, "-");
    const prefersReduced = useReducedMotion();
    const rocketControls = useAnimation();
    const [progress, setProgress] = useState<number>(0);
    const [launching, setLaunching] = useState<boolean>(false);

    // simulate progress
    useEffect(() => {
        if (prefersReduced) {
            setProgress(100);
            setTimeout(() => {
                setLaunching(true);
            }, 300);
            return;
        }

        let mounted = true;
        // eslint-disable-next-line prefer-const
        let interval = window.setInterval(() => {
            setProgress((p) => {
                const next = Math.min(100, p + Math.floor(Math.random() * 3) + 1); // small random step
                if (next >= 100 && mounted) {
                    clearInterval(interval);
                    // small delay then launch
                    setTimeout(() => setLaunching(true), 500);
                }
                return next;
            });
        }, 60);

        return () => {
            mounted = false;
            clearInterval(interval);
        };
    }, [prefersReduced]);

    // trigger rocket launch animation when launching flips true
    useEffect(() => {
        if (!launching) return;

        (async () => {
            // 1) small grind (prepare)
            await rocketControls.start({ scale: 1.02, transition: { duration: 0.12 } });
            // 2) initial upward kick + acceleration + fade
            await rocketControls.start({
                y: "-120vh",
                x: 0,
                rotate: -6,
                opacity: 0,
                scale: 0.9,
                transition: { duration: 1.6, ease: "easeIn" },
            });

            // done
            onFinish?.();
        })();
    }, [launching, rocketControls, onFinish]);

    // Idle hover bob while not launched
    const idleHover = {
        y: [0, -10, 0],
    };

    // Star field (randomized)
    const stars = new Array(28).fill(null).map((_, i) => ({
        key: `s-${i}-${uid}`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2,
        dur: 1.8 + Math.random() * 2.4,
        delay: Math.random() * 2,
    }));

    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-black/95 via-[#020617] to-[#05060a] overflow-hidden relative">
            {/* Stars */}
            <div className="absolute inset-0 pointer-events-none">
                {stars.map((s) => (
                    <motion.span
                        key={s.key}
                        className="absolute rounded-full bg-white"
                        style={{ width: s.size, height: s.size, top: s.top, left: s.left, opacity: 0.8 }}
                        animate={prefersReduced ? {} : { opacity: [0.2, 1, 0.2] }}
                        transition={prefersReduced ? {} : { duration: s.dur, repeat: Infinity, repeatType: "reverse", delay: s.delay }}
                    />
                ))}
            </div>

            {/* Center card / scene */}
            <section
                aria-hidden={false}
                className="relative z-10 flex flex-col items-center gap-6 px-6 py-10 sm:py-12 rounded-3xl"
            >
                {/* Rocket container */}
                <motion.div
                    animate={rocketControls}
                    initial={{ y: 0, opacity: 1 }}
                    className="flex flex-col items-center justify-center"
                >
                    {/* Rocket (idle bob while loading) */}
                    <motion.div
                        animate={prefersReduced ? {} : idleHover}
                        transition={{ duration: 1.6, repeat: launching ? 0 : Infinity, ease: "easeInOut" }}
                        className="relative w-28 h-28 sm:w-36 sm:h-36"
                    >
                        {/* improved SVG rocket with unique gradient IDs */}
                        <svg viewBox="0 0 128 128" className="w-full h-full" role="img" aria-label="Rocket">
                            <defs>
                                <linearGradient id={`bodyGrad-${uid}`} x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#60a5fa" />
                                    <stop offset="100%" stopColor="#1e3a8a" />
                                </linearGradient>
                                <radialGradient id={`windowGrad-${uid}`} cx="50%" cy="40%" r="60%">
                                    <stop offset="0%" stopColor="#e0f2fe" />
                                    <stop offset="100%" stopColor="#0284c7" />
                                </radialGradient>
                                <linearGradient id={`finGrad-${uid}`} x1="0" x2="1" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#38bdf8" />
                                    <stop offset="100%" stopColor="#0ea5e9" />
                                </linearGradient>
                                <linearGradient id={`flameGrad-${uid}`} x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#facc15" />
                                    <stop offset="50%" stopColor="#fb923c" />
                                    <stop offset="100%" stopColor="#ef4444" />
                                </linearGradient>
                            </defs>

                            {/* body */}
                            <path
                                d="M64 10c-22 28-30 70-18 92 10 18 34 18 44 0 12-22 4-64-18-92z"
                                fill={`url(#bodyGrad-${uid})`}
                                stroke="#0f172a"
                                strokeWidth="1.5"
                            />

                            {/* window */}
                            <circle cx="64" cy="56" r="10" fill={`url(#windowGrad-${uid})`} stroke="#0369a1" strokeWidth="2" />

                            {/* left fin */}
                            <path d="M46 84 L26 98 L46 92 Z" fill={`url(#finGrad-${uid})`} stroke="#07122a" strokeWidth="1" />

                            {/* right fin */}
                            <path d="M82 84 L102 98 L82 92 Z" fill={`url(#finGrad-${uid})`} stroke="#07122a" strokeWidth="1" />

                            {/* small bottom detail */}
                            <path d="M56 96 L72 96 L64 110 Z" fill="#0b1220" />

                            {/* Flame shapes: we animate a group below with framer-motion */}
                        </svg>

                        {/* Flame group: motion element for pulsing flame. Hidden when launched (progress>=100) */}
                        {progress < 100 && !prefersReduced && (
                            <motion.div
                                className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center"
                                animate={{ scale: [0.6, 1.05, 0.6], opacity: [0.95, 0.45, 0.95] }}
                                transition={{ duration: 0.45, repeat: Infinity }}
                                aria-hidden
                            >
                                {/* layered flame blobs */}
                                <div style={{ filter: "blur(6px)" }} className="absolute w-7 h-10 rounded-full bg-gradient-to-b from-yellow-300 via-orange-400 to-red-500 opacity-90" />
                                <div style={{ filter: "blur(2px)" }} className="absolute w-5 h-8 rounded-full bg-gradient-to-b from-yellow-200 via-orange-300 to-orange-500 opacity-100" />
                                <div style={{ filter: "blur(0px)" }} className="absolute w-3 h-6 rounded-full bg-gradient-to-b from-yellow-100 via-orange-300 to-red-400 opacity-100" />
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>

                {/* Title / tagline */}
                <div className="text-center">
                    <h1 className="text-xl sm:text-2xl font-semibold text-cyan-400">Preparing your launch...</h1>
                    
                </div>

                {/* Accessible progress bar */}
                <div className="mt-4 w-64 sm:w-80">
                    <div
                        role="progressbar"
                        aria-label="Loading progress"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={progress}
                        className="w-full h-2 bg-white/10 rounded-full overflow-hidden"
                    >
                        <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-md"
                            style={{ width: `${progress}%` }}
                            transition={{ ease: "linear", duration: 0.25 }}
                        />
                    </div>
                    <div className="text-xs text-slate-400 text-center mt-2" aria-hidden>
                        {progress}% loaded
                    </div>
                </div>
            </section>
        </main>
    );
}
