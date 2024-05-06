import React from "react";
import Button from "../Button";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProject, showForm } from "../actions/projectActions";
import { selectFormVisibility, selectProjects } from '../selectors/projectSelector';

function SideBar() {
  const isFormVisible = useSelector(selectFormVisibility);
  const dispatch = useDispatch();
  
  const handleAddingProject = () => {
    if (!isFormVisible) {
      dispatch(showForm());
    }
  }

  const handleProjectView = (selectedProject) => {
    dispatch(setSelectedProject(selectedProject))
  };

  const projects = useSelector(selectProjects)
  return (
    <div className="sidebar lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-700 rounded-r-xl mt-6">
      <div className="flex flex-col items-start p-4">
      <h2 className="text-xl font-bold text-stone-200 my-4 mb-4">Your Projects</h2>
        <Button
          onClick={handleAddingProject} 
          style="flex items-center bg-gray-500 text-stone-300 hover:bg-gray-600" 
          icon={<IoMdAdd />} label="Add Project" />
        {/* to do create a component to show the saved projects on click to show its tasks at the right */}
        <div>{projects.length > 0 && projects.map((project, i)=> <ul key={i}><ol onClick={() => handleProjectView(project)}>{project.name}</ol></ul>)}</div>
      </div>
        
    </div>
  );  
}

export default SideBar;
