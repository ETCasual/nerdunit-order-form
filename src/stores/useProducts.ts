import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type FormState = {
  selectedProduct: string;
  setProduct: (id: string) => void;
};

const createState: StateCreator<FormState> = (set) => ({
  selectedProduct: "",
  setProduct(id) {
    set({
      selectedProduct: id,
    });
  },
});

export const useProducts = create(
  persist(createState, { name: "nerdunit-orderform-products" }),
);
