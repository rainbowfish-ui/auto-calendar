"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";

const AiAssistant = () => {
  const [pinned, setPin] = useState(false);
  const [chatActive, setChatActive] = useState(false);
  const ref = useRef(null);

  return (
    <div
      className={`absolute left-16 bottom-0 bg-[#F9FAFC] z-10 border rounded-t-lg w-80 h-10 hover:h-[30rem] transition-all ${
        pinned ? "h-[30rem]" : ""
      }`}
      onMouseEnter={() => setChatActive(true)}
      onMouseLeave={() => {
        if (!pinned) setChatActive(false);
      }}
    >
      <div className="h-10 border-b px-4 flex items-center justify-between">
        <h4>AI Agent</h4>
        <button onClick={() => setPin((pin) => !pin)}>
          {pinned ? <BsPinAngleFill /> : <BsPinAngle />}
        </button>
      </div>
      {chatActive && (
        <div className="size-full flex flex-col text-xs">
          <div className="w-full h-[80%] p-2 flex flex-col gap-2">
            <div className="w-full text-white rounded-full flex items-center justify-end">
              <div className="w-fit px-2 py-1 bg-black rounded-full">Hello</div>
            </div>
            <div className="max-w-[85%] py-1 w-fit rounded-full">
              Hi I'm you AI Agent. How can I help you?
            </div>
          </div>
          <div className="w-full h-10 border-t shrink-0 flex items-center justify-center pr-2">
            <input
              className="size-full bg-transparent outline-none pl-2 text-sm"
              placeholder="Ask AI"
              ref={ref}
            />
            <button className="p-2 rounded-full border grid place-content-center">
              <FaArrowUp />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;
