import { createSlice } from "@reduxjs/toolkit";

export type TaskForm = {
  id: string;
  name: string;
  description: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  keyPoints: string[];
  members: string[];
};

const initialState: TaskForm = {
  id: "",
  keyPoints: [],
  members: [],
  name: "",
  description: "",
  priority: "LOW",
};

const taskForm = createSlice({
  name: "task-form",
  initialState: initialState,
  reducers: (create) => ({
    setName: create.reducer<string>((state, action) => {
      state.name = action.payload;
    }),
    setDescription: create.reducer<string>((state, action) => {
      state.description = action.payload;
    }),
  }),
});

export const { setName, setDescription } = taskForm.actions;
export default taskForm.reducer;
