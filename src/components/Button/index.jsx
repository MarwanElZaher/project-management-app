import React from "react";
function Button({ style, label, icon, ...props }) {
  return (
    <button className={`p-2 rounded-lg ${style}`} {...props}>
      {icon && icon}
      {label}
    </button>
  );
}

export default Button;
