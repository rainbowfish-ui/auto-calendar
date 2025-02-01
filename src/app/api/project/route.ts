import { connectToDatabase } from "@/db/config";
import Project from "@/models/project";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Team from "@/models/team";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    Team; // load schema

    const projectId = req.nextUrl.searchParams.get("projectId");
    if (!projectId || !mongoose.Types.ObjectId.isValid(projectId)) {
      return NextResponse.json({ error: "Invalid projectId" }, { status: 400 });
    }

    const project = await Project.findById(projectId).populate("teams");

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const reqJson = await req.json();

    if (!reqJson.name) {
      return NextResponse.json(
        { error: "Name and description are required" },
        { status: 400 }
      );
    }

    const newProject = new Project(reqJson);
    const savedProject = await newProject.save();

    return NextResponse.json({
      msg: "New project created!",
      projectId: savedProject._id,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
