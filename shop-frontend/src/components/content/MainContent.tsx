import { ProductList } from "./Shop/Products-List";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productsState, purchaseWIndowState } from "../../model/atoms";
import { PurchaseWindow } from "./Purchase/Purchase-Window";
import { Description } from "./Description/Description";

export function MainContent() {
  const [products, setProducts] = useRecoilState(productsState);
  const purchaseWindowActive = useRecoilValue(purchaseWIndowState);

  useEffect(() => {
    const fetchingAPI = async () => {
      const response = await fetch("/api/products", {
        method: "GET",
      });
      const data = await response.json();
      setProducts(data);
    };

    fetchingAPI().catch((err) => console.log(err));
  }, [setProducts]);

  return (
    <div
      className={"flex flex-col bg-zinc-800 pb-10 items-center justify-center"}
    >
      <ProductList productsList={products} />
      <Description />
      {purchaseWindowActive && <PurchaseWindow />}
    </div>
  );
}
