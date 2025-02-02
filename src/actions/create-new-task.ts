"use server";
import { BASE_URL } from "./constants";

export const createNewTeam = async (body: {
  name: string;
  status: string;
  priority: string;
  assignedTo: string;
  progress: string;
  due: string;
  keyPoints: string;
}) => {
  try {
    const response = await fetch(`${BASE_URL}/api/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Failed to create task:", error);
    throw error;
  }
};
