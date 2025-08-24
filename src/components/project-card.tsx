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
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { ImageSlideshow } from "@/components/image-slideshow";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  images?: readonly string[];
  video?: string;
  links?:
    | readonly {
        icon: React.ReactNode;
        type: string;
        href: string;
      }[]
    | undefined;
  className?: string;
  onScreenClick?: (images: readonly string[], title: string) => void;
}

export function ProjectCard({
  title,
  // href,
  description,
  dates,
  tags,
  link,
  image,
  images,
  video,
  links,
  className,
  onScreenClick,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <div className={cn("block cursor-pointer")}>
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {images && images.length > 0 && !video ? (
          <ImageSlideshow
            images={images}
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
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
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
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => {
              if (link.type === "Screen" && images && images.length > 0) {
                return (
                  <div
                    key={idx}
                    onClick={() => onScreenClick?.(images, title)}
                    className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px] cursor-pointer"
                  >
                    {link.icon}
                    {link.type}
                  </div>
                );
              }

              if (link.type === "Website") {
                return (
                  <Link href={link?.href} key={idx} target="_blank">
                    <Badge
                      key={idx}
                      className="flex gap-2 px-2 py-1 text-[10px]"
                    >
                      {link.icon}
                      {link.type}
                    </Badge>
                  </Link>
                );
              }

              // Handle other link types (like Source, etc.)
              return (
                <>
                  <Link href={link.href} key={idx} target="_blank">
                    <Badge
                      key={idx}
                      className="flex gap-2 px-2 py-1 text-[10px]"
                    >
                      {link.icon}
                      {link.type}
                    </Badge>
                  </Link>
                </>
              );
            })}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
