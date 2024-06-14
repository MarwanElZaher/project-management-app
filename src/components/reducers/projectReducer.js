import {
  ADD_PROJECT,
  SHOW_FORM,
  HIDE_FORM,
  SET_SELECTED_PROJECT,
  DELETE_PROJECT,
  HIDE_PROJECT_VIEW,
  SHOW_PROJECT_VIEW,
} from "../actions/actionTypes";

const initialState = {
  projects: [],
  isFormVisible: false,
  isProjectViewVisible: false,
  selectedProject: null,
  // Add other project-related state properties here
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      // Add the new project to the projects array in the state
      return {
        ...state,
        projects: action.payload,
      };
    //show addProject form
    case SHOW_FORM:
      return {
        ...state,
        isFormVisible: true,
      };
    //hide addproject form
    case HIDE_FORM:
      return {
        ...state,
        isFormVisible: false,
      };
    //show projectview component and set the selectedProject in state
    case SET_SELECTED_PROJECT:
      return {
        ...state,
        selectedProject: action.payload,
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
      };
    case SHOW_PROJECT_VIEW:
      return {
        ...state,
        isProjectViewVisible: true,
      };
    case HIDE_PROJECT_VIEW:
      return {
        ...state,
        isProjectViewVisible: false,
      };
    default:
      return state;
  }
};
export default projectReducer;
