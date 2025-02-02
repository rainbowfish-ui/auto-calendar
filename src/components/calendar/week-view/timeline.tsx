import React from "react";

const Timeline = () => {
  return (
    <div className="w-fit h-fit">
      {new Array(24).fill(0)?.map((_, i) => {
        const hour = i % 12 || 12;
        const period = i < 12 ? "AM" : "PM";
        return (
          <div
            key={`timeline-${i}`}
            className={`w-24 h-20 flex items-end justify-end border-b text-xs`}
          >
            {`${hour} ${period}`}
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
