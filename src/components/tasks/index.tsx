"use client";
import React, { useEffect, useState } from "react";
import Project from "./project";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "@/actions/get-project-by-id";
import { PiSpinnerLight } from "react-icons/pi";
import { setProject } from "@/state-manager/features/project";
import NewTask from "../new-task";
import { setActiveTeamModal } from "@/state-manager/features/new-task-form";

const Tasks = () => {
  const [activeCard, setActiveCard] = useState(null);

  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
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

    if (
      from.fromTeam === to.toTeam &&
      (from.index === to.index - 1 || from.index === to.index)
    ) {
      return;
    }

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

  const handleClick = (e: React.MouseEvent) => {
    const action = (e.target as HTMLButtonElement).getAttribute("data-action");
    const teamId = (e.target as HTMLButtonElement).getAttribute("data-team-id");
    if (!teamId) return;
    if (action === "add-task") {
      dispatch(setActiveTeamModal(teamId));
      setIsNewTaskModalOpen(true);
    }
  };

  return (
    <div className="h-screen w-fit pl-4" onClick={handleClick}>
      <Header />
      <NewTask
        isNewTaskModalOpen={isNewTaskModalOpen}
        setIsNewTaskModalOpen={setIsNewTaskModalOpen}
      />
      <div className="h-screen w-[70vw] flex overflow-scroll gap-4 p-2 no-scrollbar pb-44">
        {isLoading && (
          <div className="size-full grid place-content-center">
            <PiSpinnerLight className="animate-spin" size={30} />
          </div>
        )}
        {localProject?.teams?.map(
          ({ members, name, tasks, _id }: any, index: number) => {
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
                teamId={_id}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Tasks;
