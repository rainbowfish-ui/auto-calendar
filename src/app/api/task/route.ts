import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/db/config";
import Task from "@/models/task";
import Team from "@/models/team";

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
    const reqBody = await req.json();

    if (!reqBody.name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const teamId = reqBody.activeTeamId;
    const newTask = new Task({ ...reqBody });
    const savedTask = await newTask.save();

    const res = await Team.findByIdAndUpdate(
      teamId,
      {
        $push: { tasks: savedTask._id },
      },
      { new: true }
    );

    return NextResponse.json({
      msg: "New task created!",
      taskId: savedTask._id,
      team: res,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
