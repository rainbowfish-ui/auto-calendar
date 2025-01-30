import React from "react";
import { HiOutlineUpload } from "react-icons/hi";

const Logo = () => {
  return (
    <div className="w-fit flex gap-1 flex-col">
      <p className="font-semibold">Logo</p>
      <div className="flex items-center gap-4">
        <div className="size-20 border border-dashed rounded-md flex items-center justify-center group">
          <HiOutlineUpload
            size={24}
            className="text-[#a0a2a6] group-hover:scale-105 transition-transform cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-1 text-[#828386]">
          <button className="px-4 py-1 rounded-md border shadow-md w-fit">
            upload
          </button>
          <p>Recommended size 1:1, up to 10MB.</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
