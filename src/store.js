import { configureStore } from "@reduxjs/toolkit";
import informationSlice from "./Store/information/information.slice";

export const store = configureStore({
  reducer: {
    information: informationSlice,
  },
});
