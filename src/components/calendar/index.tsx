import React from "react";
import MainView from "./main-view";

const Calendar = () => {
  return (
    <div className="size-full relative max-h-screen overflow-hidden">
      <div className="absolute left-16 bottom-0 px-4 py-2 bg-[#F4F5F7] z-10 border rounded-t-lg w-80 h-10 hover:h-[30rem] transition-all">
        <h4>Ask AI</h4>
      </div>
      <MainView />
    </div>
  );
};

export default Calendar;
