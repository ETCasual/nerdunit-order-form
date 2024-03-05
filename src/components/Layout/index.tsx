import { TiHome, TiHomeOutline } from "react-icons/ti";
import { FaGem, FaRegGem } from "react-icons/fa";

import { SideBarIcon, type SideBarIconProps } from "./SideBarIcon";
import { FaHandshakeSimple, FaRegHandshake } from "react-icons/fa6";
import {
  HiClipboardDocumentList,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import type { ReactNode } from "react";
import { useRouter } from "next/router";

const icons: SideBarIconProps[] = [
  {
    href: "/home",
    activeIcon: TiHome,
    unactiveIcon: TiHomeOutline,
  },
  {
    href: "/products",
    activeIcon: FaGem,
    unactiveIcon: FaRegGem,
  },
  // {
  //   href: "/connect",
  //   activeIcon: FaHandshakeSimple,
  //   unactiveIcon: FaRegHandshake,
  // },
  // {
  //   href: "/orders",
  //   activeIcon: HiClipboardDocumentList,
  //   unactiveIcon: HiOutlineClipboardDocumentList,
  // },
];

export const Layout = ({ children }: { children: ReactNode[] | ReactNode }) => {
  const router = useRouter();
  return router.asPath !== "/" ? (
    <main className="relative flex h-screen flex-row justify-center overflow-y-auto bg-[#F1F3F4]">
      <div className="sticky left-0 top-0 z-30 flex h-screen w-[70px] flex-col items-center justify-between bg-white px-2 py-4 shadow-lg">
        <div className="flex flex-col gap-4">
          {icons.map((icon, i) => (
            <SideBarIcon
              href={icon.href}
              activeIcon={icon.activeIcon}
              unactiveIcon={icon.unactiveIcon}
              label={icon.label}
              key={i}
            />
          ))}
        </div>
      </div>
      {children}
    </main>
  ) : (
    children
  );
};
