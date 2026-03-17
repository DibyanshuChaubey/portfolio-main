"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "projects",
    path: "/work",
  },
  {
    name: "profile",
    path: "/profile",
  },
  {
    name: "content growth",
    path: "/content-growth",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Auto-close menu after route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-md"
        aria-label="Open menu"
      >
        <CiMenuFries className="text-[28px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col border-l border-white/10 bg-background/95 text-white backdrop-blur-2xl">
        <div className="mb-16 mt-20 text-center text-2xl">
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-3xl font-semibold tracking-[0.16em] silkscreen-bold">
              <span className="text-accent">&lt;</span>Dibyanshu
              <span className="text-accent">/&gt;</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col gap-4 justify-center items-stretch">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`${
                link.path === pathname
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-white/10 bg-white/[0.03] text-white/85"
              } rounded-2xl border px-5 py-4 text-lg capitalize transition-all hover:border-accent/40 hover:text-accent`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/65">
          Building full-stack products with React, Flask, and SQL.
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;