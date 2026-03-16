"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();
  const burstLayers = [
    { size: "26vmax", color: "var(--accent)", delay: 0, duration: 0.65, x: "-14vw", y: "-10vh" },
    { size: "22vmax", color: "var(--chart-1)", delay: 0.08, duration: 0.7, x: "16vw", y: "-8vh" },
    { size: "24vmax", color: "var(--chart-4)", delay: 0.12, duration: 0.75, x: "-10vw", y: "14vh" },
    { size: "20vmax", color: "var(--chart-2)", delay: 0.16, duration: 0.72, x: "14vw", y: "12vh" },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="fixed inset-0 z-40 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.96 }}
          animate={{
            opacity: 0,
            transition: { duration: 0.55, ease: "easeOut" },
          }}
          exit={{ opacity: 0.96 }}
          style={{ backgroundColor: "var(--background)" }}
        />

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {burstLayers.map((layer, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full"
              initial={{ scale: 0.1, opacity: 0.95 }}
              animate={{
                scale: 6,
                opacity: 0,
                transition: {
                  delay: layer.delay,
                  duration: layer.duration,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              exit={{ scale: 0.1, opacity: 0.95 }}
              style={{
                width: layer.size,
                height: layer.size,
                backgroundColor: layer.color,
                filter: "blur(4px)",
                transform: `translate(${layer.x}, ${layer.y})`,
              }}
            />
          ))}
        </div>

        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.25, duration: 0.35, ease: "easeOut" },
          }}
          exit={{ opacity: 1 }}
          style={{ background: "radial-gradient(circle at center, transparent 10%, var(--background) 58%)" }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
