import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { HiPlus } from "react-icons/hi";

const AddTeam = () => {
  const [teams, setTeams] = useState([
    { name: "team1", members: ["sub", "har", "sh"], key: "1234" },
    { name: "team2", members: ["sub", "har", "sh"], key: "2345" },
  ]);

  const addTeam = () => {
    const randomKey = Math.floor(1000 + Math.random() * 9000);
    setTeams((prev) => [
      ...prev,
      {
        name: `team${prev.length}`,
        members: ["subhash"],
        key: randomKey.toString(),
      },
    ]);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    {
      type,
      key,
    }: {
      type: "TEAM_NAME" | "MEMBER";
      key: string;
    }
  ) => {
    console.log(key, type);
    switch (type) {
      case "TEAM_NAME":
        setTeams((prevTeams) => {
          const temp = prevTeams.map((team) => {
            if (team.key === key) {
              return { ...team, name: e.target.value };
            }
            return team;
          });
          return temp;
        });
    }
  };

  return (
    <div className="min-h-60">
      <p className="font-semibold">Add Teams</p>
      <div className="flex gap-10 flex-wrap">
        {teams.map(({ members, name, key }) => {
          return (
            <div className="flex flex-col gap-1" key={key}>
              <input
                value={name}
                placeholder="Team name"
                className="outline-none border rounded-md px-2 py-1 w-60"
                onChange={(e) => handleChange(e, { type: "TEAM_NAME", key })}
              />
              <input
                placeholder="Search Member"
                className="outline-none border rounded-md px-2 py-1 w-60"
              />
              <div className="flex gap-1 flex-wrap">
                {members.map((mem) => {
                  return (
                    <div className="outline-none border rounded-md px-2 py-1 w-fit flex items-center justify-center gap-1">
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
