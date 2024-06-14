import React, { useState } from "react";
import InputWithLabel from "../Input";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { hideForm } from "../actions/projectActions";
import { v4 as uuidv4 } from 'uuid';
import {supabase} from '../../supabaseClient'

function NewProject() {
    const [project, setProject] = useState({
        project_id: uuidv4(),
        project_name: '',
        project_details: '',
        project_date: ''
      });
      const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (validateForm()) {
          try {
            const { data, error } = await supabase
              .from('projects')
              .insert([project])
              if (error) {
                throw error;
            }
            dispatch(hideForm());

            // Reset form fields
            setProject({
              project_id: uuidv4(),
              project_name: '',
              project_details: '',
              project_date: ''
            });

            console.log('Project added successfully:', data);
          } catch (error) {
            console.error('Error adding project:', error.message);
          }

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
          project_id: uuidv4(),
          project_name: '',
          project_details: '',
          project_date: ''
        }
      )

    }
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        if (!project.project_name.trim()) {
          newErrors.project_name = 'Project name is required';
          isValid = false;
        }
        if (!project.project_details.trim()) {
          newErrors.project_details = 'Project details are required';
          isValid = false;
        }
        if (!project.project_date) {
          newErrors.project_date = 'Project date is required';
          isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };
    
    return (
        <div className="flex-grow flex-col ">
        <form onSubmit={handleSubmit}>
        <div className="flex flex-row-reverse gap-2">
            <Button type="submit" style="bg-gray-700 text-stone-100" label="Save"></Button>
            <Button label="Cancel" onClick={handleCancel}></Button>
        </div>
        <div className="gap-6">
            <InputWithLabel error={errors.project_name} name="project_name" value={project.project_name} placeholder="Please Enter projectTitle" onChange={handleInputChange} type="text" label={"Title"} />
            <InputWithLabel error={errors.project_details} name="project_details" value={project.project_details} placeholder="Please Enter projectDescription " onChange={handleInputChange} type="text" label={"Description"} />
            <InputWithLabel error={errors.project_date} name="project_date" value={project.project_date} placeholder="Please Enter dueDate" onChange={handleInputChange} type="date" label={"Due Date"} />
        </div>
        </form>
        </div>
    );
}

export default NewProject;