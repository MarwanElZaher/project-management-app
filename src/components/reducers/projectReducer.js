import { ADD_PROJECT, SHOW_FORM, HIDE_FORM } from "../actions/actionTypes";

const initialState = {
  projects: [],
  isFormVisible: false,
  // Add other project-related state properties here
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      // Add the new project to the projects array in the state
      return {
        ...state,
        projects: [...state.projects, action.payload],
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
    default:
      return state;
  }
};

export default projectReducer;
