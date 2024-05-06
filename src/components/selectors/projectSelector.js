export const selectProjects = (state) => state.projects.projects;
export const selectFormVisibility = (state) => state.projects.isFormVisible;
export const selectProjectViewVisibility = (state) =>
  state.projects.isProjectViewVisible;
export const selectedProject = (state) => state.projects.selectedProject;
