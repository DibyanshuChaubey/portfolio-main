"use client";
import { motion } from "framer-motion";

const Stairs = ({ stairLength = 8 }) => {
  const segmentHeight = 100 / stairLength;
  const getDelay = (index) => (stairLength - index - 1) * 0.055;

  return (
    <div className="absolute inset-0 z-40 overflow-hidden">
      {[...Array(stairLength)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ y: "0vh" }}
          animate={{ y: "120vh" }}
          exit={{ y: ["120vh", "0vh"] }}
          transition={{
            duration: 0.85,
            delay: getDelay(index),
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            height: `${segmentHeight}%`,
            top: `${index * segmentHeight}%`,
            willChange: "transform",
          }}
          className={`absolute left-0 w-full ${
            index % 2 === 0 ? "bg-accent" : "bg-background"
          }`}
        />
      ))}
    </div>
  );
};

export default Stairs;
