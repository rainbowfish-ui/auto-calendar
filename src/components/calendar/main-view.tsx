import React from "react";
import MonthView from "./month-view";
import Sidebar from "../sidebar";
import Summary from "./summary";
import WeekView from "./week-view";

const MainView = () => {
  return (
    <div className="w-full h-screen flex pr-10">
      <Sidebar />
      <Summary />
      <div className="size-full flex justify-center items-center flex-col pl-4">
        <div className="h-24 w-full flex items-center justify-between">
          <div className="px-4 py-1 rounded-md border">Today</div>
        </div>
        <div className="size-full">
          {/* <MonthView /> */}
          <WeekView />
        </div>
        <div className="h-24 w-full"></div>
      </div>
    </div>
  );
};

export default MainView;
