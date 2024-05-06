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
    return <>
        {isFormVisible ? <NewProject /> : savedProjects.length == 0 && <NoProjects/>}
        {projectViewVisibility && <ProjectView project={selectedProjectToView} />}
    </>
}

export default RightMainWindow;