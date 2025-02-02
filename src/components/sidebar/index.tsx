"use client";
import React from "react";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { GoTasklist } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { PiShootingStarLight } from "react-icons/pi";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Search",
    href: "#",
    icon: IoIosSearch,
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: CiCalendar,
  },
  {
    name: "Tasks",
    href: "/tasks",
    icon: GoTasklist,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-16 h-full bg-[#F4F5F7] flex flex-col items-center justify-start py-4 gap-6 border-r z-50">
      <PiShootingStarLight size={30} />
      <nav className="size-full flex flex-col gap-2 items-start p-2">
        {navItems?.map(({ href, icon: Icon, name }) => {
          return (
            <Link
              key={name}
              href={href}
              className={`rounded-lg p-3 relative group ${
                href === pathname ? "bg-[#e0e0e0]" : ""
              }`}
            >
              <div className="w-fit h-fit rounded-md absolute bg-[#e0e0e0] left-12 top-1 text-xs p-2 hidden group-hover:block">
                {name}
              </div>
              <Icon size={18} />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
