import React from "react";
import MonthView from "./month-view";
import Sidebar from "../sidebar";
import Summary from "./summary";
import WeekView from "./week-view";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";

const MainView = () => {
  return (
    <div className="w-full h-screen flex pr-10">
      <Sidebar />
      <Summary />
      <div className="size-full flex justify-center items-center flex-col pl-4">
        <div className="h-24 w-full flex items-center justify-between">
          <div className="rounded-md items-center flex gap-4">
            <p className="px-4 border rounded-md py-1">Today</p>
            <button className="p-1 rounded-full border border-white hover:bg-[#F4F5F7] hover:border-[#D6D7E0]">
              <IoIosArrowBack />
            </button>
            <button className="p-1 rounded-full border border-white hover:bg-[#F4F5F7] hover:border-[#D6D7E0]">
              <IoIosArrowForward />
            </button>
            <p className="font-semibold">Jan - Feb 2024</p>
          </div>
          <div className="px-4 py-1 rounded-md border relative group">
            <p className="flex items-center gap-2">
              Week <IoIosArrowDown />
            </p>
            <div className="absolute bg-white border rounded-md hidden group-hover:flex flex-col items-center justify-center top-8 left-0 w-full">
              <p className="border-b size-full flex items-center justify-center py-1">
                Week
              </p>
              <p className="size-full flex items-center justify-center py-1">
                Month
              </p>
            </div>
          </div>
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
