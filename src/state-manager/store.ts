import { combineReducers, configureStore } from "@reduxjs/toolkit";
import calendar from "./features/calendar";
import project from "./features/project";
import newProjectForm from "./features/new-project-form";
import newTaskForm from "./features/new-task-form";

const reducer = combineReducers({
  calendar,
  project,
  newProjectForm,
  newTaskForm,
});

export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
