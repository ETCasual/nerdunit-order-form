import { FiSearch } from "react-icons/fi";
import { cloneElement, type FunctionComponent, type ReactElement } from "react";

interface SearchProps {
  placeholder?: string;
  icon?: ReactElement;
}

export const Search: FunctionComponent<SearchProps> = ({
  placeholder = "Search",
  icon,
}) => {
  return (
    <div className="flex flex-row items-center rounded-md bg-white">
      <div className="flex w-full flex-row items-center gap-2 px-2 py-1.5">
        <label htmlFor="Search">
          <FiSearch color="gray" />
        </label>
        <input
          id="Search"
          className="placeholder: w-full bg-transparent pr-2 text-xs placeholder:font-interstate placeholder:tracking-wider"
          placeholder={placeholder}
        />
      </div>
      {icon && (
        <button className="h-full rounded-md border border-[#F1F3F4] bg-white p-2 shadow-sm transition-colors duration-150 hover:bg-black hover:text-white">
          {cloneElement(icon, { size: 13 })}
        </button>
      )}
    </div>
  );
};
