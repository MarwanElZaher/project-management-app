import React from "react";
import Button from "../Button";
import { IoMdAdd } from "react-icons/io";
function SideBar() {
  return (
    <div className="sidebar lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-700 rounded-r-xl mt-6">
      <div className="flex flex-col items-start p-4">
      <h2 className="text-xl font-bold text-stone-200 my-4 mb-4">Your Projects</h2>
        <Button
          style="flex items-center bg-gray-500 text-stone-300 hover:bg-gray-600" 
          icon={<IoMdAdd />} label="Add Project" />
      </div>
        
    </div>
  );  
}

export default SideBar;
