import { createSlice } from "@reduxjs/toolkit";

export type TaskForm = {
  id: string;
  name: string;
  context: string;
  priority: "High" | "Medium" | "Low";
  status: "Not Started" | "In Progress" | "Completed";
  keyPoints: string;
  members: string[];
  activeTeamId?: string;
  due: string;
};

const initialState: TaskForm = {
  id: "",
  keyPoints: "",
  members: [],
  name: "",
  context: "",
  priority: "Low",
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
    setStatus: create.reducer<TaskForm["status"]>((state, action) => {
      state.status = action.payload;
    }),
    setDue: create.reducer<string>((state, action) => {
      state.due = action.payload;
    }),
    setKeyPoints: create.reducer<string>((state, action) => {
      state.keyPoints = action.payload;
    }),
  }),
});

export const {
  setName,
  setContext,
  setActiveTeamModal,
  setPriority,
  setDue,
  setStatus,
  setKeyPoints,
} = taskForm.actions;
export default taskForm.reducer;
