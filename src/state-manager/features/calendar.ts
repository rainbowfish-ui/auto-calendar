import { createSlice } from "@reduxjs/toolkit";

export type CalendarType = {
  view: "Week" | "Month";
};

const initialState: CalendarType = {
  view: "Week",
};

const calendar = createSlice({
  name: "calendar",
  initialState: initialState,
  reducers: (create) => ({
    setCalendarView: create.reducer<CalendarType["view"]>((state, action) => {
      state.view = action.payload;
    }),
  }),
});

export const { setCalendarView } = calendar.actions;
export default calendar.reducer;
