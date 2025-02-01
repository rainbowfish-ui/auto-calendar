import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import ProjectList from "./project-list";
import NewProject from "@/components/new-project";
import NewTeam from "@/components/new-team";

const Header = () => {
  const [isNewTeamModalOpen, setIsNewTeamModalOpen] = useState(false);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  return (
    <div className="w-full h-12 flex items-center justify-between gap-2 rounded-t-lg px-4">
      <ProjectList />
      <div className="flex gap-2 items-center text-xs">
        <button
          className="px-2 py-1 rounded-md transition-transform border border-[#E4E7EB] bg-[#F9FAFC] flex items-center gap-1 active:scale-95"
          onClick={() => setIsNewTeamModalOpen(true)}
        >
          <BiPlus size={16} /> Team
        </button>
        <button
          className="px-2 py-1 rounded-md transition-transform border border-[#E4E7EB] bg-[#F9FAFC] flex items-center gap-1 active:scale-95"
          onClick={() => setIsNewProjectModalOpen(true)}
        >
          <BiPlus size={16} /> Project
        </button>
      </div>
      <NewProject
        isNewProjectModalOpen={isNewProjectModalOpen}
        setIsNewProjectModalOpen={setIsNewProjectModalOpen}
        key="new-project"
      />
      <NewTeam
        isNewTeamModalOpen={isNewTeamModalOpen}
        setIsNewTeamModalOpen={setIsNewTeamModalOpen}
        key="new-team"
      />
    </div>
  );
};

export default Header;
