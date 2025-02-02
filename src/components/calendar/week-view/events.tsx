import React from "react";

const Events = () => {
  return (
    <div className="size-fit border-l">
      {new Array(24).fill(0)?.map((_, i) => {
        return (
          <div
            className="w-32 h-20 flex items-center justify-start border-b"
            key={`event-${i}`}
          ></div>
        );
      })}
    </div>
  );
};

export default Events;
