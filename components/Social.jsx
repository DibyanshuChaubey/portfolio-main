"use client";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/DibyanshuChaubey" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/dibyanshu-chaubey/",
  },
  {
    icon: <SiLeetcode color="#FFA116" />,
    path: "https://leetcode.com/u/dibyanshu_chaubey/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Dibyanshu's ${index === 0 ? "GitHub" : index === 1 ? "LinkedIn" : "LeetCode"} profile`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
