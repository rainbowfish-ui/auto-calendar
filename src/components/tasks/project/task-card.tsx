"use client";
import React from "react";
import { IoIosMore } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";

const TaskCard = ({
  members,
  name,
  teamIndex,
  setActiveCard,
  index,
  assignedTo,
  due,
  keyPoints,
  priority,
  status,
  lastUpdate,
  lastUpdateBy,
  lastUpdateOn,
  progress,
}: {
  members: any;
  name: string;
  teamIndex: number;
  setActiveCard: any;
  index: number;
  assignedTo: string[];
  due: string;
  status: string;
  lastUpdate: string;
  lastUpdateBy: string;
  priority: string;
  lastUpdateOn: string;
  progress: string;
  keyPoints: string;
}) => {
  return (
    <article
      className="w-full min-h-36 h-fit shadow-md border rounded-md bg-white active:opacity-50 active:border-black active:cursor-grabbing flex flex-col justify-between"
      style={{
        borderColor: `${
          Number(progress) <= 10
            ? "red"
            : Number(progress) <= 50
            ? "orange"
            : "green"
        }`,
      }}
      draggable
      onDrag={() => setActiveCard({ fromTeam: teamIndex, index })}
      onDragEnd={() => setActiveCard(null)}
    >
      <div className="w-full h-fit">
        <div className="border-b pb-1 flex items-center px-2 justify-between">
          <div>
            <p className="text-xs text-start pt-1">{name}</p>
            <div className="flex flex-wrap text-[0.5rem]">
              {assignedTo?.map((name, i) => {
                return (
                  <p
                    className="size-5 rounded-full border grid place-content-center uppercase"
                    key={name + i}
                  >
                    {name.substring(0, 2)}
                  </p>
                );
              })}
            </div>
          </div>
          <button>
            <IoIosMore />
          </button>
        </div>
        <div className="min-h-10 h-fit w-full px-2 py-1">
          <div className="text-[0.6rem] flex items-center justify-between">
            <p>Priority: {priority}</p>
            <p>Due: {due}</p>
          </div>
          <div className="w-full h-1 border rounded-full relative">
            <div
              className="h-full bg-gray-600 rounded-full"
              style={{
                width: `${progress}%`,
                backgroundColor: `${
                  Number(progress) <= 10
                    ? "red"
                    : Number(progress) <= 50
                    ? "orange"
                    : "green"
                }`,
              }}
            ></div>
          </div>
          <div className="size-full text-[0.6rem] leading-3 pt-1 gap-1">
            <p>Key Points:</p>
            {keyPoints
              ?.toString()
              .split(";")
              ?.map((point, i) => {
                return (
                  <div className="flex gap-1" key={"point" + i}>
                    <TbPointFilled className="pt-1" />
                    <p>{point}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="h-fit w-full border-t shrink-0 px-1 pt-1 text-[0.6rem] text-gray-500">
        <p className="leading-3">
          Last update: {lastUpdate} -{lastUpdateBy}
        </p>
        <p className="w-full text-end"> {lastUpdateOn}</p>
      </div>
    </article>
  );
};

export default TaskCard;
