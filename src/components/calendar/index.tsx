import React, { Suspense } from "react";
import Header from "./header";
import ActiveView from "./active-view";

const Calendar = () => {
  return (
    <div className="h-fit w-full flex justify-center items-center flex-col pl-4">
      <Suspense>
        <Header />
        <ActiveView />
      </Suspense>
    </div>
  );
};

export default Calendar;
