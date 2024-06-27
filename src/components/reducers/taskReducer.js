import { ADD_TASK, ADD_TASKS, REMOVE_TASK, REMOVE_TASKS_BY_PROJECT } from "../actions/actionTypes";
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
    case ADD_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.task_id !== action.payload.task_id
        ),
      };
      case REMOVE_TASKS_BY_PROJECT:
        return state.filter(task => task.project_id !== action.payload);
    // Handle other task-related actions here
    default:
      return state;
  }
};

export default taskReducer;
