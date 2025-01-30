import React from "react";
import Calendar from "@/components/calendar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Calendar",
  description: "Project by subhash",
};

const CalendarPage = () => {
  return <Calendar />;
};

export default CalendarPage;
