"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Full-Stack Hostel Operations Platform",
    title: "WeAssist Intelligent Hostel Management Platform",
    description:
      "Role-based platform for hostel issue reporting and event management, built to improve transparency.",
    highlights: [
      "React + TypeScript frontend with Flask API backend (JWT auth, SQLAlchemy, migrations).",
      "Issue workflow with strict state transitions and reporter-only final closure.",
      "User verification flow, admin notes, and status logs for traceability.",
      "Event CRUD with registration/slot tracking and AI priority suggestion with fallback"
    ],
    stack: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Flask" },
      { name: "SQLAlchemy" },
      { name: "SQLite" },
      { name: "PostgreSQL" },
      { name: "JWT" },
      { name: "Joblib" },
    ],
    image: "/assets/Screenshot 2026-03-11 231630.png",
    live: "https://weassist-seven.vercel.app",
    github: "",
  },
  {
    num: "02",
    category: "Restaurant Management System",
    title: "Smart Restaurant Management System",
    description:
      "Full-stack restaurant system for digital ordering and reservations.",
    highlights: [
      "Designed MySQL schemas for orders, reservations, and menu data.",
      "Built REST APIs to manage orders, menu updates, and bookings.",
      "Implemented a natural language interface to convert user queries into SQL searches.",
      "Created dashboards with Streamlit and Power BI to visualize sales trends.",
    ],
    stack: [
      { name: "Python" },
      { name: "Flask" },
      { name: "MySQL" },
      { name: "React" },
    ],
    image: "/assets/Screenshot 2026-03-11 231131.png",
    live: "https://smart-resturant-project.onrender.com/",
    github: "",
  },
  {
    num: "03",
    category: "Cancer Community Support Platform",
    title: "WeCare - Cancer Community Support Platform",
    description:
      "Full-stack community platform for cancer patients, survivors, and caregivers to connect and support each other.",
    highlights: [
      "Built a responsive React frontend using HTML, CSS, and JavaScript.",
      "Implemented Python backend logic for user interactions and community content.",
      "Designed core features including user profiles, discussion posts, and support conversations.",
      "Deployed on Vercel with cloud hosting and continuous delivery.",
    ],
    stack: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    image: "/assets/Screenshot 2026-03-16 195049.png",
    live: "https://we-care-pink-two.vercel.app/",
    github: "",
  },
  {
    num: "04",
    category: "Personal Productivity App",
    title: "MyNote - Personal Notebook Platform",
    description:
      "Web-based note-taking app for creating, editing, and managing personal notes with a clean interface.",
    highlights: [
      "Developed a dynamic and responsive React frontend for note management.",
      "Implemented CRUD operations to create, update, and delete notes.",
      "Integrated Python backend services for processing and storage workflows.",
      "Deployed on Vercel for scalable cloud hosting.",
    ],
    stack: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    image: "/assets/Screenshot 2026-03-16 195016.png",
    live: "https://mynoteapp-nine.vercel.app/",
    github: "",
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] py-8 xl:py-12"
    >
      <div className="container mx-auto">
        <div className="mb-10 xl:mb-14 flex max-w-3xl flex-col gap-4">
          <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/75">
            Selected Work
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white xl:text-6xl">
            Production-ready projects built for real users.
          </h1>
          <p className="max-w-2xl text-white/65 xl:text-lg">
            A curated portfolio of full-stack products across operations,
            community, and productivity—designed around clarity, reliability,
            and measurable outcomes.
          </p>
        </div>

        <div className="xl:hidden space-y-6">
          {projects.map((mobileProject) => (
            <article
              key={mobileProject.num}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur-md"
            >
              <div className="relative h-[220px] w-full">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
                <Image
                  src={mobileProject.image}
                  alt={mobileProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 p-5 xl:p-6">
                <p className="text-4xl font-extrabold leading-none text-transparent text-outline">
                  {mobileProject.num}
                </p>
                <h2 className="text-2xl font-bold leading-tight text-white">
                  {mobileProject.title}
                </h2>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent/90">
                  {mobileProject.category}
                </p>
                <p className="text-white/70">{mobileProject.description}</p>

                <ul className="list-disc pl-5 space-y-1 text-white/70 text-sm">
                  {mobileProject.highlights.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2">
                  {mobileProject.stack.map((stack, index) => (
                    <li
                      key={index}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-accent"
                    >
                      {stack.name}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {mobileProject.live && (
                    <a
                      href={mobileProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-primary"
                    >
                      <BsArrowUpRight className="text-base" />
                      Live Project
                    </a>
                  )}
                  {mobileProject.github && (
                    <a
                      href={mobileProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:border-accent hover:text-accent"
                    >
                      <BsGithub className="text-base" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden xl:flex xl:flex-row xl:gap-8">
          <div className="order-2 flex w-full flex-col xl:order-none xl:w-[48%]">
            <div className="flex h-full flex-col gap-7 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.title}
              </h2>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent/90">
                {project.category}
              </p>
              <p className="text-white/60">{project.description}</p>
              <ul className="list-disc pl-5 space-y-2 text-white/70">
                {project.highlights.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-3">
                {project.stack.map((stack, index) => (
                  <li
                    key={index}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-accent"
                  >
                    {stack.name}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex flex-wrap items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live project for ${project.title}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    <BsArrowUpRight className="text-lg" />
                    Live Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open GitHub repository for ${project.title}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    <BsGithub className="text-lg" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[52%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative flex h-[520px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
                    <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/65 via-transparent to-transparent"></div>
                    <div className="relative w-full h-full">
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live project for ${project.title}`}
                          className="block h-full w-full"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="rounded-[32px] object-cover"
                          />
                          <div className="absolute inset-x-4 bottom-4 z-20 rounded-full bg-black/70 px-4 py-3 text-center text-sm font-medium text-white backdrop-blur-sm xl:hidden">
                            Tap to open live project
                          </div>
                        </a>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="rounded-[32px] object-cover"
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderButtons
                containerStyles={
                  "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                }
                btnStyles={
                  "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                }
                iconStyles={""}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
