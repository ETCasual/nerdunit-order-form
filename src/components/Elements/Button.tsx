import { createElement, type FunctionComponent } from "react";
import { type IconType } from "react-icons";
import { FaChevronDown } from "react-icons/fa6";

export interface ButtonProps {
  dropdown?: boolean;
  leftIcon?: IconType;
  label?: string;
  hfull?: boolean;
  dark?: boolean;
  onClick?: () => void;
  type?: HTMLButtonElement["type"];
  className?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  dropdown,
  leftIcon,
  label,
  type,
  dark,
  hfull,
  className,
  onClick = () => console.log("Button Not Implemented"),
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className ? `${className} ` : ""}group flex${hfull ? " h-full" : ""} flex-row items-center gap-1.5 rounded-md ${dark ? "border border-white bg-black hover:border-black hover:bg-white" : "bg-white hover:bg-black"} px-3 py-1.5 font-interstate shadow-md transition-colors duration-150`}
    >
      {leftIcon && (
        <span
          className={`${dark ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`}
        >
          {createElement(leftIcon)}
        </span>
      )}
      {label && (
        <p
          className={`text-xs font-semibold tracking-wide ${dark ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`}
        >
          {label}
        </p>
      )}
      {dropdown && (
        <span className="group-hover:text-white">
          <FaChevronDown size={10} />
        </span>
      )}
    </button>
  );
};
