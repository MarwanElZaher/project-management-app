import { ADD_TASK, REMOVE_TASK } from "../actions/actionTypes";
const initialState = {
  tasks: [],
  // Add other task-related state properties here
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };
    // Handle other task-related actions here
    default:
      return state;
  }
};

export default taskReducer;
