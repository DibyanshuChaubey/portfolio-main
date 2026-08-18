"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFlask,
  FaGithub,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiPython,
  SiMysql,
  SiSqlite,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// ------------------- DATA -------------------
const about = {
  title: "About Me",
  desc: "Computer Science student with experience building web applications and REST APIs using Python, Flask, SQL, and React. Strong understanding of Data Structures, DBMS, and Operating Systems with 125+ LeetCode problems solved and multiple deployed projects.",
  info: [
    { fieldName: "Name", fieldValue: "Dibyanshu Chaubey" },
    { fieldName: "Email", fieldValue: "dibyanshuchaubey95@gmail.com" },
    { fieldName: "Location", fieldValue: "Kanpur, Uttar Pradesh, India" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
  ],
};


const experience = {
  title: "My Experience",
  desc: "Project-based hands-on experience building and deploying backend and full-stack applications.",
  items: [
    {
      company: "Major Project",
      position: "WeAssist Intelligent Hostel Management Platform",
      duration: "2026",
    },
    {
      company: "Major Project",
      position: "Smart Restaurant Management System",
      duration: "2025",
    },
    {
      company: "Minor Project",
      position: "WeCare - Cancer Community Support Platform",
      duration: "2025",
    },
    {
      company: "Minor Project",
      position: "MyNote - Personal Notebook Platform",
      duration: "2025",
    },
  ],
};

const education = {
  title: "My Education",
  desc: "Academic foundation in core computer science subjects with applied software development practice.",
  items: [
    {
      degree: "B.Tech in Computer Science",
      institute: "Kanpur Institute of Technology, Kanpur",
      duration: "Aug 2022 - May 2026",
      grade: "CGPA: 7.9 / 10",
    },
    {
      degree: "Relevant Coursework",
      institute: "Data Structures, DBMS, Operating Systems, OOP, Software Engineering",
      duration: "Core Subjects",
    },
  ],
};

const skills = {
  title: "My Skills",
  desc: "Technical skills aligned with my resume across languages, web development, databases, tools, and data analytics.",
  skilllist: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaFlask />, name: "Flask" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiSqlite />, name: "SQLite" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <FaDatabase />, name: "Power BI" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiPython />, name: "Python" },
  ],
};

const cpAndDsa = {
  title: "Competitive Programming & DSA",
  desc: "I actively solve coding problems to strengthen my Data Structures and Algorithms foundation.",
  achievements: [
    {
      platform: "LeetCode",
      achievement: "Solved 125+ problems focused on data structures and algorithms.",
      link: "https://leetcode.com/u/dibyanshu_chaubey/",
    },
  ],
};

const otherAchievements = {
  title: "Other Achievements",
  desc: "Resume highlights and measurable accomplishments.",
  achievements: [
    {
      activity: "Hands-on Development",
      description: "Completed 400+ hours of hands-on development building backend and full-stack projects.",
    },
    {
      activity: "Academic Excellence Award",
      description: "Recipient of Academic Excellence Award, Kanpur Institute of Technology (2023).",
    },
    {
      activity: "TCS iON NQT (IT) - 2026",
      description: "Overall Score: 71.7%, Hands-On Programming (Python): 86.8%.",
    },
    {
      activity: "Project Delivery",
      description: "Developed and deployed multiple software projects demonstrating practical programming experience.",
    },
  ],
};

const certifications = {
  title: "Certifications",
  desc: "Professional certification from my resume.",
  items: [
    {
      name: "Employability Enhancement Programme",
      issuer: "Centum Foundation (supported by Infosys Foundation)",
      year: "2025",
      link: "https://drive.google.com/file/d/1vwfF6DVUWypFmL9IiDJBbiF8YWhwjTuI/view",
    },
  ],
};

