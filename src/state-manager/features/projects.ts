import { createSlice } from "@reduxjs/toolkit";

export type ProjectsType = {
  activeProject: string;
};

const initialState: ProjectsType = {
  activeProject: "",
};

const tasks = createSlice({
  name: "project",
  initialState: initialState,
  reducers: (create) => ({
    setActiveProject: create.reducer<string>((state, action) => {
      state.activeProject = action.payload;
    }),
  }),
});

export const { setActiveProject } = tasks.actions;
export default tasks.reducer;
