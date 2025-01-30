import Tasks from "@/components/tasks";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Task",
  description: "Project by subhash",
};

const TasksPage = () => {
  return <Tasks />;
};

export default TasksPage;
