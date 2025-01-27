"use client";
import React from "react";
import MonthView from "./month-view";
import Sidebar from "../sidebar";
import Summary from "./summary";
import WeekView from "./week-view";
import Header from "./header";
import { useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import WeekViewNew from "./week-view-new";
import { getWeekDays } from "@/utils/get-time";
import dayjs from "dayjs";

const MainView = () => {
  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = getWeekDays(dayjs());
  const { view } = useSelector((state: RootState) => state.calendar);
  return (
    <div className="w-full h-screen overflow-hidden flex pr-10">
      <Sidebar />
      <Summary />
      <div className="h-fit w-full flex justify-center items-center flex-col pl-4">
        <Header />
        <div className="w-full border-[0.5px]">
          {view === "Month" && <MonthView />}
          {/* {view === "Week" && <WeekView />} */}
          {view === "Week" && (
            <div className="size-full relative">
              <div className="sticky top-0 w-full h-16 pl-20 flex">
                {days.map((day, i) => {
                  return (
                    <div className="size-full flex items-center justify-center border-[0.5px]">
                      {`${daysInWeek[i]} ${day.currentDate.toDate().getDate()}`}
                    </div>
                  );
                })}
              </div>
              <WeekViewNew />
            </div>
          )}
        </div>
        <div className="h-24 w-full"></div>
      </div>
    </div>
  );
};

export default MainView;
