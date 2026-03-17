"use client";

import Image from "next/image";
import { useState } from "react";

const contentGrowth = {
  title: "Content Strategy & Audience Growth",
  role: "Content Strategist & Audience Growth Enthusiast",
  roleDesc:
    "Focused on building engaging digital content using analytics, storytelling, and platform trends.",
  overview:
    "I work on content strategy, short-form video editing, and audience engagement optimization. By analyzing platform trends and viewer behavior, I focus on creating content that increases reach, retention, and community growth.",
  achievements: [
    "Grew a short-form entertainment channel to 195K+ subscribers.",
    "Generated millions of views through Instagram Reels.",
    "Identified viral trends and optimized content for engagement.",
  ],
  caseStudy: {
    project: "DB Status Channel Growth",
    goal: "Build an audience through short-form entertainment content.",
    strategy: [
      "Trend research",
      "High-retention editing style",
      "Strong hooks in first 3 seconds",
    ],
    execution: [
      "Edited videos using CapCut, Alight Motion, and Adobe Premiere Pro",
      "Posted optimized Reels and Shorts",
    ],
    result: ["195K+ subscribers", "Viral posts reaching millions of views"],
  },
  creativeSkills: [
    "Short-form video editing",
    "Audience engagement optimization",
    "Content strategy planning",
    "Trend analysis",
    "Storytelling and hook design",
  ],
  tools: ["CapCut", "Alight Motion", "Adobe Premiere Pro (Sometimes)"],
  toolVisuals: [
    {
      name: "CapCut",
      logo: "/assets/tools/capcut.svg",
      detail: "Primary short-form editing workflow for fast and engaging cuts.",
    },
    {
      name: "Alight Motion",
      logo: "/assets/tools/alight-motion.svg",
      detail: "Motion effects and transitions for high-retention visual rhythm.",
    },
    {
      name: "Adobe Premiere Pro",
      logo: "/assets/tools/premiere-pro.svg",
      detail: "Used selectively for advanced timeline control and refinement.",
    },
  ],
  proof: {
    instagramUrl: "https://www.instagram.com/dbstatus_official/",
    instagramLabel: "Instagram Work Proof",
    dashboardImages: [
      {
        src: "/assets/channel_dashboards.jpg",
        previewLabel: "Top-focused preview",
        objectPosition: "50% 10%",
      },
      {
        src: "/assets/channel_dashboards2.jpg",
        previewLabel: "Middle preview",
        objectPosition: "50% 12%",
      },
    ],
    dashboardTitle: "Channel Dashboard Snapshot",
    dashboardNote:
      "Live growth snapshot highlighting 195K+ subscribers, post performance, and retention outcomes.",
    appreciationLetterUrl: "/assets/LETTER%20OF%20APPRECIATION.pdf",
    appreciationTitle: "Official Letter of Appreciation",
    appreciationNote:
      "Formal recognition that validates consistency, impact, and contribution quality in content growth delivery.",
  },
  collaborations: {
    title: "Client Collaboration & Campaign Proof",
    partner: "Abhilipsa Panda",
    partnerChannel: "https://www.youtube.com/@rockstarabhilipsapanda",
    role: "Content promotion and creative execution support",
    projects: [
      {
        name: "Har Har Shambhu Song",
        link: "https://youtu.be/aRoMeNr1mMQ",
      },
      {
        name: "Bholenath Ji Song",
        link: "https://youtu.be/iHdYhdDg1Co",
      },
      {
        name: "Sawan Ayo Song",
        link: "https://youtu.be/k1h3vPvOvrg",
      },
    ],
    note: "And many more campaign assets across devotional and music-focused promotions.",
  },
  gallery: [
    {
      title: "Instagram Reels",
      summary: "Short-form edits optimized for retention and replay value.",
    },
    {
      title: "YouTube Shorts",
      summary:
        "Entertainment-focused Shorts with fast pacing and strong opening hooks.",
    },
    {
      title: "Thumbnail Designs",
      summary:
        "High-contrast visual concepts built to improve click-through rate.",
    },
    {
      title: "Viral Clip Edits",
      summary: "Trend-aligned clips edited for shareability and engagement.",
    },
  ],
};

