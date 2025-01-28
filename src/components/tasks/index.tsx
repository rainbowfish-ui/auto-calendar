import React from "react";
import Project from "./project";
import Header from "./header";

const Tasks = () => {
  return (
    <div className="h-screen w-fit flex justify-center items-center flex-col pl-4">
      <Header />
      <div className="h-screen w-[70vw] flex overflow-scroll gap-4 p-2 no-scrollbar pb-44">
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Tasks;
