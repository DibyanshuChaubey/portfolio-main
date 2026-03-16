"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const highlightTags = [
  {
    label: "Data Analyst",
    className:
      "top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 xl:top-[52%]",
  },
  {
    label: "Full Stack",
    className:
      "top-[50%] right-[6%] -translate-y-1/2 xl:top-[50%] xl:right-[7%]",
  },
  {
    label: "Flask APIs",
    className:
      "top-[50%] left-[6%] -translate-y-1/2 xl:top-[50%] xl:left-[7%]",
  },
  {
    label: "React UI",
    className:
      "bottom-[26%] right-[8%] xl:bottom-[28%] xl:right-[9%]",
  },
  {
    label: "DSA Focused",
    className:
      "bottom-[26%] left-[8%] xl:bottom-[28%] xl:left-[9%]",
  },
];

const Photo = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex h-full w-full items-center justify-center py-4 xl:py-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.45,
            duration: 0.55,
            ease: "easeOut",
          },
        }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          aria-hidden="true"
          className="absolute h-[240px] w-[240px] rounded-full bg-accent/18 blur-3xl xl:h-[380px] xl:w-[380px]"
          animate={
            shouldReduceMotion
              ? { opacity: 0.55 }
              : { scale: [1, 1.06, 1], opacity: [0.35, 0.58, 0.35] }
          }
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute h-[300px] w-[300px] rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-[2px] xl:h-[500px] xl:w-[500px]" />
        <div className="absolute h-[276px] w-[276px] rounded-full border border-white/10 xl:h-[458px] xl:w-[458px]" />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 h-[54px] w-[180px] rounded-full bg-black/35 blur-2xl xl:h-[70px] xl:w-[250px]"
          animate={shouldReduceMotion ? undefined : { scaleX: [1, 1.08, 1], opacity: [0.3, 0.42, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.65,
              duration: 0.45,
              ease: "easeInOut",
            },
          }}
          className="relative z-10 h-[260px] w-[260px] overflow-hidden rounded-full border border-white/12 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.14),rgba(255,255,255,0.03)_48%,transparent_72%)] shadow-[0_24px_90px_rgba(0,0,0,0.28)] xl:h-[430px] xl:w-[430px]"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.015, y: -4 }}
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full scale-[1.02] xl:scale-[1.04]"
          >
            <Image
              src="/assets/new_img-removebg-preview.png"
              alt="Dibyanshu Chaubey"
              priority
              quality={100}
              fill
              className="object-contain object-center"
            />
          </motion.div>
        </motion.div>

        <motion.svg
          className="pointer-events-none absolute z-20 h-[292px] w-[292px] xl:h-[490px] xl:w-[490px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
          />
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="var(--accent)"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: "14 28",
            }}
            animate={{
              strokeDasharray: ["14 28", "24 18", "14 28"],
              rotate: shouldReduceMotion ? 0 : [0, 360],
            }}
            transition={{
              duration: 18,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>

        {highlightTags.map((tag, index) => (
          <motion.div
            key={tag.label}
            aria-hidden="true"
            className={`absolute z-30 hidden min-w-[104px] rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-center text-[8px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-md md:block xl:min-w-[118px] ${tag.className}`}
            animate={
              shouldReduceMotion ? undefined : { y: [0, -6, 0] }
            }
            transition={{
              duration: 4.8 + index * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            {tag.label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Photo;
