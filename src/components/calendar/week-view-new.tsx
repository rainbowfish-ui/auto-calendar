import { getWeekDays } from "@/utils/get-time";
import dayjs from "dayjs";
import React from "react";

const WeekViewNew = () => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = getWeekDays(dayjs());
  console.log(days);
  return (
    <section className="w-full flex border-[0.5px] h-[80vh] relative overflow-y-scroll">
      <div className="w-20 h-[200vh] border-[0.5px]"></div>
    </section>
  );
};

export default WeekViewNew;
