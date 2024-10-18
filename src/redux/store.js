import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import { thunk } from "redux-thunk";
import dataReducer from './dataSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false})
});
