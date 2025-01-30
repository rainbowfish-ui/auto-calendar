import { createSlice } from "@reduxjs/toolkit";

export type ProjectsType = {};

const initialState: ProjectsType = {};

const tasks = createSlice({
  name: "project",
  initialState: initialState,
  reducers: (create) => ({
    setProject: create.reducer<ProjectsType>((state, action) => {}),
  }),
});

export const { setProject } = tasks.actions;
export default tasks.reducer;
