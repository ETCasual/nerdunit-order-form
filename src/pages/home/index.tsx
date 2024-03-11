import { HomeLayout } from "@/modules/home/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const HomeIndex = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.endsWith("home")) void router.push("/home/dashboard");
  }, [router]);
  return <HomeLayout />;
};

export default HomeIndex;
