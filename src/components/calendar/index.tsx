import React from "react";
import MainView from "./main-view";

const Calendar = () => {
  return (
    <div className="size-full relative">
      <div className="absolute right-40 top-0 px-4 py-2 bg-[#F4F5F7] border rounded-b-lg w-80 h-10 hover:h-96 transition-all">
        <h4>AI Agent</h4>
      </div>
      <MainView />
    </div>
  );
};

export default Calendar;
