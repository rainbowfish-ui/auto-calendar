import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ChangeCalendarViewButton from "./change-calendar-view-button";

const Header = () => {
  return (
    <div className="h-16 w-full flex items-center justify-between px-5">
      <div className="rounded-md items-center flex gap-4">
        <p className="px-4 border rounded-md py-1">Today</p>
        <button className="p-1 rounded-full border border-white hover:bg-[#F4F5F7] hover:border-[#D6D7E0]">
          <IoIosArrowBack />
        </button>
        <button className="p-1 rounded-full border border-white hover:bg-[#F4F5F7] hover:border-[#D6D7E0]">
          <IoIosArrowForward />
        </button>
        <p className="font-semibold">Jan - Feb 2024</p>
      </div>
      <ChangeCalendarViewButton />
    </div>
  );
};

export default Header;
