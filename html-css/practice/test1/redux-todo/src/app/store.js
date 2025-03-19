import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer, // ✅ Wrap in an object with a key
  },
  devTools: true,
});
