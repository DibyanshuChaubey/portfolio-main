"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
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
          className="absolute h-[220px] w-[220px] xl:h-[360px] xl:w-[360px] rounded-full bg-accent/30 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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
          className="relative overflow-hidden rounded-full w-[260px] h-[260px] xl:w-[430px] xl:h-[430px] z-10"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <Image
              src="/assets/new_img-removebg-preview.png"
              alt="Dibyanshu Chaubey"
              priority
              quality={100}
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.svg
          className="absolute w-[290px] xl:w-[486px] h-[290px] xl:h-[486px] z-20 pointer-events-none"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: "18 22",
            }}
            animate={{
              strokeDasharray: [
                "18 22",
                "32 14",
                "18 22",
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
