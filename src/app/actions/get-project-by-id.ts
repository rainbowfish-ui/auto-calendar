"use server";

const getProjectById = async (projectId: string) => {
  const baseUrl = process.env.BASE_URL;
  const project = await fetch(
    `${baseUrl}/api/projects?projectId=${projectId}`,
    {
      method: "GET",
    }
  );
  return project;
};
