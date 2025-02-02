"use server";
import { TaskForm } from "@/state-manager/features/new-task-form";
import { BASE_URL } from "./constants";

export const createNewTask = async (body: TaskForm) => {
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
