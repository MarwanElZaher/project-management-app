export const selectTasksByProjectId = (state, projectId) => {
  return state.tasks?.tasks?.filter((task) => task.project_id == projectId);
};
