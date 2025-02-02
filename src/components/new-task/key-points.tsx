"use client";
import { setContext } from "@/state-manager/features/new-task-form";
import { RootState } from "@/state-manager/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const KeyPoints = () => {
  const { context } = useSelector((state: RootState) => state.newTaskForm);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setContext(e.target.value));
  };
  return (
    <div className="flex flex-col gap-1 w-full">
      <p className="font-semibold">
        Key points
        <span className="font-normal text-gray-600">
          {" "}
          (add ; after each point)
        </span>
      </p>
      <textarea
        placeholder="points to remember"
        className="outline-none border rounded-md p-2 w-full h-20 resize-none"
        onChange={handleChange}
        value={context}
      />
    </div>
  );
};

export default KeyPoints;
