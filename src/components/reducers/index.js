import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";
// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  projects: projectReducer,
  tasks: taskReducer,
  user: userReducer,
});

export default rootReducer;
