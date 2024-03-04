import { type FunctionComponent } from "react";

interface TableProps {
  items: TableItemProps[];
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
              Object.keys(items[0]).map((key, i) => (
                <th className="px-4 py-3" key={i}>
                  {key}
                </th>
              ))}
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

export interface TableItemProps {
  visitor: string;
  company?: string;
  code?: string;
  contact?: string;
  recentView?: string;
  visits?: number;
  order?: string;
  showroom?: string;
  rep?: string;
  lastVisited?: string;
}

export const TableItem: FunctionComponent<TableItemProps> = ({
  code = "-",
  company = "-",
  contact = "-",
  lastVisited = "-",
  order = "-",
  recentView = "-",
  rep = "-",
  showroom = "-",
  visitor = "-",
  visits = "-",
}) => {
  return (
    <tr className="h-[40px_!important]">
      <td className="px-4 py-2">{visitor}</td>
      <td className="px-4 py-2">{company}</td>
      <td className="px-4 py-2">{code}</td>
      <td className="px-4 py-2">{contact}</td>
      <td className="px-4 py-2">{recentView}</td>
      <td className="px-4 py-2">{visits}</td>
      <td className="px-4 py-2">{order}</td>
      <td className="px-4 py-2">{showroom}</td>
      <td className="px-4 py-2">{rep}</td>
      <td className="px-4 py-2">{lastVisited}</td>
    </tr>
  );
};
