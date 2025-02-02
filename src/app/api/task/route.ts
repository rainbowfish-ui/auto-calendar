import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/db/config";
import Task from "@/models/task";

export const GET = async (): Promise<NextResponse> => {
  try {
    await connectToDatabase();

    const projects = await Task.find().select("name");

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const { name, status, priority, assignedTo, progress, due, keyPoints } =
      await req.json();

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const task = {
      name,
      status,
      priority,
      assignedTo,
      progress,
      due,
      keyPoints,
    };
    const newTask = new Task(task);
    const savedProject = await newTask.save();
    

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
