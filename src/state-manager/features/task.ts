import { createSlice } from "@reduxjs/toolkit";

export type TaskType = {};

const initialState: TaskType = {};

const tasks = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: (create) => ({
    setTask: create.reducer<TaskType>((state, action) => {}),
  }),
});

export const { setTask } = tasks.actions;
export default tasks.reducer;
