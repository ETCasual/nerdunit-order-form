import { Button } from "@/components/Elements/Button";
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
    href: "dashboard",
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
        router.pathname.startsWith("/home/dashboard") && (
          <Button
            label="New Order"
            dark
            leftIcon={HiOutlineClipboardDocument}
          />
        )
      }
    >
      {children}
    </NavLayout>
  );
};
