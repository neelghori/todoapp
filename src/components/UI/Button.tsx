import React from "react";
import { ButtonProps } from "../../Types/Button";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-x-1.5 rounded-md bg-gradient-to-br from-pink-400 to-[#0055D1]  px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
        props.classnames ?? ""
      }`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
