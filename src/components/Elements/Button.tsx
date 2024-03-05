import { createElement, type FunctionComponent } from "react";
import { type IconType } from "react-icons";
import { FaChevronDown } from "react-icons/fa6";

export interface ButtonProps {
  dropdown?: boolean;
  leftIcon?: IconType;
  label: string;
  dark?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = ({
  dropdown,
  leftIcon,
  label,
  dark,
}) => {
  return (
    <button
      className={`group flex flex-row items-center gap-1.5 rounded-md ${dark ? "bg-black hover:bg-white" : "bg-white hover:bg-black"} px-3 py-1.5 font-interstate shadow-md transition-colors duration-150`}
    >
      {leftIcon && (
        <span
          className={`${dark ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`}
        >
          {createElement(leftIcon)}
        </span>
      )}
      <p
        className={`text-xs font-semibold tracking-wide ${dark ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`}
      >
        {label}
      </p>
      {dropdown && (
        <span className="group-hover:text-white">
          <FaChevronDown size={10} />
        </span>
      )}
    </button>
  );
};
