"use client";
import { setContext } from "@/state-manager/features/new-team-form";
import { RootState } from "@/state-manager/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Context = () => {
  const { context } = useSelector((state: RootState) => state.newTeamForm);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setContext(e.target.value));
  };
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold">Context</p>
      <textarea
        placeholder="context"
        className="outline-none border rounded-md px-2 py-1 w-full h-24 resize-none"
        onChange={handleChange}
        value={context}
      />
    </div>
  );
};

export default Context;
