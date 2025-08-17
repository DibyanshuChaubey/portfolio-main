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

import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Automation Project",
    title: "Auto Job Applications Bot",
    description:
      "Automated LinkedIn job applications using Python and Selenium. Configurable for keywords, location, and experience level. Scaled from 10 to 100+ applications per day with error handling, rate limiting, and logging.",
    stack: [
      { name: "Python" },
      { name: "Selenium" },
      { name: "Automation" },
    ],
    image: "/assets/job-bot.png", // replace with actual screenshot
    live: "",
    github: "https://github.com/DibyanshuChaubey", // replace with repo link if available
  },
  {
    num: "02",
    category: "Full Stack Project",
    title: "Fully Fledged Blog Website",
    description:
      "A complete blog platform with authentication, CRUD, commenting, and pagination. Built with Django, deployed on Heroku, and optimized with PostgreSQL caching. Achieved 200+ monthly active users.",
    stack: [
      { name: "Django" },
      { name: "HTML/CSS/JS" },
      { name: "PostgreSQL" },
      { name: "Heroku" },
    ],
    image: "/assets/blog.png", // replace with actual screenshot
    live: "",
    github: "https://github.com/DibyanshuChaubey", // replace with repo link if available
  },
  {
    num: "03",
    category: "Data & ML Project",
    title: "Market Trends Analyzer",
    description:
      "Collected and analyzed 10k+ keyword data points using Google Trends API. Generated visual reports and trend forecasts using Pandas and Matplotlib. Automated weekly reporting with reusable dashboard templates.",
    stack: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Plotly" },
      { name: "Google Trends API" },
    ],
    image: "/assets/market-trends.png", // replace with actual screenshot
    live: "",
    github: "https://github.com/DibyanshuChaubey", // replace with repo link if available
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
                  <Link href={project.live}>
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
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github}>
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
                  </Link>
                )}
              </div>
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
                  <div className="h-[460px] relative group flex justify-center items-center bg-[#232329]">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-xl"
                      />
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
