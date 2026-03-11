"use client";
import { motion } from "framer-motion";

const CircularReveal = ({ gridSize = 6 }) => {
  const totalSquares = gridSize * gridSize;
  const squareWidth = 100 / gridSize;

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
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: getDelay(index),
              ease: "easeOut",
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
