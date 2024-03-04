import { NavLayout } from "@/components/Layout/NavLayout";
import {
  TopNavIcon,
  type TopNavIconWithoutBasePath,
} from "@/components/TopNavIcon";
import { useRouter } from "next/router";
import { type ReactNode } from "react";
import { HiOutlineClipboardDocument } from "react-icons/hi2";

const topNavIcons: TopNavIconWithoutBasePath[] = [
  {
    href: "visitors",
    hasNotifications: true,
  },
  {
    href: "inbox",
    hasNotifications: true,
  },
  {
    href: "reviews",
    hasNotifications: false,
  },
  {
    href: "stats",
    hasNotifications: false,
  },
];

export const HomeLayout = ({
  children,
}: {
  children?: ReactNode | ReactNode[];
}) => {
  const router = useRouter();
  return (
    <NavLayout
      leftItems={topNavIcons.map((icon, i) => (
        <TopNavIcon
          key={i}
          href={icon.href}
          basePath="/home"
          hasNotifications={icon.hasNotifications}
        />
      ))}
      rightItems={
        router.pathname.startsWith("/home/visitors") && (
          <button className="flex flex-row items-center gap-2 rounded-md bg-black px-3 py-1.5 text-white">
            <HiOutlineClipboardDocument />
            <p className="font-interstate text-sm font-bold">New Order</p>
          </button>
        )
      }
    >
      {children}
    </NavLayout>
  );
};
