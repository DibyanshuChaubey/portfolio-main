"use client";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
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
}



  // {icon: <FaTwitter/>,path:''},
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
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
