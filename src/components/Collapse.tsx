/* eslint-disable @next/next/no-img-element */
import { type FunctionComponent, useState } from "react";
import { RxTriangleDown } from "react-icons/rx";
import { collectionData } from "@/data";
import { useForm } from "@/stores/useForm";

interface CollapseProps {
  title: string;
}

export const Collapse: FunctionComponent<CollapseProps> = ({ title }) => {
  const { setProduct } = useForm();
  const products = collectionData[title]?.products;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex w-full cursor-pointer flex-col gap-2"
      onClick={() => {
        !isOpen && setIsOpen(true);
      }}
    >
      <div className="flex w-full max-w-[250px] flex-row items-center justify-between">
        <p className="font-interstate text-xs font-bold tracking-widest">
          {title} ({products?.length})
        </p>
        <RxTriangleDown
          color="blue"
          onClick={() => {
            isOpen && setIsOpen(false);
          }}
          className={`transform transition ${isOpen ? "rotate-0" : "rotate-90"}`}
        />
      </div>
      {isOpen
        ? products?.map((product, i) => (
            <div
              key={i}
              className="flex w-full max-w-[250px] flex-row items-center gap-2 hover:ring-2 hover:ring-black"
              onClick={() => setProduct(product.id)}
            >
              {/* <div className="h-full w-[2.5px] rounded-md bg-black" /> */}
              <div className="flex w-full flex-row items-center justify-between overflow-hidden rounded-md bg-white font-interstate text-xs">
                <img
                  className="w-[35px] object-cover"
                  src={product.image}
                  alt={product.image}
                />
                <p className="truncate px-2 py-3 tracking-wider">
                  {product.name}
                </p>
                <div className="px-4 font-interstate font-bold tracking-wider text-gray-400">
                  {product.currency}
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
