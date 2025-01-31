import { NextResponse } from "next/server";
import { connectToDatabase } from "@/db/config";
import { ObjectId } from "mongodb";

type Project = {
  id: string;
  name: string;
};

export const GET = async (): Promise<NextResponse> => {
  try {
    const db = await connectToDatabase();
    const projectsCollection = db.collection("projects");

    const projects = await projectsCollection
      .find({}, { projection: { _id: 1, name: 1 } })
      .toArray();

    const res: Project[] = projects.map((proj) => ({
      id: (proj._id as ObjectId).toString(),
      name: proj.name,
    }));

    return NextResponse.json(res);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
