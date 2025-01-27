import React from "react";
import Days from "./days";
import Timeline from "./timeline";
import Events from "./events";

const WeekView = () => {
  return (
    <div className="w-fit relative border-[0.5px]">
      <Days />
      <section className="w-fit flex border-[0.5px] h-[80vh] relative overflow-y-scroll no-scrollbar">
        <Timeline />
        <Events />
        <Events />
        <Events />
        <Events />
        <Events />
        <Events />
        <Events />
      </section>
    </div>
  );
};

export default WeekView;
