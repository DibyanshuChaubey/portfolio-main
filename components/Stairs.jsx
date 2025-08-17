"use client";
import { motion } from "framer-motion";

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const Stairs = ({ stairLength = 8 }) => {
  const reverseIndex = (index) => stairLength - index - 1;

  return (
    <div className="absolute inset-0 flex flex-col z-40">
      {[...Array(stairLength)].map((_, index) => (
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={stairAnimation}
          transition={{
            duration: 0.8,                     // smoother
            delay: reverseIndex(index) * 0.05, // smaller gap
            ease: [0.6, 0.01, -0.05, 0.95],   // smooth easing
          }}
          className={`flex-1 w-full relative ${
            index % 2 === 0 ? "bg-accent" : "bg-background"
          }`}
        />
      ))}
    </div>
  );
};

export default Stairs;
