"use client";
import { getAllProjectsNames } from "@/app/actions/get-all-projects-names";
import { projects } from "@/db/projects";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { PiSpinnerLight } from "react-icons/pi";

const ProjectList = () => {
  const { data: projectNames, isLoading } = useQuery({
    queryKey: ["project-names"],
    queryFn: () => getAllProjectsNames(),
  });
  return (
    <div className="flex gap-4 items-center text-sm">
      {isLoading && <PiSpinnerLight className="animate-spin" />}
      {!isLoading &&
        projectNames.map(({ name, id }: { name: string; id: string }) => {
          return (
            <button
              className={`py-1 text-nowrap transition-colors border-b border-white hover:border-[#c4c4c4] flex items-center`}
              key={"head" + name}
              data-project-id={id}
            >
              {name}
            </button>
          );
        })}
    </div>
  );
};

export default ProjectList;
