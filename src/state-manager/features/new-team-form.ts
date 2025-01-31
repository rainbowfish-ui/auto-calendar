import { createSlice } from "@reduxjs/toolkit";

export type TeamForm = {
  id: string;
  name: string;
  description: string;
  logo: string;
};

const initialState: TeamForm = {
  id: "",
  logo: "",
  name: "",
  description: "",
};

const teamForm = createSlice({
  name: "team-form",
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

export const { setLogo, setName, setId, setDescription } = teamForm.actions;
export default teamForm.reducer;
