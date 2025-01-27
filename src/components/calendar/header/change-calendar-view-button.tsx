"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CalendarType } from "@/state-manager/features/calendar";
import { useQueryState } from "nuqs";

const ChangeCalendarViewButton = () => {
  const views: CalendarType["view"][] = ["Week", "Month"];
  const [viewSelector, setViewSelector] = useState(false);
  const [view, setView] = useQueryState("view", { defaultValue: "Week" });

  const handleSelector = (e: React.MouseEvent) => {
    setViewSelector(!viewSelector);
    const target = e.target as HTMLElement;
    if (target.getAttribute("data-calendar-view")) {
      const view = target.getAttribute(
        "data-calendar-view"
      ) as CalendarType["view"];
      setView(view);
    }
  };

  return (
    <div
      className="px-4 py-1 rounded-md border relative group cursor-pointer"
      onClick={handleSelector}
    >
      <p className="flex items-center gap-2">
        {view} <IoIosArrowDown />
      </p>
      {viewSelector && (
        <div className="absolute bg-white border rounded-md flex flex-col items-center justify-center top-8 left-0 w-full z-10">
          {views.map((view) => {
            return (
              <p
                className="border-b size-full flex items-center justify-center py-1"
                key={view}
                data-calendar-view={view}
              >
                {view}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ChangeCalendarViewButton;
