import {
  ADD_PROJECT,
  HIDE_FORM,
  SHOW_FORM,
  SET_SELECTED_PROJECT,
  DELETE_PROJECT,
  HIDE_PROJECT_VIEW,
} from "./actionTypes";

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

export const setSelectedProject = (selectedProject) => ({
  type: SET_SELECTED_PROJECT,
  payload: selectedProject,
});

export const hideProjectView = () => ({
  type: HIDE_PROJECT_VIEW,
});

export const deleteProject = (selectedProjectId) => ({
  type: DELETE_PROJECT,
  payload: selectedProjectId,
});
