"use client";
import { getMonth } from "@/utils/get-time";
import React from "react";

const MonthView = () => {
  const currentMonth = getMonth();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <section className="size-full h-[80vh] flex">
      <div className="grid grid-cols-7 grid-rows-6 w-full border-[0.5px]">
        {weekDays.map((day) => {
          return (
            <div className="w-full flex items-center justify-center border-[0.5px]">
              {day}
            </div>
          );
        })}
        {currentMonth.map((week) => {
          return week.map((day, index) => {
            return (
              <div
                key={day.format("D") + index}
                className="flex justify-center items-center border-[0.5px] size-full"
              >
                {day.format("D")}
              </div>
            );
          });
        })}
      </div>
    </section>
  );
};

export default MonthView;
