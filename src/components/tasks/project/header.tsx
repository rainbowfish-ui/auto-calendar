import React from "react";
import { IoIosMore } from "react-icons/io";

const Header = () => {
  return (
    <div className="border-b h-10 font-semibold w-full flex items-center justify-between px-4">
      <p>Design</p>
      <IoIosMore size={20} />
    </div>
  );
};

export default Header;
