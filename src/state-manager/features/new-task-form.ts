import { createSlice } from "@reduxjs/toolkit";

export type TaskForm = {
  id: string;
  name: string;
  context: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  keyPoints: string[];
  members: string[];
  activeTeamId?: string;
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
    setActiveTeamModal: create.reducer<string>((state, action) => {
      state.activeTeamId = action.payload;
    }),
    setPriority: create.reducer<TaskForm["priority"]>((state, action) => {
      state.priority = action.payload;
    }),
  }),
});

export const { setName, setContext, setActiveTeamModal, setPriority } =
  taskForm.actions;
export default taskForm.reducer;
