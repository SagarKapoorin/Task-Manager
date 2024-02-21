import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  tasks: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setTasks: (state, action) => {
      state.tasks = action.payload.tasks;
    },
    setTask: (state, action) => {
      const updatedtasks = state.tasks.map((task) => {
        if (task._id === action.payload.task._id) return action.payload.task;
        return task;
      });
      state.tasks = updatedtasks;
    },
  },
});

export const { setMode, setLogin, setLogout, setTasks, setTask } =
  authSlice.actions;
export default authSlice.reducer;