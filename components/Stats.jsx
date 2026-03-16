"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    num: 125,
    text: "Problems Solved on LeetCode",
  },
  {
    num: 2,
    text: "Major Deployed Projects",
  },
  {
    num: 400,
    text: "Hours of Hands-on Development",
  },
];
const Stats = () => {
  return (
    <section className="py-10 xl:py-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-6 backdrop-blur-md"
                key={index}
              >
                <div className="mb-3 h-1 w-14 rounded-full bg-accent/70" />
                <div className="flex items-end gap-3">
                  <CountUp
                    end={item.num}
                    duration={2.6}
                    delay={0.2}
                    decimal="."
                    decimals={item.num % 1 === 0 ? 0 : 1}
                    className="text-4xl font-extrabold xl:text-6xl"
                  />
                  <span className="pb-2 text-lg font-semibold text-accent">+</span>
                </div>
                <p className="mt-3 max-w-[220px] leading-snug text-white/72">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
