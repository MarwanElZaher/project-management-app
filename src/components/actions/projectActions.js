import {
  ADD_PROJECT,
  HIDE_FORM,
  SHOW_FORM,
  SET_SELECTED_PROJECT,
  HIDE_PROJECT_VIEW,
  SHOW_PROJECT_VIEW,
  ADD_PROJECTS,
  REMOVE_PROJECT,
  REMOVE_TASKS_BY_PROJECT
} from "./actionTypes";
import { supabase } from '../../supabaseClient';

export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: project,
});

export const addProjects = (projects) => ({
  type: ADD_PROJECTS,
  payload: projects,
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

export const showProjectView = () => ({
  type: SHOW_PROJECT_VIEW,
});

export const hideProjectView = () => ({
  type: HIDE_PROJECT_VIEW,
});

export const deleteProject = (projectId) => async (dispatch) => {
  try {
    const { error: taskError } = await supabase
      .from('tasks')
      .delete()
      .eq('project_id', projectId);

    if (taskError) throw taskError;

    const { error: projectError } = await supabase
      .from('projects')
      .delete()
      .eq('project_id', projectId);

    if (projectError) throw projectError;

    dispatch(removeProject(projectId));
    dispatch(removeTasksByProject(projectId));
  } catch (error) {
    console.error('Error deleting project:', error);
  }
};

export const removeProject = (projectId) => ({
  type: REMOVE_PROJECT,
  payload: projectId,
});

export const removeTasksByProject = (projectId) => ({
  type: REMOVE_TASKS_BY_PROJECT,
  payload: projectId,
});
