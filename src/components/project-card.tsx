"use client";

import { Badge, badgeVariants } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { ImageSlideshow } from "@/components/image-slideshow";
import { useMotionPreference } from "@/components/motion-preference";
import { Modal } from "@/components/ui/modal";
import { useEffect, useId, useRef, useState } from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  images?: readonly string[];
  /** Per-screenshot alt text, in the same order as `images`. */
  imageAlts?: readonly string[];
  video?: string;
  /** Accessible name and text description for the silent video (1.2.1). */
  videoLabel?: string;
  videoDescription?: string;
  links?:
    | readonly {
        icon: React.ReactNode;
        type: string;
        href: string;
      }[]
    | undefined;
  label?: string;
  className?: string;
  /** Opens this project's case study; shows a "Read case study" button. */
  onCaseStudyClick?: (trigger: HTMLElement) => void;
  onScreenClick?: (
    images: readonly string[],
    title: string,
    trigger: HTMLElement,
    imageAlts?: readonly string[]
  ) => void;
}

const ACTION_CLASSES =
  "flex w-full items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold text-white shadow-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ProjectCard({
  title,
  // href,
  description,
  dates,
  tags,
  link,
  image,
  images,
  imageAlts,
  video,
  videoLabel,
  videoDescription,
  links,
  label,
  className,
  onCaseStudyClick,
  onScreenClick,
}: Props) {
  const { paused: motionPaused, resolved } = useMotionPreference();
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoDescriptionId = useId();
  const actionRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const websiteLink = links?.find((l) => l.type === "Website");
  const hasAction = Boolean(onCaseStudyClick || websiteLink);

  // The whole card acts like its main button (case study or website), so a
  // click anywhere opens it. Clicks on the slideshow's own controls are left
  // alone. Keyboard users reach the same action through the button itself.
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hasAction) return;
    const target = e.target as HTMLElement;
    if (target.closest("button, a")) return;
    if (window.getSelection()?.toString()) return;
    actionRef.current?.click();
  };

  // Playback follows the site-wide "Pause motion" switch (WCAG 2.2.2).
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !resolved) return;
    if (motionPaused) {
      el.pause();
    } else {
      el.play().catch(() => {});
    }
  }, [motionPaused, resolved, video]);

  return (
    <Card
      onClick={handleCardClick}
      className={cn(
        "group/card flex flex-col overflow-hidden border bg-white dark:bg-card hover:shadow-lg transition-all duration-300 ease-out h-full",
        hasAction && "cursor-pointer"
      )}
    >
      <div className={cn("block cursor-pointer")}>
        {video && (
          <video
            ref={videoRef}
            src={video}
            loop
            muted
            playsInline
            preload="auto"
            aria-label={videoLabel}
            aria-describedby={videoDescription ? videoDescriptionId : undefined}
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {video && videoDescription && (
          <p id={videoDescriptionId} hidden>
            {videoDescription}
          </p>
        )}
        {images && images.length > 0 && !video ? (
          <ImageSlideshow
            images={images}
            alts={imageAlts}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
            autoPlay={true}
            interval={4000}
          />
        ) : (
          image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-40 w-full overflow-hidden object-cover object-top"
            />
          )
        )}
      </div>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          {/* <time className="font-sans text-xs">{dates}</time> */}
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      {/* <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent> */}
      <CardFooter className="mt-auto px-2 pb-2">
        {onCaseStudyClick ? (
          <button
            ref={actionRef as React.RefObject<HTMLButtonElement>}
            type="button"
            onClick={(e) => onCaseStudyClick(e.currentTarget)}
            aria-label={`Read the ${title} case study`}
            className={cn(ACTION_CLASSES, "bg-[#4F46E5] hover:bg-[#4338CA] group-hover/card:bg-[#4338CA]")}
          >
            Read case study
            <ArrowRight
              aria-hidden="true"
              className="size-3.5 transition-transform duration-200 group-hover/card:translate-x-0.5"
            />
          </button>
        ) : websiteLink ? (
          <Link
            ref={actionRef as React.RefObject<HTMLAnchorElement>}
            href={websiteLink.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit the ${title} website (opens in a new tab)`}
            className={cn(ACTION_CLASSES, "bg-[#0F766E] hover:bg-[#115E59] group-hover/card:bg-[#115E59]")}
          >
            Visit {websiteLink.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 transition-transform duration-200 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5"
            />
          </Link>
        ) : (
          label && (
            <span className="self-center font-sans text-[10px] text-muted-foreground">
              {label}
            </span>
          )
        )}
      </CardFooter>
    </Card>
  );
}
