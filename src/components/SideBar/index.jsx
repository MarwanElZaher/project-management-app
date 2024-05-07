import React from "react";
import Button from "../Button";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { hideForm, hideProjectView, setSelectedProject, showForm } from "../actions/projectActions";
import { selectFormVisibility, selectProjects } from '../selectors/projectSelector';

function SideBar() {
  const isFormVisible = useSelector(selectFormVisibility);
  const dispatch = useDispatch();
  
  const handleAddingProject = () => {
    if (!isFormVisible) {
      dispatch(setSelectedProject(null));
      dispatch(hideProjectView());
      dispatch(showForm());
    }
  }

  const handleProjectView = (selectedProject) => {
    dispatch(setSelectedProject(selectedProject));
    dispatch(hideForm());
  };

  const projects = useSelector(selectProjects)
  return (
    <div className="sidebar lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-700 rounded-r-xl mt-6">
      <div className="flex flex-col items-start p-4">
      <h2 className="text-xl font-bold text-stone-200 my-4 mb-4">Your Projects</h2>
        <Button
          onClick={handleAddingProject} 
          style="flex items-center bg-gray-600 text-stone-300 mb-4 hover:bg-gray-500" 
          icon={<IoMdAdd />} label="Add Project" />
        <div>{projects.length > 0 && projects.map((project, i)=> <div className="py-2 px-4 my-1 cursor-pointer text-white bg-gray-600 rounded hover:bg-gray-500" key={i} onClick={() => handleProjectView(project)}>{project.name}</div>)}</div>
      </div>
        
    </div>
  );  
}

export default SideBar;
