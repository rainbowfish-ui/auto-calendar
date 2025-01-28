"use client";
import React from "react";

const TaskCard = ({
  members,
  name,
  setActiveCard,
  index,
}: {
  members: any;
  name: string;
  setActiveCard: any;
  index: number;
}) => {
  return (
    <article
      className="w-full h-36 shadow-md border rounded-md bg-white p-1 active:opacity-50 active:border-black active:cursor-grabbing"
      draggable
      onDrag={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="text-xs font-semibold text-center">{name}</p>
    </article>
  );
};

export default TaskCard;
