"use client";
import React, { useState } from "react";
import Project from "./project";
import Header from "./header";
import { projects } from "@/db/projects";

const Tasks = () => {
  const [activeCard, setActiveCard] = useState(null);
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
      <Header projects={projects} />
      <div className="h-screen w-[70vw] flex overflow-scroll gap-4 p-2 no-scrollbar pb-44">
        {projects.map(({ isActive, name: projectName, teams }) => {
          return (
            isActive && (
              <React.Fragment key={projectName}>
                {teams.map(({ members, name, tasks }, index) => {
                  return (
                    <Project
                      setActiveCard={setActiveCard}
                      name={name}
                      members={members}
                      tasks={tasks}
                      key={name + index}
                      projectName={projectName}
                      onDrop={onDrop}
                      activeCard={activeCard}
                      teamIndex={index}
                    />
                  );
                })}
              </React.Fragment>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
