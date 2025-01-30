import { projects } from "@/db/projects";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const projectId = req.nextUrl.searchParams.get("projectId");

  if (!projectId) {
    return NextResponse.json(
      { error: "projectId is required" },
      { status: 400 }
    );
  }

  const project = projects.find(
    (project) => project.id.toString() === projectId
  );

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
};
