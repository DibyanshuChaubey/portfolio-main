"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        {/* Overlay transition */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 0.6,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          exit={{ opacity: 1 }}
          className="h-screen w-screen fixed bg-background top-0 left-0 z-40 pointer-events-none"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
