import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index.js";

const store = configureStore({
  reducer: rootReducer,
  // Add any additional middleware or enhancers here
});

export default store;
