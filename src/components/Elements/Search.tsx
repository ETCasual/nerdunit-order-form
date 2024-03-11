/* eslint-disable @next/next/no-img-element */
import { FiSearch } from "react-icons/fi";
import {
  cloneElement,
  type FunctionComponent,
  type ReactElement,
  useState,
  useMemo,
  useRef,
} from "react";
import { type Product, products } from "@/data";

interface SearchProps {
  placeholder?: string;
  icon?: ReactElement;
  white?: boolean;
  dropdown?: boolean;
  dropdownonClick?: (product: Product) => void;
}

export const Search: FunctionComponent<SearchProps> = ({
  placeholder = "Search",
  icon,
  white,
  dropdown,
  dropdownonClick,
}) => {
  const [searchString, setSearchString] = useState("");
  const results = useMemo(
    () =>
      products.filter((a) =>
        a.name.toLowerCase().includes(searchString.toLowerCase()),
      ),
    [searchString],
  );

  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="relative flex flex-col justify-center">
      <div
        className={`flex flex-row items-center rounded-md ${white ? "bg-white" : "bg-[#f1f3f4]"}`}
      >
        <div className="flex w-full flex-row items-center gap-2 px-2 py-1.5">
          <label htmlFor="Search">
            <FiSearch color="gray" />
          </label>
          <input
            ref={ref}
            onChange={(e) => {
              if (!dropdown) return;
              setSearchString(e.target.value);
            }}
            id="Search"
            className="placeholder: w-full bg-transparent pr-2 text-xs placeholder:font-interstate placeholder:tracking-wider"
            placeholder={placeholder}
          />
        </div>
        {icon && (
          <button
            type="button"
            className="h-full rounded-md border border-[#F1F3F4] bg-white p-2 shadow-sm transition-colors duration-150 hover:bg-black hover:text-white"
          >
            {cloneElement(icon, { size: 13 })}
          </button>
        )}
      </div>
      {results.length > 0 && dropdown && searchString && (
        <div className="absolute top-[100%] z-10 mt-1.5 flex max-h-[150px] w-full flex-col overflow-y-auto overflow-x-hidden rounded-md bg-white shadow-md">
          {results.map((product, i) => (
            <div
              className="flex h-full cursor-default flex-row gap-3 border-b border-gray-400/50 px-1 py-1"
              key={i}
              onClick={() => {
                setSearchString("");
                if (!ref.current) return;
                ref.current.value = "";
                dropdownonClick && dropdownonClick(product);
              }}
            >
              <img
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={product.image}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                alt={product.name}
                className="h-[50px] object-cover"
              />
              <div className="flex h-full flex-col">
                <p className="truncate font-interstate text-[12px] font-bold">
                  {product.name}
                </p>
                <p className="font-interstate text-[8px] text-gray-500">
                  {product.id}
                </p>
                {/* <p className="pt-5 font-interstate text-xs font-semibold text-gray-500">
                {product.price} {product.currency}
              </p> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
