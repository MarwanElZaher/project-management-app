import React, {useState} from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../actions/tasksActions";
import { v4 as uuidv4 } from 'uuid';
import { selectTasksByProjectId } from "../selectors/taskSelector";
import { deleteProject, hideProjectView, setSelectedProject } from "../actions/projectActions";
import { signedInUser } from "../selectors/userSelector";
import { supabase } from '../../supabaseClient';

function ProjectView({ project }) {
  const [taskDescription, setTaskDescription] = useState("");
  const dispatch = useDispatch();

  const user = useSelector(signedInUser);
  const handleAddingTask = async () => {
    const newTask = {
      task_description: taskDescription,
      task_id: uuidv4(),
      project_id: project.project_id,
      user_id: user.userId
    };
    try {
      const { data, error } = await supabase
        .from('tasks')
        .insert([newTask]);
      
      if (error) throw error;
      console.log('Task added successfully:', newTask);
      dispatch(addTask(newTask))
      setTaskDescription('');
    }catch (error) {
      console.error('Error adding project:', error.message);
    }
  }

  const handleProjectDeletion = () => {
    dispatch(deleteProject(project.project_id));
    dispatch(hideProjectView());
    dispatch(setSelectedProject(null));
  }

  const handleTaskClear = (task_id) => {
    dispatch(deleteTask(task_id));
  }
  const relatedTasks = useSelector(state => selectTasksByProjectId(state, project.project_id));
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{ project.project_name}</h1>
        <Button onClick={handleProjectDeletion} label="delete" style="text-stone-600 hover:text-stone-950" />
      </div>
      <p className="text-stone-400 mb-4">{project.project_date}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{project.project_details}</p>
      <div className="border-b border-teal-950 my-4"></div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex flex-row justify-start">
        <input className="border rounded-md px-2 py-1" type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></input>
        <Button onClick={handleAddingTask} label="Add Task"></Button>
      </div>
      
      <div class="bg-stone-300 px-3 mt-6 py-6 rounded-md max-h-96 w-full overflow-y-auto">

        {relatedTasks.length > 0 ?
          relatedTasks.map((task, i) => <div key={i} className="mb-1 flex justify-between hover:bg-stone-400 rounded">
            <div className="p-2">{`${i + 1}- ${task.task_description}`}</div>
            <Button style="hover:text-red-700" onClick={() => handleTaskClear(task.task_id)} label="Clear"></Button>
          </div>) :
          <div className="flex content-center text-2xl text-stone-900"> There is no available tasks </div>
        }
      </div>

    </div>
  );
}

export default ProjectView;
