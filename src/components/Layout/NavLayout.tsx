import { type ReactNode } from "react";

export const NavLayout = ({
  children,
  leftItems,
  rightItems,
}: {
  children?: ReactNode[] | ReactNode;
  leftItems?: ReactNode[] | ReactNode;
  rightItems?: ReactNode[] | ReactNode;
}) => {
  return (
    <div className="flex h-auto w-full flex-col">
      <div className="sticky top-0 z-20 flex min-h-[52px] w-full flex-row items-center justify-between bg-white px-7">
        <div className="flex h-full flex-row gap-3">{leftItems}</div>
        <div className="flex flex-row gap-3">{rightItems}</div>
      </div>
      {children}
    </div>
  );
};
