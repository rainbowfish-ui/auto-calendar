import React from "react";
import { BiPlus } from "react-icons/bi";
import ProjectList from "./project-list";

const Header = ({ projects }: any) => {
  return (
    <div className="w-full h-12 flex items-center justify-between gap-2 rounded-t-lg px-4">
      <ProjectList />
      <div className="flex gap-2 items-center text-xs">
        <button className="px-2 py-1 rounded-md transition-transform border border-[#E4E7EB] bg-[#F9FAFC] flex items-center gap-1 active:scale-95">
          <BiPlus size={16} /> Team
        </button>
        <button
          className="px-2 py-1 rounded-md transition-transform border border-[#E4E7EB] bg-[#F9FAFC] flex items-center gap-1 active:scale-95"
          onClick={() => {
            projects.push({
              name: "vectal.ai",
              isActive: true,
              teams: [
                {
                  name: "Design Team",
                },
              ],
            });
          }}
        >
          <BiPlus size={16} /> Project
        </button>
      </div>
    </div>
  );
};

export default Header;
