"use server";
import { BASE_URL } from "./constants";

export const createNewProject = async (body: any) => {
  try {
    const response = await fetch(`${BASE_URL}/api/project`, {
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
    console.error("Failed to create project:", error);
    throw error;
  }
};
