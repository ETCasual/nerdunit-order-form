import { Button } from "@/components/Elements/Button";
import { FormProduct } from "@/components/Elements/FormProduct";
import { Search } from "@/components/Elements/Search";
import { NavLayout } from "@/components/Layout/NavLayout";
import { OrdersLayout } from "@/modules/orders/layout";
import { Field, Form, Formik, type FormikProps } from "formik";
import { useEffect, useRef, useState } from "react";
// import { FaSave } from "react-icons/fa";
import { FaRegGem, FaRegShareFromSquare } from "react-icons/fa6";
// import { FiSave } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import * as Yup from "yup";

export type FormInputs = {
  productName: string;
  productImage: string;
  productRetailPrice: number;
  productWholesalePrice: number;
  productId: string;
};

export type FormikCreateOrderForm = {
  name: string;
};

const OrderPage = () => {
  const [formInputs, setFormInputs] = useState<FormInputs[]>([]);
  const [returnedOrderId, setReturnedOrderId] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    console.log(formInputs);
  }, [formInputs]);

  useEffect(() => {
    if (!copied) return;

    const to = setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => clearTimeout(to);
  }, [copied]);

  const formikRef = useRef<FormikProps<FormikCreateOrderForm>>(null);

  return (
    <OrdersLayout>
      <NavLayout
        rightItems={
          <>
            {/* <Button label="Save" leftIcon={FiSave} dark onClick={}/> */}
            <Button
              label="Create Order"
              dark
              leftIcon={FaRegShareFromSquare}
              onClick={async () => {
                if (!formikRef.current) return;
                await formikRef.current.submitForm();
              }}
            />
          </>
        }
      >
        {returnedOrderId && (
          <div className="fixed left-0 top-0 z-50 flex h-full max-h-screen min-h-screen w-full flex-col items-center justify-center bg-black/60">
            <div className="relative flex max-w-[300px] flex-col gap-3 rounded-md bg-white p-7 shadow-xl md:max-w-screen-sm lg:max-w-screen-md">
              <Button
                leftIcon={IoIosClose}
                className="absolute right-3 top-3 !px-1"
                onClick={() => setReturnedOrderId("")}
              />
              <p className="text-center font-interstate text-xl font-bold uppercase tracking-tight">
                Order Created
              </p>
              <div className="flex h-full flex-row items-center gap-2">
                <button
                  className={`cursor-pointer select-none truncate rounded-md px-2 py-1 transition-colors duration-200 focus-within:outline-none md:w-[200px] lg:w-[300px] ${copied ? "bg-green-400 text-black" : "bg-gray-500 text-white"}`}
                  onClick={async () => {
                    await navigator.clipboard.writeText(
                      `https://nerdunit-order-form.vercel.app/form/${returnedOrderId}`,
                    );

                    setCopied(true);
                  }}
                >{`https://nerdunit-order-form.vercel.app/form/${returnedOrderId}`}</button>
                <Button
                  label="Copy"
                  hfull
                  onClick={async () => {
                    await navigator.clipboard.writeText(
                      `https://nerdunit-order-form.vercel.app/form/${returnedOrderId}`,
                    );
                    setCopied(true);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        <div className="flex h-full flex-grow flex-col gap-3 bg-[#f1f3f4] px-7 py-3">
          <Formik<FormikCreateOrderForm>
            innerRef={formikRef}
            initialValues={{
              name: "Draft",
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .required("Required.")
                .min(3, "Minimum 3 letters"),
            })}
            onSubmit={async (values, actions) => {
              if (formInputs.length < 1) {
                alert("No Products Added.");
                return;
              }
              console.log(values);

              const res = await fetch("/api/order", {
                method: "POST",
                body: JSON.stringify({
                  name: values.name.trim().toUpperCase(),
                  products: formInputs.map((fi) => fi.productId),
                }),
              });

              if (res.ok) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                setReturnedOrderId(await res.json().then((id: string) => id));
              }

              actions.setSubmitting(false);
            }}
          >
            {({ errors }) => (
              <Form className="flex w-full flex-col items-center">
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="flex h-full flex-row items-center gap-1.5">
                    <Field
                      name="name"
                      id="name"
                      className="rounded-md border-2 border-gray-300/70 bg-transparent px-2 py-1 font-interstate font-bold uppercase focus-within:border-gray-400/100 hover:border-gray-400/100"
                    />
                    {/* <Button hfull type="button" leftIcon={FaSave} dark /> */}
                    {errors.name && (
                      <p className="text-xs italic text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <Search
                    placeholder="Add Products"
                    icon={<FaRegGem />}
                    white
                    dropdown
                    dropdownonClick={(product) => {
                      setFormInputs((prev) => {
                        const existingIndex = prev.findIndex(
                          (a) => a.productId === product.id,
                        );

                        if (existingIndex !== -1) {
                          // If exists, remove the existing entry
                          const updatedFormInputs = [...prev];
                          updatedFormInputs.splice(existingIndex, 1);
                          return updatedFormInputs;
                        }
                        return [
                          ...prev,
                          {
                            productImage: product.image,
                            productId: product.id,
                            productName: product.name,
                            productRetailPrice: product.retailPrice,
                            productWholesalePrice: product.wholesalePrice,
                          },
                        ];
                      });
                    }}
                  />
                </div>
              </Form>
            )}
          </Formik>
          <div className="flex flex-col gap-3">
            {formInputs.length > 0 &&
              formInputs.map((fi, i) => (
                <FormProduct
                  key={i}
                  id={fi.productId}
                  img={fi.productImage}
                  name={fi.productName}
                  retailPrice={fi.productRetailPrice}
                  wholesalePrice={fi.productWholesalePrice}
                  remove={() => {
                    setFormInputs((prev) => {
                      const existingIndex = prev.findIndex(
                        (a) => a.productId === fi.productId,
                      );

                      // If exists, remove the existing entry
                      const updatedFormInputs = [...prev];
                      updatedFormInputs.splice(existingIndex, 1);
                      return updatedFormInputs;
                    });
                  }}
                />
              ))}
          </div>
        </div>
      </NavLayout>
    </OrdersLayout>
  );
};

export default OrderPage;
