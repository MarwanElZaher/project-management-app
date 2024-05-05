import React from "react";
function InputWithLabel({inputClassName, labelClassName, label, error, ...inputProps}) {
    return (
        <div className="flex flex-col">
            <label htmlFor={inputProps.id || inputProps.name} className={`mb-1 ${labelClassName}`}>
                {label}
            </label>
            <input {...inputProps} className={`border rounded-md px-2 py-1 ${inputClassName}`}></input>
            {error && <span className="error bg-red-500 rounded-sm p-1">{error}</span>}
        </div>
    );
}

export default InputWithLabel