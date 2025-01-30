"use server";
import { BASE_URL } from "./constants";

export const createNewProject = async (body: any) => {
  const project = await fetch(`${BASE_URL}/api/project`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return project.json();
};
