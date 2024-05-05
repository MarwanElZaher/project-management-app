import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  projects: projectReducer,
  tasks: taskReducer,
});

export default rootReducer;
