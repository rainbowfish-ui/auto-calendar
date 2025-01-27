import { getWeekDays } from "@/utils/get-time";
import dayjs from "dayjs";
import React from "react";

const Days = () => {
  const daysInWeek = ["+5:30", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = getWeekDays(dayjs());

  return (
    <div className="sticky top-0 w-fit h-16 flex font-semibold">
      {daysInWeek.map((label, i) => {
        const isFirstColumn = i === 0;
        const day = isFirstColumn ? null : days[i - 1];
        const dayLabel = isFirstColumn
          ? label
          : `${label} ${day ? day.currentDate.date() : ""}`;

        return (
          <div
            key={i + label}
            className={`flex ${
              isFirstColumn
                ? "text-xs w-24 items-end justify-end"
                : "items-center justify-center w-32"
            }`}
          >
            {dayLabel}
          </div>
        );
      })}
    </div>
  );
};

export default Days;
