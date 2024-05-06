import React, { useState } from "react";
import InputWithLabel from "../Input";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addProject, hideForm } from "../actions/projectActions";
import { selectFormVisibility, selectProjects } from '../selectors/projectSelector';
import NoProjects from "../NoProjects";

function NewProject() {
    const [project, setProject] = useState({
        name: '',
        details: '',
        date: ''
      });
      const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const isFormVisible = useSelector(selectFormVisibility);
    const savedProjects = useSelector(selectProjects);

  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          dispatch(addProject(project));
          setProject({ name: '', details: '', date: '' });
          dispatch(hideForm())
        }
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject({ ...project, [name]: value });
        // Clear validation error when user starts typing
        setErrors({ ...errors, [name]: '' });
      };
    const handleCancel = () => {
      setErrors({});
      dispatch(hideForm());
      setProject(
        {
          name: '',
          details: '',
          date: ''
        }
      )

    }
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        if (!project.name.trim()) {
          newErrors.name = 'Project name is required';
          isValid = false;
        }
        if (!project.details.trim()) {
          newErrors.details = 'Project details are required';
          isValid = false;
        }
        if (!project.date) {
          newErrors.date = 'Project date is required';
          isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };
    
    return (
        <div className="flex-grow flex-col">
            {isFormVisible ? <form onSubmit={handleSubmit}>
        <div className="flex flex-row-reverse gap-2">
            <Button type="submit" style="bg-gray-700 text-stone-100" label="Save"></Button>
            <Button label="Cancel" onClick={handleCancel}></Button>
        </div>
        <div className="gap-6">
            <InputWithLabel error={errors.name} name="name" value={project.name} placeholder="Please Enter projectTitle" onChange={handleInputChange} type="text" label={"Title"} />
            <InputWithLabel error={errors.details} name="details" value={project.details} placeholder="Please Enter projectDescription " onChange={handleInputChange} type="text" label={"Description"} />
            <InputWithLabel error={errors.date} name="date" value={project.date} placeholder="Please Enter dueDate" onChange={handleInputChange} type="date" label={"Due Date"} />
        </div>
        </form>
          //to do if there are saved projects but not selected and in case there is no projects, noprojects component to be reusable at both cases
        : savedProjects.length == 0 && <NoProjects/>}
        
        </div>
    );
}

export default NewProject;