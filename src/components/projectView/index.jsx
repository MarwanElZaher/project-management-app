import React, {useState} from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../actions/tasksActions";
import { v4 as uuidv4 } from 'uuid';
import { selectTasksByProjectId } from "../selectors/taskSelector";
import { deleteProject, hideProjectView, setSelectedProject } from "../actions/projectActions";

function ProjectView({ project }) {
  const [taskDescription, setTaskDescription] = useState("");
  const dispatch = useDispatch();

  const relatedTasks = useSelector(state => selectTasksByProjectId(state, project.id));
  console.log(relatedTasks, "relatedTasks")
  
  const handleAddingTask = () => {
    const taskId = uuidv4();
    dispatch(addTask({
      projectId: project?.id,
      taskDescription: taskDescription,
      taskId: taskId,
    }))
    setTaskDescription('');
  }

  const handleProjectDeletion = () => {
    dispatch(deleteProject(project.id));
    dispatch(hideProjectView());
    dispatch(setSelectedProject(null));
    console.log("delete project")
  }
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{ project.name}</h1>
        <Button onClick={handleProjectDeletion} label="delete" style="text-stone-600 hover:text-stone-950" />
      </div>
      <p className="text-stone-400 mb-4">{project.date}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{project.details}</p>
      <div className="border-b border-teal-950 my-4"></div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex flex-row justify-start">
        <input className="border rounded-md px-2 py-1" type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></input>
        <Button onClick={handleAddingTask} label="Add Task"></Button>
      </div>
      
      <div className="bg-stone-300 px-3 mt-6 py-6 rounded-md">
        {relatedTasks.length > 0 ?
          relatedTasks.map((task, i) => <div key={i} className="mb-1 flex justify-between hover:bg-stone-400 rounded">
            <div className="p-2">{`${i + 1}- ${task.taskDescription}`}</div>
            <Button label="Clear"></Button>
          </div>) :
          <div className="flex content-center text-2xl text-stone-900"> There is no available tasks </div>
        }
      </div>

    </div>
  );
}

export default ProjectView;
