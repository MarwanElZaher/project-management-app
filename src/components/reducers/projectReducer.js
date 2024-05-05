import { ADD_PROJECT } from "../actions/actionTypes";

const initialState = {
  projects: [],
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
    default:
      return state;
  }
};

export default projectReducer;
