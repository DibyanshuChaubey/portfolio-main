"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFlask,
} from "react-icons/fa";
import Link from "next/link";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiCplusplus,
  SiPython,
  SiExpress,
  SiDjango,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPlotly,
} from "react-icons/si";

const about = {
  title: "About me",
  desc: "I am a results-driven Software/Web Developer with expertise in Python, Django, Flask, and full-stack web development. I enjoy designing scalable applications, automating workflows, and creating data-driven tools. I am passionate about solving problems, collaborating in teams, and building products that provide real value.",
  info: [
    { fieldName: "Name", fieldValue: "Dibyanshu Chaubey" },
    { fieldName: "Email", fieldValue: "dibyanshuchaubey95@gmail.com" },
    { fieldName: "Phone", fieldValue: "+91 84333 53722" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  desc: "I have built and deployed multiple projects involving automation, data analysis, and full-stack web development.",
  items: [
    {
      company: "Personal Project",
      position: "Auto Job Applications Bot",
      duration: "2025",
    },
    {
      company: "Personal Project",
      position: "Fully Fledged Blog Website",
      duration: "2024",
    },
    {
      company: "Personal Project",
      position: "Market Trends Analyzer (Google Trends)",
      duration: "2024",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  desc: "I'm currently pursuing my B.Tech in Computer Science Engineering with specialization in Python applications, automation, and full-stack development.",
  items: [
    {
      degree: "B.Tech in Computer Science",
      institute: "Kanpur Institute of Technology, Kanpur",
      duration: "2022 - 2026",
      grade: "CGPA 7.9",
    },
  ],
};

const skills = {
  title: "My Skills",
  desc: "Proficient in frontend and backend technologies, with strong experience in automation, data analysis, and web development.",
  skilllist: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "Typescript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <FaFlask />, name: "Flask" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiScikitlearn />, name: "Scikit-learn" },
    { icon: <SiPlotly />, name: "Plotly" },
  ],
};

const cpAndDsa = {
  title: "Competitive Programming & DSA",
  desc: "I actively solve coding problems to strengthen my Data Structures and Algorithms foundation.",
  achievements: [
    {
      platform: "LeetCode",
      achievement: "Solved 100+ Problems",
      link: "https://leetcode.com/u/dibyanshuchaubey/",
    },
  ],
};

const otherAchievements = {
  title: "Other Achievements",
  desc: "Recognition and strengths that define my approach as a developer.",
  achievements: [
    {
      activity: "Strong DSA Foundation",
      description: "Solved 100+ LeetCode problems, showcasing algorithmic and problem-solving skills.",
    },
    {
      activity: "Team Collaboration",
      description: "Worked on multiple cross-functional projects from concept to deployment.",
    },
    {
      activity: "Quick Learner",
      description: "Adapted to new tools and technologies quickly while delivering results.",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="cpdsa">CP & DSA</TabsTrigger>
            <TabsTrigger value="other">Other Achievements</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.desc}</p>
                <ScrollArea className="h-[400px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.desc}</p>
                <ScrollArea className="h-[400px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[194px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.grade}</p>
                        </div>
                        <p className="text-white/60">{item.institute}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.desc}</p>
                </div>
                <ScrollArea className="h-[460px] overflow-auto">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skilllist.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* CP & DSA */}
            <TabsContent value="cpdsa" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{cpAndDsa.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{cpAndDsa.desc}</p>
                <ScrollArea className="h-[460px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {cpAndDsa.achievements.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[194px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent text-2xl">{item.platform}</span>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.achievement}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Other Achievements */}
            <TabsContent value="other" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{otherAchievements.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{otherAchievements.desc}</p>
                <ScrollArea className="h-[460px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {otherAchievements.achievements.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[206px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-xl">{item.activity}</span>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About Me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.desc}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
