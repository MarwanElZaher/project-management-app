import React from "react";
import Button from "../Button";
import NoProjectImg from "../../assets/no-projects.png"
function NoProjects() {
    return (
        <div className="flex-col justify-center">
            <div className="flex flex-col items-center">
        <img className="w-20 h-20 mb-2" src={NoProjectImg} alt="No-Projects-img" />
        <p className="mb-2 font-bold">No Project Selected</p>
        <p className="mb-4">Select a project or get started with a new one</p>
            </div>
        <Button style="mx-24 bg-gray-700 text-stone-100" label="Create New Project"></Button>
    </div> );
}

export default NoProjects; 