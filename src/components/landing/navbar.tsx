import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 sticky top-0 px-40 z-50 dashed-bottom-border">
      <div className="size-full bg-white dashed-vertical-border flex items-center justify-between px-10">
        <div className="">logo</div>
        <Link
          href="/tasks"
          className="px-6 py-2 rounded-full shadow-md bg-[#161616] text-white font-semibold text-xl hover:scale-95 transition-transform"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
