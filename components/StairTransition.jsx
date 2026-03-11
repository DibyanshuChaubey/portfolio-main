"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="fixed inset-0 z-40 pointer-events-none">
        <div className="absolute inset-0">
          <Stairs gridSize={6} />
        </div>

        <motion.div
          className="absolute inset-0 bg-background/40 backdrop-blur-xs"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.7, duration: 0.3, ease: "easeInOut" },
          }}
          exit={{ opacity: 1 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
