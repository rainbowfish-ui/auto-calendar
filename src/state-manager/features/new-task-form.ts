import { createSlice } from "@reduxjs/toolkit";

export type TaskForm = {
  id: string;
  name: string;
  context: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  status: "Not Started" | "In Progress" | "Completed";
  keyPoints: string[];
  members: string[];
  activeTeamId?: string;
  due: string;
};

const initialState: TaskForm = {
  id: "",
  keyPoints: [],
  members: [],
  name: "",
  context: "",
  priority: "LOW",
  due: new Date().toISOString(),
  status: "Not Started",
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
    setActiveTeamModal: create.reducer<string>((state, action) => {
      state.activeTeamId = action.payload;
    }),
    setPriority: create.reducer<TaskForm["priority"]>((state, action) => {
      state.priority = action.payload;
    }),
    setDue: create.reducer<string>((state, action) => {
      state.due = action.payload;
    }),
  }),
});

export const { setName, setContext, setActiveTeamModal, setPriority, setDue } =
  taskForm.actions;
export default taskForm.reducer;
