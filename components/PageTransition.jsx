"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative"
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
        exit={{ opacity: 0, y: 8, transition: { duration: 0.2, ease: "easeInOut" } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
