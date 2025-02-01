import { createSlice } from "@reduxjs/toolkit";

export type TeamForm = {
  id: string;
  name: string;
  context: string;
  logo: string;
};

const initialState: TeamForm = {
  id: "",
  logo: "",
  name: "",
  context: "",
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
    setContext: create.reducer<string>((state, action) => {
      state.context = action.payload;
    }),
  }),
});

export const { setLogo, setName, setId, setContext } = teamForm.actions;
export default teamForm.reducer;
