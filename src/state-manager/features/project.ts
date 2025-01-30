import { createSlice } from "@reduxjs/toolkit";

export type ProjectsType = {
  activeProject: string;
  project: any;
};

const initialState: ProjectsType = {
  activeProject: "",
  project: {},
};

const project = createSlice({
  name: "project",
  initialState: initialState,
  reducers: (create) => ({
    setActiveProject: create.reducer<string>((state, action) => {
      state.activeProject = action.payload;
    }),
    setProject: create.reducer<any>((state, action) => {
      state.project = action.payload;
    }),
  }),
});

export const { setActiveProject, setProject } = project.actions;
export default project.reducer;
