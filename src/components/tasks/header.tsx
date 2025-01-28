import React from "react";
import { BiPlus } from "react-icons/bi";

const Header = ({ projects }: any) => {
  return (
    <div className="w-full h-12 flex items-center justify-between gap-2 rounded-t-lg px-4">
      <div className="flex gap-4 items-center text-sm">
        {projects.map(({ name, isActive }: any) => {
          return (
            <button
              className={`py-1 text-nowrap transition-colors border-b border-white hover:border-[#c4c4c4] flex items-center ${
                isActive ? "border-[#9f9f9f]" : ""
              }`}
              key={"head" + name}
            >
              {name}
            </button>
          );
        })}
      </div>
      <button className="px-2 py-1 rounded-md transition-colors border border-white hover:border-[#E4E7EB] hover:bg-[#F9FAFC] bg-white flex items-center gap-1 text-xs">
        <BiPlus size={16} /> New Project
      </button>
    </div>
  );
};

export default Header;
