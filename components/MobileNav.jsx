"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
  name: "profile",
  path: "/profile",
},
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className={"flex flex-col "}>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold silkscreen-bold">
              <span className="text-accent ">&lt;</span>Dibyanshu
              <span className="text-accent">/&gt;</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-8 justify-center items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              }
              text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
