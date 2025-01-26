import React from "react";
import MonthView from "./month-view";
import Sidebar from "../sidebar";
import Summary from "./summary";

const MainView = () => {
  return (
    <div className="w-full h-screen flex pr-10">
      <Sidebar />
      <Summary />
      <div className="size-full flex justify-center items-center flex-col">
        <div className="h-24 w-full"></div>
        <div className="size-full flex items-center justify-center">
          <MonthView />
        </div>
        <div className="h-24 w-full"></div>
      </div>
    </div>
  );
};

export default MainView;
