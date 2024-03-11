import { FormProduct } from "@/components/Elements/FormProduct";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ReturnedData = {
  id: string;
  name: string;
  form: {
    id: string;
    form_input: {
      product: {
        id: string;
        name: string;
        image: string;
        wholesale_price: number;
        retail_price: number;
      };
    }[];
  };
};

const CustomerForm = () => {
  const router = useRouter();
  const orderId = String(router.query.orderId);

  const [formData, setFormData] = useState<ReturnedData>();

  console.log(orderId);

  useEffect(() => {
    if (!orderId) return;

    void (async () => {
      await fetch(`/api/form?id=${orderId}`, { method: "GET" }).then(
        async (res) => {
          await res.json().then((item) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            setFormData(item);
            console.log(item);
          });
        },
      );
    })();
  }, [orderId]);

  return (
    formData && (
      <div className="flex min-h-screen w-full flex-col items-center bg-[#f1f4f5] py-5 md:py-10 lg:py-16">
        <div className="flex w-full max-w-[300px] flex-col overflow-hidden rounded-lg shadow-xl md:max-w-screen-sm lg:max-w-screen-md">
          <div className="w-full bg-[#c9cbcc] px-5 py-3 font-interstate text-xl font-bold">
            {formData.name}
          </div>
          <div className="flex w-full flex-col gap-3 bg-white px-5 py-3">
            {formData.form.form_input.map((fi) => {
              return (
                <FormProduct
                  id={fi.product.id}
                  img={fi.product.image}
                  name={fi.product.name}
                  retailPrice={fi.product.retail_price}
                  wholesalePrice={fi.product.wholesale_price}
                  customerFacing
                  key={fi.product.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default CustomerForm;
