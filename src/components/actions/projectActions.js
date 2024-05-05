import { ADD_PROJECT } from "./actionTypes";

export const addProject = (projectName, projectDetails, projectDate) => ({
  type: ADD_PROJECT,
  payload: {
    name: projectName,
    details: projectDetails,
    date: projectDate,
  },
});
