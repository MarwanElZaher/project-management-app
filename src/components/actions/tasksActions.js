// In your actions file
import { ADD_TASK, REMOVE_TASK } from "./actionTypes";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: {
    task,
  },
});

export const removeTask = (taskId, projectId) => ({
  type: REMOVE_TASK,
  payload: {
    taskId,
    projectId,
  },
});
