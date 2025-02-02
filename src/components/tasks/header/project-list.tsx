"use client";
import { getAllProjectsNames } from "@/actions/get-all-projects-names";
import { setActiveProject } from "@/state-manager/features/project";
import { RootState } from "@/state-manager/store";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { PiSpinnerLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

const ProjectList = () => {
  const dispatch = useDispatch();
  const { activeProject } = useSelector((state: RootState) => state.project);
  const { data: projectNames, isLoading } = useQuery({
    queryKey: ["project-names"],
    queryFn: () => getAllProjectsNames(),
  });

  const { invalidateQueries } = useQueryClient();
  const handleClick = (e: React.MouseEvent) => {
    const projectId = (e.target as HTMLButtonElement).getAttribute(
      "data-project-id"
    );
    if (!projectId) return;
    dispatch(setActiveProject(projectId));
  };

  useEffect(() => {
    if (projectNames) dispatch(setActiveProject(projectNames[0]?._id));

    return () => {
      invalidateQueries({
        queryKey: ["project-names"],
      });
    };
  }, [isLoading]);
  return (
    <div className="flex gap-4 items-center text-sm" onClick={handleClick}>
      {isLoading && <PiSpinnerLight className="animate-spin" />}
      {!isLoading &&
        projectNames?.map(({ name, _id }: { name: string; _id: string }) => {
          return (
            <button
              className={`py-1 text-nowrap transition-colors border-b hover:border-[#c4c4c4] flex items-center ${
                activeProject === _id ? "border-[#c4c4c4]" : "border-white"
              }`}
              key={"head" + name}
              data-project-id={_id}
            >
              {name}
            </button>
          );
        })}
    </div>
  );
};

export default ProjectList;
