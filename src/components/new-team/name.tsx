"use client";
import { setName } from "@/state-manager/features/new-team-form";
import { RootState } from "@/state-manager/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Name = () => {
  const { name } = useSelector((state: RootState) => state.newTeamForm);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold">Name</p>
      <input
        placeholder="name"
        className="outline-none border rounded-md p-2 w-full"
        onChange={handleChange}
        value={name}
      />
    </div>
  );
};

export default Name;
