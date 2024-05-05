import React from "react";
import InputWithLabel from "../Input";
import Button from "../Button";
function NewProject() {
    return (
        <div className="flex-grow flex-col">
        <div className="flex flex-row-reverse gap-2">
            <Button style="bg-gray-700 text-stone-100" label="Save"></Button>
            <Button label="Cancel"></Button>
        </div>
        <form>
            <InputWithLabel type="text" label={"Title"}/>
            <InputWithLabel type="text" label={"Description"}/>
            <InputWithLabel type="date" label={"Due Date"}/>
        </form>
    </div>);
}

export default NewProject;