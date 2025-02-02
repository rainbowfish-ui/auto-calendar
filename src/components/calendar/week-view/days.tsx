"use client";
import React, { useEffect, useState } from "react";
import { getWeekDays } from "@/utils/get-time";
import dayjs from "dayjs";

const Days = () => {
  const [timezone, setTimezone] = useState("");
  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = getWeekDays(dayjs());

  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  return (
    <div className="sticky top-0 w-fit h-16 flex font-semibold">
      <div className={`flex text-[0.6rem] w-24 items-end justify-end`}>
        {timezone}
      </div>
      {daysInWeek?.map((label, i) => {
        const isFirstColumn = i === 0;
        const day = isFirstColumn ? null : days[i - 1];
        const dayLabel = isFirstColumn
          ? label
          : `${label} ${day ? day.currentDate.date() : ""}`;

        return (
          <div
            key={i + label}
            className={`flex items-center justify-center w-32`}
          >
            {dayLabel}
          </div>
        );
      })}
    </div>
  );
};

export default Days;