// ------------------- COMPONENT -------------------
const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: "easeIn" } }}
      className="relative -translate-y-3 min-h-[80vh] py-4 font-sans sm:-translate-y-4 sm:py-6 xl:-translate-y-6 xl:py-8"
    >
      <div className="container mx-auto">
        <div className="mb-10 flex max-w-4xl flex-col gap-4 xl:mb-12">
          <span className="inline-flex w-fit rounded-full border border-accent/25 bg-accent/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Profile Snapshot
          </span>
          <h1 className="font-orbitron text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl xl:text-5xl">
            Professional Profile, Technical Skills, and Verified Achievements.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/65 xl:text-lg">
            A structured overview of education, project execution, technical
            depth, competitive programming, and certifications.
          </p>
        </div>

        <Tabs defaultValue="experience" className="flex flex-col gap-6 xl:flex-row xl:gap-8">
          
          <TabsList className="grid w-full grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-black/10 p-2 sm:grid-cols-3 xl:flex xl:h-fit xl:max-w-[248px] xl:grid-cols-1 xl:flex-col">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="cpdsa">CP & DSA</TabsTrigger>
            <TabsTrigger value="other">Other Achievements</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.14)] backdrop-blur-md sm:p-7 xl:p-9">
            
            <TabsContent value="experience">
              <Section title={experience.title} desc={experience.desc}>
                <ScrollArea className="max-h-[400px]">
                    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {experience.items.map((item, i) => (
                      <Card key={i} duration={item.duration} title={item.position} subtitle={item.company} />
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            <TabsContent value="education">
              <Section title={education.title} desc={education.desc}>
                <ScrollArea className="max-h-[400px]">
                    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {education.items.map((item, i) => (
                      <Card key={i} duration={item.duration} title={item.degree} subtitle={item.institute} extra={item.grade} />
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            <TabsContent value="skills">
              <Section title={skills.title} desc={skills.desc}>
                <ScrollArea className="max-h-[500px] pr-2">
                  <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {skills.skilllist.map((skill, i) => (
                      <TooltipProvider key={i} delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="group flex min-h-[124px] w-full flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/[0.06]">
                            <div className="text-4xl sm:text-5xl text-white/90 group-hover:text-accent transition-colors duration-300">
                              {skill.icon}
                            </div>
                            <p className="text-sm text-white/80 group-hover:text-white text-center leading-tight">
                              {skill.name}
                            </p>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            <TabsContent value="cpdsa">
              <Section title={cpAndDsa.title} desc={cpAndDsa.desc}>
                <ScrollArea className="max-h-[460px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {cpAndDsa.achievements.map((item, i) => (
                        <li key={i} className="flex min-h-[160px] flex-col justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-6 py-5">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-orbitron text-xl text-accent underline underline-offset-4">
                          {item.platform}
                        </a>
                        <p className="text-white/60">{item.achievement}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            <TabsContent value="other">
              <Section title={otherAchievements.title} desc={otherAchievements.desc}>
                <ScrollArea className="max-h-[460px]">
                  <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {otherAchievements.achievements.map((item, i) => (
                      <Card key={i} title={item.activity} subtitle={item.description} />
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            <TabsContent value="certifications">
              <Section title={certifications.title} desc={certifications.desc}>
                <ScrollArea className="max-h-[460px]">
                  <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {certifications.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex min-h-[160px] flex-col justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-6 py-5"
                      >
                        <h3 className="font-orbitron text-lg leading-snug">{item.name}</h3>
                        <p className="text-white/60">{item.issuer}</p>
                        <p className="text-accent">{item.year}</p>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent underline"
                        >
                          Certificate Link
                        </a>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            <TabsContent value="about">
              <Section title={about.title} desc={about.desc}>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto xl:mx-0">
                  {about.info.map((item, i) => (
                    <li
                      key={i}
                      className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-4 transition-colors duration-300 hover:border-accent/40 hover:bg-accent/[0.04]"
                    >
                      <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                        {item.fieldName}
                      </p>

                      {item.fieldName === "Email" ? (
                        <a
                          href={`mailto:${item.fieldValue}`}
                          className="text-base sm:text-lg font-medium break-all hover:text-accent transition-colors"
                        >
                          {item.fieldValue}
                        </a>
                      ) : (
                        <p className="text-base sm:text-lg font-medium break-words">
                          {item.fieldValue}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </Section>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

// ------------------- REUSABLE SUBCOMPONENTS -------------------
const Section = ({ title, desc, children }) => (
  <div className="flex flex-col gap-6 text-center xl:text-left">
    <div className="border-b border-white/10 pb-5">
      <h3 className="font-orbitron text-2xl font-bold leading-tight text-white sm:text-3xl">{title}</h3>
      <p className="mx-auto mt-2 max-w-[600px] text-sm leading-6 text-white/60 xl:mx-0">{desc}</p>
    </div>
    {children}
  </div>
);

const Card = ({ duration, title, subtitle, extra }) => (
  <li className="flex min-h-[160px] flex-col justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/[0.04]">
    {duration && <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{duration}</span>}
    <h3 className="text-lg font-semibold leading-snug text-white">{title}</h3>
    {subtitle && <p className="text-sm leading-6 text-white/60">{subtitle}</p>}
    {extra && <p className="text-sm text-white/60">{extra}</p>}
  </li>
);

export default ResumePage;
