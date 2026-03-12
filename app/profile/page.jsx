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
  title: "About me",
  desc: "Computer Science student with experience building web applications and REST APIs using Python, Flask, SQL, and React. Strong understanding of Data Structures, DBMS, and Operating Systems with 125+ LeetCode problems solved and multiple deployed projects.",
  info: [
    { fieldName: "Name", fieldValue: "Dibyanshu Chaubey" },
    { fieldName: "Email", fieldValue: "dibyanshuchaubey95@gmail.com" },
    { fieldName: "Phone", fieldValue: "+91 8433353722" },
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
      company: "Personal Project",
      position: "WeAssist Hostel Issue Management Platform",
      duration: "2025",
    },
    {
      company: "Personal Project",
      position: "Smart Restaurant Management System",
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
      link: "https://leetcode.com/u/dibyanshuchaubey/",
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
      link: "#",
    },
  ],
};

// ------------------- COMPONENT -------------------
const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          
          {/* Sidebar Tabs */}
          <TabsList className="flex flex-col w-full max-w-[280px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="cpdsa">CP & DSA</TabsTrigger>
            <TabsTrigger value="other">Other Achievements</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            
            {/* Experience */}
            <TabsContent value="experience">
              <Section title={experience.title} desc={experience.desc}>
                <ScrollArea className="max-h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, i) => (
                      <Card key={i} duration={item.duration} title={item.position} subtitle={item.company} />
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <Section title={education.title} desc={education.desc}>
                <ScrollArea className="max-h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, i) => (
                      <Card key={i} duration={item.duration} title={item.degree} subtitle={item.institute} extra={item.grade} />
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills">
              <Section title={skills.title} desc={skills.desc}>
                <ScrollArea className="max-h-[460px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skilllist.map((skill, i) => (
                      <TooltipProvider key={i} delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-white/5 border border-white/10 rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            {/* CP & DSA */}
            <TabsContent value="cpdsa">
              <Section title={cpAndDsa.title} desc={cpAndDsa.desc}>
                <ScrollArea className="max-h-[460px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {cpAndDsa.achievements.map((item, i) => (
                      <li key={i} className="bg-white/5 border border-white/10 min-h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center gap-2">
                        <a href={item.link} target="_blank" className="text-accent text-2xl underline">
                          {item.platform}
                        </a>
                        <p className="text-white/60">{item.achievement}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            {/* Other Achievements */}
            <TabsContent value="other">
              <Section title={otherAchievements.title} desc={otherAchievements.desc}>
                <ScrollArea className="max-h-[460px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {otherAchievements.achievements.map((item, i) => (
                      <Card key={i} title={item.activity} subtitle={item.description} />
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            {/* Certifications */}
            <TabsContent value="certifications">
              <Section title={certifications.title} desc={certifications.desc}>
                <ScrollArea className="max-h-[460px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certifications.items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-white/5 border border-white/10 min-h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center gap-2"
                      >
                        <h3 className="text-xl">{item.name}</h3>
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

            {/* About Me */}
            <TabsContent value="about">
              <Section title={about.title} desc={about.desc}>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, i) => (
                    <li key={i} className="flex justify-between gap-4 bg-white/5 border border-white/10 px-4 py-3 rounded-md">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
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
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{desc}</p>
    {children}
  </div>
);

const Card = ({ duration, title, subtitle, extra }) => (
  <li className="bg-white/5 border border-white/10 min-h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center gap-2">
    {duration && <span className="text-accent">{duration}</span>}
    <h3 className="text-xl">{title}</h3>
    {subtitle && <p className="text-white/60">{subtitle}</p>}
    {extra && <p className="text-white/60">{extra}</p>}
  </li>
);

export default ResumePage;
