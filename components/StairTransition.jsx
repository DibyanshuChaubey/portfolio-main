"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="fixed inset-0 z-40 pointer-events-none">
        {/* Stairs */}
        <div className="h-screen w-screen flex">
          <Stairs stairLength={8} />
        </div>

        {/* Background fade */}
        <motion.div
          className="h-screen w-screen bg-background absolute top-0 left-0"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          exit={{ opacity: 1 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
