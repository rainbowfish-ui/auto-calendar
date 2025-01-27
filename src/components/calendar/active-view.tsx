"use client";
import { useQueryState } from "nuqs";
import React from "react";
import MonthView from "./month-view";
import WeekView from "./week-view";

const ActiveView = () => {
  const [view] = useQueryState("view", { defaultValue: "Week" });
  return (
    <div>
      {view === "Month" && <MonthView />}
      {view === "Week" && <WeekView />}
    </div>
  );
};

export default ActiveView;
