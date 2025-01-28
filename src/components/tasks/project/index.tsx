import React from "react";
import Header from "./header";
import TaskCard from "./task-card";
import DropArea from "./drop-area";

const Project = ({
  name,
  tasks,
  members,
  setActiveCard,
}: {
  name: string;
  members: any;
  tasks: any;
  setActiveCard: any;
}) => {
  return (
    <div className="bg-[#F9FAFC] h-fit w-72 border rounded-md shrink-0 text-sm">
      <Header name={name} />
      <div className="w-full h-full flex flex-col items-center justify-start p-2">
        <DropArea />
        {tasks.map((task: any, i: number) => {
          return (
            <React.Fragment key={task.name}>
              <TaskCard
                index={i}
                members={task.members}
                name={task.name}
                setActiveCard={setActiveCard}
              />
              <DropArea />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
