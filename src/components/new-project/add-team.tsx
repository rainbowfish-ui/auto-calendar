"use client";
import React from "react";
import { setTeams } from "@/state-manager/features/new-project-form";
import { RootState } from "@/state-manager/store";
import { CgClose } from "react-icons/cg";
import { HiPlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

const AddTeam = () => {
  const { teams } = useSelector((state: RootState) => state.newProjectForm);
  const dispatch = useDispatch();

  const addTeam = () => {
    const randomKey = Math.floor(1000 + Math.random() * 9000);
    const newTeams = [
      ...teams,
      {
        name: `team${teams.length + 1}`,
        members: ["subhash"],
        id: randomKey.toString(),
      },
    ];
    dispatch(setTeams(newTeams));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    {
      type,
      id,
    }: {
      type: "TEAM_NAME" | "MEMBER";
      id: string;
    }
  ) => {
    switch (type) {
      case "TEAM_NAME":
        const temp = teams.map((team) => {
          if (team.id === id) {
            return { ...team, name: e.target.value };
          }
          return team;
        });
        dispatch(setTeams(temp));
    }
  };

  return (
    <div>
      <p className="font-semibold">Add Teams</p>
      <div className="flex gap-10 flex-wrap">
        {teams.map(({ members, name, id }) => {
          return (
            <div className="flex flex-col gap-1" key={id}>
              <input
                value={name}
                placeholder="Team name"
                className="outline-none border rounded-md px-2 py-1 w-60"
                onChange={(e) => handleChange(e, { type: "TEAM_NAME", id })}
              />
              <input
                placeholder="Search Member"
                className="outline-none border rounded-md px-2 py-1 w-60"
              />
              <div className="flex gap-1 flex-wrap">
                {members.map((mem) => {
                  return (
                    <div
                      className="outline-none border rounded-md px-2 py-1 w-fit flex items-center justify-center gap-1"
                      key={mem}
                    >
                      {mem} <CgClose />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="mt-10 flex items-center gap-2 border px-2 py-1 rounded-md bg-[#F9FAFC] active:scale-95 transition-transform"
        onClick={addTeam}
      >
        <HiPlus size={18} /> Add Team
      </button>
    </div>
  );
};

export default AddTeam;
