"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@radix-ui/react-tooltip";

import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Issue Management Platform",
    title: "WeAssist Intelligent Hostel Management Platform",
    description:
      "Web platform for students to report and track hostel maintenance issues.",
    highlights: [
      "Developed 28+ REST APIs for complaint submission, tracking, and resolution.",
      "Implemented JWT authentication with role-based access for students and administrators.",
      "Designed schemas for users, complaints, and issue status.",
      "Deployed using Gunicorn on cloud hosting.",
    ],
    stack: [
      { name: "Python" },
      { name: "Flask" },
      { name: "SQLAlchemy" },
      { name: "MySQL" },
      { name: "JWT" },
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
    live: "https://smart-restaurant-project.onrender.com",
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
    live: "https://vercel.com/dibyanshuchaubeys-projects/we-care",
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

  const primaryProjectUrl = project.live || project.github;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project details */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.title}
              </h2>
              <p className="text-accent text-lg">{project.category}</p>
              <p className="text-white/60">{project.description}</p>
              <ul className="list-disc pl-5 space-y-2 text-white/70">
                {project.highlights.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <ul className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent">
                    {stack.name}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live project for ${project.title}`}
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open GitHub repository for ${project.title}`}
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                )}
              </div>
              {primaryProjectUrl && (
                <a
                  href={primaryProjectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-primary xl:hidden"
                >
                  <BsArrowUpRight className="text-base" />
                  Open live project
                </a>
              )}
            </div>
          </div>

          {/* Project slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 pointer-events-none"></div>
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
                            className="object-cover rounded-xl"
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
                          className="object-cover rounded-xl"
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
