import { NextResponse } from "next/server";
import { connectToDatabase } from "@/db/config";
import Project from "@/models/project";

type ProjectResponse = {
  id: string;
  name: string;
};

export const GET = async (): Promise<NextResponse> => {
  try {
    await connectToDatabase();

    const projects = await Project.find().select("name");

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
