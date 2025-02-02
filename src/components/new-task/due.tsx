"use client";
import { setDue } from "@/state-manager/features/new-task-form";
import { RootState } from "@/state-manager/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const DueDate = () => {
  const { due } = useSelector((state: RootState) => state.newTaskForm);
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDue(e.target.value));
  };
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold">Due</p>
      <input
        type="date"
        value={due}
        className="px-2 py-1 border rounded-md"
        onChange={handleChange}
        min={new Date().toISOString().split("T")[0]}
      />
    </div>
  );
};

export default DueDate;
