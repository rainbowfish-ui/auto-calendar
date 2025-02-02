import React from "react";

const AssignTo = () => {
  return (
    <div className="flex w-full flex-col gap-1">
      <p className="font-semibold">Assigned To</p>
      <input
        className="p-2 rounded-md border outline-none"
        placeholder="search"
      />
      <div></div>
    </div>
  );
};

export default AssignTo;
