"use client";
import { motion } from "framer-motion";

const CircularReveal = ({ gridSize = 6 }) => {
  const totalSquares = gridSize * gridSize;

  const getDelay = (index) => {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    const distance = Math.sqrt(
      (row - gridSize / 2) ** 2 + (col - gridSize / 2) ** 2
    );
    return distance * 0.04;
  };

  return (
    <div className="absolute inset-0 z-40 grid overflow-hidden">
      <div className="grid h-full w-full" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
        {[...Array(totalSquares)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 0, opacity: 0 }}
            exit={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.55,
              delay: getDelay(index),
              ease: [0.22, 1, 0.36, 1],
            }}
            className="origin-center bg-accent"
            style={{
              transformOrigin: "center center",
              willChange: "transform",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CircularReveal;
