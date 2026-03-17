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
    <header className="fixed top-0 z-[9999] w-full border-b border-white/10 bg-background/55 text-white backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between py-5 xl:py-6">
        <Link href="/">
          <h1
            className={`flex items-center gap-1 text-2xl font-bold tracking-[0.2em] xl:text-3xl ${silkscreen.className}`}
          >
            <span className="text-accent">&lt;</span>
            <span
              className="uppercase"
              style={{
                textShadow:
                  "0 2px 0 rgba(0,0,0,0.45), 0 0 18px rgba(124,108,255,0.25)",
              }}
            >
              DIBYANSHU
            </span>
            <span className="text-accent">/&gt;</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-6 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-md">
          <nav className="flex gap-2 text-sm font-medium text-white/85">
            {[
              { label: "Home", href: "/" },
              { label: "Work", href: "/work" },
              { label: "Profile", href: "/profile" },
              { label: "Content Growth", href: "/content-growth" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a href={hireMeLink} target="_blank" rel="noopener noreferrer">
            <Button className="mr-0 rounded-full bg-accent px-6 py-2 font-semibold text-accent-foreground shadow-[0_10px_35px_rgba(124,108,255,0.28)] transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_14px_40px_rgba(124,108,255,0.36)]">
              Hire me
            </Button>
          </a>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
