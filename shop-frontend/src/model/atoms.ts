import { atom } from "recoil";
import { Product } from "./Product";

export const productsState = atom<Product[]>({
  key: "products",
  default: [],
});

export const cartState = atom<Product[]>({
  key: "cart",
  default: [],
});

export const purchaseWIndowState = atom<boolean>({
  key: "purchaseWindow",
  default: false,
});
