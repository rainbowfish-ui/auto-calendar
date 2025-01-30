import { projects } from "@/db/projects";
import { NextResponse } from "next/server";

export const GET = () => {
  const res = projects.map((proj) => ({ id: proj.id, name: proj.name }));
  return NextResponse.json(res);
};
