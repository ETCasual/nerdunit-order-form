import Link from "next/link";
import { useRouter } from "next/router";
import { type FunctionComponent, createElement, useState } from "react";
import { type IconType } from "react-icons";

export interface SideBarIconProps {
  href: string;
  activeIcon: IconType;
  unactiveIcon: IconType;
  label?: string;
}

export const SideBarIcon: FunctionComponent<SideBarIconProps> = ({
  href,
  activeIcon,
  unactiveIcon,
  label,
}) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const active = router.pathname.includes(href);
  return (
    <Link
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      href={href}
      className={`relative flex h-[40px] w-[40px] flex-col items-center justify-center rounded-full shadow-md transition-colors duration-150 group-hover:visible ${hovered || active ? "text-black" : "text-black/30"}`}
    >
      {hovered || active
        ? createElement(activeIcon, {
            size: 20,
          })
        : createElement(unactiveIcon, {
            size: 20,
          })}

      <span
        className={`absolute left-[50px] z-[1] text-nowrap rounded-md bg-black px-5 py-1.5 text-center text-xs font-bold capitalize text-white transition duration-150 ${hovered ? "visible" : "hidden"}`}
      >
        {label ?? href.split("/")[1]}
      </span>
    </Link>
  );
};
