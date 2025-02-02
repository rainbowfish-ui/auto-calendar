"use client";
import { setDue } from "@/state-manager/features/new-task-form";
import { RootState } from "@/state-manager/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const DueDate = () => {
  const { due } = useSelector((state: RootState) => state.newTaskForm);
  const dispatch = useDispatch();
  const minDue = new Date().toISOString().split("T")[0];
  const maxDue = new Date(new Date().setFullYear(new Date().getFullYear() + 10))
    .toISOString()
    .split("T")[0];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
        min={minDue}
        max={maxDue}
      />
    </div>
  );
};

export default DueDate;
