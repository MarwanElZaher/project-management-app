import { ADD_PROJECT, HIDE_FORM, SHOW_FORM } from "./actionTypes";

export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: project,
});

export const showForm = () => ({
  type: SHOW_FORM,
});

export const hideForm = () => ({
  type: HIDE_FORM,
});
