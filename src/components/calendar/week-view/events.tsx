import React from "react";

const Events = () => {
  return (
    <div className="size-fit border-l">
      {new Array(96).fill(0)?.map((_, i) => {
        return (
          <div
            className={`w-32 h-[1.25rem] flex items-center justify-start ${
              (i + 1) % 4 === 0 ? "border-b" : ""
            }`}
            key={`event-${i}`}
          ></div>
        );
      })}
    </div>
  );
};

export default Events;
