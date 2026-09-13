"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMotionPreference } from "@/components/motion-preference";

interface ImageSlideshowProps {
  images: readonly string[];
  /** Per-image alt text; falls back to "<alt> - Image n of N". */
  alts?: readonly string[];
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  autoPlay?: boolean;
  interval?: number;
  alwaysShowControls?: boolean;
}

export function ImageSlideshow({
  images,
  alts,
  alt,
  width = 500,
  height = 300,
  className = "",
  autoPlay = true,
  interval = 3000,
  alwaysShowControls = false,
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { paused: motionPaused, resolved } = useMotionPreference();
  const [focusWithin, setFocusWithin] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoverDismissed, setHoverDismissed] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  // Auto-play functionality. Stops while motion is paused site-wide and while
  // keyboard focus is inside the slideshow, so the arrows don't fight it.
  useEffect(() => {
    if (!autoPlay || images.length <= 1 || !resolved || motionPaused) return;
    if (focusWithin) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      // Autoplay is not announced; drop any stale position text.
      setAnnouncement("");
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length, resolved, motionPaused, focusWithin]);

  // Escape dismisses arrows revealed by hover (WCAG 1.4.13).
  useEffect(() => {
    if (!hovered) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setHoverDismissed(true);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [hovered]);

  // Position is announced only after the user navigates, never on autoplay.
  // Clear first so repeating the same text still changes the live region.
  const announce = (index: number) => {
    setAnnouncement("");
    requestAnimationFrame(() =>
      setAnnouncement(`Screenshot ${index + 1} of ${images.length}`)
    );
  };

  const goToNext = () => {
    const next = (currentIndex + 1) % images.length;
    setCurrentIndex(next);
    announce(next);
  };

  const goToPrevious = () => {
    const prev = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prev);
    announce(prev);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    announce(index);
  };

  const altFor = (index: number) =>
    alts?.[index] ?? `${alt} - Image ${index + 1} of ${images.length}`;

  if (!images || images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <Image
        src={images[0]}
        alt={alts?.[0] ?? alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  const arrowVisibility = alwaysShowControls
    ? ""
    : `opacity-0 focus-visible:opacity-100 transition-opacity ${
        hoverDismissed ? "" : "group-hover:opacity-100"
      }`;

  return (
    <div
      className="relative group w-full h-full flex items-center justify-center"
      role="group"
      aria-roledescription="carousel"
      aria-label={`${alt} screenshots`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setHoverDismissed(false);
      }}
      onFocus={(e) => {
        // Only keyboard focus pauses autoplay; a mouse click that leaves focus
        // on an arrow should not stop the slideshow.
        if ((e.target as HTMLElement).matches(":focus-visible")) {
          setFocusWithin(true);
        }
      }}
      onKeyDown={() => setFocusWithin(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setFocusWithin(false);
          setAnnouncement("");
        }
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={images[currentIndex]}
          alt={altFor(currentIndex)}
          width={width}
          height={height}
          className={className}
        />

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPrevious}
          aria-label={`Previous ${alt} screenshot`}
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white z-10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${arrowVisibility}`}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={goToNext}
          aria-label={`Next ${alt} screenshot`}
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white z-10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${arrowVisibility}`}
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Button>

        {/* Dots: pointer shortcut to a slide. Kept out of the Tab order and
            hidden from assistive tech; the arrows are the keyboard path. */}
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1"
        >
          {images.map((_, index) => (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              key={index}
              tabIndex={-1}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Image counter */}
        <div
          aria-hidden="true"
          className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded"
        >
          {currentIndex + 1} / {images.length}
        </div>

        <span className="sr-only" aria-live="polite" aria-atomic="true">
          {announcement}
        </span>
      </div>
    </div>
  );
}
