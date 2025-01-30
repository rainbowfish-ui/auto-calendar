"use client";
import React, { useEffect, useState } from "react";
import Project from "./project";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "@/app/actions/get-project-by-id";
import { PiSpinnerLight } from "react-icons/pi";
import { setProject } from "@/state-manager/features/project";

const Tasks = () => {
  const [activeCard, setActiveCard] = useState(null);
  const { activeProject, project: localProject } = useSelector(
    (state: RootState) => state.project
  );
  const dispatch = useDispatch();

  const { data: project, isLoading } = useQuery({
    queryKey: ["active-project", activeProject],
    queryFn: () => getProjectById(activeProject),
    enabled: !!activeProject,
  });

  useEffect(() => {
    if (!isLoading && project) {
      dispatch(setProject(project));
    }
  }, [isLoading, project, dispatch]);

  function onDrop(
    from: { fromTeam: number; index: number },
    to: { toTeam: number; index: number }
  ) {
    if (!localProject) return;

    const updatedTeams = [...localProject.teams];
    const sourceTeam = {
      ...updatedTeams[from.fromTeam],
      tasks: [...updatedTeams[from.fromTeam].tasks],
    };
    const destinationTeam = {
      ...updatedTeams[to.toTeam],
      tasks: [...updatedTeams[to.toTeam].tasks],
    };

    const [movedTask] = sourceTeam.tasks.splice(from.index, 1);
    if (!movedTask) {
      console.error("Error moving task");
      return;
    }

    destinationTeam.tasks.splice(to.index, 0, movedTask);
    updatedTeams[from.fromTeam] = sourceTeam;
    updatedTeams[to.toTeam] = destinationTeam;

    dispatch(setProject({ ...localProject, teams: updatedTeams }));
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
        {localProject &&
          localProject.teams?.map(
            ({ members, name, tasks }: any, index: number) => {
              return (
                <Project
                  setActiveCard={setActiveCard}
                  name={name}
                  members={members}
                  tasks={tasks}
                  key={name + index}
                  projectName={project?.name}
                  onDrop={onDrop}
                  activeCard={activeCard}
                  teamIndex={index}
                />
              );
            }
          )}
      </div>
    </div>
  );
};

export default Tasks;
