import { createSlice } from "@reduxjs/toolkit";

export type TaskForm = {
  id: string;
  name: string;
  context: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  keyPoints: string[];
  members: string[];
};

const initialState: TaskForm = {
  id: "",
  keyPoints: [],
  members: [],
  name: "",
  context: "",
  priority: "LOW",
};

const taskForm = createSlice({
  name: "task-form",
  initialState: initialState,
  reducers: (create) => ({
    setName: create.reducer<string>((state, action) => {
      state.name = action.payload;
    }),
    setContext: create.reducer<string>((state, action) => {
      state.context = action.payload;
    }),
  }),
});

export const { setName, setContext } = taskForm.actions;
export default taskForm.reducer;
