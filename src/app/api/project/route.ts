import { connectToDatabase } from "@/db/config";
import { projects } from "@/db/projects";
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
    const reqJson = await req.json();

    if (!reqJson.name || !reqJson.description) {
      return NextResponse.json(
        { error: "Name and description are required" },
        { status: 400 }
      );
    }

    const db = await connectToDatabase();
    const projectsCollection = db.collection("projects");

    const result = await projectsCollection.insertOne(reqJson);

    return NextResponse.json({
      msg: "New project created!",
      projectId: result.insertedId,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
