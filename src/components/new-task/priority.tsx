"use client";
import React from "react";
import { RootState } from "@/state-manager/store";
import { useDispatch, useSelector } from "react-redux";
import { setPriority, TaskForm } from "@/state-manager/features/new-task-form";
import { FaCheck } from "react-icons/fa";

const Priority = () => {
  const priorities: TaskForm["priority"][] = ["LOW", "MEDIUM", "HIGH"];
  const { priority: currentPriority } = useSelector(
    (state: RootState) => state.newTaskForm
  );
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent) => {
    const action = (e.target as HTMLElement).getAttribute("data-action");
    if (action === "set-priority") {
      const priority = (e.target as HTMLElement).getAttribute("data-priority");
      if (!priority) return;
      dispatch(setPriority(priority as TaskForm["priority"]));
    }
  };
  return (
    <div className="flex flex-col gap-1" onClick={handleClick}>
      <p className="font-semibold ">Priority</p>
      <div className="w-full flex gap-2 items-center">
        {priorities?.map((priority) => {
          return (
            <button
              className={`px-2 py-1 border rounded-lg flex items-center gap-1 active:scale-95 transition-transform ${
                priority === currentPriority ? "bg-[#F9FAFC]" : "bg-white"
              }`}
              key={priority}
              data-priority={priority}
              data-action="set-priority"
            >
              {priority}
              {priority === currentPriority && <FaCheck />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Priority;
