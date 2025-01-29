"use client";
import React from "react";
import { IoIosMore } from "react-icons/io";

const TaskCard = ({
  members,
  name,
  teamIndex,
  setActiveCard,
  index,
}: {
  members: any;
  name: string;
  teamIndex: number;
  setActiveCard: any;
  index: number;
}) => {
  return (
    <article
      className="w-full min-h-36 h-fit shadow-md border rounded-md bg-white active:opacity-50 active:border-black active:cursor-grabbing flex flex-col justify-between"
      draggable
      onDrag={() => setActiveCard({ fromTeam: teamIndex, index })}
      onDragEnd={() => setActiveCard(null)}
    >
      <div className="w-full h-fit">
        <div className="border-b pb-1 flex items-center px-2 justify-between">
          <div>
            <p className="text-xs text-start pt-1">{name}</p>
            <div className="flex flex-wrap text-[0.5rem]">
              <p className="size-5 rounded-full border grid place-content-center">
                AG
              </p>
              <p className="size-5 rounded-full border grid place-content-center">
                SN
              </p>
              <p className="size-5 rounded-full border grid place-content-center">
                G
              </p>
            </div>
          </div>
          <button>
            <IoIosMore />
          </button>
        </div>
        <div className="min-h-10 h-fit w-full px-2 py-1">
          <div className="text-[0.6rem] flex items-center justify-between">
            <p>Priority: High</p>
            <p>Due: 22/02/2025</p>
          </div>
          <div className="w-full h-1 border rounded-full relative">
            <div className="w-[40%] h-full bg-gray-600 rounded-full"></div>
          </div>
          <div className="size-full text-[0.6rem] leading-3 pt-1">
            <p>Key:</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <div className="h-fit w-full border-t shrink-0 px-1 pt-1 text-[0.6rem] text-gray-500">
        <p className="leading-3">
          Last update: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci ex repellat veritatis facere asperiores molestiae unde
          provident neque ullam cumque! - subhash
        </p>
        <p className="w-full text-end">29/01/2025, 12:30PM</p>
      </div>
    </article>
  );
};

export default TaskCard;
