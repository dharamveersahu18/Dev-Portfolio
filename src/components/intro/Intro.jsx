
import { useEffect, useState } from "react";
import { Code2, Layers, ArrowUpRight } from "lucide-react";

function LoadingIntro({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((previous) => {
        if (previous >= 100) {
          clearInterval(interval);
          return 100;
        }

        return Math.min(previous + Math.ceil(Math.random() * 3), 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percent !== 100) return;

    const exitTimer = setTimeout(() => setFinished(true), 600);
    const completeTimer = setTimeout(() => onComplete?.(), 1200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [percent, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-between
        overflow-hidden bg-[#0b0d10] text-white
        transition-transform duration-700 ease-in-out
        ${finished ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 sm:px-10">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-lime-400"
          aria-label="Portfolio home"
        >
          DS
        </a>

        <span className="text-xs uppercase tracking-[0.25em] text-white/50">
          Portfolio · 2026
        </span>
      </header>

      {/* Scrolling text */}

{/* Developer Identity */}
<div className="border-y border-white/10 py-6 sm:py-8">
  <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-4 px-6 sm:justify-start sm:gap-x-10">

    <div className="flex items-center gap-3">
      <Code2
        size={22}
        strokeWidth={1.7}
        className="text-lime-400"
      />
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/80 sm:text-sm">
        Full Stack Developer
      </span>
    </div>

    <span className="hidden h-8 w-px bg-white/15 sm:block" />

    <div className="flex items-center gap-3">
      <Layers
        size={22}
        strokeWidth={1.7}
        className="text-lime-400"
      />
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/80 sm:text-sm">
        Software Engineer
      </span>
    </div>

    <ArrowUpRight
      size={20}
      strokeWidth={1.7}
      className="hidden text-white/40 sm:block"
    />

  </div>
</div>


      {/* Main loading area */}
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-6 py-12 sm:px-10">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">
          Welcome to my portfolio
        </p>

        <div className="flex items-end justify-between gap-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {percent === 100 ? "Welcome." : "Loading."}
          </h1>

          <span className="font-mono text-2xl text-lime-400 sm:text-4xl">
            {String(percent).padStart(2, "0")}%
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="mt-8 h-1 w-full overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-label="Portfolio loading"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
        >
          <div
            className="h-full rounded-full bg-lime-400 transition-[width] duration-100 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="mt-4 flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/40 sm:text-xs">
          <span>Building experiences</span>
          <span>Please wait</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-6 pb-6 text-[10px] uppercase tracking-[0.2em] text-white/40 sm:px-10 sm:text-xs">
        <span>Design · Develop · Create</span>
        <span>India</span>
      </footer>
    </div>
  );
}

export default LoadingIntro;
