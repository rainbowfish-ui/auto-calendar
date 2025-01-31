"use client";
import { setDescription } from "@/state-manager/features/new-project-form";
import { RootState } from "@/state-manager/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Description = () => {
  const { description } = useSelector(
    (state: RootState) => state.newProjectForm
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setDescription(e.target.value));
  };
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold">Description</p>
      <textarea
        placeholder="description"
        className="outline-none border rounded-md px-2 py-1 w-full h-24 resize-none"
        onChange={handleChange}
        value={description}
      />
    </div>
  );
};

export default Description;
