"use client";

import { CountdownTimer } from "@/components/CountdownTimer";
import { ProgressBar } from "@/components/ProgressBar";
import { useEffect, useState } from "react";

export default function Page() {
  // We need to re-calculate percent here or lift state up if we want perfect sync,
  // but for now let's just use a simple internal interval for the progress bar to keep it decoupled
  // or better, let's extract the calc logic to a hook later if needed.
  // Ideally, CountdownTimer handles the display, but ProgressBar needs the %.
  // Let's do a quick calculation here to pass to ProgressBar.

  // Actually, to avoid prop drilling complex objects, let's just duplicate the lightweight calculation 
  // or make a shared hook. For simplicity in this step, I'll calculate percent here.

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const year = now.getFullYear();
      const start = new Date(year, 0, 1);
      const end = new Date(year, 11, 31, 23, 59, 59, 999);
      const totalMs = end.getTime() - start.getTime();
      const elapsed = Math.min(Math.max(now.getTime() - start.getTime(), 0), totalMs);
      setPercent((elapsed / totalMs) * 100);
    };

    update();
    const id = setInterval(update, 100);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="grid-pattern" />
      </div>

      <div className="z-10 w-full max-w-5xl flex flex-col items-center gap-16">
        <CountdownTimer />
        <ProgressBar percent={percent} />
      </div>

      {/* Footer / Quote */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-10 animate-fade-in-up [animation-delay:500ms]">
        <p className="text-white/30 text-xs tracking-[0.3em] font-light uppercase hover:text-white/50 transition-colors cursor-default">
          Every second counts
        </p>
      </div>
    </main>
  );
}

