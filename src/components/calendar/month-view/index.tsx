"use client";
import { getMonth } from "@/utils/get-time";
import React from "react";

const MonthView = () => {
  const currentMonth = getMonth();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <section className="size-full h-[80vh] flex">
      <div className="flex flex-col w-full">
        <div className="flex font-semibold">
          {weekDays.map((day) => {
            return (
              <div
                className="w-32 h-16 flex items-center justify-center border-[0.5px]"
                key={day}
              >
                {day}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-7 grid-rows-5">
          {currentMonth.map((week) => {
            return week.map((day, index) => {
              return (
                <div
                  key={day.format("D") + index}
                  className="w-32 h-24 flex justify-center items-center border-[0.5px]"
                >
                  {day.format("D")}
                </div>
              );
            });
          })}
        </div>
      </div>
    </section>
  );
};

export default MonthView;
