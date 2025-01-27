import React from "react";
import Summary from "../summary";
import Header from "./header";
import ActiveView from "./active-view";

const Calendar = () => {
  return (
    <div className="size-full relative max-h-screen overflow-hidden">
      <div className="w-full h-screen overflow-hidden flex pr-10">
        <Summary />
        <div className="h-fit w-full flex justify-center items-center flex-col pl-4">
          <Header />
          <ActiveView />
          <div className="h-24 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
