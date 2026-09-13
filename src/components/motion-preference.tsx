"use client";

import { cn } from "@/lib/utils";
import { MotionConfig } from "framer-motion";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "motion-paused";

interface MotionPreference {
  /** True when autoplaying media and looping animations should be paused. */
  paused: boolean;
  /** False until the stored/OS preference has been read on the client. */
  resolved: boolean;
  setPaused: (paused: boolean) => void;
}

const MotionPreferenceContext = createContext<MotionPreference>({
  paused: false,
  resolved: false,
  setPaused: () => {},
});

function readStored(): boolean | null {
  try {
    const value = sessionStorage.getItem(STORAGE_KEY);
    return value === null ? null : value === "1";
  } catch {
    return null;
  }
}

/**
 * Site-wide "Pause motion" state (WCAG 2.2.2). Defaults to paused when the OS
 * asks for reduced motion; an explicit choice is kept for the session and
 * mirrored to <html data-motion> so CSS animations can follow it.
 */
export function MotionPreferenceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [paused, setPausedState] = useState(false);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stored = readStored();
    setPausedState(stored ?? query.matches);
    setResolved(true);

    const onQueryChange = (event: MediaQueryListEvent) => {
      if (readStored() === null) setPausedState(event.matches);
    };
    query.addEventListener("change", onQueryChange);
    return () => query.removeEventListener("change", onQueryChange);
  }, []);

  useEffect(() => {
    if (!resolved) return;
    document.documentElement.dataset.motion = paused ? "paused" : "running";
  }, [paused, resolved]);

  const setPaused = useCallback((next: boolean) => {
    setPausedState(next);
    try {
      sessionStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch {}
  }, []);

  return (
    <MotionPreferenceContext.Provider value={{ paused, resolved, setPaused }}>
      {/* framer-motion skips transform/layout animation for reduced-motion
          users; CSS in globals.css covers what renders before hydration. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </MotionPreferenceContext.Provider>
  );
}

export function useMotionPreference() {
  return useContext(MotionPreferenceContext);
}

export function PauseMotionSwitch({ className }: { className?: string }) {
  const { paused, setPaused } = useMotionPreference();
  return (
    <button
      type="button"
      role="switch"
      aria-checked={paused}
      onClick={() => setPaused(!paused)}
      className={cn(
        "inline-flex min-h-6 items-center gap-2 rounded-md font-sans text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "relative inline-flex h-4 w-7 shrink-0 items-center rounded-full border transition-colors motion-reduce:transition-none",
          paused
            ? "border-primary bg-primary"
            : "border-muted-foreground bg-transparent"
        )}
      >
        <span
          className={cn(
            "block size-2.5 rounded-full transition-transform motion-reduce:transition-none",
            paused
              ? "translate-x-[14px] bg-primary-foreground"
              : "translate-x-[2px] bg-muted-foreground"
          )}
        />
      </span>
      Pause motion
    </button>
  );
}
