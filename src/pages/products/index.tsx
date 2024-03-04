import { ProductLayout } from "@/modules/product/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProductIndex = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.endsWith("products"))
      void router.push("/products/winter");
  }, [router]);
  return <ProductLayout />;
};

export default ProductIndex;
