"use client";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { Silkscreen } from "next/font/google";

// ✅ exact pixel font you had
const silkscreen = Silkscreen({ subsets: ["latin"], weight: ["700"] });

const Header = () => {
  return (
    <header className="py-6 xl:py-8 text-white fixed w-full top-0 z-[9999] bg-background/20 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <h1
            className={`text-3xl xl:text-4xl font-bold tracking-widest flex items-center gap-1 ${silkscreen.className}`}
          >
            <span className="text-[#00ff88]">&lt;</span>
            {/* pixel drop + soft neon glow */}
            <span
              className="uppercase"
              style={{
                textShadow:
                  "0 2px 0 rgba(0,0,0,0.65), 0 0 10px rgba(0,255,136,0.55)",
              }}
            >
              DIBYANSHU
            </span>
            <span className="text-[#00ff88]">/&gt;</span>
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden xl:flex items-center gap-10">
          <nav className="flex gap-8 text-lg font-medium">
            {["Home", "Work", "Profile", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="text-white group-hover:text-[#00ff88] transition-colors">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00ff88] transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Link href="/contact">
            <Button className="xl:mr-6 mr-0 bg-[#00ff88] text-black font-semibold px-6 py-2 rounded-full shadow-[0_0_15px_#00ff88] hover:shadow-[0_0_25px_#00ff88] hover:scale-105 transition-all">
              Hire me
            </Button>
          </Link>

        </div>

        {/* MOBILE NAV */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
