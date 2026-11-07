"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { CaseStudy, CaseStudyScreen } from "@/data/case-studies";
import { noOrphan } from "@/lib/utils";

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  /** Element to return focus to when the modal closes. */
  returnFocusTo?: HTMLElement | null;
}

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Groups consecutive phone screens so they render two-up. */
function groupScreens(screens: CaseStudyScreen[]) {
  const groups: CaseStudyScreen[][] = [];
  for (const screen of screens) {
    const last = groups[groups.length - 1];
    if (screen.mobile && last && last[0].mobile && last.length < 2) {
      last.push(screen);
    } else {
      groups.push([screen]);
    }
  }
  return groups;
}

export function CaseStudyModal({
  study,
  onClose,
  returnFocusTo,
}: CaseStudyModalProps) {
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const isOpen = study !== null;

  useEffect(() => setMounted(true), []);

  // Escape to close, focus containment, scroll lock.
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;
        const inside = dialogRef.current.contains(active);
        if (e.shiftKey && (active === first || !inside)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (active === last || !inside)) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Focus the close button, make the page behind inert, restore focus on close.
  useEffect(() => {
    if (!isOpen || !mounted) return;
    const returnTo =
      returnFocusTo ?? (document.activeElement as HTMLElement | null);
    const root = rootRef.current;
    const inerted: Element[] = [];
    Array.from(document.body.children).forEach((child) => {
      if (child === root || child.tagName === "SCRIPT") return;
      if (child.hasAttribute("inert")) return;
      child.setAttribute("inert", "");
      inerted.push(child);
    });
    const frame = requestAnimationFrame(() =>
      closeRef.current?.focus({ preventScroll: true })
    );
    return () => {
      cancelAnimationFrame(frame);
      inerted.forEach((el) => el.removeAttribute("inert"));
      if (returnTo && document.contains(returnTo)) {
        returnTo.focus({ preventScroll: true });
      }
    };
  }, [isOpen, mounted, returnFocusTo]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {study && (
        <div
          ref={rootRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 lg:p-6"
          style={{ marginTop: 0 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="motion-reveal absolute inset-0 bg-background/70 backdrop-blur-xl"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="motion-reveal relative z-10 flex h-full w-full max-w-[1400px] flex-col overflow-hidden bg-background shadow-2xl shadow-black/20 ring-1 ring-foreground/5 sm:h-[92vh] sm:rounded-2xl sm:border sm:border-border/60"
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border/50 px-5 py-3.5">
              <p className="truncate text-sm font-semibold tracking-tight text-foreground">
                {study.eyebrow}
              </p>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close case study"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Body: screens left, story right (stacked on small screens).
                On large screens each column scrolls on its own. */}
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:flex-row lg:overflow-hidden">
              <section
                aria-label="Screens"
                className="order-2 bg-muted/30 p-4 sm:p-6 lg:order-1 lg:w-[62%] lg:overflow-y-auto lg:p-8"
              >
                <div className="space-y-8">
                  {groupScreens(study.screens).map((group) => (
                    <div
                      key={group[0].src}
                      className={
                        group[0].mobile
                          ? "mx-auto grid max-w-xl grid-cols-2 gap-4 sm:gap-6"
                          : ""
                      }
                    >
                      {group.map((screen) => (
                        <figure key={screen.src} className="space-y-2">
                          <Image
                            src={screen.src}
                            alt={screen.alt}
                            width={screen.width}
                            height={screen.height}
                            sizes={
                              screen.mobile
                                ? "(min-width: 1024px) 18vw, 45vw"
                                : "(min-width: 1024px) 55vw, 100vw"
                            }
                            className="h-auto w-full rounded-lg border border-border/60 shadow-lg shadow-black/5"
                          />
                          <figcaption className="text-xs text-muted-foreground">
                            {noOrphan(screen.caption)}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              <article className="order-1 p-5 sm:p-8 lg:order-2 lg:w-[38%] lg:overflow-y-auto lg:border-l lg:border-border/50">
                <h2
                  id={titleId}
                  className="text-2xl font-bold tracking-tight sm:text-3xl"
                >
                  {noOrphan(study.headline)}
                </h2>
                <p className="mt-4 text-base text-muted-foreground">
                  {noOrphan(study.summary)}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-border/50 py-4">
                  {study.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-xs text-muted-foreground">
                        {fact.label}
                      </dt>
                      <dd className="text-sm font-medium">{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 space-y-6">
                  {study.sections.map((section) => (
                    <section key={section.heading}>
                      <h3 className="text-base font-semibold">
                        {section.heading}
                      </h3>
                      {section.body && (
                        <p className="mt-2 text-sm text-muted-foreground">
                          {noOrphan(section.body)}
                        </p>
                      )}
                      {section.points && (
                        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground marker:text-muted-foreground/50">
                          {section.points.map((point) => {
                            const [lead, ...rest] = point.split(". ");
                            return (
                              <li key={point}>
                                <span className="font-medium text-foreground">
                                  {lead}.
                                </span>{" "}
                                {noOrphan(rest.join(". "))}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>
              </article>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
