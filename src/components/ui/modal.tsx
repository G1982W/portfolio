"use client";

import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: readonly string[];
  title: string;
}

export function Modal({ isOpen, onClose, images, title }: ModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  // Reset to first image whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setDirection(0);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goNext, goPrev]);

  const hasMultiple = images.length > 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{ marginTop: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-background/70 backdrop-blur-xl"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col w-full max-w-5xl h-[85vh] max-h-[860px] overflow-hidden rounded-2xl border border-border/60 bg-background shadow-2xl shadow-black/20 ring-1 ring-foreground/5"
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border/50 bg-background/60 px-5 py-3.5 backdrop-blur">
              <div className="flex items-center gap-3 min-w-0">
                <h2 className="truncate text-sm font-semibold tracking-tight text-foreground">
                  {title}
                </h2>
                {hasMultiple && (
                  <span className="shrink-0 rounded-full border border-border/60 bg-muted/50 px-2 py-0.5 font-mono text-[11px] tabular-nums text-muted-foreground">
                    {currentIndex + 1} / {images.length}
                  </span>
                )}
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Image stage */}
            <div className="relative flex flex-1 min-h-0 items-center justify-center overflow-hidden bg-gradient-to-br from-muted/30 via-background to-muted/20 px-6 py-3 sm:px-10 sm:py-4">
              {/* Subtle radial highlight behind image */}
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(var(--foreground) / 0.04), transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* Prev button */}
              {hasMultiple && (
                <button
                  onClick={goPrev}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground shadow-sm backdrop-blur transition-all hover:scale-105 hover:border-border hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 sm:left-5"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              {/* Image with slide animation */}
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction === 0 ? 0 : direction * 24,
                    scale: 0.98,
                  }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    x: direction * -24,
                    scale: 0.98,
                  }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex h-full w-full items-center justify-center"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={images[currentIndex]}
                      alt={`${title} — image ${currentIndex + 1} of ${images.length}`}
                      fill
                      sizes="(max-width: 768px) 90vw, 80vw"
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Next button */}
              {hasMultiple && (
                <button
                  onClick={goNext}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground shadow-sm backdrop-blur transition-all hover:scale-105 hover:border-border hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 sm:right-5"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}