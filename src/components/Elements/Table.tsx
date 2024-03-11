import type { Order } from "@prisma/client";
import { type FunctionComponent } from "react";
import { Button } from "./Button";
import { Chip } from "./Chip";

interface TableProps {
  items: Partial<Order>[];
}

export const Table: FunctionComponent<TableProps> = ({ items }) => {
  // console.log(Object.keys(items))
  return (
    <div className="z-0 flex max-h-[calc(100dvh-31px-7rem)] w-full overflow-y-auto rounded-md bg-white">
      <table className="relative inline-table h-full w-full border-collapse">
        <thead className="sticky top-0 bg-white text-left text-xs uppercase tracking-wider shadow-sm">
          <tr>
            {items.length > 0 &&
              // @ts-expect-error types not defined properly yet.
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              Object.keys(items[0]).map((key, i) => {
                if (key === "formId") return null;
                return (
                  <th
                    className={`px-4 py-3${key !== "name" && key !== "customer" ? " text-center" : ""}`}
                    key={i}
                  >
                    {key}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <TableItem key={i} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const TableItem: FunctionComponent<Partial<Order>> = ({
  id,
  name,
  // customer,
  status,
  formId,
}) => {
  return (
    <tr className="h-[40px_!important] font-interstate">
      <td className="max-w-[100px] px-4 py-2 text-sm">{name}</td>
      {/* <td className="px-4 py-2 text-sm">{customer}</td> */}
      <td className="px-4 py-2 text-sm">
        <div className="flex w-full flex-row items-center justify-center text-sm">
          <Chip label={status as string} color="#FFBBAA" />
        </div>
      </td>

      <td className="table-cell w-[125px] py-2">
        <Button
          onClick={() => {
            window.open(`/form/${formId}`);
          }}
          label="View Order"
          dark
        />
      </td>
    </tr>
  );
};
