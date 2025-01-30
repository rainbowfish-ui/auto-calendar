"use server";

const getAllProjectsName = async () => {
  const baseUrl = process.env.BASE_URL;
  const projects = await fetch(`${baseUrl}/api/projects-meta/name`, {
    method: "GET",
  });
  return projects;
};
