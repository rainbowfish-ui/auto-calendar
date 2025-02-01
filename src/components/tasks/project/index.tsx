import React from "react";
import Header from "./header";
import TaskCard from "./task-card";
import DropArea from "./drop-area";

const Project = ({
  name: teamName,
  projectName,
  tasks,
  members,
  setActiveCard,
  onDrop,
  activeCard,
  teamIndex,
  teamId,
}: {
  name: string;
  projectName: string;
  teamId: string;
  members: any;
  tasks: any;
  setActiveCard: any;
  activeCard: any;
  onDrop: any;
  teamIndex: number;
}) => {
  return (
    <div className="bg-[#F9FAFC] h-fit w-72 border rounded-md shrink-0 text-sm">
      <Header name={teamName} />
      <div className="w-full h-full flex flex-col items-center justify-start p-2">
        <DropArea
          teamIndex={teamIndex}
          index={0}
          onDrop={onDrop}
          activeCard={activeCard}
        />
        {tasks?.map((task: any, i: number) => {
          return (
            <React.Fragment key={task.name}>
              <TaskCard
                key={task.name + i}
                index={i}
                members={task.members}
                name={task.name}
                setActiveCard={setActiveCard}
                teamIndex={teamIndex}
                assignedTo={task.assignedTo}
                due={task.due}
                status={task.status}
                priority={task.priority}
                keyPoints={task.keyPoints}
                lastUpdate={task.lastUpdate}
                lastUpdateBy={task.lastUpdateBy}
                lastUpdateOn={task.lastUpdateOn}
                progress={task.progress}
              />
              <DropArea
                index={i + 1}
                teamIndex={teamIndex}
                onDrop={onDrop}
                activeCard={activeCard}
              />
            </React.Fragment>
          );
        })}
        <button
          className="w-full bg-white rounded-md text-xs border py-1 active:scale-95 transition-transform"
          data-team-id={teamId}
          data-action="add-task"
        >
          + Add task
        </button>
      </div>
    </div>
  );
};

export default Project;
