"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },

  {
    name: "work",
    path: "/work",
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

function Nav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              pathname === link.path && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent-hover transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
