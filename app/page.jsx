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
    <section className="relative min-h-[calc(100vh-7rem)] overflow-hidden pb-4 pt-4 font-sans sm:pt-8 xl:pt-10">
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

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:gap-10 xl:grid-cols-[minmax(0,1.12fr)_minmax(420px,0.88fr)] xl:gap-12 xl:pb-12">
          <div className="order-2 w-full text-center lg:order-none lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/70 sm:text-sm"
            >
              Computer Science Student · Full-stack developer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
              className="mx-auto mb-5 mt-4 max-w-[13ch] text-[2.65rem] font-bold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:mx-0 lg:text-6xl xl:text-[4.5rem]"
            >
              Building production-ready{" "}
              <span className="bg-gradient-to-r from-accent via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                full-stack products
              </span>{" "}
              with measurable impact.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mx-auto mb-6 max-w-[37rem] text-base leading-7 text-white/70 sm:text-[1.0625rem] lg:mx-0"
            >
              I&apos;m Dibyanshu Chaubey. I design and develop scalable web
              applications with <strong className="font-semibold text-white/90">React, Python, Flask, and SQL</strong>,
              with a focus on product clarity, performance, and real-world outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.45 }}
              className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {[
                "React + TypeScript",
                "Flask APIs",
                "SQL Databases",
                "Data Structures",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45 }}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start sm:gap-4"
            >
              <Button
                size="lg"
                className="flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold uppercase tracking-wide text-primary shadow-[0_12px_35px_rgba(124,108,255,0.24)] hover:bg-accent-hover"
                onClick={handleResumeDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-lg" />
              </Button>

              <Link
                href="/work"
                className="inline-flex h-12 items-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white/85 transition-colors hover:border-accent hover:text-accent"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.45 }}
              className="mt-6 flex justify-center lg:justify-start"
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
            className="order-1 mx-auto w-full max-w-[36rem] lg:order-none"
          >
            <Photo />
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
