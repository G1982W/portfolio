"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  defaultExpanded?: boolean;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  defaultExpanded = false,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);
  const descriptionId = React.useId();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (description) {
      e.preventDefault();
      // A mouse drag that selects text inside this card ends in a click;
      // don't toggle on it. Keyboard clicks (detail 0) and clicks on the
      // heading button always toggle.
      const selection = window.getSelection();
      const onButton = (e.target as Element).closest("button") !== null;
      if (
        e.detail !== 0 &&
        !onButton &&
        selection?.toString() &&
        e.currentTarget.contains(selection.anchorNode)
      ) {
        return;
      }
      setIsExpanded(!isExpanded);
    }
  };

  // Cards without a URL expose a real disclosure button in the heading; the
  // whole card stays clickable because the button's click bubbles up.
  const disclosure = Boolean(description) && !href;

  const card = (
    <Card className="flex">
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain"
          />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {disclosure ? (
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={descriptionId}
                  className="text-left focus-visible:outline-none"
                >
                  {title}
                </button>
              ) : (
                title
              )}
              {badges && (
                <span className="inline-flex gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="ml-[23px] align-middle text-xs rounded-full border border-neutral-500/60 px-2 py-0.5 font-medium"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              <ChevronRightIcon
                aria-hidden="true"
                className={cn(
                  "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                  isExpanded ? "rotate-90" : "rotate-0"
                )}
              />
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
        </CardHeader>
        {description && (
          <motion.div
            id={descriptionId}
            aria-hidden={!isExpanded}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,

              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2"
          >
            <Markdown className="prose max-w-full text-pretty font-sans text-xs sm:text-sm text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </motion.div>
        )}
      </div>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block cursor-pointer" onClick={handleClick}>
        {card}
      </Link>
    );
  }

  // No URL: render no link element. The heading button carries keyboard
  // access and state; the card shows the focus ring while it is focused.
  return (
    <div
      className="block cursor-pointer rounded-lg has-[button:focus-visible]:outline has-[button:focus-visible]:outline-2 has-[button:focus-visible]:outline-offset-2 has-[button:focus-visible]:outline-ring"
      onClick={handleClick}
    >
      {card}
    </div>
  );
};
