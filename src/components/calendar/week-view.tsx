import { getWeekDays } from "@/utils/get-time";
import dayjs from "dayjs";
import React from "react";

const WeekView = () => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = getWeekDays(dayjs());
  console.log(days);
  return (
    <section className="size-full flex border-[0.5px]">
      <div className="w-20 h-full border-[0.5px] mt-10">
        <div className="size-full"></div>
      </div>
      <div className="size-full">
        <div className="flex items-start justify-evenly w-full h-fit border-[0.5px]">
          {days.map((day, index) => {
            return (
              <div
                className="w-full h-10 flex items-center justify-center border-[0.5px] gap-2"
                key={day.currentDate.toDate().getDate() + index}
              >
                <p>{`${weekDays[index]} ${day.currentDate
                  .toDate()
                  .getDate()}`}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-start justify-evenly size-full border-[0.5px] border-t-0">
          {weekDays.map((_, index) => {
            return (
              <div
                className="w-full h-full py-4 flex items-center justify-center border-[0.5px] flex-col"
                key={index}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeekView;
