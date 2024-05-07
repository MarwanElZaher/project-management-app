import React from "react";
import NewProject from "../NewProject";
import ProjectView from "../projectView";
import NoProjects from "../NoProjects";
import { useSelector } from "react-redux";
import { selectFormVisibility, selectProjects, selectProjectViewVisibility, selectedProject } from "../selectors/projectSelector";

function RightMainWindow() {
    const isFormVisible = useSelector(selectFormVisibility);
    const savedProjects = useSelector(selectProjects);
    const projectViewVisibility = useSelector(selectProjectViewVisibility);
    const selectedProjectToView = useSelector(selectedProject);

    return (
    <div className={`flex-grow p-6 ${!projectViewVisibility ? "flex justify-center content-center" : ""}`}> 
        {isFormVisible && <NewProject />}
        {projectViewVisibility && selectedProjectToView && <ProjectView project={selectedProjectToView} />}
        {((savedProjects.length == 0 && !isFormVisible) || (!isFormVisible && !selectedProjectToView)) && <NoProjects/>}
     </div>
    )
}

export default RightMainWindow;