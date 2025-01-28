import React from "react";
import Header from "./header";
import ActiveView from "./active-view";

const Calendar = () => {
  return (
    <div className="h-fit w-full flex justify-center items-center flex-col pl-4">
      <Header />
      <ActiveView />
      <div className="h-24 w-full"></div>
    </div>
  );
};

export default Calendar;
