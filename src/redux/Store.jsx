import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "./NewsSlice";

const store = configureStore({
  reducer: {
    news: NewsSlice,
  },
});

export default store;
