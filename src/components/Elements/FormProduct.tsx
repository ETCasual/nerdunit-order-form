/* eslint-disable @next/next/no-img-element */
import type { Product } from "@/data";
import { FormInputs } from "@/pages/orders";
import type { SetStateAction, FunctionComponent, Dispatch } from "react";
import { Button } from "./Button";
import { IoIosClose } from "react-icons/io";

interface FormProductProps {
  img: string;
  name: string;
  setAmt?: Dispatch<SetStateAction<number>>;
  amt?: number;
  wholesalePrice: number;
  id: string;
  retailPrice: number;
  customerFacing?: boolean;
  remove?: () => void;
}

export const FormProduct: FunctionComponent<FormProductProps> = ({
  img,
  setAmt,
  amt,
  name,
  remove,
  id,
  wholesalePrice,
  retailPrice,
  customerFacing,
}) => {
  return (
    <div
      className={`relative flex flex-row items-center justify-between overflow-hidden rounded-md bg-white ring-offset-2${!customerFacing ? " hover:ring hover:ring-black" : ""}`}
    >
      {!customerFacing && (
        <Button
          leftIcon={IoIosClose}
          label="Remove Item"
          className="absolute right-2 top-2"
          onClick={remove}
        />
      )}
      <div className="flex flex-row items-center gap-3">
        <img src={img} alt={name} className="h-[150px] object-cover" />
        <div className="flex flex-col">
          <p className="font-interstate font-bold">{name}</p>
          <p className="font-interstate text-xs text-gray-500">{id}</p>
          <p className="pt-5 font-interstate text-sm font-semibold text-gray-500">
            {wholesalePrice} USD
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {customerFacing && (
          <div className="flex flex-row items-center gap-2 pr-5">
            <label>Qty :</label>
            <input
              min={0}
              type="number"
              value={amt}
              disabled={!customerFacing}
              onChange={(e) => {
                if (customerFacing && setAmt) setAmt(Number(e.target.value));
              }}
              className="max-w-[100px] rounded-md bg-[#f1f3f4] px-2 py-1 focus-within:outline-none"
            />
          </div>
        )}
        {customerFacing && amt && (
          <div className="font-interstate text-sm font-semibold text-gray-500">
            Total: {(amt * wholesalePrice).toFixed(2)} USD
          </div>
        )}
      </div>
    </div>
  );
};
