"use client";

import { useEffect, useState, useMemo } from "react";
import { Sparkles, Clock, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

type Countdown = {
    year: number;
    percentElapsed: number;
    percentLeft: number;
    leftLabel: string;
    nowLabel: string;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
});

function computeCountdown(now: Date): Countdown {
    const year = now.getFullYear();
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31, 23, 59, 59, 999);
    const totalMs = end.getTime() - start.getTime();
    const elapsed = Math.min(Math.max(now.getTime() - start.getTime(), 0), totalMs);
    const left = Math.max(end.getTime() - now.getTime(), 0);

    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;

    const days = Math.floor(left / day);
    const hours = Math.floor((left % day) / hour);
    const minutes = Math.floor((left % hour) / minute);
    const seconds = Math.floor((left % minute) / 1000);

    const leftLabel = `${days}d ${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    return {
        year,
        percentElapsed: (elapsed / totalMs) * 100,
        percentLeft: (left / totalMs) * 100,
        leftLabel,
        nowLabel: formatter.format(now),
        days,
        hours,
        minutes,
        seconds
    };
}

export function CountdownTimer() {
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
        setNow(new Date());
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    const countdown = useMemo(() => (now ? computeCountdown(now) : null), [now]);

    if (!countdown) {
        return (
            <div className="flex h-64 items-center justify-center">
                <div className="animate-pulse text-white/50">Syncing time...</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-8 animate-fade-in-up">
            {/* Header Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-md shadow-lg transition-transform hover:scale-105">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="font-mono tracking-wide">
                    {countdown.year} · {countdown.nowLabel}
                </span>
            </div>

            {/* Main Countdown Display */}
            <div className="relative flex flex-col items-center gap-2">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/40 drop-shadow-sm">
                    Time Remaining
                </p>
                <div className="flex flex-col items-center">
                    <h1 className="text-center font-sans text-7xl font-extrabold tracking-tight text-white sm:text-9xl drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                            {countdown.percentLeft.toFixed(1)}
                        </span>
                        <span className="text-3xl sm:text-5xl text-white/40 font-light">%</span>
                    </h1>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/10 h-32 flex flex-col justify-between">
                    <div className="flex justify-between items-start w-full z-10">
                        <div>
                            <div className="text-2xl font-bold text-white tabular-nums">
                                {countdown.leftLabel.split(" ")[0]}
                            </div>
                            <div className="text-xs uppercase tracking-wider text-white/50">Days Left</div>
                        </div>
                        <div className="p-1 opacity-20 group-hover:opacity-40 transition-opacity">
                            <Clock className="w-10 h-10" />
                        </div>
                    </div>
                    <div className="text-sm text-white/70 font-mono mt-2 z-10">
                        {countdown.leftLabel.split(" ").slice(1)}
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary/20 to-secondary/20 p-4 backdrop-blur-md transition-all hover:-translate-y-1 h-32 flex flex-col justify-between">
                    <div className="flex justify-between items-start w-full z-10">
                        <div>
                            <div className="text-2xl font-bold text-white tabular-nums">
                                {countdown.percentElapsed.toFixed(0)}%
                            </div>
                            <div className="text-xs uppercase tracking-wider text-white/80">Completed</div>
                        </div>
                        <div className="p-1 opacity-30 group-hover:opacity-50 transition-opacity">
                            <CalendarDays className="w-10 h-10 text-white" />
                        </div>
                    </div>
                    <div className="w-full bg-black/20 h-1.5 rounded-full mt-2 overflow-hidden z-10">
                        <div
                            className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                            style={{ width: `${countdown.percentElapsed}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
