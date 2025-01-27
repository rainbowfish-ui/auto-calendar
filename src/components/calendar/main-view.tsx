"use client";
import React from "react";
import MonthView from "./month-view";
import Sidebar from "../sidebar";
import Summary from "../summary";
import WeekView from "./week-view";
import Header from "./header";

import { useQueryState } from "nuqs";

const MainView = () => {
  const [view] = useQueryState("view", { defaultValue: "Week" });
  console.log("main", view);
  return (
    <div className="w-full h-screen overflow-hidden flex pr-10">
      <Summary />
      <div className="h-fit w-full flex justify-center items-center flex-col pl-4">
        <Header />
        <div className="">
          {view === "Month" && <MonthView />}
          {view === "Week" && <WeekView />}
        </div>
        <div className="h-24 w-full"></div>
      </div>
    </div>
  );
};

export default MainView;
