"use server";
import { BASE_URL } from "./constants";

export const getProjectById = async (projectId: string) => {
  const project = await fetch(
    `${BASE_URL}/api/project?projectId=${projectId}`,
    {
      method: "GET",
    }
  );
  return project.json();
};
