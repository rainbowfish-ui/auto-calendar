import { createSlice } from "@reduxjs/toolkit";

export type ProjectsForm = {
  id: string;
  name: string;
  description: string;
  logo: string;
};

const initialState: ProjectsForm = {
  id: "",
  logo: "",
  name: "",
  description: "",
};

const projectForm = createSlice({
  name: "project-form",
  initialState: initialState,
  reducers: (create) => ({
    setId: create.reducer<string>((state, action) => {
      state.id = action.payload;
    }),
    setLogo: create.reducer<string>((state, action) => {
      state.logo = action.payload;
    }),
    setName: create.reducer<string>((state, action) => {
      state.name = action.payload;
    }),
    setDescription: create.reducer<string>((state, action) => {
      state.description = action.payload;
    }),
  }),
});

export const { setLogo, setName, setId, setDescription } = projectForm.actions;
export default projectForm.reducer;
