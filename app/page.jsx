"use client";

import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import Socials from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// ✅ Place your resume inside /public/assets and reference it like this:
const resume = "/assets/DibyanshuChaubey_Resume.pdf";

const Home = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Dibyanshu_Chaubey_Resume.pdf"; // ✅ correct filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full relative overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl font-[var(--font-orbitron)] text-accent tracking-widest">
              Software / Web Developer
            </span>
<h1 className="mb-6 text-5xl xl:text-7xl font-extrabold leading-tight titan-one">
  <span className="block text-white">Hello I&apos;m</span>
  <span className="block text-accent drop-shadow-[0_0_1px_rgba(0,255,136,0.6)]">
  Dibyanshu Chaubey
</span>


</h1>






            <p className="max-w-[500px] mb-9 text-white/80 libre-baskerville-bold">
              Results-driven developer skilled in <strong>Python, Django, Flask</strong> 
              and full-stack web development. Passionate about building scalable 
              applications, automation, and data-driven tools.
            </p>

            {/* Buttons & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleResumeDownload}
              >
                <span className="libre-baskerville-bold">Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 opacity-100 z-50">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats */}
      <Stats />
    </section>
  );
};

export default Home;
