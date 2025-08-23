"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageSlideshowProps {
  images: readonly string[];
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
  alt,
  width = 500,
  height = 300,
  className = "",
  autoPlay = true,
  interval = 3000,
  alwaysShowControls = false,
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  return (
    <div className="relative group w-full h-full flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1} of ${images.length}`}
          width={width}
          height={height}
          className={className}
        />

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPrevious}
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white z-10 ${
            alwaysShowControls
              ? ""
              : "opacity-0 group-hover:opacity-100 transition-opacity"
          }`}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={goToNext}
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white z-10 ${
            alwaysShowControls
              ? ""
              : "opacity-0 group-hover:opacity-100 transition-opacity"
          }`}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Dots indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Image counter */}
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
