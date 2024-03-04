import { Search } from "@/components/Elements/Search";
import { useRouter } from "next/router";
import { useState, type ReactNode } from "react";
import { GrGroup } from "react-icons/gr";

// const topNavIcons: TopNavIconWithoutBasePath[] = [
//   {
//     href: "visitors",
//     hasNotifications: true,
//   },
//   {
//     href: "inbox",
//     hasNotifications: true,
//   },
//   {
//     href: "reviews",
//     hasNotifications: false,
//   },
//   {
//     href: "stats",
//     hasNotifications: false,
//   },
// ];

export const ProductLayout = ({
  children,
}: {
  children?: ReactNode | ReactNode[];
}) => {
  const router = useRouter();
  const [filter, setFilter] = useState("all");
  return (
    <div className="flex w-full flex-row">
      <div className="flex flex-col gap-5 px-5 py-5">
        <div className="flex w-[250px] flex-row items-center justify-between">
          <p className="font-serif font-semibold">Presentations</p>
          <button className="flex flex-row items-center rounded-md bg-black px-2 py-1 text-white">
            <p className="font-interstate text-xs font-bold">New</p>
          </button>
        </div>
        <div className="flex flex-row gap-5">
          <button
            onClick={() => setFilter("all")}
            className={`flex h-full flex-col items-center justify-center border-t-[3px] py-1.5 transition-colors duration-300 hover:border-t-black ${filter === "all" ? "border-t-black" : "border-t-transparent opacity-60"} text-xs uppercase tracking-widest`}
          >
            <div className="relative">
              {/* {hasNotifications && <Blink />} */}
              <p className="font-interstate font-bold">All</p>
            </div>
          </button>
          <button
            onClick={() => setFilter("recent")}
            className={`flex h-full flex-col items-center justify-center border-t-[3px] py-1.5 transition-colors duration-300 hover:border-t-black ${filter === "recent" ? "border-t-black" : "border-t-transparent opacity-60"} text-xs uppercase tracking-widest`}
          >
            <div className="relative">
              {/* {hasNotifications && <Blink />} */}
              <p className="font-interstate font-bold">Recent</p>
            </div>
          </button>
        </div>
        <Search placeholder="Presentations" icon={<GrGroup />} />
      </div>
      <div className="w-full bg-white shadow-xl">{children}</div>
    </div>
  );
};
