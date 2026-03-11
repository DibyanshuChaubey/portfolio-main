"use client";
import { motion } from "framer-motion";

const stairAnimation = {
  initial: { y: "0%" },
  animate: { y: "100%" },
  exit: { y: ["100%", "0%"] },
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
            duration: 0.9,
            delay: reverseIndex(index) * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ willChange: "transform" }}
          className={`flex-1 w-full relative ${
            index % 2 === 0 ? "bg-accent" : "bg-background"
          }`}
        />
      ))}
    </div>
  );
};

export default Stairs;
