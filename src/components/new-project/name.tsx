import React from "react";

const Name = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold">Name</p>
      <input
        placeholder="name"
        className="outline-none border rounded-md px-2 py-1 w-60"
      />
    </div>
  );
};

export default Name;
