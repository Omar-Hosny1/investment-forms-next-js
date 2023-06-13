import { configureStore } from "@reduxjs/toolkit";
import formsReducer from "./features/FormsSlice";

export const store = configureStore({
  reducer: {
    forms: formsReducer,
  },
});
