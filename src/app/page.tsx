"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ModeToggle } from "@/components/mode-toggle";
import {
  MotionPreferenceProvider,
  PauseMotionSwitch,
} from "@/components/motion-preference";
import { CaseStudyModal } from "@/components/case-study-modal";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { SkipLink } from "@/components/skip-link";
import { Modal } from "@/components/ui/modal";
import { CASE_STUDIES, type CaseStudy } from "@/data/case-studies";
import { DATA } from "@/data/resume";
import { noOrphan } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;
const FOUNDER_TITLES = ["AskBlake", "blakebill", "BlakeUI"];
const CLIENT_TITLES = ["Costco", "Intermountain Health", "Smyl Fitness", "Carbon HRM"];
export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Only one work entry is open at a time; the most recent starts open.
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [caseStudyTrigger, setCaseStudyTrigger] = useState<HTMLElement | null>(null);
  const [openWork, setOpenWork] = useState<number | null>(0);
  const [modalImages, setModalImages] = useState<readonly string[]>([]);
  const [modalTitle, setModalTitle] = useState("");
  const [modalTrigger, setModalTrigger] = useState<HTMLElement | null>(null);
  const [modalAlts, setModalAlts] = useState<readonly string[] | undefined>();

  const handleScreenClick = (
    images: readonly string[],
    title: string,
    trigger: HTMLElement,
    imageAlts?: readonly string[]
  ) => {
    setModalImages(images);
    setModalAlts(imageAlts);
    setModalTitle(title);
    setModalTrigger(trigger);
    setIsModalOpen(true);
  };

  return (
    <MotionPreferenceProvider>
    <SkipLink />
    <main id="main" className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="space-y-10">
            <div className="gap-2 flex items-start justify-between">
              <BlurFadeText
                as="h1"
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <ModeToggle />
              </BlurFade>
            </div>
            <BlurFadeText
              className="w-full max-w-none md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={noOrphan(DATA.description)}
            />
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full font-sans text-sm text-muted-foreground dark:prose-invert">
            {noOrphan(DATA.summary)}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <p className="font-sans text-sm text-muted-foreground">
              {noOrphan(DATA.workNote)}
            </p>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                expanded={openWork === id}
                onExpandedChange={(open) => setOpenWork(open ? id : null)}
              />
            </BlurFade>
          ))}
          <BlurFade delay={BLUR_FADE_DELAY * 6 + DATA.work.length * 0.05}>
            <p className="font-sans text-sm text-muted-foreground">
              {noOrphan(DATA.workEarlier)}
            </p>
          </BlurFade>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-y-2">
            {DATA.skills.map((group, id) => (
              <BlurFade
                key={group.label}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <p className="font-sans text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {group.label}:
                  </span>{" "}
                  {noOrphan(group.items.join(", "))}
                </p>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period=""
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Selected work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enterprise and health-tech product design, from order management to clinical scheduling.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {CLIENT_TITLES.map((t) => DATA.projects.find((p) => p.title === t)!).map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  // href={project.href || undefined}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  images={project.images}
                  imageAlts={"imageAlts" in project ? project.imageAlts : undefined}
                  video={project.video}
                  videoLabel={"videoLabel" in project ? project.videoLabel : undefined}
                  videoDescription={
                    "videoDescription" in project
                      ? project.videoDescription
                      : undefined
                  }
                  links={project.links || undefined}
                  label={
                    CASE_STUDIES[project.title]
                      ? undefined
                      : "label" in project
                        ? project.label
                        : undefined
                  }
                  onCaseStudyClick={
                    CASE_STUDIES[project.title]
                      ? (trigger) => {
                          setCaseStudyTrigger(trigger);
                          setCaseStudy(CASE_STUDIES[project.title]);
                        }
                      : undefined
                  }
                  onScreenClick={handleScreenClick}
                />
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="mx-auto max-w-[800px] space-y-2 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Founder Projects
              </h2>
              <p className="text-muted-foreground text-sm">
                Designed, built, and maintained independently. All three are
                live.
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {FOUNDER_TITLES.map((t) => DATA.projects.find((p) => p.title === t)!).map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  // href={project.href || undefined}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  images={project.images}
                  imageAlts={"imageAlts" in project ? project.imageAlts : undefined}
                  video={project.video}
                  videoLabel={"videoLabel" in project ? project.videoLabel : undefined}
                  videoDescription={
                    "videoDescription" in project
                      ? project.videoDescription
                      : undefined
                  }
                  links={project.links || undefined}
                  label={"label" in project ? project.label : undefined}
                  onScreenClick={handleScreenClick}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don&apos;t hesitate to reach out to me{" "}
                <Link
                  href={"mailto:mail@gregwalker.cc"}
                  className="text-blue-600 underline dark:text-blue-400"
                >
                  here
                </Link>
                , and I will get back to you as soon as possible.
              </p>
              {/* Stops autoplaying media and looping animations (WCAG 2.2.2). */}
              <div className="pt-2">
                <PauseMotionSwitch />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Global Modal for screen type */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={modalImages}
        alts={modalAlts}
        title={modalTitle}
        returnFocusTo={modalTrigger}
      />
      <CaseStudyModal
        study={caseStudy}
        onClose={() => setCaseStudy(null)}
        returnFocusTo={caseStudyTrigger}
      />
    </main>
    </MotionPreferenceProvider>
  );
}
