import Link from "next/link";
import { type FunctionComponent } from "react";
import { Blink } from "../Elements/Blink";
import { useRouter } from "next/router";

export interface TopNavIconProps {
  href: string;
  label?: string;
  basePath: string;
  hasNotifications?: boolean;
}

export type TopNavIconWithoutBasePath = Omit<TopNavIconProps, "basePath">;

export const TopNavIcon: FunctionComponent<TopNavIconProps> = ({
  basePath,
  href,
  label,
  hasNotifications,
}) => {
  const router = useRouter();

  const active = router.pathname.includes(href);
  return (
    <Link
      href={`${basePath}/${href}`}
      className={`flex h-full flex-col items-center justify-center border-t-4 transition-colors duration-300 hover:border-t-black ${active ? "border-t-black" : "border-t-transparent"} px-5 text-xs uppercase tracking-widest`}
    >
      <div className="relative">
        {hasNotifications && <Blink />}
        <p>{label ?? href}</p>
      </div>
    </Link>
  );
};
