import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSclice";

export const store = configureStore({
  reducer:{
    users: usersReducer,
  },
});