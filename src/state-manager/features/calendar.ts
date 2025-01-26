import { createSlice } from "@reduxjs/toolkit";

export type Calendar = {
  view: "week" | "month";
};

const initialState: Calendar = {
  view: "week",
};

const calendar = createSlice({
  name: "calendar",
  initialState: initialState,
  reducers: (create) => ({
    setView: create.reducer<Calendar["view"]>((state, action) => {
      state.view = action.payload;
    }),
  }),
});

export const { setView } = calendar.actions;
export default calendar.reducer;
