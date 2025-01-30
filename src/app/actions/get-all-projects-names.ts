"use server";
import { BASE_URL } from "./constants";

export const getAllProjectsNames = async () => {
  const projects = await fetch(`${BASE_URL}/api/projects-meta/names`, {
    method: "GET",
  });
  return projects.json();
};
