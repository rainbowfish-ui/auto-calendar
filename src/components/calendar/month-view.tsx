"use client";
import { getMonth } from "@/utils/get-time";
import React from "react";

const MonthView = () => {
  const currentMonth = getMonth();

  return (
    <section className="grid grid-cols-7 grid-rows-5 size-fit rounded-xl gap-1 ">
      {currentMonth.map((week) => {
        return week.map((day, index) => {
          return (
            <div
              key={day.format("D") + index}
              className="flex justify-center items-center border rounded-lg size-28"
            >
              {day.format("D")}
            </div>
          );
        });
      })}
    </section>
  );
};

export default MonthView;
