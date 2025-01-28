"use client";
import React, { useState } from "react";
import Project from "./project";
import Header from "./header";
import { projects } from "@/db/projects";

const Tasks = () => {
  const [activeCard, setActiveCard] = useState(null);
  const onDrop = (status: boolean, position: number) => {
    console.log("S--", status, "p--", position);
  };
  return (
    <div className="h-screen w-fit pl-4">
      <Header projects={projects} />
      <div className="h-screen w-[70vw] flex overflow-scroll gap-4 p-2 no-scrollbar pb-44">
        {projects.map(({ isActive, name: projectName, teams }) => {
          return (
            isActive && (
              <React.Fragment key={projectName}>
                {teams.map(({ members, name, tasks }) => {
                  return (
                    <Project
                      setActiveCard={setActiveCard}
                      name={name}
                      members={members}
                      tasks={tasks}
                      key={name}
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
