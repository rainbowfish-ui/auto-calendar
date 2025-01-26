import React from "react";
import { CiCalendar } from "react-icons/ci";
import { GoTasklist } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { PiShootingStarLight } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="w-16 h-full bg-[#F4F5F7] flex flex-col items-center justify-start py-4 gap-6 border-r">
      <PiShootingStarLight size={30} />
      <nav className="size-full flex flex-col gap-2 items-start p-2">
        <button className="rounded-lg p-3 relative group">
          <div className="w-fit h-fit rounded-md absolute bg-[#D6D7E0] text-gray-800 left-12 top-1 text-xs p-2 hidden group-hover:block">
            Search
          </div>
          <IoIosSearch size={18} />
        </button>
        <button className="bg-[#D6D7E0] rounded-lg p-3 relative group">
          <div className="w-fit h-fit rounded-md absolute left-12 top-1 text-xs text-gray-800 bg-[#D6D7E0] p-2 hidden group-hover:block">
            Calendar
          </div>
          <CiCalendar size={18} />
        </button>
        <button className="rounded-lg p-3 relative group">
          <div className="w-fit h-fit rounded-md absolute bg-[#D6D7E0] text-gray-800 left-12 top-1 text-xs p-2 hidden group-hover:block">
            Tasks
          </div>
          <GoTasklist size={18} />
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
