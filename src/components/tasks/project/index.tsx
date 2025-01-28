import React from "react";
import Header from "./header";
import TaskCard from "./task-card";

const Project = () => {
  return (
    <div className="bg-[#F9FAFC] h-fit w-72 border rounded-md shrink-0 text-sm">
      <Header />
      <div className="w-full h-full flex flex-col items-center justify-start gap-2 p-2">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default Project;
