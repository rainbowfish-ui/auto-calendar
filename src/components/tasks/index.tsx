"use client";
import React, { useState } from "react";
import Project from "./project";
import Header from "./header";
import { projects } from "@/db/projects";
import { useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "@/app/actions/get-project-by-id";
import { PiSpinnerLight } from "react-icons/pi";

const Tasks = () => {
  const [activeCard, setActiveCard] = useState(null);
  const { activeProject } = useSelector((state: RootState) => state.projects);

  const { data: project, isLoading } = useQuery({
    queryKey: ["active-project", activeProject],
    queryFn: () => getProjectById(activeProject),
    enabled: !!activeProject,
  });

  function onDrop(
    from: { fromTeam: number; index: number },
    to: { toTeam: number; index: number }
  ) {
    const project = projects.find((proj) => proj.isActive);

    if (!project) return;
    const sourceTeam = project.teams[from.fromTeam];
    const destinationTeam = project.teams[to.toTeam];

    if (!sourceTeam || !destinationTeam) {
      console.log("Team not found");
    }
    const [movedTask] = sourceTeam.tasks.splice(from.index, 1);
    if (!movedTask) {
      console.log("Error");
    }
    destinationTeam.tasks.splice(to.index, 0, movedTask);

    return { ...project, teams: [...project.teams] };
  }
  return (
    <div className="h-screen w-fit pl-4">
      <Header />
      <div className="h-screen w-[70vw] flex overflow-scroll gap-4 p-2 no-scrollbar pb-44">
        {isLoading && (
          <div className="size-full grid place-content-center">
            <PiSpinnerLight className="animate-spin" size={30} />
          </div>
        )}
        {project &&
          project.teams?.map(({ members, name, tasks }: any, index: number) => {
            return (
              <Project
                setActiveCard={setActiveCard}
                name={name}
                members={members}
                tasks={tasks}
                key={name + index}
                projectName={project.name}
                onDrop={onDrop}
                activeCard={activeCard}
                teamIndex={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Tasks;
