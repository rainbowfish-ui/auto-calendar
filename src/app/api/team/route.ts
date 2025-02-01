import { connectToDatabase } from "@/db/config";
import Project from "@/models/project";
import Team from "@/models/team";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const projectId = req.nextUrl.searchParams.get("projectId");
  if (!projectId) {
    return NextResponse.json(
      { error: "projectId is required" },
      { status: 400 }
    );
  }
  const db = await connectToDatabase();
  const projectsCollection = db.collection("projects");

  const project = await projectsCollection.findOne({
    _id: new ObjectId(projectId),
  });

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }
  return NextResponse.json(project);
};

export const POST = async (req: NextRequest) => {
  try {
    const { name, description, projectId } = await req.json();
    if (!projectId) {
      return NextResponse.json(
        { error: "please select a project" },
        { status: 400 }
      );
    }
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    await connectToDatabase();

    const team = await new Team({
      name,
      description,
      members: [],
      tasks: [],
    }).save();

    await Project.updateOne(
      { _id: projectId },
      {
        $push: {
          teams: team._id,
        },
      }
    );

    return NextResponse.json({
      msg: "New team created!",
    });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
