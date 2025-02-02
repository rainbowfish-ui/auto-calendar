"use client";
import React from "react";
import { RootState } from "@/state-manager/store";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, TaskForm } from "@/state-manager/features/new-task-form";
import { FaCheck } from "react-icons/fa";

const Status = () => {
  const statusTypes: TaskForm["status"][] = [
    "Not Started",
    "In Progress",
    "Completed",
  ];
  const { status: currentStatus } = useSelector(
    (state: RootState) => state.newTaskForm
  );
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent) => {
    const action = (e.target as HTMLElement).getAttribute("data-action");
    if (action === "set-status") {
      const status = (e.target as HTMLElement).getAttribute("data-status");
      if (!status) return;
      dispatch(setStatus(status as TaskForm["status"]));
    }
  };
  return (
    <div className="flex flex-col gap-1" onClick={handleClick}>
      <p className="font-semibold ">Status</p>
      <div className="w-full flex gap-2 items-center">
        {statusTypes.map((status) => {
          return (
            <button
              className={`px-2 py-1 border rounded-lg flex items-center gap-1 active:scale-95 transition-transform ${
                status === currentStatus ? "bg-[#F9FAFC]" : "bg-white"
              }`}
              key={status}
              data-status={status}
              data-action="set-status"
            >
              {status}
              {status === currentStatus && <FaCheck />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Status;
