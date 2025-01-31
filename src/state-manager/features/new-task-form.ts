import { createSlice } from "@reduxjs/toolkit";

export type TaskForm = {
  id: string;
  name: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  keyPoints: string[];
  members: string[];
};

const initialState: TaskForm = {
  id: "",
  keyPoints: [],
  members: [],
  name: "",
  priority: "LOW",
};

const taskForm = createSlice({
  name: "project-form",
  initialState: initialState,
  reducers: (create) => ({
    setName: create.reducer<string>((state, action) => {
      state.name = action.payload;
    }),
  }),
});

export const { setName } = taskForm.actions;
export default taskForm.reducer;