export default function ContentGrowthPage() {
  const [activeDashboardIndex, setActiveDashboardIndex] = useState(0);
  const activeDashboard = contentGrowth.proof.dashboardImages[activeDashboardIndex];

  const goToNextDashboard = () => {
    setActiveDashboardIndex((prev) =>
      prev === contentGrowth.proof.dashboardImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrevDashboard = () => {
    setActiveDashboardIndex((prev) =>
      prev === 0 ? contentGrowth.proof.dashboardImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-[80vh] py-8 xl:py-12">
      <div className="container mx-auto">
        <div className="mb-10 xl:mb-14 flex max-w-4xl flex-col gap-4">
          <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/75">
            Content Growth
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white xl:text-6xl">
            {contentGrowth.title}
          </h1>
          <p className="max-w-3xl text-white/65 xl:text-lg">{contentGrowth.overview}</p>

          <div className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-4 py-2">
            <span className="text-sm font-medium text-accent">Audience Milestone:</span>
            <span className="text-sm font-semibold text-white">195K+ Subscribers</span>
          </div>
        </div>

        <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md xl:p-8">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-5">
            <p className="text-sm uppercase tracking-[0.2em] text-accent/90">Positioning</p>
            <h2 className="mt-2 text-2xl font-semibold">{contentGrowth.role}</h2>
            <p className="mt-2 text-white/70">{contentGrowth.roleDesc}</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">Key Achievements</h2>
            <ul className="grid grid-cols-1 gap-3 lg:grid-cols-3">
              {contentGrowth.achievements.map((item, i) => (
                <li
                  key={i}
                  className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 text-white/75"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-5">
            <h2 className="text-xl font-semibold">Content Growth Case Study</h2>
            <p className="mt-2 text-white/80">
              <span className="text-accent">Project:</span> {contentGrowth.caseStudy.project}
            </p>
            <p className="mt-1 text-white/70">
              <span className="text-accent">Goal:</span> {contentGrowth.caseStudy.goal}
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div>
                <p className="mb-2 text-sm uppercase tracking-wider text-accent">Strategy</p>
                <ul className="list-disc space-y-1 pl-5 text-white/70">
                  {contentGrowth.caseStudy.strategy.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm uppercase tracking-wider text-accent">Execution</p>
                <ul className="list-disc space-y-1 pl-5 text-white/70">
                  {contentGrowth.caseStudy.execution.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm uppercase tracking-wider text-accent">Result</p>
                <ul className="list-disc space-y-1 pl-5 text-white/70">
                  {contentGrowth.caseStudy.result.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-5">
              <h2 className="text-xl font-semibold">Content & Creative Skills</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-white/70">
                {contentGrowth.creativeSkills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-5">
              <h2 className="text-xl font-semibold">Creative Tools</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {contentGrowth.tools.map((tool, i) => (
                  <li
                    key={i}
                    className="rounded-full border border-white/15 px-3 py-1 text-sm text-accent"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 xl:p-6">
            <h2 className="text-xl font-semibold">Creative Toolkit Showcase</h2>
            <p className="mt-2 text-white/65">
              Professional editing stack used across real reels and audience-growth-focused content pipelines.
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
              {contentGrowth.toolVisuals.map((tool, i) => (
                <li
                  key={i}
                  className="rounded-[20px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-black/20">
                      <Image
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">{tool.name}</p>
                      <p className="mt-1 text-sm text-white/65">{tool.detail}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 xl:p-6">
            <h2 className="text-xl font-semibold">Work Proof</h2>
            <p className="mt-2 text-white/65">
              Verified proof of content growth execution through channel performance data and platform content output.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[0.95fr_1.45fr]">
              <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-accent/90">Primary Proof Link</p>
                <a
                  href={contentGrowth.proof.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-primary"
                >
                  {contentGrowth.proof.instagramLabel}
                </a>
                <p className="mt-3 text-sm text-white/60">
                  Use this to review short-form reels, hook quality, and engagement-focused edit style.
                </p>

                <div className="mt-5 rounded-2xl border border-accent/35 bg-accent/8 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-accent">Official Recognition</p>
                  <p className="mt-2 text-base font-semibold text-white">{contentGrowth.proof.appreciationTitle}</p>
                  <p className="mt-2 text-sm text-white/65">{contentGrowth.proof.appreciationNote}</p>
                  <a
                    href={contentGrowth.proof.appreciationLetterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center rounded-full border border-accent/45 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-primary"
                  >
                    View Letter of Appreciation
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03]">
                <a
                  href={activeDashboard.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-[220px] w-full xl:h-[280px]"
                  aria-label="Open full channel dashboard snapshot"
                >
                  <Image
                    src={activeDashboard.src}
                    alt={contentGrowth.proof.dashboardTitle}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{ objectPosition: activeDashboard.objectPosition }}
                  />
                  <div className="absolute inset-x-3 top-3 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs text-white/90 backdrop-blur-sm">
                    {activeDashboard.previewLabel} • Click to open full snap
                  </div>
                </a>
                <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goToPrevDashboard}
                      className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/90 transition-colors hover:border-accent/50 hover:text-accent"
                      aria-label="Show previous dashboard image"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={goToNextDashboard}
                      className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/90 transition-colors hover:border-accent/50 hover:text-accent"
                      aria-label="Show next dashboard image"
                    >
                      Next
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    {contentGrowth.proof.dashboardImages.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveDashboardIndex(index)}
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          index === activeDashboardIndex ? "bg-accent" : "bg-white/30"
                        }`}
                        aria-label={`Show dashboard image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/10 px-4 py-3">
                  <p className="text-sm font-medium text-white">{contentGrowth.proof.dashboardTitle}</p>
                  <p className="mt-1 text-sm text-white/60">{contentGrowth.proof.dashboardNote}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 xl:p-6">
            <h2 className="text-xl font-semibold">{contentGrowth.collaborations.title}</h2>
            <p className="mt-2 text-white/65">
              Real collaboration evidence with publicly verifiable campaign links and channel-level association.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.15fr]">
              <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-accent/90">Collaborated With</p>
                <p className="mt-2 text-xl font-semibold text-white">{contentGrowth.collaborations.partner}</p>
                <p className="mt-2 text-sm text-white/65">{contentGrowth.collaborations.role}</p>
                <a
                  href={contentGrowth.collaborations.partnerChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-primary"
                >
                  View YouTube Channel
                </a>
              </div>

              <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-accent/90">Worked Project Links</p>
                <ul className="mt-3 space-y-2">
                  {contentGrowth.collaborations.projects.map((project, i) => (
                    <li key={i}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/85 transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        <span>{project.name}</span>
                        <span className="text-xs text-white/50">Open</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-white/60">{contentGrowth.collaborations.note}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">Portfolio Gallery</h2>
            <ul className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              {contentGrowth.gallery.map((item, i) => (
                <li
                  key={i}
                  className="rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <p className="text-base font-medium text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-white/65">{item.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
