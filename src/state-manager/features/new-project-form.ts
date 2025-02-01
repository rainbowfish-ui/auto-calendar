import { createSlice } from "@reduxjs/toolkit";

export type ProjectsForm = {
  id: string;
  name: string;
  context: string;
  logo: string;
};

const initialState: ProjectsForm = {
  id: "",
  logo: "",
  name: "",
  context: "",
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
    setContext: create.reducer<string>((state, action) => {
      state.context = action.payload;
    }),
  }),
});

export const { setLogo, setName, setId, setContext } = projectForm.actions;
export default projectForm.reducer;
