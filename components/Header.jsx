"use client";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { Silkscreen } from "next/font/google";

// ✅ exact pixel font you had
const silkscreen = Silkscreen({ subsets: ["latin"], weight: ["700"] });
const hireMeLink =
  "https://mail.google.com/mail/?view=cm&fs=1&to=dibyanshuchaubey95%40gmail.com&su=Hiring%20Inquiry%20from%20Portfolio";

const Header = () => {
  return (
    <header className="py-6 xl:py-8 text-white fixed w-full top-0 z-[9999] bg-background/70 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <h1
            className={`text-3xl xl:text-4xl font-bold tracking-widest flex items-center gap-1 ${silkscreen.className}`}
          >
            <span className="text-accent">&lt;</span>
            {/* pixel drop + soft neon glow */}
            <span
              className="uppercase"
              style={{
                textShadow:
                  "0 2px 0 rgba(0,0,0,0.55), 0 0 10px rgba(99,102,241,0.35)",
              }}
            >
              DIBYANSHU
            </span>
            <span className="text-accent">/&gt;</span>
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
                <span className="text-white group-hover:text-accent transition-colors">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <a href={hireMeLink} target="_blank" rel="noopener noreferrer">
            <Button className="xl:mr-6 mr-0 bg-accent text-accent-foreground font-semibold px-6 py-2 rounded-full shadow-[0_0_16px_rgba(99,102,241,0.35)] hover:shadow-[0_0_26px_rgba(99,102,241,0.45)] hover:scale-105 transition-all">
              Hire me
            </Button>
          </a>

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
