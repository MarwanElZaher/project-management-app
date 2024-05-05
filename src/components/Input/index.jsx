import React from "react";
function InputWithLabel({inputClassName, labelClassName, label, ...inputProps}) {
    return (
        <div className="flex flex-col">
            <label htmlFor={inputProps.id || inputProps.name} className={`mb-1 ${labelClassName}`}>
                {label}
            </label>
            <input {...inputProps} className={`border rounded-md px-2 py-1 mb-6 ${inputClassName}`}></input>
        </div>
    );
}

export default InputWithLabel