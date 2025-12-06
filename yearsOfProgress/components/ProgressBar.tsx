"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
    percent: number;
}

export function ProgressBar({ percent }: ProgressBarProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="w-full max-w-4xl space-y-6 animate-fade-in-up [animation-delay:200ms]">
            <div className="relative h-20 overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                {/* Inner Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50" />

                {/* Grid Overlay */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}
                />

                {/* The Progress Fill */}
                <div
                    className="absolute inset-y-0 left-0 h-full transition-[width] duration-1000 ease-out"
                    style={{ width: `${percent}%` }}
                >
                    {/* Main Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-cyan via-aurora-purple to-aurora-pink opacity-80" />

                    {/* Moving Stripes Pattern */}
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage:
                                "linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)",
                            backgroundSize: "30px 30px",
                            animation: "shimmer 2s linear infinite"
                        }}
                    />

                    {/* Leading Edge Glow */}
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_4px_rgba(255,255,255,0.6)]" />

                    {/* Sparkle at the tip */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white rounded-full blur-[2px] shadow-[0_0_15px_6px_rgba(255,255,255,0.8)]" />
                </div>

                {/* Labels Overlay */}
                <div className="absolute inset-0 flex items-center justify-between px-8 text-sm font-medium tracking-widest uppercase text-white/60 mix-blend-overlay">
                    <span>Jan 1</span>
                    <span>Dec 31</span>
                </div>

                {/* "NOW" Indicator - Dynamic Positioning */}
                <div
                    className="absolute -top-1 bottom-0 w-px bg-white/20 z-10"
                    style={{ left: `${percent}%` }}
                />
            </div>

            <div className="flex justify-center gap-6 text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
                <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aurora-cyan animate-pulse" />
                    Focus
                </span>
                <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aurora-purple animate-pulse [animation-delay:500ms]" />
                    Execute
                </span>
                <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aurora-pink animate-pulse [animation-delay:1000ms]" />
                    Achieve
                </span>
            </div>
        </div>
    );
}
