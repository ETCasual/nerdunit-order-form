/* eslint-disable @next/next/no-img-element */
import { Collapse } from "@/components/Collapse";
import { Search } from "@/components/Elements/Search";
import { useProducts } from "@/stores/useProducts";
// import type { cscart_products } from "@prisma/client";
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

export const OrdersLayout = ({
  children,
}: {
  children?: ReactNode | ReactNode[];
}) => {
  const router = useRouter();
  const [filter, setFilter] = useState("all");
  return (
    <div className="flex w-full flex-row">
      <div className="flex min-w-[290px] max-w-[290px] flex-col gap-5 px-5 py-5">
        <div className="flex w-[250px] flex-row items-center justify-between">
          <p className="font-serif font-semibold">Orders</p>
          <button
            className="flex flex-row items-center rounded-md bg-black px-2 py-1 text-white"
            onClick={async () =>
              await fetch("/api/products", { method: "POST" })
            }
          >
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
        <Search placeholder="Orders" icon={<GrGroup />} white />
        {/* <div className="grid grid-cols-2 gap-3 overflow-y-auto">
          <div className="flex flex-col rounded-md shadow">
            <img
              alt="baju"
              src="https://www.nerdunit.my/cdn/shop/files/EnterTheDragon-Work-Jacket-Black-front_3024x.jpg?v=1706500281"
            />
            <div className="flex flex-col rounded-b-md bg-white px-2 py-3">
              <p className="text-center font-serif text-xs font-bold">
                Enter The Dragon
              </p>
            </div>
          </div>
          <div className="rounded-md shadow">
            <img
              alt="baju"
              src="https://www.nerdunit.my/cdn/shop/files/EnterTheDragon-Work-Jacket-Black-front_3024x.jpg?v=1706500281"
            />
          </div>
        </div> */}
        <div className="flex w-full flex-col"></div>
      </div>
      <div className="w-full bg-white shadow-xl">{children}</div>
    </div>
  );
};
