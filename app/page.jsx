"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Photo from "@/components/Photo";
import Socials from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const resume = "/assets/Dibyanshu_Chaubey_Resume_Updated.pdf";

const Home = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Dibyanshu_Chaubey_Resume_Updated.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-[88vh] overflow-hidden pt-8 xl:pt-14">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-8 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, 16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-16 xl:pb-24">
          <div className="order-2 xl:order-none w-full xl:w-[56%] text-center xl:text-left">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm tracking-wider text-white/85"
            >
              Computer Science Student • Python & Flask Developer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
              className="mt-5 mb-6 text-5xl xl:text-7xl font-extrabold leading-[1.05] titan-one"
            >
              <span className="block text-white">Building reliable</span>
              <span className="block bg-gradient-to-r from-accent via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                full-stack products
              </span>
              <span className="block text-white/95">with clean UX</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mx-auto xl:mx-0 max-w-[620px] mb-8 text-white/80 text-base xl:text-lg"
            >
              I&apos;m Dibyanshu Chaubey — I design and build modern web
              applications with <strong>React, Python, Flask, and SQL</strong>,
              focused on performance, clarity, and real-world impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.45 }}
              className="mb-8 flex flex-wrap justify-center xl:justify-start gap-2"
            >
              {[
                "React + TypeScript",
                "Flask APIs",
                "SQL Databases",
                "Data Structures",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 sm:gap-6"
            >
              <Button
                size="lg"
                className="uppercase flex items-center gap-2 rounded-full px-7 bg-accent text-primary hover:bg-accent-hover"
                onClick={handleResumeDownload}
              >
                <span className="font-semibold">Download CV</span>
                <FiDownload className="text-lg" />
              </Button>

              <Link
                href="/work"
                className="inline-flex h-11 items-center rounded-full border border-white/20 bg-white/5 px-6 text-sm font-medium text-white/90 transition-colors hover:border-accent hover:text-accent"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.45 }}
              className="mt-7 flex justify-center xl:justify-start"
            >
              <Socials
                containerStyles="flex gap-3"
                iconStyles="w-10 h-10 border border-white/20 rounded-full flex justify-center items-center text-white/90 text-base bg-white/5 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="order-1 xl:order-none w-full xl:w-[44%]"
          >
            <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-4 backdrop-blur-sm">
              <Photo />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <Stats />
      </div>
    </section>
  );
};

export default Home;
