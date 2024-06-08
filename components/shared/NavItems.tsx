"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {navLinks.map((link) => {
        const isActive = pathname === link.url;

        return (
          <li
            key={link.url}
            className={`${isActive && "text-primary-500"} flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.url}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
