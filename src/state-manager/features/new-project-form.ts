import { createSlice } from "@reduxjs/toolkit";

type Team = {
  name: string;
  members: string[];
  id: string;
};

export type ProjectsForm = {
  id: string;
  name: string;
  logo: string;
  teams: Team[];
};

const initialState: ProjectsForm = {
  logo: "",
  name: "vectal AI",
  teams: [
    { name: "Web", members: ["subhash@cs.com"], id: "12234" },
    { name: "AI", members: ["david.o@vai.com"], id: "2345" },
  ],
  id: "",
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
    setTeams: create.reducer<ProjectsForm["teams"]>((state, action) => {
      state.teams = action.payload;
    }),
  }),
});

export const { setLogo, setName, setTeams, setId } = projectForm.actions;
export default projectForm.reducer;
