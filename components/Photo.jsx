"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center xl:justify-start">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        // Shift left on desktop for better balance
        className="relative flex items-center justify-center xl:-translate-x-12"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="relative overflow-hidden rounded-full w-[280px] h-[280px] xl:w-[450px] xl:h-[450px] z-10 translate-y-2"
          

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

        {/* Circle */}
        <motion.svg
          className="absolute w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] z-20 pointer-events-none"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#a2a2a2ff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: "24 10 0 0",
            }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 25 92 72",
                "4 250 22 22",
              ],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
