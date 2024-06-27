// In your actions file
import { ADD_TASK, ADD_TASKS, REMOVE_TASK } from "./actionTypes";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: {
    task,
  },
});

export const addTasks = (tasks) => ({
  type: ADD_TASKS,
  payload: tasks,
});

export const removeTask = (taskId, projectId) => ({
  type: REMOVE_TASK,
  payload: {
    taskId,
    projectId,
  },
});
export const deleteTask = (taskId) => async (dispatch) => {
  try {
    const { error: taskError } = await supabase
      .from('tasks')
      .delete()
      .eq('task_id', taskId);

    if (taskError) throw taskError;

    dispatch(removeTask(taskId));
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};
