"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFlask,
} from "react-icons/fa";
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
  title: "My Experience",
  desc: "I have built and deployed multiple projects involving automation, data analysis, and full-stack web development.",
  items: [
    { company: "Personal Project", position: "Auto Job Applications Bot", duration: "2025" },
    { company: "Personal Project", position: "Fully Fledged Blog Website", duration: "2024" },
    { company: "Personal Project", position: "Market Trends Analyzer (Google Trends)", duration: "2024" },
  ],
};

const education = {
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
                      <li key={i} className="bg-[#232329] min-h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center gap-2">
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

            {/* About Me */}
            <TabsContent value="about">
              <Section title={about.title} desc={about.desc}>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, i) => (
                    <li key={i} className="flex justify-between gap-4 bg-[#232329] px-4 py-3 rounded-md">
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
  <li className="bg-[#232329] min-h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center gap-2">
    {duration && <span className="text-accent">{duration}</span>}
    <h3 className="text-xl">{title}</h3>
    {subtitle && <p className="text-white/60">{subtitle}</p>}
    {extra && <p className="text-white/60">{extra}</p>}
  </li>
);

export default ResumePage;
