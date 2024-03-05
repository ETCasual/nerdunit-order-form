/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Button } from "@/components/Elements/Button";
import { NavLayout } from "@/components/Layout/NavLayout";
import { ProductLayout } from "@/modules/product/layout";
import { FiSave } from "react-icons/fi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { PiFilePdfDuotone } from "react-icons/pi";
import { FaSliders } from "react-icons/fa6";
import { Search } from "@/components/Elements/Search";
import { useForm } from "@/stores/useForm";
import { useEffect, useState } from "react";
import { type Product } from "@prisma/client";

// import type { cscart_products } from "@prisma/client";
// import { useEffect, useState } from "react";

const ProductCollectionPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [product, setProduct] = useState<Product>({
    currency: "",
    id: "",
    image: "",
    name: "",
    price: 0,
  });
  const [amt, setAmt] = useState(0);

  // useEffect(() => {
  //   void (async () => {
  //     await fetch("/api/products", { method: "GET" }).then((res) =>
  //       res.json().then((res) => {
  //         setProducts(res);
  //         console.log(res);
  //       }),
  //     );
  //   })();
  // }, []);

  const { selectedProduct } = useForm();

  useEffect(() => {
    if (!selectedProduct) return;

    setAmt(0);

    void (async () => {
      await fetch(`/api/product?id=${selectedProduct}`, { method: "GET" }).then(
        (res) => res.json().then((res) => setProduct(res)),
      );
    })();
  }, [selectedProduct]);

  return (
    <ProductLayout>
      <NavLayout
        leftItems={
          <>
            <Button label="Save" leftIcon={FiSave} dark />
            <Button label="Share" leftIcon={FaRegShareFromSquare} />
            <Button label="PDF" leftIcon={PiFilePdfDuotone} />
            <p className="cursor-pointer font-serif text-xs text-blue-600 hover:underline">
              Exit Presentation
            </p>
          </>
        }
        rightItems={
          <Search placeholder="Search Products" icon={<FaSliders />} />
        }
      >
        <div className="flex flex-row items-center justify-between bg-[#f1f3f4] px-7 py-3">
          <div className="flex flex-row items-center gap-3">
            <Button label="All" dropdown />
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="font-interstate text-xs">1 of 1</div>
          </div>
        </div>
        {product.id && (
          <div className="flex flex-grow flex-col bg-white px-7 py-3">
            <div className="flex flex-row items-center justify-between overflow-hidden rounded-md ring-offset-2 hover:ring hover:ring-black">
              <div className="flex flex-row items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[150px] object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-interstate font-bold">{product.name}</p>
                  <p className="font-interstate text-xs text-gray-500">
                    {product.id}
                  </p>
                  <p className="pt-5 font-interstate text-sm font-semibold text-gray-500">
                    {product.price} {product.currency}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <label>Qty :</label>
                  <input
                    min={0}
                    type="number"
                    value={amt}
                    // @ts-expect-error string to number
                    onChange={(e) => setAmt(e.currentTarget.value)}
                    className="max-w-[100px] rounded-md bg-[#f1f3f4] px-2 py-1 focus-within:outline-none"
                  />
                </div>
                <div className="font-interstate text-sm font-semibold text-gray-500">
                  Total: {(amt * product.price).toFixed(2)} {product.currency}
                </div>
              </div>
            </div>
          </div>
        )}
      </NavLayout>
    </ProductLayout>
  );
};

export default ProductCollectionPage;
